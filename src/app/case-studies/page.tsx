'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { caseStudiesData, type CaseStudy } from '@/utils/caseStudiesData';
import Image from 'next/image';

const CaseStudyCard = ({ 
  title, 
  description, 
  tags, 
  award,
  image,
  link
}: CaseStudy) => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col w-full mb-8">
      {/* Case study image */}
      <a 
        href={link} 
        className="block w-full h-96 mb-4 rounded-lg overflow-hidden relative"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Image 
          src={image} 
          alt={`${title} case study`}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </a>
      
      <div className="text-sm font-medium text-gray-600 mb-1">{award}</div>
      <a 
        href={link}
        target="_blank" 
        rel="noopener noreferrer"
      >
        <h2 className="text-3xl font-medium mt-2 mb-2 hover:text-blue-600 transition-colors">{title}</h2>
      </a>
      
      <p className="text-gray-700 mb-4">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="px-3 py-1 text-sm bg-gray-200 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <a 
        href={link} 
        className="text-blue-600 font-medium hover:underline self-start"
        target="_blank" 
        rel="noopener noreferrer"
      >
        {t('seeMore')}
      </a>
    </div>
  );
};

export default function CaseStudies() {
  const { t, language } = useTranslation();
  
  // Get case studies for the current language
  const caseStudies = caseStudiesData[language] || caseStudiesData.en;

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      <Navigation />
      
      <div className="px-8 py-8 pt-8 md:px-12 md:py-12 md:pt-8 lg:px-24 lg:py-24 lg:pt-8 flex-grow">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sora-text">{t('caseStudies')}</h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 sora-light max-w-xl">
            {t('exploreAISolutions')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mt-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              {...study}
            />
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 
