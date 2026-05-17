import { getCmsCaseStudiesByType, type CmsCaseStudy } from '@/utils/cmsCaseStudies';
import { getServerLocale } from '@/utils/serverLocale';
import CmsCaseStudyCard, { type CaseStudyExtras } from './CmsCaseStudyCard';

export default async function RealImplementationsSection() {
  const locale = await getServerLocale();
  const realImplementations = (await getCmsCaseStudiesByType('real-implementation', locale)) as Array<
    CmsCaseStudy & CaseStudyExtras
  >;

  if (realImplementations.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <div className="mb-8 max-w-3xl">
        <p className="sora-text mb-3 text-sm uppercase tracking-[0.24em] text-blue-600">
          Real-world implementations
        </p>
        <h2 className="sora-text text-2xl font-light leading-tight tracking-[-0.01em] text-gray-950 md:text-4xl">
          Shipped products &amp; client work
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {realImplementations.map((study, i) => (
          <CmsCaseStudyCard
            key={study.slug}
            {...study}
            index={i}
            total={realImplementations.length}
            hideAward
          />
        ))}
      </div>
    </section>
  );
}
