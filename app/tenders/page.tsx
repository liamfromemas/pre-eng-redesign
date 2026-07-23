import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { TendersGate } from '@/components/ui/TendersGate';

export const metadata: Metadata = {
  title: 'Tenders',
  description:
    'Current tender opportunities from Pre-Eng Contracting Ltd. Subcontractors must agree to terms to access tender documents.',
  alternates: { canonical: 'https://www.pre-eng.com/tenders' },
  robots: { index: false },
};

export default function TendersPage() {
  return (
    <>
      <PageHero
        eyebrow="Subcontractor Information"
        title="Tender Opportunities"
        subtitle="Current Pre-Eng Contracting projects open for subcontractor pricing."
        compact
      />
      <TendersGate />
    </>
  );
}
