export interface Service {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  capabilities: string[];
  relatedSectors: string[];
  icon: string;
}

export const services: Service[] = [
  {
    slug: 'new-construction',
    name: 'New Construction',
    shortName: 'New Construction',
    description:
      'Ground-up institutional buildings delivered with precision engineering, rigorous cost control, and schedule certainty.',
    longDescription:
      'Pre-Eng has built a wide range of institutional facilities from the ground up — from elementary schools and recreation centres to police stations and libraries. Our established project management approach integrates Owner requirements, consultant coordination, and subcontractor management from day one, ensuring that new buildings are delivered on time and within budget.',
    capabilities: [
      'Full project delivery from site preparation through substantial completion',
      'Design-assist with Owners and Architects to optimize constructability',
      'Integrated scheduling across all trades',
      'Rigorous cost control and transparent reporting',
      'Deficiency management and smooth Owner turnover',
    ],
    relatedSectors: ['Education', 'Government', 'Recreation', 'Libraries', 'Healthcare'],
    icon: 'building',
  },
  {
    slug: 'renovations',
    name: 'Renovations & Expansions',
    shortName: 'Renovations',
    description:
      'Sensitive renovation and phased expansion work in occupied and partially occupied institutional buildings.',
    longDescription:
      'Renovating or expanding a building that remains in use requires a fundamentally different approach than new construction. Pre-Eng has extensive experience managing phased work in occupied schools, healthcare facilities, and public buildings — maintaining safe, functional operations for occupants while construction proceeds around them. Our team brings disciplined sequencing, clear communication, and safety-first site management to every occupied-building project.',
    capabilities: [
      'Occupied-building construction sequencing and phasing',
      'Noise, dust, and vibration management',
      'Interim access and egress planning',
      'Work in historically designated and heritage structures',
      'After-hours and weekend scheduling to minimize disruption',
    ],
    relatedSectors: ['Education', 'Libraries', 'Healthcare'],
    icon: 'wrench',
  },
  {
    slug: 'institutional',
    name: 'Institutional Specialization',
    shortName: 'Institutional',
    description:
      'Deep expertise in the code requirements, procurement processes, and stakeholder management that define institutional construction.',
    longDescription:
      'Institutional construction — for school boards, municipalities, government agencies, and healthcare providers — operates within a distinct regulatory and procurement landscape. Pre-Eng has developed this expertise over 40 years, building relationships with Ontario\'s major school boards and public sector clients. We understand the particular demands of publicly funded projects: public tendering requirements, Ministry of Education guidelines, DEMEEC standards, and the accountability expectations of publicly funded Owners.',
    capabilities: [
      'Ministry of Education and school board procurement familiarity',
      'Public sector contract management (CCDC)',
      'Multi-stakeholder communication and reporting',
      'Projects ranging from $500,000 to $30 million+',
      'Medium-to-large project capacity with hands-on principal involvement',
    ],
    relatedSectors: ['Education', 'Government', 'Recreation', 'Libraries', 'Healthcare'],
    icon: 'institution',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
