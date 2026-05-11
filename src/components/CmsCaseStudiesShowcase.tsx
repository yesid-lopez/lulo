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
  links,
}: CmsCaseStudy) => {
  const primaryProjectLink = links[0];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl">
      {mockups.length > 0 ? (
        <div className="overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 px-4 pt-5 sm:px-6 sm:pt-7">
          <div className="relative mx-auto flex min-h-64 max-w-sm items-end justify-center sm:min-h-60 sm:max-w-none sm:gap-4 lg:min-h-72">
            {mockups.slice(0, 3).map((mockup, index) => {
              const mobilePosition =
                index === 0
                  ? 'absolute bottom-0 left-1/2 z-20 w-32 -translate-x-1/2 sm:static sm:w-28 sm:translate-x-0 lg:w-32'
                  : index === 1
                    ? 'absolute bottom-7 left-5 z-10 w-24 -rotate-6 opacity-85 sm:static sm:w-24 sm:rotate-0 sm:opacity-100 lg:w-28'
                    : 'absolute bottom-7 right-5 z-10 w-24 rotate-6 opacity-85 sm:static sm:w-24 sm:rotate-0 sm:opacity-100 lg:w-28';

              const desktopPosition = index === 0 ? 'sm:translate-y-7' : index === 1 ? 'sm:translate-y-2' : 'sm:translate-y-7';

              return (
                <div
                  key={mockup.src}
                  className={`${mobilePosition} ${desktopPosition} shrink-0 overflow-hidden rounded-[1.45rem] border border-white/10 bg-gray-900 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]`}
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

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">{eyebrow}</span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-600">{category}</span>
        </div>

        <h2 className="mb-3 text-2xl font-semibold leading-tight text-gray-950 transition-colors group-hover:text-blue-600 md:text-3xl">
          {title}
        </h2>
        <p className="mb-6 text-base leading-7 text-gray-600">{summary}</p>

        <div className="mb-6 grid gap-3 sm:grid-cols-3">
          {highlights.map((highlight) => (
            <div key={highlight} className="rounded-2xl bg-gray-100 px-4 py-3 text-sm font-medium text-gray-800">
              {highlight}
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-5">
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 4).map((tag) => (
              <span key={tag} className="rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={`/case-studies/${slug}`}
              className="inline-flex items-center rounded-full bg-gray-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
            >
              View case study →
            </Link>
            {primaryProjectLink ? (
              <a
                href={primaryProjectLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 transition-colors hover:border-blue-600 hover:text-blue-600"
              >
                {primaryProjectLink.label} ↗
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
};

export default function CmsCaseStudiesShowcase() {
  if (cmsCaseStudiesData.length === 0) {
    return null;
  }

  return (
    <section className="mt-14">
      <div className="grid gap-6 lg:grid-cols-2">
        {cmsCaseStudiesData.map((study) => (
          <CmsCaseStudyCard key={study.slug} {...study} />
        ))}
      </div>
    </section>
  );
}
