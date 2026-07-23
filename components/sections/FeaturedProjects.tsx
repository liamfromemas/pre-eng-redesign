import Link from 'next/link';
import { getFeaturedProjects } from '@/content/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="section-py" style={{ backgroundColor: 'white', paddingTop: '3rem', paddingBottom: '3rem' }}>
      <div className="max-w-screen-xl mx-auto container-px">
        <ScrollReveal>
          <p className="section-label mb-4">Our Work</p>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
            <h2
              className="display-lg"
              style={{ color: 'var(--color-navy-900)', maxWidth: '36rem' }}
            >
              Projects that define the communities we build in.
            </h2>
            <Link
              href="/projects"
              className="btn-outline-dark shrink-0 self-start lg:self-auto"
            >
              All Projects
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 60}>
              <ProjectCard project={project} priority={i < 2} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-8 text-center">
            <Link href="/projects" className="btn-outline-dark">
              View All 11 Projects →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
