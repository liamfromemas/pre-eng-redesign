import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { ValueProposition } from '@/components/sections/ValueProposition';
import { company } from '@/content/company';

export const metadata: Metadata = {
  title: `${company.name} | Institutional General Contractor, GTA`,
  description:
    'Pre-Eng Contracting Ltd. has been building institutional construction projects in Ontario for 40+ years. Schools, government facilities, libraries, recreation centres — delivered on time and within budget.',
  alternates: { canonical: 'https://www.pre-eng.com' },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <FeaturedProjects />
      <ValueProposition />
    </>
  );
}
