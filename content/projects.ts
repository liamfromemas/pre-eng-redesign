export type ProjectSector =
  | 'Education'
  | 'Government'
  | 'Recreation'
  | 'Libraries'
  | 'Healthcare';

export type ProjectType = 'New Construction' | 'Renovation' | 'Addition' | 'Expansion';

export interface Project {
  slug: string;
  name: string;
  location: string;
  province: string;
  description: string;
  descriptionLong: string;
  value: string;
  valueSortKey: number; // in millions, for sorting
  sector: ProjectSector;
  type: ProjectType[];
  image: string;
  imageAlt: string;
  imageLowRes: boolean;
  featured: boolean;
  oldUrl: string;
}

export const projects: Project[] = [
  {
    slug: 'stephen-lewis-secondary-school',
    name: 'Stephen Lewis Secondary School',
    location: 'Mississauga',
    province: 'Ontario',
    description: 'Secondary School & Facility for Developmentally Challenged',
    descriptionLong:
      'A landmark $30 million secondary school in Mississauga serving both the general student population and students with developmental challenges. This complex institutional build required careful coordination between educational facility requirements and specialized accessibility design.',
    value: '$30M',
    valueSortKey: 30,
    sector: 'Education',
    type: ['New Construction'],
    image: '/assets/projects/stephen-lewis-secondary-school.jpeg',
    imageAlt: 'Stephen Lewis Secondary School, Mississauga — exterior view',
    imageLowRes: false,
    featured: true,
    oldUrl: '/stephenlewissecondaryschool.html',
  },
  {
    slug: 'bur-oak-secondary-school',
    name: 'Bur Oak Secondary School',
    location: 'Markham',
    province: 'Ontario',
    description: 'Secondary School',
    descriptionLong:
      'A $24 million secondary school in Markham, Ontario. This large-scale educational facility project demonstrated Pre-Eng\'s capacity to deliver complex multi-classroom institutional builds within budget and on schedule.',
    value: '$24M',
    valueSortKey: 24,
    sector: 'Education',
    type: ['New Construction'],
    image: '/assets/projects/bur-oak-secondary-school.jpeg',
    imageAlt: 'Bur Oak Secondary School, Markham — exterior view',
    imageLowRes: false,
    featured: true,
    oldUrl: '/buroaksecondaryschool.html',
  },
  {
    slug: 'fairview-dundas',
    name: 'Fairview Dundas (Chris Hadfield PS)',
    location: 'Mississauga',
    province: 'Ontario',
    description: 'Two Storey Elementary School',
    descriptionLong:
      'A $11.2 million two-storey elementary school in Mississauga, now known as Chris Hadfield Public School. Pre-Eng delivered a modern learning environment designed to meet current educational facility standards.',
    value: '$11.2M',
    valueSortKey: 11.2,
    sector: 'Education',
    type: ['New Construction'],
    image: '/assets/projects/fairview-dundas.png',
    imageAlt: 'Fairview Dundas / Chris Hadfield Public School, Mississauga — exterior view',
    imageLowRes: false,
    featured: true,
    oldUrl: '/fairview-dundas.html',
  },
  {
    slug: 'halton-hills-community-centre',
    name: 'Halton Hills Community Centre',
    location: 'Halton Hills',
    province: 'Ontario',
    description: 'Pool and Recreation Centre',
    descriptionLong:
      'A $10.4 million pool and recreation centre in Halton Hills. This project showcases Pre-Eng\'s ability to deliver complex recreational facilities with specialized mechanical and structural requirements.',
    value: '$10.4M',
    valueSortKey: 10.4,
    sector: 'Recreation',
    type: ['New Construction'],
    image: '/assets/projects/halton-hills-community-centre.jpeg',
    imageAlt: 'Halton Hills Community Centre — exterior view',
    imageLowRes: false,
    featured: true,
    oldUrl: '/haltonhillscentre.html',
  },
  {
    slug: 'kleinburg-elementary',
    name: 'Kleinburg Elementary School',
    location: 'Kleinburg',
    province: 'Ontario',
    description: 'New Two Storey Elementary School',
    descriptionLong:
      'A $9.9 million two-storey elementary school in Kleinburg. This new-build educational facility was completed with Pre-Eng\'s signature commitment to quality construction and schedule sensitivity.',
    value: '$9.9M',
    valueSortKey: 9.9,
    sector: 'Education',
    type: ['New Construction'],
    image: '/assets/projects/kleinburg-elementary.png',
    imageAlt: 'Kleinburg Elementary School — exterior view',
    imageLowRes: false,
    featured: false,
    oldUrl: '/kleinburg.html',
  },
  {
    slug: 'bloor-gladstone-library',
    name: 'Bloor Gladstone Library',
    location: 'Toronto',
    province: 'Ontario',
    description: 'Addition to Existing Historical Building',
    descriptionLong:
      'A $9.1 million addition to an existing historical library building in the Bloor-Gladstone neighbourhood of Toronto. This project required sensitive integration with heritage architecture while expanding the facility\'s capacity to serve modern community needs.',
    value: '$9.1M',
    valueSortKey: 9.1,
    sector: 'Libraries',
    type: ['Addition'],
    image: '/assets/projects/bloor-gladstone-library.png',
    imageAlt: 'Bloor Gladstone Library, Toronto — exterior showing heritage addition',
    imageLowRes: false,
    featured: true,
    oldUrl: '/bloor-gladstone.html',
  },
  {
    slug: 'york-regional-police-hq',
    name: 'York Regional Police Headquarters No. 2',
    location: 'Richmond Hill',
    province: 'Ontario',
    description: 'Police Station and EMS Facility',
    descriptionLong:
      'An $8.6 million police station and EMS facility in Richmond Hill for York Regional Police. This government institutional project required meeting stringent security, operational, and life-safety specifications while maintaining a schedule-sensitive handover.',
    value: '$8.6M',
    valueSortKey: 8.6,
    sector: 'Government',
    type: ['New Construction'],
    image: '/assets/projects/york-regional-police-hq.jpeg',
    imageAlt: 'York Regional Police Headquarters No. 2, Richmond Hill — exterior view',
    imageLowRes: false,
    featured: true,
    oldUrl: '/yorkregionalpolice.html',
  },
  {
    slug: 'holy-family-catholic-elementary',
    name: 'Holy Family Catholic Elementary School',
    location: 'Bowmanville',
    province: 'Ontario',
    description: '3 Storey Elementary School',
    descriptionLong:
      'An $8.74 million three-storey Catholic elementary school in Bowmanville. Pre-Eng delivered this complex multi-storey educational facility with the careful attention to safety and schedule required in occupied institutional environments.',
    value: '$8.74M',
    valueSortKey: 8.74,
    sector: 'Education',
    type: ['New Construction'],
    image: '/assets/projects/holy-family-catholic-elementary.jpeg',
    imageAlt: 'Holy Family Catholic Elementary School, Bowmanville — exterior view',
    imageLowRes: false,
    featured: false,
    oldUrl: '/catholicelementaryschool.html',
  },
  {
    slug: 'eec-richview',
    name: 'EEC Richview',
    location: 'Toronto',
    province: 'Ontario',
    description: 'Two Storey Elementary School',
    descriptionLong:
      'A $7.7 million two-storey elementary school in the Richview neighbourhood of Toronto. This educational facility was delivered on schedule and within budget, meeting TDSB standards for modern institutional construction.',
    value: '$7.7M',
    valueSortKey: 7.7,
    sector: 'Education',
    type: ['New Construction'],
    image: '/assets/projects/eec-richview.png',
    imageAlt: 'EEC Richview school, Toronto — exterior view',
    imageLowRes: false,
    featured: false,
    oldUrl: '/ecc-richview.html',
  },
  {
    slug: 'st-clair-library',
    name: 'St. Clair Library',
    location: 'Toronto',
    province: 'Ontario',
    description: 'Demolition of existing library and construction of new two storey library',
    descriptionLong:
      'A $3.5 million project in Toronto involving the complete demolition of an existing library and construction of a new two-storey facility. This project required careful sequencing to manage community impact while delivering a significantly improved public asset.',
    value: '$3.5M',
    valueSortKey: 3.5,
    sector: 'Libraries',
    type: ['New Construction'],
    image: '/assets/projects/st-clair-library.png',
    imageAlt: 'St. Clair Library, Toronto — new two storey building exterior',
    imageLowRes: false,
    featured: false,
    oldUrl: '/stclair-library.html',
  },
  {
    slug: 'st-ursula',
    name: 'St. Ursula Catholic School',
    location: 'Toronto',
    province: 'Ontario',
    description: 'Phased Renovation and Addition to Existing Occupied School',
    descriptionLong:
      'A $2.6 million phased renovation and addition to an existing occupied school in Toronto. Managing a live, occupied school environment demanded exceptional coordination, safety protocols, and communication with school administration to maintain operations throughout construction.',
    value: '$2.6M',
    valueSortKey: 2.6,
    sector: 'Education',
    type: ['Renovation', 'Addition'],
    image: '/assets/projects/st-ursula.png',
    imageAlt: 'St. Ursula Catholic School, Toronto — renovation and addition exterior',
    imageLowRes: false,
    featured: false,
    oldUrl: '/st-ursula.html',
  },
];

export const sectors: ProjectSector[] = ['Education', 'Government', 'Recreation', 'Libraries', 'Healthcare'];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).slice(0, 6);
}

export function getProjectsBySector(sector: ProjectSector): Project[] {
  return projects.filter((p) => p.sector === sector);
}
