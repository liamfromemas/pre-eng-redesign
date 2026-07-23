import Image from 'next/image';
import Link from 'next/link';
import { company } from '@/content/company';

export function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100svh' }}
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/assets/misc/hero-construction.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={85}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(6,24,38,0.92) 0%, rgba(12,45,72,0.78) 50%, rgba(6,24,38,0.55) 100%)',
          }}
        />
        {/* Bottom gradient for smooth section transition */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(6,24,38,0.4))',
          }}
        />
      </div>

      {/* Red accent bar at top-left */}
      <div
        className="absolute top-0 left-0 w-1 h-full"
        style={{ backgroundColor: 'var(--color-red-brand)' }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto container-px flex flex-col justify-center h-full"
           style={{ minHeight: '100svh', paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="max-w-3xl">
          <p className="section-label mb-6 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
            Institutional Construction &bull; GTA &bull; 40+ Years
          </p>
          <h1
            className="display-2xl text-white mb-6 animate-fade-in-up"
            style={{ animationDelay: '100ms' }}
          >
            {company.heroHeadline}
          </h1>
          <p
            className="text-white/75 max-w-xl mb-10 animate-fade-in-up"
            style={{ fontSize: '1.125rem', lineHeight: 1.7, animationDelay: '200ms' }}
          >
            {company.heroSubhead}
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            <Link href="/projects" className="btn-primary">
              View Our Projects
            </Link>
            <Link href="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-auto pt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-in-up"
          style={{ animationDelay: '400ms' }}
        >
          {[
            { value: '40+', label: 'Years in Business' },
            { value: '$30M+', label: 'Largest Project Value' },
            { value: '11', label: 'Featured Projects' },
            { value: '40', label: 'Staff Members' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border-l-2 pl-4"
              style={{ borderColor: 'var(--color-red-brand)' }}
            >
              <p
                className="text-white font-black leading-none mb-1"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              >
                {stat.value}
              </p>
              <p className="text-white/55 text-xs uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator — sm→md only; hidden at lg+ where it would overlap the 4-col stats grid */}
      <div
        className="hidden sm:flex lg:hidden absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-50"
        aria-hidden
      >
        <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-white/50 animate-pulse" />
      </div>
    </section>
  );
}
