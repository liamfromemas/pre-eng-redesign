'use client';

import { usePathname } from 'next/navigation';
import { SiteFooter } from './SiteFooter';

// Pages where the footer CTA band ("Ready to Build?") is suppressed because
// the page itself already serves that function (e.g. Contact).
const NO_CTA_PATHS = ['/contact'];

export function FooterController() {
  const pathname = usePathname();
  return <SiteFooter showCTA={!NO_CTA_PATHS.includes(pathname)} />;
}
