import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects, getProjectBySlug } from '@/content/projects';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Not Found' };

  return {
    title: project.name,
    description: `${project.name} — ${project.description}. ${project.value} project in ${project.location}, Ontario. Delivered by Pre-Eng Contracting Ltd.`,
    alternates: { canonical: `https://www.pre-eng.com/projects/${slug}` },
    openGraph: {
      images: project.imageLowRes ? undefined : [{ url: project.image, alt: project.imageAlt }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.slug !== project.slug && p.sector === project.sector)
    .slice(0, 3);

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = projects[projectIndex - 1];
  const nextProject = projects[projectIndex + 1];

  return (
    <>
      <PageHero
        eyebrow={project.sector}
        title={project.name}
        subtitle={`${project.location}, Ontario`}
        image={project.image}
        imageAlt={project.imageAlt}
      />

      <section className="section-py" style={{ backgroundColor: 'white' }}>
        <div className="max-w-screen-xl mx-auto container-px">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main content */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="left">
                <div className="relative aspect-[16/9] overflow-hidden mb-8 bg-neutral-100">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                  />
                  {project.imageLowRes && (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
                    >
                      <p className="text-white/70 text-xs px-4 text-center">
                        Hi-res image pending from client
                      </p>
                    </div>
                  )}
                </div>

                <p
                  className="leading-relaxed mb-6"
                  style={{
                    color: 'var(--color-charcoal-700)',
                    fontSize: '1.0625rem',
                    lineHeight: 1.75,
                  }}
                >
                  {project.descriptionLong}
                </p>

                {project.type.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.type.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                        style={{
                          backgroundColor: 'var(--color-neutral-100)',
                          color: 'var(--color-charcoal-600)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <aside>
              <ScrollReveal>
                <div
                  className="p-6 mb-6"
                  style={{ backgroundColor: 'var(--color-neutral-100)' }}
                >
                  <h2
                    className="font-bold text-base mb-4"
                    style={{ color: 'var(--color-navy-900)' }}
                  >
                    Project Details
                  </h2>
                  <dl className="space-y-4">
                    {[
                      { term: 'Location', def: `${project.location}, ${project.province}` },
                      { term: 'Sector', def: project.sector },
                      { term: 'Scope', def: project.description },
                      { term: 'Project Value', def: project.value },
                    ].map(({ term, def }) => (
                      <div key={term}>
                        <dt
                          className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                          style={{ color: 'var(--color-charcoal-400)' }}
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

                <div
                  className="p-6"
                  style={{ backgroundColor: 'var(--color-navy-900)' }}
                >
                  <p className="text-white font-bold text-base mb-2">
                    Similar project in mind?
                  </p>
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">
                    We&apos;d be glad to discuss how our experience with{' '}
                    {project.sector.toLowerCase()} facilities can help your project.
                  </p>
                  <Link
                    href="/contact"
                    className="btn-primary w-full justify-center"
                    style={{ display: 'flex' }}
                  >
                    Get in Touch
                  </Link>
                </div>
              </ScrollReveal>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section
          className="section-py"
          style={{ backgroundColor: 'var(--color-neutral-100)' }}
        >
          <div className="max-w-screen-xl mx-auto container-px">
            <ScrollReveal>
              <p className="section-label mb-4">Related Projects</p>
              <h2
                className="display-md mb-10"
                style={{ color: 'var(--color-navy-900)' }}
              >
                More {project.sector} Projects
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((p, i) => (
                <ScrollReveal key={p.slug} delay={i * 60}>
                  <ProjectCard project={p} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prev / Next */}
      <nav
        aria-label="Projects navigation"
        className="border-t"
        style={{ borderColor: 'var(--color-neutral-200)' }}
      >
        <div className="max-w-screen-xl mx-auto container-px">
          <div
            className="grid grid-cols-2 divide-x"
            style={{ borderColor: 'var(--color-neutral-200)' }}
          >
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="py-8 pr-8 flex flex-col gap-1 group"
              >
                <span
                  className="text-xs font-semibold tracking-wide uppercase"
                  style={{ color: 'var(--color-charcoal-400)' }}
                >
                  ← Previous
                </span>
                <span
                  className="font-bold group-hover:underline"
                  style={{ color: 'var(--color-navy-900)' }}
                >
                  {prevProject.name}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="py-8 pl-8 flex flex-col gap-1 items-end group"
              >
                <span
                  className="text-xs font-semibold tracking-wide uppercase"
                  style={{ color: 'var(--color-charcoal-400)' }}
                >
                  Next →
                </span>
                <span
                  className="font-bold group-hover:underline"
                  style={{ color: 'var(--color-navy-900)' }}
                >
                  {nextProject.name}
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
