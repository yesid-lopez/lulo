import { DEFAULT_LOCALE, type CmsLocale } from './cmsCaseStudies';

// Single source of truth for the locale cookie name. Both the
// TranslationProvider (client) and the server components (case-studies pages)
// read from / write to this exact name. Keep this module free of server-only
// imports so the client `TranslationProvider` can import it too.
export const LOCALE_COOKIE = 'lulo-locale';

export const SUPPORTED_LOCALES: CmsLocale[] = ['en', 'es', 'de'];

export const isSupportedLocale = (value: string | undefined | null): value is CmsLocale =>
  !!value && (SUPPORTED_LOCALES as string[]).includes(value);

export const resolveLocale = (value: string | undefined | null): CmsLocale =>
  isSupportedLocale(value) ? value : DEFAULT_LOCALE;
