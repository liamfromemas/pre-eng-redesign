import Link from 'next/link';
import { company } from '@/content/company';
import { services } from '@/content/services';
import { projects } from '@/content/projects';

const footerNav = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Services',
    links: [
      ...services.map((s) => ({ label: s.shortName, href: `/services/${s.slug}` })),
      { label: 'All Services', href: '/services' },
    ],
  },
  {
    heading: 'Projects',
    links: [
      ...projects.slice(0, 4).map((p) => ({ label: p.name, href: `/projects/${p.slug}` })),
      { label: 'All Projects', href: '/projects' },
    ],
  },
];

export function SiteFooter({ showCTA = true }: { showCTA?: boolean }) {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{ backgroundColor: 'var(--color-charcoal-900)' }}
      className="text-white"
    >
      {showCTA && (
      <div style={{ backgroundColor: 'var(--color-navy-900)' }} className="py-16">
        <div className="max-w-screen-xl mx-auto container-px flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <p className="section-label mb-3">Ready to Build?</p>
            <h2 className="display-md text-white">
              Let&apos;s discuss your project.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
            <Link href="/projects" className="btn-outline">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
      )}

      {/* Footer body */}
      <div className="max-w-screen-xl mx-auto container-px py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label={`${company.name} — Home`} className="inline-flex items-center gap-2 mb-6">
              <span className="font-black text-2xl leading-none" style={{ color: 'var(--color-red-brand)' }}>
                [
              </span>
              <span
                className="font-black text-sm tracking-widest uppercase text-white"
                style={{ letterSpacing: '0.15em' }}
              >
                PRE-ENG
              </span>
              <span className="font-black text-2xl leading-none" style={{ color: 'var(--color-red-brand)' }}>
                ]
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              {company.description}
            </p>
            <div className="space-y-2">
              <a
                href={company.contact.phoneHref}
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.64 12.5 19.79 19.79 0 0 1 1.58 4a2 2 0 0 1 1.95-2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                {company.contact.phone}
              </a>
              <a
                href={company.contact.emailHref}
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
                {company.contact.email}
              </a>
              <address className="not-italic flex items-start gap-2 text-white/60 text-sm leading-relaxed">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="mt-0.5 shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>
                  {company.contact.address.street}<br />
                  {company.contact.address.city}, {company.contact.address.province} {company.contact.address.postalCode}
                </span>
              </address>
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.heading}>
              <h3
                className="text-xs font-bold tracking-widest uppercase mb-4"
                style={{ color: 'var(--color-charcoal-300)', letterSpacing: '0.1em' }}
              >
                {col.heading}
              </h3>
              <ul className="space-y-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="border-t mt-12 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <p className="text-white/40 text-xs">
            &copy; {year} {company.name}. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Concord, Ontario &bull; Serving the Greater Toronto Area
          </p>
        </div>
      </div>
    </footer>
  );
}
