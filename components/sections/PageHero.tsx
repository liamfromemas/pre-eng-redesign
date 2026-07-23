import Image from 'next/image';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  compact?: boolean;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = '',
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className="relative flex items-end overflow-hidden"
      style={{
        minHeight: compact ? '280px' : '420px',
        paddingTop: '96px',
        paddingBottom: compact ? '48px' : '72px',
        backgroundColor: 'var(--color-navy-900)',
      }}
      aria-label={`${title} page hero`}
    >
      {image && (
        <div className="absolute inset-0" aria-hidden>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(6,24,38,0.95) 0%, rgba(6,24,38,0.6) 70%, rgba(6,24,38,0.3) 100%)',
            }}
          />
        </div>
      )}
      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        {/* Vertical accent: hidden below xl where no auto-margin exists for the line to live in.
            At xl+, max(0px, 50% - 42rem) pins it to the left gutter of the max-w-screen-xl
            container so it never overlaps the text column regardless of viewport width. */}
        <div
          className="hidden xl:block absolute top-0 w-px h-full opacity-20"
          style={{ backgroundColor: 'white', left: 'max(0px, calc(50% - 42rem))' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-10"
          style={{ backgroundColor: 'white' }}
        />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto container-px w-full">
        {eyebrow && <p className="section-label mb-4">{eyebrow}</p>}
        <h1 className="display-xl text-white" style={{ maxWidth: '48rem' }}>
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-4 text-white/65 max-w-2xl"
            style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
