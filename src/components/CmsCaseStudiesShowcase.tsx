import { getCmsCaseStudiesByType, type CmsCaseStudy } from '@/utils/cmsCaseStudies';
import CmsCaseStudyCard, { type CaseStudyExtras } from './CmsCaseStudyCard';

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
