'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { company } from '@/content/company';
import { services } from '@/content/services';

const navItems = [
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: services.map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Tenders', href: '/tenders' },
  { label: 'Careers', href: '/careers' },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    let prev = window.scrollY > 40;
    setScrolled(prev);
    const handler = () => {
      const next = window.scrollY > 40;
      if (next !== prev) {
        prev = next;
        setScrolled(next);
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close mobile menu on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [menuOpen]);

  const isScrolledOrMenu = scrolled || menuOpen;
  const isOnDarkHero =
    pathname === '/' ||
    pathname?.startsWith('/projects/') ||
    pathname?.startsWith('/services/');

  return (
    <>
      <header
        role="banner"
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolledOrMenu
            ? 'bg-white shadow-md'
            : isOnDarkHero
              ? 'bg-transparent'
              : 'bg-white shadow-sm',
        ].join(' ')}
        style={{ height: scrolled ? '64px' : '80px', transition: 'height 0.3s ease, background 0.3s ease, box-shadow 0.3s ease' }}
      >
        <div
          className="max-w-screen-xl mx-auto container-px h-full flex items-center justify-between"
        >
          {/* Logo / Wordmark */}
          <Link
            href="/"
            aria-label={`${company.name} — Home`}
            className="flex items-center gap-3 group"
          >
            {/* Red bracket accent */}
            <span
              aria-hidden
              className="text-red-brand font-black text-2xl leading-none select-none"
              style={{ color: 'var(--color-red-brand)', fontFamily: 'var(--font-inter)' }}
            >
              [
            </span>
            <span
              className={[
                'font-black tracking-widest text-sm uppercase transition-colors duration-300',
                isScrolledOrMenu || !isOnDarkHero
                  ? 'text-navy-900'
                  : 'text-white',
              ].join(' ')}
              style={{
                color: isScrolledOrMenu || !isOnDarkHero
                  ? 'var(--color-navy-900)'
                  : 'white',
                fontFamily: 'var(--font-inter)',
                letterSpacing: '0.15em',
              }}
            >
              PRE-ENG
            </span>
            <span
              aria-hidden
              className="text-red-brand font-black text-2xl leading-none select-none"
              style={{ color: 'var(--color-red-brand)', fontFamily: 'var(--font-inter)' }}
            >
              ]
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-8"
          >
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button
                    className={[
                      'flex items-center gap-1 font-semibold text-sm tracking-wide uppercase transition-colors duration-200 cursor-pointer',
                      isScrolledOrMenu || !isOnDarkHero
                        ? 'text-charcoal-700 hover:text-navy-900'
                        : 'text-white/80 hover:text-white',
                      pathname?.startsWith(item.href) ? '!text-red-brand' : '',
                    ].join(' ')}
                    style={{
                      color: pathname?.startsWith(item.href)
                        ? 'var(--color-red-brand)'
                        : isScrolledOrMenu || !isOnDarkHero
                          ? 'var(--color-charcoal-700)'
                          : 'rgba(255,255,255,0.85)',
                    }}
                    aria-current={pathname?.startsWith(item.href) ? 'page' : undefined}
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {item.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                      className="transition-transform duration-200 group-hover:rotate-180"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200"
                    role="menu"
                  >
                    <div
                      className="bg-white shadow-xl border border-neutral-200 py-2 min-w-56"
                      style={{ borderColor: 'var(--color-neutral-200)' }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className="block px-6 py-3 text-sm font-medium text-charcoal-700 hover:bg-neutral-100 hover:text-navy-900 transition-colors duration-150"
                          style={{
                            color: 'var(--color-charcoal-700)',
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                      <div
                        className="border-t mt-2 pt-2"
                        style={{ borderColor: 'var(--color-neutral-200)' }}
                      >
                        <Link
                          href="/services"
                          role="menuitem"
                          className="block px-6 py-3 text-sm font-semibold hover:bg-neutral-100 transition-colors duration-150"
                          style={{ color: 'var(--color-navy-900)' }}
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-semibold text-sm tracking-wide uppercase transition-colors duration-200"
                  style={{
                    color: pathname === item.href || pathname?.startsWith(item.href)
                      ? 'var(--color-red-brand)'
                      : isScrolledOrMenu || !isOnDarkHero
                        ? 'var(--color-charcoal-700)'
                        : 'rgba(255,255,255,0.85)',
                  }}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="btn-primary ml-4"
              style={{ padding: '0.625rem 1.5rem' }}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{
              color: isScrolledOrMenu || !isOnDarkHero
                ? 'var(--color-navy-900)'
                : 'white',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={[
          'fixed inset-0 z-40 lg:hidden transition-opacity duration-300',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        style={{ backgroundColor: 'var(--color-navy-950)' }}
      >
        <div className="flex flex-col h-full pt-24 pb-12 container-px overflow-y-auto">
          <nav aria-label="Mobile navigation">
            <ul className="space-y-1" role="list">
              {navItems.map((item, i) => (
                <li key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between py-4 text-white/90 hover:text-white font-semibold text-xl transition-colors duration-200 border-b"
                        style={{
                          borderColor: 'rgba(255,255,255,0.1)',
                          animationDelay: `${i * 60}ms`,
                        }}
                        onClick={() => setServicesOpen((v) => !v)}
                        aria-expanded={servicesOpen}
                      >
                        {item.label}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden
                          className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                      {servicesOpen && (
                        <ul className="ml-4 mb-2 space-y-1">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block py-3 text-white/70 hover:text-white font-medium text-lg transition-colors duration-150"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                          <li>
                            <Link
                              href="/services"
                              className="block py-3 font-semibold text-lg transition-colors duration-150"
                              style={{ color: 'var(--color-red-brand)' }}
                            >
                              All Services →
                            </Link>
                          </li>
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center py-4 text-white/90 hover:text-white font-semibold text-xl transition-colors duration-200 border-b"
                      style={{
                        borderColor: 'rgba(255,255,255,0.1)',
                        animationDelay: `${i * 60}ms`,
                        color: pathname === item.href ? 'var(--color-red-brand)' : undefined,
                      }}
                      aria-current={pathname === item.href ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary w-full justify-center">
                Contact Us
              </Link>
            </div>
          </nav>

          <div className="mt-auto pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <p className="text-white/50 text-sm">{company.contact.phone}</p>
            <p className="text-white/50 text-sm mt-1">{company.contact.email}</p>
          </div>
        </div>
      </div>
    </>
  );
}
