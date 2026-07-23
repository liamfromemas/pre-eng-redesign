import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { services, getServiceBySlug } from '@/content/services';
import { projects } from '@/content/projects';

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Not Found' };

  return {
    title: service.name,
    description: service.description,
    alternates: { canonical: `https://www.pre-eng.com/services/${slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedProjects = projects
    .filter((p) => service.relatedSectors.includes(p.sector))
    .slice(0, 3);

  const serviceIndex = services.findIndex((s) => s.slug === slug);
  const prevService = services[serviceIndex - 1];
  const nextService = services[serviceIndex + 1];

  return (
    <>
      <PageHero
        eyebrow={`Service — ${String(serviceIndex + 1).padStart(2, '0')}`}
        title={service.name}
        subtitle={service.description}
      />

      <section className="section-py" style={{ backgroundColor: 'white', paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="max-w-screen-xl mx-auto container-px">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <ScrollReveal direction="left">
                <p
                  className="leading-relaxed mb-8"
                  style={{
                    color: 'var(--color-charcoal-700)',
                    fontSize: '1.0625rem',
                    lineHeight: 1.75,
                  }}
                >
                  {service.longDescription}
                </p>
                <h2
                  className="font-bold text-xl mb-4"
                  style={{ color: 'var(--color-navy-900)' }}
                >
                  Capabilities
                </h2>
                <ul className="space-y-3 mb-10">
                  {service.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-3"
                      style={{ color: 'var(--color-charcoal-700)' }}
                    >
                      <span
                        className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                        style={{ backgroundColor: 'var(--color-red-brand)' }}
                        aria-hidden
                      />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary">
                  Discuss Your Project
                </Link>
              </ScrollReveal>
            </div>

            <aside>
              <ScrollReveal>
                <div
                  className="p-6 mb-6"
                  style={{ backgroundColor: 'var(--color-neutral-100)' }}
                >
                  <h3
                    className="font-bold text-base mb-4"
                    style={{ color: 'var(--color-navy-900)' }}
                  >
                    Sectors We Serve
                  </h3>
                  <ul className="space-y-2">
                    {service.relatedSectors.map((sector) => (
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

                <div
                  className="p-6"
                  style={{ backgroundColor: 'var(--color-navy-900)' }}
                >
                  <h3 className="font-bold text-white text-base mb-2">
                    Ready to get started?
                  </h3>
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">
                    Tell us about your project and we&apos;ll be in touch within one
                    business day.
                  </p>
                  <Link
                    href="/contact"
                    className="btn-primary w-full justify-center"
                    style={{ display: 'flex' }}
                  >
                    Contact Us
                  </Link>
                </div>
              </ScrollReveal>
            </aside>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section
          className="section-py"
          style={{ backgroundColor: 'var(--color-neutral-100)', paddingTop: '3rem' }}
        >
          <div className="max-w-screen-xl mx-auto container-px">
            <ScrollReveal>
              <p className="section-label mb-4">Related Work</p>
              <h2
                className="display-md mb-10"
                style={{ color: 'var(--color-navy-900)', maxWidth: '32rem' }}
              >
                Projects in this service area
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedProjects.map((project, i) => (
                <ScrollReveal key={project.slug} delay={i * 60}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prev / Next navigation */}
      <nav
        aria-label="Services navigation"
        className="border-t"
        style={{ borderColor: 'var(--color-neutral-200)' }}
      >
        <div className="max-w-screen-xl mx-auto container-px">
          <div className="grid grid-cols-2 divide-x" style={{ borderColor: 'var(--color-neutral-200)' }}>
            {prevService ? (
              <Link
                href={`/services/${prevService.slug}`}
                className="py-8 pr-8 flex flex-col gap-1 group"
              >
                <span
                  className="text-xs font-semibold tracking-wide uppercase"
                  style={{ color: 'var(--color-charcoal-400)' }}
                >
                  ← Previous Service
                </span>
                <span
                  className="font-bold group-hover:underline"
                  style={{ color: 'var(--color-navy-900)' }}
                >
                  {prevService.name}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextService ? (
              <Link
                href={`/services/${nextService.slug}`}
                className="py-8 pl-8 flex flex-col gap-1 items-end group"
              >
                <span
                  className="text-xs font-semibold tracking-wide uppercase"
                  style={{ color: 'var(--color-charcoal-400)' }}
                >
                  Next Service →
                </span>
                <span
                  className="font-bold group-hover:underline"
                  style={{ color: 'var(--color-navy-900)' }}
                >
                  {nextService.name}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
