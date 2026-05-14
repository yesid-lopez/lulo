import Image from 'next/image';
import Link from 'next/link';
import { getCmsCaseStudiesByType, type CmsCaseStudy } from '@/utils/cmsCaseStudies';

/**
 * Optional CMS fields the redesigned card uses if present.
 * Add these to the Payload `case-studies` collection schema to light them up:
 *   - award:       string  (e.g. "1st Place · Best AI Innovation")
 *   - awardEvent:  string  (e.g. "Databricks Generative AI World Cup")
 *   - accent:      string  (hex, e.g. "#1d4ed8" — controls button + dot color)
 *   - stage:       string  (CSS background, e.g. "radial-gradient(...)" — image backdrop)
 * If a project doesn't have them, the card falls back to neutral defaults.
 */
type CaseStudyExtras = {
  award?: string;
  awardEvent?: string;
  accent?: string;
  stage?: string;
};

type CardProps = CmsCaseStudy & CaseStudyExtras & { index: number; total: number };

const DEFAULT_ACCENT = '#111827';
const DEFAULT_STAGE = 'linear-gradient(135deg, #0a0a0a 0%, #1f2937 60%, #374151 100%)';

const CmsCaseStudyCard = ({
  title,
  slug,
  eyebrow,
  summary,
  category,
  tags,
  highlights,
  heroImage,
  mockups,
  links,
  award,
  awardEvent,
  accent = DEFAULT_ACCENT,
  stage = DEFAULT_STAGE,
  index,
  total,
}: CardProps) => {
  const primaryProjectLink = links[0];
  const idx = String(index + 1).padStart(2, '0');
  const totalStr = String(total).padStart(2, '0');
  const featuredMockup = mockups[0];
  const sideLeftMockup = mockups.length >= 3 ? mockups[1] : null;
  const sideRightMockup =
    mockups.length === 2 ? mockups[1] : mockups.length >= 3 ? mockups[2] : null;

  return (
    <article
      className="study-card group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[28px] border border-gray-200/80 bg-white shadow-[0_1px_0_rgba(17,24,39,0.04),0_24px_60px_-30px_rgba(17,24,39,0.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_1px_0_rgba(17,24,39,0.04),0_36px_70px_-30px_rgba(17,24,39,0.28)]"
      style={{ ['--accent' as string]: accent }}
    >
      {/* Meta strip */}
      <div className="sora-text flex items-center justify-between px-6 pt-5 text-xs uppercase tracking-[0.22em] text-gray-500">
        <span className="tabular-nums">
          {idx} <span className="text-gray-300">/</span> {totalStr}
        </span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
          {category}
        </span>
      </div>

      {/* Hero image (when set on the case study) — takes precedence over the mockup stage */}
      {heroImage ? (
        <div className="relative mx-6 mt-5 overflow-hidden rounded-[20px]">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            width={heroImage.width ?? 1600}
            height={heroImage.height ?? 1000}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="block h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />

          {award ? (
            <div className="sora-text absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full bg-gray-950/80 px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-white backdrop-blur">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
                <path d="M8 21l4-3 4 3V11" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="8" r="6" />
              </svg>
              {award}
            </div>
          ) : null}

          <div className="sora-text absolute right-5 top-5 z-20 rounded-full bg-white/95 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-gray-900 shadow-sm backdrop-blur">
            {eyebrow}
          </div>

          {awardEvent ? (
            <div className="sora-light absolute bottom-4 left-5 z-20 rounded-full bg-gray-950/70 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white backdrop-blur">
              {awardEvent}
            </div>
          ) : null}
        </div>
      ) : featuredMockup ? (
        <div
          className="relative mx-6 mt-5 overflow-hidden rounded-[20px]"
          style={{ background: stage }}
        >
          {/* Grain overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 mix-blend-overlay"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
              backgroundSize: '14px 14px',
            }}
          />
          <div className="relative flex h-72 items-end justify-center px-6 pt-8">
            {award ? (
              <div className="sora-text absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-white backdrop-blur">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
                  <path d="M8 21l4-3 4 3V11" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="8" r="6" />
                </svg>
                {award}
              </div>
            ) : null}

            <div className="sora-text absolute right-5 top-5 z-20 rounded-full bg-white/90 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-gray-900">
              {eyebrow}
            </div>

            {sideLeftMockup ? (
              <Image
                src={sideLeftMockup.src}
                alt={sideLeftMockup.alt}
                width={600}
                height={1299}
                loading="lazy"
                aria-hidden
                className="study-card-mockup-side pointer-events-none absolute bottom-2 left-4 z-0 hidden h-[210px] w-auto -translate-y-1 -rotate-[7deg] rounded-[14px] border border-white/15 object-cover opacity-90 shadow-[0_30px_50px_-25px_rgba(0,0,0,0.55)] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:-rotate-[9deg] md:block"
              />
            ) : null}

            {sideRightMockup ? (
              <Image
                src={sideRightMockup.src}
                alt={sideRightMockup.alt}
                width={600}
                height={1299}
                loading="lazy"
                aria-hidden
                className="study-card-mockup-side pointer-events-none absolute bottom-2 right-4 z-0 hidden h-[210px] w-auto -translate-y-1 rotate-[7deg] rounded-[14px] border border-white/15 object-cover opacity-90 shadow-[0_30px_50px_-25px_rgba(0,0,0,0.55)] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-[9deg] md:block"
              />
            ) : null}

            <Image
              src={featuredMockup.src}
              alt={featuredMockup.alt}
              width={600}
              height={1299}
              loading="lazy"
              className="study-card-mockup relative z-10 -mb-10 h-[270px] w-auto rounded-[18px] border border-white/15 object-cover shadow-[0_40px_60px_-25px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:-rotate-1"
            />
          </div>
          {awardEvent ? (
            <div className="sora-light relative z-10 flex items-center justify-between px-5 pb-4 pt-3 text-[11px] uppercase tracking-[0.16em] text-white/80">
              <span>{awardEvent}</span>
              <span className="normal-case tracking-normal text-white/70">winner</span>
            </div>
          ) : (
            <div className="h-4" />
          )}
        </div>
      ) : null}

      {/* Content */}
      <div className="flex flex-1 flex-col px-6 pb-7 pt-7 md:px-7">
        <h2 className="sora-text mb-3 text-[30px] font-light leading-[1.1] tracking-[-0.01em] text-gray-950 md:text-[34px]">
          <Link href={`/case-studies/${slug}`} className="study-card-title">
            {title}
          </Link>
        </h2>
        <p className="sora-light mb-6 text-[15px] leading-[1.65] text-gray-600">{summary}</p>

        {/* Numbered highlights */}
        {highlights.length > 0 ? (
          <ul className="mb-6 border-y border-gray-200/80">
            {highlights.map((h, n) => (
              <li key={h}>
                <div className="flex items-baseline gap-3 py-3">
                  <span className="sora-text text-base leading-none text-gray-400">
                    {String(n + 1).padStart(2, '0')}
                  </span>
                  <span className="sora-light text-sm text-gray-800">{h}</span>
                </div>
                {n < highlights.length - 1 ? <div className="h-px bg-gray-200/80" /> : null}
              </li>
            ))}
          </ul>
        ) : null}

        {/* Tags */}
        <div className="mb-7 flex flex-wrap gap-2">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="sora-light rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-auto flex flex-wrap items-center gap-4">
          <Link
            href={`/case-studies/${slug}`}
            className="study-card-cta sora-text inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-white transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: accent }}
          >
            View case study
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          {primaryProjectLink ? (
            <a
              href={primaryProjectLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="study-card-cta group/sec sora-text inline-flex items-center gap-1.5 text-sm text-gray-700 hover:text-gray-950"
            >
              {primaryProjectLink.label}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4 transition-transform group-hover/sec:-translate-y-0.5 group-hover/sec:translate-x-0.5"
              >
                <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
};

export default async function CmsCaseStudiesShowcase() {
  const featuredProjects = (await getCmsCaseStudiesByType('featured-project')) as Array<
    CmsCaseStudy & CaseStudyExtras
  >;

  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <section>
      <p className="sora-text mb-8 text-sm uppercase tracking-[0.24em] text-blue-600">
        Featured projects
      </p>

      <div className="grid gap-8 lg:grid-cols-2">
        {featuredProjects.map((study, i) => (
          <CmsCaseStudyCard
            key={study.slug}
            {...study}
            index={i}
            total={featuredProjects.length}
          />
        ))}
      </div>
    </section>
  );
}
