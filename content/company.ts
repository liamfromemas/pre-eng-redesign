export const company = {
  name: 'Pre-Eng Contracting Ltd.',
  shortName: 'Pre-Eng',
  tagline: 'Built on a Solid Foundation of Engineering Knowledge and Construction Experience',
  heroHeadline: 'Institutional Construction Excellence',
  heroSubhead:
    'For over 40 years, Pre-Eng has delivered complex institutional projects across the GTA — on time, within budget, built right.',
  established: 1987,
  yearsInBusiness: '40+',
  staffCount: 40,
  projectValueMin: '$500,000',
  projectValueMax: '$30 million+',
  description:
    'Pre-Eng Contracting Ltd. is one of the GTA\'s leading General Contractors in institutional construction and has had a presence in Ontario for over 40 years.',
  about: {
    intro:
      'Ever since the successful completion of our first project in 1987, Pre-Eng has enjoyed continued success by building on traditional core strengths – efficiency, risk management, integrity and customer satisfaction.',
    mission:
      'Pre-Eng is focused on the delivery of a quality project on time and within budget. We foster a team approach with the Owner, Consultants and Subcontractors which facilitates a free flow of information and co-operation throughout the project.',
    expertise:
      'We have been providing services for new construction, renovations and expansions of all types of institutional buildings, health care and nursing facilities. Our strong management team has allowed us to complete a wide variety of projects from high schools, colleges, police stations, community and recreation centres, student residences, libraries, health care centres, laboratories and churches ranging in value from $500,000.00 to over $30 million.',
    approach:
      'We have a stellar record of turning over schedule sensitive projects on time and within budget. Our integrity and commitment to complete the project to the owner\'s satisfaction is an integral part of our commitment to the project. We cultivate a team approach with the consultants and trades. This ensures a smooth flow of information and resolution of construction issues. The principal of the firm maintains a hands-on approach during construction to ensure timely completion and client satisfaction.',
  },
  values: [
    {
      title: 'Efficiency',
      description:
        'Streamlined project delivery that respects your timeline and minimizes disruption.',
    },
    {
      title: 'Risk Management',
      description:
        'Proactive identification and mitigation of project risks before they become problems.',
    },
    {
      title: 'Integrity',
      description:
        'Transparent communication and honest accountability at every stage of construction.',
    },
    {
      title: 'Client Satisfaction',
      description:
        'Our measure of success is a client who is proud of what we built together.',
    },
    {
      title: 'Team Approach',
      description:
        'We work alongside Owners, Consultants, and Subcontractors as a unified project team.',
    },
    {
      title: 'Hands-On Leadership',
      description:
        'Firm principals remain actively involved throughout construction to ensure quality and accountability.',
    },
  ],
  contact: {
    address: {
      street: '1 Applewood Crescent, Unit 10',
      city: 'Concord',
      province: 'Ontario',
      postalCode: 'L4K 4K1',
      full: '10-1 Applewood Crescent, Concord, Ontario L4K 4K1',
      mapQuery: '1+Applewood+Crescent+Unit+10+Concord+ON+L4K+4K1',
    },
    phone: '905 738 6866',
    phoneHref: 'tel:+19057386866',
    fax: '905 738 4879',
    email: 'info@pre-eng.com',
    emailHref: 'mailto:info@pre-eng.com',
  },
  social: {
    linkedin: null,
    facebook: null,
    instagram: null,
    twitter: null,
  },
} as const;

export type Company = typeof company;
