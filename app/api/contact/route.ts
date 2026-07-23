import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  phone: z.string().max(30).optional(),
  projectType: z.enum(['new-construction', 'renovation', 'addition', 'expansion', 'other'] as const),
  message: z.string().min(20).max(5000),
  website: z.string().max(0).optional(), // honeypot
});

// Simple in-memory rate limiter: max 3 requests per IP per 60 seconds
const rateMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  if (entry.count >= 3) return true;
  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed', issues: parsed.error.issues }, { status: 422 });
  }

  const { name, email, phone, projectType, message, website } = parsed.data;

  // Reject bots that filled the honeypot
  if (website && website.length > 0) {
    return NextResponse.json({ ok: true }); // silent accept to not reveal honeypot
  }

  // -----------------------------------------------------------------------
  // EMAIL INTEGRATION PLACEHOLDER
  // Wire up your preferred email provider here (SendGrid, Postmark, Resend).
  // Set the API key as an environment variable (e.g. SENDGRID_API_KEY or
  // RESEND_API_KEY) and add a transactional send call below.
  //
  // Example (Resend):
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: 'website@pre-eng.com',
  //     to: 'info@pre-eng.com',
  //     subject: `New Enquiry from ${name}`,
  //     text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone ?? 'N/A'}\nProject Type: ${projectType}\n\n${message}`,
  //   });
  // -----------------------------------------------------------------------

  // Development: log to console
  if (process.env.NODE_ENV === 'development') {
    console.log('[CONTACT FORM SUBMISSION]', { name, email, phone, projectType, message });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
