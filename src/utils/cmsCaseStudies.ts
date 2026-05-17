export type CmsCaseStudyFeature = {
  number: string;
  title: string;
  description: string;
};

export type CmsCaseStudyLink = {
  label: string;
  url: string;
};

export type CmsCaseStudyMockup = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type CmsCaseStudyType = 'featured-project' | 'hackathon' | 'real-implementation';

export type CmsLocale = 'en' | 'es' | 'de';

export const DEFAULT_LOCALE: CmsLocale = 'en';

export type CmsCaseStudy = {
  type: CmsCaseStudyType;
  title: string;
  slug: string;
  eyebrow: string;
  summary: string;
  description: string;
  category: string;
  status: string;
  tags: string[];
  highlights: string[];
  heroImage?: CmsCaseStudyMockup;
  mockups: CmsCaseStudyMockup[];
  features: CmsCaseStudyFeature[];
  links: CmsCaseStudyLink[];
};

const cmsUrl = (process.env.CMS_URL || 'https://cms.luloai.com').replace(/\/$/, '');

// Payload's `/api/case-studies?depth=1` response shape, narrowed to the fields
// the landing site consumes. The CMS schema is authoritative; this is just the
// projection used here.
type PayloadMedia = {
  url?: string | null;
  alt?: string | null;
  width?: number | null;
  height?: number | null;
};

type PayloadCaseStudy = {
  type: CmsCaseStudyType;
  title: string;
  slug: string;
  description: string;
  category: string;
  status: string;
  keyFeatures: Array<{ number: string; title: string; description: string }>;
  tags?: Array<{ tag: string }> | null;
  images?: {
    hero?: PayloadMedia | null;
    mockups?: Array<{ image?: PayloadMedia | null; caption?: string | null }> | null;
  } | null;
  links?: {
    demo?: string | null;
    github?: string | null;
    website?: string | null;
    other?: Array<{ label: string; url: string }> | null;
  } | null;
};

type PayloadList<T> = { docs: T[] };

const absoluteMediaUrl = (url: string): string => {
  if (/^https?:\/\//i.test(url)) return url;
  return `${cmsUrl}${url.startsWith('/') ? '' : '/'}${url}`;
};

const labelForUrl = (kind: 'demo' | 'github' | 'website' | 'other', url: string, fallback?: string): string => {
  if (fallback) return fallback;
  if (kind === 'github') return 'View on GitHub';
  if (kind === 'website') return 'Visit website';
  if (/apps\.apple\.com/i.test(url)) return 'View on the App Store';
  if (/play\.google\.com/i.test(url)) return 'View on Google Play';
  return 'View demo';
};

const titleCaseCategory = (category: string): string =>
  category
    .split('-')
    .map((word) => (word.length ? word[0].toUpperCase() + word.slice(1) : word))
    .join(' ')
    .replace(/\bAnd\b/g, '&');

const mapCaseStudy = (doc: PayloadCaseStudy): CmsCaseStudy => {
  const tags = (doc.tags ?? []).map((t) => t.tag).filter(Boolean);
  const features = doc.keyFeatures ?? [];
  const heroUrl = doc.images?.hero?.url;
  const heroImage: CmsCaseStudyMockup | undefined = heroUrl
    ? {
        src: absoluteMediaUrl(heroUrl),
        alt: doc.images?.hero?.alt ?? doc.title,
        width: doc.images?.hero?.width ?? undefined,
        height: doc.images?.hero?.height ?? undefined,
      }
    : undefined;
  const mockups = (doc.images?.mockups ?? [])
    .map((m) => {
      const url = m.image?.url;
      if (!url) return null;
      return {
        src: absoluteMediaUrl(url),
        alt: m.image?.alt ?? m.caption ?? doc.title,
      } satisfies CmsCaseStudyMockup;
    })
    .filter((m): m is CmsCaseStudyMockup => m !== null);

  const links: CmsCaseStudyLink[] = []
  if (doc.links?.demo) links.push({ label: labelForUrl('demo', doc.links.demo), url: doc.links.demo });
  if (doc.links?.website) links.push({ label: labelForUrl('website', doc.links.website), url: doc.links.website });
  if (doc.links?.github) links.push({ label: labelForUrl('github', doc.links.github), url: doc.links.github });
  for (const other of doc.links?.other ?? []) {
    if (other.url) links.push({ label: other.label || labelForUrl('other', other.url), url: other.url });
  }

  return {
    type: doc.type,
    title: doc.title,
    slug: doc.slug,
    eyebrow: tags[0] ?? titleCaseCategory(doc.category),
    summary: doc.description,
    description: doc.description,
    category: titleCaseCategory(doc.category),
    status: doc.status.charAt(0).toUpperCase() + doc.status.slice(1),
    tags,
    highlights: features.slice(0, 3).map((f) => f.title),
    heroImage,
    mockups,
    features,
    links,
  };
};

const fetchCaseStudies = async (locale: CmsLocale = DEFAULT_LOCALE): Promise<CmsCaseStudy[]> => {
  const publishedOnly = process.env.NODE_ENV === 'production';
  const statusFilter = publishedOnly ? '&where%5Bstatus%5D%5Bequals%5D=published' : '';
  // Payload's REST API takes ?locale=<code>&fallback-locale=en. Missing
  // translations fall back to English so we never render blank fields when a
  // case study has only been authored in en.
  const localeParam = `&locale=${encodeURIComponent(locale)}&fallback-locale=${DEFAULT_LOCALE}`;
  const url = `${cmsUrl}/api/case-studies?depth=1&limit=100&sort=_order${statusFilter}${localeParam}`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) {
    throw new Error(`Failed to fetch case studies (${res.status}): ${await res.text()}`);
  }
  const json = (await res.json()) as PayloadList<PayloadCaseStudy>;
  return json.docs.map(mapCaseStudy);
};

export async function getCmsCaseStudies(locale: CmsLocale = DEFAULT_LOCALE): Promise<CmsCaseStudy[]> {
  return fetchCaseStudies(locale);
}

export async function getCmsCaseStudyBySlug(
  slug: string,
  locale: CmsLocale = DEFAULT_LOCALE,
): Promise<CmsCaseStudy | undefined> {
  const docs = await fetchCaseStudies(locale);
  return docs.find((study) => study.slug === slug);
}

export async function getCmsCaseStudiesByType(
  type: CmsCaseStudyType,
  locale: CmsLocale = DEFAULT_LOCALE,
): Promise<CmsCaseStudy[]> {
  const docs = await fetchCaseStudies(locale);
  return docs.filter((study) => study.type === type);
}
