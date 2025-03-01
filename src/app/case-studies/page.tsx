'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const CaseStudyCard = ({ 
  title, 
  description, 
  tags, 
  color,
  award
}: { 
  title: string; 
  description: string; 
  tags: string[]; 
  color: string;
  award: string;
}) => {
  return (
    <div className="flex flex-col w-full mb-8">
      {/* Placeholder colored div instead of image */}
      <div 
        className="w-full h-96 mb-4 rounded-lg" 
        style={{ backgroundColor: color }}
        aria-label={`${title} case study thumbnail`}
      />
      
      <div className="text-sm font-medium text-gray-600 mb-1">{award}</div>
      <h2 className="text-3xl font-medium mt-2 mb-2">{title}</h2>
      
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
      
      <button className="text-blue-600 font-medium hover:underline self-start">
        See More
      </button>
    </div>
  );
};

export default function CaseStudies() {
  const { t } = useTranslation();
  
  const caseStudies = [
    {
      title: "Vita",
      description: "Vita is an AI-powered personal health assistant that uses advanced natural language processing to provide personalized wellness recommendations, lifestyle tracking, and intelligent health insights.",
      tags: ["AI Health Assistant", "Natural Language Processing", "Wellness"],
      color: "#e0e0e0",
      award: "Winner (2nd Place) - Redpanda AI Hackathon"
    },
    {
      title: "Clever",
      description: "Clever is an iOS educational app powered by AI agents that transform learning through interactive conversations, automated content generation, and intelligent document analysis.",
      tags: ["iOS App", "Educational Technology", "AI Agents"],
      color: "#333333",
      award: "Winner (2nd Place) - TiDB Future App Hackathon"
    },
    {
      title: "Medivise",
      description: "Medivise features an intelligent AI agent that acts as a personal wellness assistant, offering lifestyle recommendations, habit tracking, and personalized insights through natural conversation.",
      tags: ["AI Wellness", "Habit Tracking", "Personalized Insights"],
      color: "#f5d742",
      award: "Winner (1st Place) Best AI Innovation - Databricks Generative AI World Cup"
    },
    {
      title: "Study Buddy",
      description: "Study Buddy is an AI agent-based application that revolutionizes learning through intelligent document analysis, interactive tutoring, and personalized study plan generation.",
      tags: ["AI Tutoring", "Document Analysis", "Study Planning"],
      color: "#4287f5",
      award: "Winner (3rd Place) - Google x TruEra AI Hackathon"
    }
  ];

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
              title={study.title}
              description={study.description}
              tags={study.tags}
              color={study.color}
              award={study.award}
            />
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 