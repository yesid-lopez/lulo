import { cmsCaseStudiesData, type CmsCaseStudy } from '@/utils/cmsCaseStudiesData';

const CmsCaseStudyCard = ({
  title,
  eyebrow,
  description,
  category,
  status,
  tags,
  features,
  links,
}: CmsCaseStudy) => {
  const primaryLink = links[0];

  return (
    <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex min-h-[28rem] flex-col justify-between bg-[#111111] p-8 text-white md:p-10">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-gray-300">
              <span>{eyebrow}</span>
              <span className="h-1 w-1 rounded-full bg-gray-500" />
              <span>{category}</span>
            </div>

            <h2 className="mb-5 text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
            <p className="text-base leading-7 text-gray-300 md:text-lg">{description}</p>
          </div>

          <div className="mt-8">
            <div className="mb-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {primaryLink ? (
                <a
                  href={primaryLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-gray-200"
                >
                  {primaryLink.label}
                </a>
              ) : null}
              <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-medium text-emerald-100">
                {status}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#F7F7F7] p-6 md:p-8 lg:p-10">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">Key features</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.number} className="rounded-2xl border border-gray-200 bg-white p-5">
                <div className="mb-4 text-sm font-semibold text-blue-600">{feature.number}</div>
                <h3 className="mb-2 text-lg font-semibold text-gray-950">{feature.title}</h3>
                <p className="text-sm leading-6 text-gray-600">{feature.description}</p>
              </div>
            ))}
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
    <section className="mt-20">
      <div className="mb-8 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
          From the CMS
        </p>
        <h2 className="mb-3 text-2xl font-semibold text-gray-950 md:text-4xl">
          Product case studies
        </h2>
        <p className="text-base leading-7 text-gray-600 md:text-lg">
          A richer look at published projects modeled in the CMS, including product context,
          features, tags, and launch links.
        </p>
      </div>

      <div className="space-y-8">
        {cmsCaseStudiesData.map((study) => (
          <CmsCaseStudyCard key={study.slug} {...study} />
        ))}
      </div>
    </section>
  );
}
