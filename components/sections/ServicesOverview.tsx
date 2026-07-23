import Link from 'next/link';
import { services } from '@/content/services';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const icons = {
  building: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <path d="M3 9h18M9 21V9"/>
    </svg>
  ),
  wrench: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  institution: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 22V9l9-7 9 7v13"/>
      <path d="M9 22V12h6v10"/>
    </svg>
  ),
};

export function ServicesOverview() {
  return (
    <section
      className="section-py"
      style={{ backgroundColor: 'var(--color-neutral-100)', paddingTop: '3rem', paddingBottom: '3rem' }}
    >
      <div className="max-w-screen-xl mx-auto container-px">
        <ScrollReveal>
          <p className="section-label mb-4">What We Do</p>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
            <h2 className="display-lg" style={{ color: 'var(--color-navy-900)', maxWidth: '36rem' }}>
              Specialized in institutional construction for 40 years.
            </h2>
            <Link
              href="/services"
              className="btn-outline-dark shrink-0 self-start lg:self-auto"
            >
              All Services
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 80}>
              <Link
                href={`/services/${service.slug}`}
                className="group block h-full bg-white border p-8 hover:border-transparent hover:shadow-xl transition-all duration-300"
                style={{
                  borderColor: 'var(--color-neutral-200)',
                }}
              >
                <div
                  className="w-14 h-14 flex items-center justify-center mb-6 transition-colors duration-300"
                  style={{
                    backgroundColor: 'var(--color-navy-900)',
                    color: 'white',
                  }}
                >
                  {icons[service.icon as keyof typeof icons]}
                </div>
                <h3
                  className="font-bold text-xl mb-3 group-hover:text-navy-900 transition-colors"
                  style={{ color: 'var(--color-navy-900)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="leading-relaxed mb-6 text-sm"
                  style={{ color: 'var(--color-charcoal-600)' }}
                >
                  {service.description}
                </p>
                <span
                  className="text-sm font-semibold tracking-wide uppercase flex items-center gap-2 transition-gap duration-200"
                  style={{ color: 'var(--color-red-brand)' }}
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="group-hover:translate-x-1 transition-transform duration-200"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
