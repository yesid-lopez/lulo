'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { caseStudiesData, type CaseStudy } from '@/utils/caseStudiesData';

const getCaseStudyCtaLabel = (link: string) => {
  if (link.includes('devpost.com')) {
    return 'View Devpost';
  }

  if (link.includes('linkedin.com')) {
    return 'View LinkedIn post';
  }

  return 'Open project';
};

const CaseStudyCard = ({
  title,
  description,
  tags,
  award,
  image,
  link,
}: CaseStudy) => {
  const ctaLabel = getCaseStudyCtaLabel(link);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg">
      <a
        href={link}
        className="relative block h-60 w-full overflow-hidden bg-gray-100 sm:h-64"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${title} case study`}
      >
        <Image
          src={image}
          alt={`${title} case study`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
      </a>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-700">
            Awarded project
          </span>
          {award ? (
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
              {award}
            </span>
          ) : null}
        </div>

        <a href={link} target="_blank" rel="noopener noreferrer">
          <h3 className="mb-3 text-2xl font-semibold leading-tight text-gray-950 transition-colors group-hover:text-blue-600">
            {title}
          </h3>
        </a>

        <p className="mb-5 text-base leading-7 text-gray-600">
          {description}
        </p>

        <div className="mt-auto flex flex-col gap-5">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={link}
            className="inline-flex self-start rounded-full bg-gray-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            {ctaLabel} ↗
          </a>
        </div>
      </div>
    </article>
  );
};

export default function HackathonsSection() {
  const { language } = useTranslation();
  const caseStudies = caseStudiesData[language] || caseStudiesData.en;

  return (
    <section className="mt-16">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
            AI experiments & awards
          </p>
          <h2 className="mb-3 text-2xl font-semibold text-gray-950 md:text-4xl">
            Hackathon-winning AI prototypes
          </h2>
          <p className="text-base leading-7 text-gray-600 md:text-lg">
            Fast prototypes and awarded experiments using AI agents, machine learning, automation, and product design.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-600 shadow-sm">
          {caseStudies.length} experiments
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.title} {...study} />
        ))}
      </div>
    </section>
  );
}
