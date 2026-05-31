import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CaseStudyMockupGallery from '@/components/CaseStudyMockupGallery';
import { getCmsCaseStudies, getCmsCaseStudyBySlug } from '@/utils/cmsCaseStudies';
import { createPageMetadata } from '@/lib/seo';

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const studies = (await getCmsCaseStudies()).filter(
    (study) => study.type !== 'psychologist-demo',
  );
  return studies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = await getCmsCaseStudyBySlug(slug);

  if (!study || study.type === 'psychologist-demo') {
    return createPageMetadata({
      title: 'Case Study',
      description: 'Explore lulo AI product case studies and practical digital solutions.',
      path: '/case-studies',
    });
  }

  return createPageMetadata({
    title: `${study.title} Case Study`,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CmsCaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = await getCmsCaseStudyBySlug(slug);

  if (!study || study.type === 'psychologist-demo') {
    notFound();
  }

  const primaryLink = study.links[0];

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      <Navigation />

      <main className="flex-grow px-8 py-8 pt-8 md:px-12 md:py-12 md:pt-8 lg:px-24 lg:py-24 lg:pt-8">
        <Link href="/case-studies" className="mb-8 inline-flex text-sm font-semibold text-blue-600 hover:underline">
          ← Back to case studies
        </Link>

        <section className="rounded-3xl bg-[#111111] p-8 text-white md:p-12 lg:p-14">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-gray-300">
            <span>{study.eyebrow}</span>
            <span className="h-1 w-1 rounded-full bg-gray-500" />
            <span>{study.category}</span>
            <span className="h-1 w-1 rounded-full bg-gray-500" />
            <span>{study.status}</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <h1 className="mb-6 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                {study.title}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">{study.description}</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">Highlights</p>
              <ul className="space-y-3">
                {study.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-gray-100">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-gray-100">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {study.mockups.length > 0 ? (
          <section className="mt-12 overflow-hidden rounded-3xl bg-white p-6 shadow-sm md:p-10">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">App mockups</p>
                <h2 className="text-2xl font-semibold text-gray-950 md:text-4xl">Product experience</h2>
              </div>
              {study.mockups.length > 3 ? (
                <p className="text-xs uppercase tracking-[0.18em] text-gray-400">
                  {study.mockups.length} screens
                </p>
              ) : null}
            </div>

            <CaseStudyMockupGallery mockups={study.mockups} />
          </section>
        ) : null}

        <section className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {study.features.map((feature) => (
            <article key={feature.number} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-5 text-sm font-semibold text-blue-600">{feature.number}</div>
              <h2 className="mb-3 text-xl font-semibold text-gray-950">{feature.title}</h2>
              <p className="text-sm leading-6 text-gray-600">{feature.description}</p>
            </article>
          ))}
        </section>

        {study.links.length > 0 ? (
          <section className="mt-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-950">Project links</h2>
            <div className="flex flex-wrap gap-3">
              {study.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </section>
        ) : null}

        {primaryLink ? (
          <div className="mt-8 text-sm text-gray-500">
            Primary destination: <span className="text-gray-700">{primaryLink.label}</span>
          </div>
        ) : null}
      </main>

      <Footer />
    </div>
  );
}
