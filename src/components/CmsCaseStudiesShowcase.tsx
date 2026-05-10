import Image from 'next/image';
import Link from 'next/link';
import { cmsCaseStudiesData, type CmsCaseStudy } from '@/utils/cmsCaseStudiesData';

const CmsCaseStudyCard = ({
  title,
  slug,
  eyebrow,
  summary,
  category,
  tags,
  highlights,
  mockups,
}: CmsCaseStudy) => {
  return (
    <Link
      href={`/case-studies/${slug}`}
      className="group block rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg md:p-8"
    >
      <article className="flex h-full flex-col">
        <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
          <span>{eyebrow}</span>
          <span className="h-1 w-1 rounded-full bg-gray-400" />
          <span>{category}</span>
        </div>

        <h2 className="mb-4 text-2xl font-semibold leading-tight text-gray-950 transition-colors group-hover:text-blue-600 md:text-3xl">
          {title}
        </h2>
        <p className="mb-6 text-base leading-7 text-gray-600">{summary}</p>

        {mockups.length > 0 ? (
          <div className="mb-6 overflow-hidden rounded-3xl bg-[#111111] px-4 pt-5 sm:px-5 sm:pt-6">
            <div className="relative mx-auto flex min-h-[22rem] max-w-sm items-end justify-center sm:min-h-64 sm:max-w-none sm:gap-5">
              {mockups.slice(0, 3).map((mockup, index) => {
                const mobilePosition =
                  index === 0
                    ? 'absolute bottom-0 left-1/2 z-20 w-36 -translate-x-1/2 sm:static sm:w-32 sm:translate-x-0'
                    : index === 1
                      ? 'absolute bottom-8 left-4 z-10 w-28 -rotate-6 opacity-90 sm:static sm:w-32 sm:rotate-0 sm:opacity-100'
                      : 'absolute bottom-8 right-4 z-10 w-28 rotate-6 opacity-90 sm:static sm:w-32 sm:rotate-0 sm:opacity-100';

                const desktopPosition = index === 0 ? 'sm:translate-y-8' : index === 1 ? 'sm:translate-y-0' : 'sm:translate-y-8';

                return (
                  <div
                    key={mockup.src}
                    className={`${mobilePosition} ${desktopPosition} shrink-0 overflow-hidden rounded-[1.6rem] border border-white/10 bg-gray-900 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]`}
                  >
                    <Image
                      src={mockup.src}
                      alt={mockup.alt}
                      width={600}
                      height={1299}
                      className="h-auto w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}

        <div className="mb-6 grid gap-3 sm:grid-cols-3">
          {highlights.map((highlight) => (
            <div key={highlight} className="rounded-2xl bg-gray-100 px-4 py-3 text-sm font-medium text-gray-800">
              {highlight}
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                {tag}
              </span>
            ))}
          </div>
          <span className="text-sm font-semibold text-blue-600 transition-transform group-hover:translate-x-1">
            View case study →
          </span>
        </div>
      </article>
    </Link>
  );
};

export default function CmsCaseStudiesShowcase() {
  if (cmsCaseStudiesData.length === 0) {
    return null;
  }

  return (
    <section className="mt-10">
      <div className="mb-8 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
          Product showcase
        </p>
        <h2 className="mb-3 text-2xl font-semibold text-gray-950 md:text-4xl">
          Latest product case studies
        </h2>
        <p className="text-base leading-7 text-gray-600 md:text-lg">
          A quick overview of recent products. Click a project to explore the full case study.
        </p>
      </div>

      <div className="grid gap-6">
        {cmsCaseStudiesData.map((study) => (
          <CmsCaseStudyCard key={study.slug} {...study} />
        ))}
      </div>
    </section>
  );
}
