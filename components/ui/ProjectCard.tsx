import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/content/projects';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block relative overflow-hidden aspect-[4/3] bg-neutral-200"
      style={{ backgroundColor: 'var(--color-neutral-200)' }}
      aria-label={`${project.name} — ${project.description}`}
    >
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        placeholder={project.imageLowRes ? undefined : 'blur'}
        blurDataURL={project.imageLowRes ? undefined : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EAB8QAAIBBAMBAAAAAAAAAAAAAAECAwQRBRIhMf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCSp1KjFUTLzHZMUqMuijI7tz4HB7Pj2AAAB//Z'}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            'linear-gradient(to top, rgba(6,24,38,0.85) 0%, rgba(6,24,38,0.2) 60%, transparent 100%)',
          opacity: 0.9,
        }}
        aria-hidden
      />
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <span
          className="text-xs font-semibold tracking-widest uppercase mb-1.5"
          style={{ color: 'var(--color-red-brand)' }}
        >
          {project.sector}
        </span>
        <h3 className="text-white font-bold text-lg leading-snug mb-1 group-hover:text-white/90 transition-colors">
          {project.name}
        </h3>
        <p className="text-white/70 text-sm">{project.location}, ON</p>
        <div className="mt-3 flex items-center gap-3">
          <span
            className="text-sm font-bold"
            style={{ color: 'var(--color-red-brand)' }}
          >
            {project.value}
          </span>
          <span className="text-white/50 text-xs">{project.description}</span>
        </div>
      </div>
      {/* Hover arrow */}
      <div
        className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: 'var(--color-red-brand)' }}
        aria-hidden
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </div>
    </Link>
  );
}
