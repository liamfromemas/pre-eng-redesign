import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { company } from '@/content/company';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Pre-Eng Contracting Ltd. has built institutional projects across Ontario since 1987. Learn about our history, values, and the team approach that sets us apart.',
  alternates: { canonical: 'https://www.pre-eng.com/about' },
};

const milestones = [
  { year: '1987', event: 'First project completed — establishing Pre-Eng\'s presence in Ontario institutional construction.' },
  { year: '1990s', event: 'Expanded focus into educational facilities, delivering additions and renovations for Ontario school boards.' },
  { year: '2000s', event: 'Completed major projects including Stephen Lewis Secondary School ($30M) and Bur Oak Secondary School ($24M).' },
  { year: '2010s', event: 'Extended portfolio to libraries and recreation centres, including the Bloor Gladstone Library addition and Halton Hills Community Centre.' },
  { year: '2020s', event: 'Active in new school construction across Peel, York, Toronto, and Durham regions, with continued growth in the GTA institutional market.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Pre-Eng"
        title="Committed to Excellence"
        subtitle="40+ years of institutional construction in Ontario, built on efficiency, integrity, and a genuine team approach."
      />

      <section className="section-py" style={{ backgroundColor: 'white' }}>
        <div className="max-w-screen-xl mx-auto container-px">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="left">
              <p className="section-label mb-4">Our Story</p>
              <h2 className="display-md mb-6" style={{ color: 'var(--color-navy-900)' }}>
                {company.tagline}
              </h2>
              <div className="space-y-5" style={{ color: 'var(--color-charcoal-600)' }}>
                <p className="leading-relaxed">{company.about.intro}</p>
                <p className="leading-relaxed">{company.about.mission}</p>
                <p className="leading-relaxed">{company.about.expertise}</p>
                <p className="leading-relaxed">{company.about.approach}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              {/* Key facts */}
              <div
                className="p-8 mb-8"
                style={{ backgroundColor: 'var(--color-neutral-100)' }}
              >
                <h3
                  className="font-bold text-lg mb-6"
                  style={{ color: 'var(--color-navy-900)' }}
                >
                  Pre-Eng at a Glance
                </h3>
                <dl className="space-y-4">
                  {[
                    { term: 'Founded', def: '1987' },
                    { term: 'Years in Business', def: `${company.yearsInBusiness} years` },
                    { term: 'Staff Members', def: `${company.staffCount} professionals` },
                    { term: 'Project Range', def: `${company.projectValueMin} – ${company.projectValueMax}` },
                    { term: 'Region', def: 'Greater Toronto Area, Southern Ontario' },
                    { term: 'Specialization', def: 'Institutional General Contracting' },
                  ].map(({ term, def }) => (
                    <div key={term} className="flex gap-4">
                      <dt
                        className="text-sm font-semibold w-40 shrink-0 pt-0.5"
                        style={{ color: 'var(--color-charcoal-500)' }}
                      >
                        {term}
                      </dt>
                      <dd
                        className="text-sm font-medium"
                        style={{ color: 'var(--color-charcoal-800)' }}
                      >
                        {def}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Sector list */}
              <div>
                <h3
                  className="font-bold text-lg mb-4"
                  style={{ color: 'var(--color-navy-900)' }}
                >
                  Sectors We Serve
                </h3>
                <ul className="grid grid-cols-2 gap-2.5">
                  {[
                    'Elementary & Secondary Schools',
                    'Colleges & Universities',
                    'Police Stations',
                    'Community & Recreation Centres',
                    'Public Libraries',
                    'Healthcare Facilities',
                    'Student Residences',
                    'Laboratories',
                    'Churches & Worship',
                  ].map((sector) => (
                    <li
                      key={sector}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: 'var(--color-charcoal-700)' }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: 'var(--color-red-brand)' }}
                        aria-hidden
                      />
                      {sector}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section
        className="section-py"
        style={{ backgroundColor: 'var(--color-neutral-100)' }}
      >
        <div className="max-w-screen-xl mx-auto container-px">
          <ScrollReveal>
            <p className="section-label mb-4">Our History</p>
            <h2
              className="display-md mb-12"
              style={{ color: 'var(--color-navy-900)', maxWidth: '36rem' }}
            >
              A track record built over four decades.
            </h2>
          </ScrollReveal>
          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-0 md:left-24 top-0 bottom-0 w-px hidden md:block"
              style={{ backgroundColor: 'var(--color-neutral-200)' }}
              aria-hidden
            />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <ScrollReveal key={m.year} delay={i * 60}>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                    <div className="md:w-24 shrink-0 flex md:justify-end">
                      <span
                        className="font-black text-sm tracking-wider"
                        style={{ color: 'var(--color-red-brand)' }}
                      >
                        {m.year}
                      </span>
                    </div>
                    <div className="relative pl-0 md:pl-12">
                      <div
                        className="absolute left-0 top-1 w-3 h-3 rounded-full border-2 hidden md:block"
                        style={{
                          borderColor: 'var(--color-red-brand)',
                          backgroundColor: 'white',
                          marginLeft: '-6px',
                        }}
                        aria-hidden
                      />
                      <p
                        className="leading-relaxed"
                        style={{ color: 'var(--color-charcoal-700)' }}
                      >
                        {m.event}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-navy-900)' }}>
        <div className="max-w-screen-xl mx-auto container-px">
          <ScrollReveal>
            <p className="section-label mb-4">Our Values</p>
            <h2 className="display-md text-white mb-12" style={{ maxWidth: '36rem' }}>
              The principles behind every project.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {company.values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 60}>
                <div
                  className="p-6 border"
                  style={{
                    borderColor: 'rgba(255,255,255,0.1)',
                    backgroundColor: 'rgba(255,255,255,0.04)',
                  }}
                >
                  <div
                    className="w-1 h-6 mb-4"
                    style={{ backgroundColor: 'var(--color-red-brand)' }}
                    aria-hidden
                  />
                  <h3 className="text-white font-bold text-base mb-2">{value.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py" style={{ backgroundColor: 'white' }}>
        <div className="max-w-screen-xl mx-auto container-px text-center">
          <ScrollReveal>
            <p className="section-label mb-4">Ready to Build Together?</p>
            <h2 className="display-md mb-6" style={{ color: 'var(--color-navy-900)' }}>
              Let&apos;s talk about your project.
            </h2>
            <p
              className="mb-8 max-w-xl mx-auto leading-relaxed"
              style={{ color: 'var(--color-charcoal-600)' }}
            >
              Whether you&apos;re planning a new school, a government facility, or a
              renovation to an occupied building, we&apos;d be glad to discuss how
              Pre-Eng can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/projects" className="btn-outline-dark">
                View Our Work
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
