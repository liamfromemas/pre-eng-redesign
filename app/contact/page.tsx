import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ContactForm } from '@/components/ui/ContactForm';
import { company } from '@/content/company';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Pre-Eng Contracting Ltd. in Concord, Ontario. Phone: 905 738 6866. Email: info@pre-eng.com. We serve the Greater Toronto Area.',
  alternates: { canonical: 'https://www.pre-eng.com/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Ready to discuss your project? Reach out by phone, email, or the form below."
        compact
      />

      <section className="section-py" style={{ backgroundColor: 'white' }}>
        <div className="max-w-screen-xl mx-auto container-px">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:items-start">
            {/* Contact Info */}
            <aside className="lg:col-span-2">
              <ScrollReveal direction="left">
                <p className="section-label mb-6">Contact Information</p>

                <div className="space-y-8">
                  <div>
                    <h2
                      className="font-bold text-lg mb-1"
                      style={{ color: 'var(--color-navy-900)' }}
                    >
                      {company.name}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-widest mb-1"
                        style={{ color: 'var(--color-charcoal-400)' }}
                      >
                        Address
                      </p>
                      <address
                        className="not-italic text-sm leading-relaxed"
                        style={{ color: 'var(--color-charcoal-700)' }}
                      >
                        {company.contact.address.street}
                        <br />
                        {company.contact.address.city},{' '}
                        {company.contact.address.province}{' '}
                        {company.contact.address.postalCode}
                      </address>
                    </div>

                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-widest mb-1"
                        style={{ color: 'var(--color-charcoal-400)' }}
                      >
                        Phone
                      </p>
                      <a
                        href={company.contact.phoneHref}
                        className="text-sm font-medium hover:underline"
                        style={{ color: 'var(--color-navy-900)' }}
                      >
                        {company.contact.phone}
                      </a>
                    </div>

                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-widest mb-1"
                        style={{ color: 'var(--color-charcoal-400)' }}
                      >
                        Fax
                      </p>
                      <p className="text-sm" style={{ color: 'var(--color-charcoal-700)' }}>
                        {company.contact.fax}
                      </p>
                    </div>

                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-widest mb-1"
                        style={{ color: 'var(--color-charcoal-400)' }}
                      >
                        Email
                      </p>
                      <a
                        href={company.contact.emailHref}
                        className="text-sm font-medium hover:underline"
                        style={{ color: 'var(--color-navy-900)' }}
                      >
                        {company.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Map embed */}
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-3"
                      style={{ color: 'var(--color-charcoal-400)' }}
                    >
                      Location
                    </p>
                    <div style={{ position: 'relative', paddingBottom: '75%', height: 0, overflow: 'hidden' }}>
                      <iframe
                        title="Pre-Eng Contracting office location — 1 Applewood Crescent Unit 10, Concord, Ontario"
                        src="https://maps.google.com/maps?q=1+Applewood+Crescent+Unit+10+Concord+ON+L4K+4K1&output=embed&z=15"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </aside>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <p className="section-label mb-6">Send a Message</p>
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
