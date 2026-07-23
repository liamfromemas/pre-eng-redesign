'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { tenderDisclaimers, getActiveTenders } from '@/content/tenders';

const SESSION_KEY = 'pre-eng-tenders-agreed';

export function TendersGate() {
  const router = useRouter();
  // null = not yet read from sessionStorage (avoid SSR/hydration mismatch)
  const [agreed, setAgreed] = useState<boolean | null>(null);

  useEffect(() => {
    setAgreed(sessionStorage.getItem(SESSION_KEY) === '1');
  }, []);

  const handleAgree = () => {
    sessionStorage.setItem(SESSION_KEY, '1');
    setAgreed(true);
  };

  const handleDisagree = () => {
    router.push('/');
  };

  // Suppress content until sessionStorage is read to avoid layout flash
  if (agreed === null) {
    return (
      <div className="section-py">
        <div className="max-w-screen-xl mx-auto container-px">
          <div style={{ minHeight: '300px' }} />
        </div>
      </div>
    );
  }

  const active = getActiveTenders();

  /* ── GATE STATE: Terms & Conditions ── */
  if (!agreed) {
    return (
      <section className="section-py" style={{ backgroundColor: 'white', paddingTop: '3rem' }}>
        <div className="max-w-screen-xl mx-auto container-px">
          <div
            className="max-w-3xl mx-auto border-l-4 p-8"
            style={{
              borderColor: 'var(--color-navy-900)',
              backgroundColor: 'var(--color-neutral-100)',
            }}
          >
            <h2
              className="font-bold text-lg mb-2"
              style={{ color: 'var(--color-navy-900)' }}
            >
              Terms &amp; Conditions
            </h2>
            <p className="text-sm mb-6" style={{ color: 'var(--color-charcoal-600)' }}>
              You must read and agree to the terms below to access tender documents.
            </p>

            <ol className="space-y-4 mt-4 mb-8">
              {tenderDisclaimers.map((d, i) => (
                <li
                  key={i}
                  className="text-sm leading-relaxed flex gap-3"
                  style={{ color: 'var(--color-charcoal-700)' }}
                >
                  <span
                    className="shrink-0 font-bold"
                    style={{ color: 'var(--color-navy-900)', minWidth: '1.25rem' }}
                  >
                    {i + 1}.
                  </span>
                  <span>{d}</span>
                </li>
              ))}
            </ol>

            <AgreeDisagreeButtons onAgree={handleAgree} onDisagree={handleDisagree} />
          </div>
        </div>
      </section>
    );
  }

  /* ── UNLOCKED STATE: Active Tender Listings ── */
  return (
    <section className="section-py" style={{ backgroundColor: 'white', paddingTop: '3rem' }}>
      <div className="max-w-screen-xl mx-auto container-px">
        {active.length > 0 ? (
          <>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: 'var(--color-red-brand)' }}
            >
              Active Tenders
            </p>
            <h2
              className="display-md mb-10"
              style={{ color: 'var(--color-navy-900)' }}
            >
              Open for Pricing
            </h2>
            <div className="space-y-6">
              {active.map((tender) => (
                <div
                  key={tender.id}
                  className="p-8 border"
                  style={{ borderColor: 'var(--color-neutral-200)' }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="min-w-0">
                      <h3
                        className="font-bold text-xl mb-4"
                        style={{ color: 'var(--color-navy-900)' }}
                      >
                        {tender.name}
                      </h3>
                      {tender.description && (
                        <p
                          className="text-sm leading-relaxed mb-6 max-w-2xl"
                          style={{ color: 'var(--color-charcoal-600)' }}
                        >
                          {tender.description}
                        </p>
                      )}
                      <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {[
                          { term: 'Architect', def: tender.architect },
                          { term: 'Owner', def: tender.owner },
                          { term: 'Addenda', def: String(tender.addenda) },
                          {
                            term: 'Closing',
                            def: `${tender.closingDate} at ${tender.closingTime}`,
                          },
                        ].map(({ term, def }) => (
                          <div key={term}>
                            <dt
                              className="text-xs font-semibold uppercase tracking-wider mb-1"
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

                    <div className="shrink-0">
                      {tender.driveUrl ? (
                        <a
                          href={tender.driveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                          style={{ whiteSpace: 'nowrap' }}
                        >
                          View Tender Documents ↗
                        </a>
                      ) : (
                        <a
                          href="mailto:info@pre-eng.com"
                          className="btn-primary"
                        >
                          Request Documents
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div
            className="p-12 text-center border"
            style={{ borderColor: 'var(--color-neutral-200)' }}
          >
            <p
              className="font-bold text-xl mb-3"
              style={{ color: 'var(--color-navy-900)' }}
            >
              No active tenders at this time
            </p>
            <p
              className="text-sm max-w-md mx-auto"
              style={{ color: 'var(--color-charcoal-600)' }}
            >
              Please check back regularly or contact us to express interest in future
              tender opportunities.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function AgreeDisagreeButtons({
  onAgree,
  onDisagree,
}: {
  onAgree: () => void;
  onDisagree: () => void;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <button
        onClick={onAgree}
        className="btn-primary"
        type="button"
        style={{ whiteSpace: 'normal', textAlign: 'center' }}
      >
        I Agree — View Tender Documents
      </button>
      <button
        onClick={onDisagree}
        className="btn-outline-dark"
        type="button"
      >
        Disagree — Return to Home
      </button>
    </div>
  );
}
