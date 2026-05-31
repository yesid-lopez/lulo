export type CmsPsychologistDemo = {
  title: string;
  slug: string;
  specialty: string;
  summary: string;
  demoUrl: string;
  heroImage?: {
    src: string;
    alt: string;
  };
};

const cmsUrl = (process.env.CMS_URL || 'https://cms.luloai.com').replace(/\/$/, '');

// Payload's `/api/psychologist-demos?depth=1` response shape, narrowed to the
// fields the landing consumes. The CMS schema is authoritative.
type PayloadMedia = {
  url?: string | null;
  alt?: string | null;
};

type PayloadPsychologistDemo = {
  title: string;
  slug: string;
  specialty: string;
  summary: string;
  demoUrl: string;
  heroImage?: PayloadMedia | null;
};

type PayloadList<T> = { docs: T[] };

const absoluteMediaUrl = (url: string): string => {
  if (/^https?:\/\//i.test(url)) return url;
  return `${cmsUrl}${url.startsWith('/') ? '' : '/'}${url}`;
};

const mapDemo = (doc: PayloadPsychologistDemo): CmsPsychologistDemo => {
  const heroUrl = doc.heroImage?.url;
  return {
    title: doc.title,
    slug: doc.slug,
    specialty: doc.specialty,
    summary: doc.summary,
    demoUrl: doc.demoUrl,
    heroImage: heroUrl
      ? { src: absoluteMediaUrl(heroUrl), alt: doc.heroImage?.alt ?? doc.title }
      : undefined,
  };
};

export async function getCmsPsychologistDemos(): Promise<CmsPsychologistDemo[]> {
  const publishedOnly = process.env.NODE_ENV === 'production';
  const statusFilter = publishedOnly ? '&where%5Bstatus%5D%5Bequals%5D=published' : '';
  const url = `${cmsUrl}/api/psychologist-demos?depth=1&limit=100&sort=_order${statusFilter}`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) {
    throw new Error(`Failed to fetch psychologist demos (${res.status}): ${await res.text()}`);
  }
  const json = (await res.json()) as PayloadList<PayloadPsychologistDemo>;
  return json.docs.map(mapDemo);
}
