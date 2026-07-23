import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects, sectors } from '@/content/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore Pre-Eng Contracting\'s portfolio of 11 institutional construction projects across the GTA — schools, libraries, recreation centres, police stations, and more.',
  alternates: { canonical: 'https://www.pre-eng.com/projects' },
};

export default function ProjectsPage() {
  const projectsByValue = [...projects].sort((a, b) => b.valueSortKey - a.valueSortKey);

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Project Portfolio"
        subtitle="11 completed institutional projects across Ontario, ranging from $2.6M to $30M."
      />

      {/* Sector summary */}
      <div style={{ backgroundColor: 'var(--color-neutral-100)' }}>
        <div className="max-w-screen-xl mx-auto container-px py-8">
          <div className="flex flex-wrap gap-6 items-center">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: 'var(--color-charcoal-400)' }}
            >
              Sectors:
            </span>
            {sectors.filter(s => projects.some(p => p.sector === s)).map((sector) => {
              const count = projects.filter(p => p.sector === sector).length;
              return (
                <span
                  key={sector}
                  className="flex items-center gap-2 text-sm font-medium"
                  style={{ color: 'var(--color-charcoal-700)' }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: 'var(--color-red-brand)' }}
                    aria-hidden
                  />
                  {sector} ({count})
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <section className="section-py" style={{ backgroundColor: 'white' }}>
        <div className="max-w-screen-xl mx-auto container-px">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectsByValue.map((project, i) => (
              <ScrollReveal key={project.slug} delay={Math.min(i, 5) * 60}>
                <ProjectCard project={project} priority={i < 3} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div
              className="mt-16 p-8 border-l-4"
              style={{
                backgroundColor: 'var(--color-neutral-100)',
                borderColor: 'var(--color-navy-900)',
              }}
            >
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-charcoal-600)' }}
              >
                <strong style={{ color: 'var(--color-navy-900)' }}>
                  Pre-Eng Contracting Ltd.
                </strong>{' '}
                has completed many additional projects beyond those featured here. Our
                portfolio spans schools, colleges, government facilities, libraries,
                healthcare centres, and recreation facilities across Southern Ontario. Contact
                us to discuss how our experience applies to your specific project.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
