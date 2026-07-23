import { company } from '@/content/company';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function ValueProposition() {
  return (
    <section
      className="section-py"
      style={{ backgroundColor: 'var(--color-navy-900)', paddingTop: '3rem', paddingBottom: '3rem' }}
    >
      <div className="max-w-screen-xl mx-auto container-px">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <ScrollReveal direction="left">
            <p className="section-label mb-4">Why Pre-Eng</p>
            <h2 className="display-lg text-white mb-6">
              We Provide Value
            </h2>
            <p
              className="text-white/70 leading-relaxed mb-6"
              style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}
            >
              {company.about.expertise}
            </p>
            <p
              className="text-white/70 leading-relaxed"
              style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}
            >
              {company.about.approach}
            </p>
          </ScrollReveal>

          {/* Right: Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {company.values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 80}>
                <div
                  className="p-6 border"
                  style={{
                    borderColor: 'rgba(255,255,255,0.12)',
                    backgroundColor: 'rgba(255,255,255,0.04)',
                  }}
                >
                  <div
                    className="w-1 h-8 mb-4"
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
      </div>
    </section>
  );
}
