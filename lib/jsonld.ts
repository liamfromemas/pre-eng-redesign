import { company } from '@/content/company';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'GeneralContractor', 'LocalBusiness'],
    name: company.name,
    alternateName: company.shortName,
    url: 'https://www.pre-eng.com',
    telephone: company.contact.phone,
    faxNumber: company.contact.fax,
    email: company.contact.email,
    foundingDate: '1987',
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.contact.address.street,
      addressLocality: company.contact.address.city,
      addressRegion: company.contact.address.province,
      postalCode: company.contact.address.postalCode,
      addressCountry: 'CA',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 43.75,
        longitude: -79.49,
      },
      geoRadius: '80000',
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 40,
    },
    description: company.description,
    knowsAbout: [
      'Institutional Construction',
      'General Contracting',
      'School Construction',
      'Government Facility Construction',
      'Renovation',
      'Building Addition',
    ],
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function projectSchema(project: {
  name: string;
  description: string;
  descriptionLong: string;
  location: string;
  province: string;
  value: string;
  image: string;
  imageAlt: string;
  imageLowRes: boolean;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.descriptionLong,
    creator: {
      '@type': 'Organization',
      name: company.name,
      url: 'https://www.pre-eng.com',
    },
    locationCreated: {
      '@type': 'Place',
      name: `${project.location}, ${project.province}`,
    },
    url: `https://www.pre-eng.com/projects/${project.slug}`,
    image: project.imageLowRes ? undefined : `https://www.pre-eng.com${project.image}`,
  };
}
