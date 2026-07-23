# Pre-Eng Contracting — Website

Redesigned website for Pre-Eng Contracting Ltd., an institutional general contractor based in Concord, Ontario with 40+ years of experience.

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, and Lenis smooth scroll.

---

## Setup

### Prerequisites
- Node.js 18+
- npm

### Install dependencies
```bash
npm install
```

### Environment variables

Create `.env.local` with:

```bash
CONTACT_EMAIL_TO=info@pre-eng.com
RESEND_API_KEY=your_key_here
```

| Variable | Description | Required |
|---|---|---|
| `CONTACT_EMAIL_TO` | Email address that receives contact form submissions | Yes |
| `RESEND_API_KEY` | Resend API key for transactional email (or replace with SendGrid/Postmark) | Yes for email to send |

### Run in development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
