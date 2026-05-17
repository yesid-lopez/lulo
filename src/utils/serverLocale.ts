import 'server-only';

import { cookies } from 'next/headers';

import { LOCALE_COOKIE, resolveLocale } from './locale';
import { type CmsLocale } from './cmsCaseStudies';

// Server-only helper. Reads the locale cookie from the incoming request and
// returns the active locale, falling back to `en` when missing or invalid.
// Kept in its own module so client components can import the cookie name from
// ./locale without dragging `next/headers` into the client bundle.
export const getServerLocale = async (): Promise<CmsLocale> => {
  const store = await cookies();
  return resolveLocale(store.get(LOCALE_COOKIE)?.value);
};
