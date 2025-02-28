'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const CaseStudyCard = ({ 
  title, 
  description, 
  tags, 
  color 
}: { 
  title: string; 
  description: string; 
  tags: string[]; 
  color: string;
}) => {
  return (
    <div className="flex flex-col w-full mb-16">
      {/* Placeholder colored div instead of image */}
      <div 
        className="w-full h-96 mb-4 rounded-lg" 
        style={{ backgroundColor: color }}
        aria-label={`${title} case study thumbnail`}
      />
      
      <h2 className="text-3xl font-medium mt-4 mb-2">{title}</h2>
      
      <p className="text-gray-700 mb-4">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="px-3 py-1 text-sm bg-gray-200 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function CaseStudies() {
  const { t } = useTranslation();
  
  const caseStudies = [
    {
      title: "Mitra Cakrawala International",
      description: "MCI Group, a parent company overseeing various subsidiaries in four business sectors, aims to unify its disparate corporate identities under a single symbol that reflects its shared vision.",
      tags: ["Visual Identity System", "Collateral Design"],
      color: "#e0e0e0"
    },
    {
      title: "Hussel",
      description: "Hussel Coffee is a cafe located in the heart of Surabaya, within the Kalcer social space. Its proximity to a coworking space makes Hussel an ideal place for work-related activities.",
      tags: ["Visual Identity System", "Collateral Design", "Signage & Wayfinding"],
      color: "#333333"
    },
    {
      title: "Project Three",
      description: "A comprehensive branding project for an innovative tech startup focused on sustainable solutions.",
      tags: ["Brand Strategy", "Digital Design", "UI/UX"],
      color: "#f5d742"
    },
    {
      title: "Project Four",
      description: "Redesigning the visual identity for an established company entering new markets and expanding their product line.",
      tags: ["Rebranding", "Packaging", "Marketing Materials"],
      color: "#4287f5"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-4 md:px-16 py-4 border-b border-gray-200">
        <div className="text-2xl font-light">
          <Link href="/" className="lulo-text">lulo</Link>
        </div>
        <div className="flex space-x-6 md:space-x-12 items-center">
          <Link href="/case-studies" className="text-sm md:text-base hover:underline font-bold uppercase">{t('caseStudies')}</Link>
          <Link href="/contact-us" className="text-sm md:text-base hover:underline uppercase">{t('contactUs')}</Link>
          <Link href="/about-us" className="text-sm md:text-base hover:underline uppercase">{t('aboutUs')}</Link>
          <LanguageSwitcher />
        </div>
      </nav>
      
      <div className="px-8 py-8 pt-8 md:px-12 md:py-12 md:pt-8 lg:px-24 lg:py-24 lg:pt-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sora-text">Selected Works</h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 sora-light max-w-xl">
            Explore our innovative AI solutions and their real-world impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 mt-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              title={study.title}
              description={study.description}
              tags={study.tags}
              color={study.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 