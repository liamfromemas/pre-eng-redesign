import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { company } from '@/content/company';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join the Pre-Eng Contracting team. We are a medium-sized institutional general contractor in Southern Ontario with 40 staff members committed to excellence.',
  alternates: { canonical: 'https://www.pre-eng.com/careers' },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Join Our Team"
        title="Careers at Pre-Eng"
        subtitle="Always committed, always a team approach."
        compact
      />

      <section className="section-py" style={{ backgroundColor: 'white' }}>
        <div className="max-w-screen-xl mx-auto container-px">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-center">
            <ScrollReveal direction="left">
              <p className="section-label mb-4">Why Pre-Eng</p>
              <h2
                className="display-md mb-6"
                style={{ color: 'var(--color-navy-900)' }}
              >
                A team that strives toward excellence.
              </h2>
              <p
                className="leading-relaxed mb-6"
                style={{
                  color: 'var(--color-charcoal-700)',
                  fontSize: '1.0625rem',
                  lineHeight: 1.75,
                }}
              >
{'Pre-Eng Contracting Limited is a medium-sized General Contracting firm in the Southern Ontario Region and employs 40 staff members. We have a team of professionals who are enthusiastic and an attitude that strives toward excellence and owner satisfaction.'}
              </p>
              <p
                className="leading-relaxed"
                style={{
                  color: 'var(--color-charcoal-700)',
                  fontSize: '1.0625rem',
                  lineHeight: 1.75,
                }}
              >
                Our medium size gives us the capacity to take on complex institutional
                projects while still providing the hands-on attention and team culture
                that larger firms can&apos;t always offer.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-4">
                {[
                  {
                    title: 'Real Project Responsibility',
                    body: 'At Pre-Eng, you work on meaningful institutional projects from day one. Our team structure gives every member real accountability and real impact.',
                  },
                  {
                    title: 'Experienced Team',
                    body: 'Work alongside experienced construction professionals in a collaborative environment where knowledge is shared openly.',
                  },
                  {
                    title: 'Diverse Project Types',
                    body: 'From schools and libraries to police stations and recreation centres, no two projects are the same. Build a broad portfolio of institutional experience.',
                  },
                  {
                    title: 'Hands-On Culture',
                    body: 'The principals of the firm are actively involved on every project. Decisions happen close to the work, not behind layers of management.',
                  },
                ].map((item, i) => (
                  <ScrollReveal key={item.title} delay={i * 60}>
                    <div
                      className="p-6 border-l-4"
                      style={{
                        borderColor: 'var(--color-navy-900)',
                        backgroundColor: 'var(--color-neutral-100)',
                      }}
                    >
                      <h3
                        className="font-bold mb-2"
                        style={{ color: 'var(--color-navy-900)' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-charcoal-600)' }}>
                        {item.body}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section
        className="section-py"
        style={{ backgroundColor: 'var(--color-navy-900)' }}
      >
        <div className="max-w-screen-xl mx-auto container-px">
          <div className="max-w-2xl">
            <ScrollReveal>
              <p className="section-label mb-4">How to Apply</p>
              <h2 className="display-md text-white mb-6">
                Send us your resume.
              </h2>
              <p
                className="text-white/70 leading-relaxed mb-8"
                style={{ fontSize: '1.0625rem' }}
              >
                If you would like to join the Pre-Eng Contracting team, please send
                your resume directly to our email address. We review all applications
                and will reach out if there is a suitable opportunity.
              </p>
              <a
                href={company.contact.emailHref}
                className="btn-primary"
              >
                Send Resume to {company.contact.email}
              </a>
              <p className="mt-8 text-sm text-white/50 leading-relaxed max-w-lg">
                <strong className="text-white/70 font-semibold">No formal job board.</strong>{' '}
                We hire based on fit and project needs — speculative applications are always welcome.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
