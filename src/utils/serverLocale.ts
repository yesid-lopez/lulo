import { cookies } from 'next/headers';

import { DEFAULT_CMS_LOCALE, type CmsLocale } from './cmsCaseStudies';

export const LOCALE_COOKIE_NAME = 'lulo-locale';

const SUPPORTED_LOCALES: ReadonlyArray<CmsLocale> = ['en', 'es', 'de'];

const isSupportedLocale = (value: string | undefined): value is CmsLocale =>
  value !== undefined && (SUPPORTED_LOCALES as ReadonlyArray<string>).includes(value);

// Reads the user's preferred locale from the cookie set by TranslationProvider.
// Falls back to the default CMS locale when the cookie is missing or invalid.
export async function getServerLocale(): Promise<CmsLocale> {
  const store = await cookies();
  const value = store.get(LOCALE_COOKIE_NAME)?.value;
  return isSupportedLocale(value) ? value : DEFAULT_CMS_LOCALE;
}
