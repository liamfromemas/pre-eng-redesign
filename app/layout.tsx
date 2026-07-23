import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { FooterController } from '@/components/layout/FooterController';
import { SmoothScrollProvider } from '@/components/layout/SmoothScrollProvider';
import { company } from '@/content/company';
import { organizationSchema } from '@/lib/jsonld';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pre-eng.com'),
  title: {
    default: `${company.name} | Institutional General Contractor`,
    template: `%s | ${company.name}`,
  },
  description:
    'Pre-Eng Contracting Ltd. is a leading institutional general contractor in the Greater Toronto Area with 40+ years of experience in schools, government facilities, libraries, and recreation centres.',
  keywords: [
    'general contractor',
    'institutional construction',
    'GTA',
    'Toronto',
    'school construction',
    'renovation contractor Ontario',
    'Pre-Eng Contracting',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.pre-eng.com',
    siteName: company.name,
    title: `${company.name} | Institutional General Contractor`,
    description:
      'Pre-Eng Contracting Ltd. — 40+ years delivering institutional construction projects across the GTA, on time and within budget.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${company.name} | Institutional General Contractor`,
    description:
      'Pre-Eng Contracting Ltd. — 40+ years delivering institutional construction projects across the GTA.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://www.pre-eng.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA" className={inter.variable}>
      <body>
        <SmoothScrollProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
          />
          <SiteHeader />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <FooterController />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
