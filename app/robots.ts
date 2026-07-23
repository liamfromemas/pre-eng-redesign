import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/not-found'],
      },
    ],
    sitemap: 'https://www.pre-eng.com/sitemap.xml',
  };
}
