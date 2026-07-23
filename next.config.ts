import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85, 90],
    remotePatterns: [],
  },
  compress: true,

  async redirects() {
    return [
      { source: '/index.html',                      destination: '/',                                          permanent: true },
      { source: '/aboutus.html',                    destination: '/about',                                     permanent: true },
      { source: '/portfolio.html',                  destination: '/projects',                                  permanent: true },
      { source: '/bloor-gladstone.html',            destination: '/projects/bloor-gladstone-library',          permanent: true },
      { source: '/buroaksecondaryschool.html',      destination: '/projects/bur-oak-secondary-school',         permanent: true },
      { source: '/catholicelementaryschool.html',   destination: '/projects/holy-family-catholic-elementary',  permanent: true },
      { source: '/ecc-richview.html',               destination: '/projects/eec-richview',                     permanent: true },
      { source: '/fairview-dundas.html',            destination: '/projects/fairview-dundas',                  permanent: true },
      { source: '/haltonhillscentre.html',          destination: '/projects/halton-hills-community-centre',    permanent: true },
      { source: '/kleinburg.html',                  destination: '/projects/kleinburg-elementary',             permanent: true },
      { source: '/stclair-library.html',            destination: '/projects/st-clair-library',                 permanent: true },
      { source: '/st-ursula.html',                  destination: '/projects/st-ursula',                        permanent: true },
      { source: '/stephenlewissecondaryschool.html',destination: '/projects/stephen-lewis-secondary-school',   permanent: true },
      { source: '/yorkregionalpolice.html',         destination: '/projects/york-regional-police-hq',          permanent: true },
      { source: '/tenders.html',                    destination: '/tenders',                                   permanent: true },
      { source: '/tenders-details.html',            destination: '/tenders',                                   permanent: true },
      { source: '/careers.html',                    destination: '/careers',                                   permanent: true },
      { source: '/contact.html',                    destination: '/contact',                                   permanent: true },
      { source: '/faq',                             destination: '/contact',                                   permanent: true },
      { source: '/error.html',                      destination: '/not-found',                                 permanent: true },
    ];
  },
};

export default nextConfig;
