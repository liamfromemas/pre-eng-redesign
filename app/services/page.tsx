import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { services } from '@/content/services';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Pre-Eng Contracting offers new construction, renovations, expansions, and specialist institutional construction services across the Greater Toronto Area.',
  alternates: { canonical: 'https://www.pre-eng.com/services' },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Build"
        title="Services"
        subtitle="40+ years of institutional construction experience, from ground-up new builds to complex phased renovations in occupied facilities."
      />

      <section className="section-py" style={{ backgroundColor: 'white', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div className="max-w-screen-xl mx-auto container-px">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 60}>
                <div
                  className="grid grid-cols-1 lg:grid-cols-5 gap-8 p-8 border"
                  style={{
                    borderColor: 'var(--color-neutral-200)',
                  }}
                >
                  <div className="lg:col-span-2">
                    <p className="section-label mb-3">Service {String(i + 1).padStart(2, '0')}</p>
                    <h2
                      className="font-bold text-2xl mb-4"
                      style={{ color: 'var(--color-navy-900)' }}
                    >
                      {service.name}
                    </h2>
                    <p
                      className="leading-relaxed mb-6"
                      style={{ color: 'var(--color-charcoal-600)' }}
                    >
                      {service.description}
                    </p>
                    <Link href={`/services/${service.slug}`} className="btn-primary">
                      Learn More
                    </Link>
                  </div>
                  <div className="lg:col-span-3">
                    <p
                      className="leading-relaxed mb-6"
                      style={{ color: 'var(--color-charcoal-700)' }}
                    >
                      {service.longDescription}
                    </p>
                    <h3
                      className="font-bold text-sm uppercase tracking-wide mb-3"
                      style={{ color: 'var(--color-navy-900)' }}
                    >
                      Capabilities
                    </h3>
                    <ul className="space-y-2">
                      {service.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="flex items-start gap-3 text-sm"
                          style={{ color: 'var(--color-charcoal-700)' }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                            style={{ backgroundColor: 'var(--color-red-brand)' }}
                            aria-hidden
                          />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
