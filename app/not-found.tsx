import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center text-center"
      style={{
        minHeight: '100svh',
        backgroundColor: 'var(--color-navy-900)',
        paddingTop: '96px',
        paddingBottom: '64px',
        paddingLeft: '1.25rem',
        paddingRight: '1.25rem',
      }}
    >
      <p
        className="font-black text-8xl mb-6"
        style={{ color: 'var(--color-red-brand)', lineHeight: 1 }}
        aria-hidden
      >
        404
      </p>
      <h1 className="text-white font-bold text-3xl mb-4">Page Not Found</h1>
      <p className="text-white/60 text-sm mb-10 max-w-sm leading-relaxed">
        The page you&apos;re looking for may have moved. Use the navigation above
        or return to the homepage.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="btn-primary">
          Go to Homepage
        </Link>
        <Link href="/contact" className="btn-outline">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
