import { getCmsCaseStudiesByType, type CmsCaseStudy } from '@/utils/cmsCaseStudies';
import { getServerLocale } from '@/utils/serverLocale';
import CmsCaseStudyCard, { type CaseStudyExtras } from './CmsCaseStudyCard';

export default async function CmsCaseStudiesShowcase() {
  const locale = await getServerLocale();
  const featuredProjects = (await getCmsCaseStudiesByType('featured-project', locale)) as Array<
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
