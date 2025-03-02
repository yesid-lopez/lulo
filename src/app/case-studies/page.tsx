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
  const { t } = useTranslation();
  
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
        {t('seeMore')}
      </button>
    </div>
  );
};

export default function CaseStudies() {
  const { t, language } = useTranslation();
  
  // Case studies data with translations for all supported languages
  const caseStudiesData = {
    en: [
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
    ],
    es: [
      {
        title: "Vita",
        description: "Vita es un asistente de salud personal impulsado por IA que utiliza procesamiento avanzado de lenguaje natural para proporcionar recomendaciones personalizadas de bienestar, seguimiento del estilo de vida e información inteligente sobre la salud.",
        tags: ["Asistente de Salud IA", "Procesamiento de Lenguaje Natural", "Bienestar"],
        color: "#e0e0e0",
        award: "Ganador (2º Lugar) - Hackathon Redpanda AI"
      },
      {
        title: "Clever",
        description: "Clever es una aplicación educativa para iOS impulsada por agentes de IA que transforman el aprendizaje a través de conversaciones interactivas, generación automática de contenido y análisis inteligente de documentos.",
        tags: ["Aplicación iOS", "Tecnología Educativa", "Agentes IA"],
        color: "#333333",
        award: "Ganador (2º Lugar) - Hackathon TiDB Future App"
      },
      {
        title: "Medivise",
        description: "Medivise cuenta con un agente inteligente de IA que actúa como asistente personal de bienestar, ofreciendo recomendaciones de estilo de vida, seguimiento de hábitos e información personalizada a través de conversaciones naturales.",
        tags: ["Bienestar IA", "Seguimiento de Hábitos", "Información Personalizada"],
        color: "#f5d742",
        award: "Ganador (1er Lugar) Mejor Innovación en IA - Copa Mundial de IA Generativa de Databricks"
      },
      {
        title: "Study Buddy",
        description: "Study Buddy es una aplicación basada en agentes de IA que revoluciona el aprendizaje mediante análisis inteligente de documentos, tutoría interactiva y generación de planes de estudio personalizados.",
        tags: ["Tutoría IA", "Análisis de Documentos", "Planificación de Estudios"],
        color: "#4287f5",
        award: "Ganador (3er Lugar) - Hackathon Google x TruEra AI"
      }
    ],
    de: [
      {
        title: "Vita",
        description: "Vita ist ein KI-gesteuerter persönlicher Gesundheitsassistent, der fortschrittliche natürliche Sprachverarbeitung nutzt, um personalisierte Wellness-Empfehlungen, Lifestyle-Tracking und intelligente Gesundheitseinblicke zu bieten.",
        tags: ["KI-Gesundheitsassistent", "Natürliche Sprachverarbeitung", "Wellness"],
        color: "#e0e0e0",
        award: "Gewinner (2. Platz) - Redpanda AI Hackathon"
      },
      {
        title: "Clever",
        description: "Clever ist eine iOS-Bildungs-App, die von KI-Agenten angetrieben wird und das Lernen durch interaktive Gespräche, automatisierte Inhaltserstellung und intelligente Dokumentenanalyse transformiert.",
        tags: ["iOS-App", "Bildungstechnologie", "KI-Agenten"],
        color: "#333333",
        award: "Gewinner (2. Platz) - TiDB Future App Hackathon"
      },
      {
        title: "Medivise",
        description: "Medivise verfügt über einen intelligenten KI-Agenten, der als persönlicher Wellness-Assistent fungiert und Lifestyle-Empfehlungen, Gewohnheitstracking und personalisierte Einblicke durch natürliche Konversation bietet.",
        tags: ["KI-Wellness", "Gewohnheitstracking", "Personalisierte Einblicke"],
        color: "#f5d742",
        award: "Gewinner (1. Platz) Beste KI-Innovation - Databricks Generative AI World Cup"
      },
      {
        title: "Study Buddy",
        description: "Study Buddy ist eine auf KI-Agenten basierende Anwendung, die das Lernen durch intelligente Dokumentenanalyse, interaktives Tutoring und personalisierte Studienplanerstellung revolutioniert.",
        tags: ["KI-Tutoring", "Dokumentenanalyse", "Studienplanung"],
        color: "#4287f5",
        award: "Gewinner (3. Platz) - Google x TruEra AI Hackathon"
      }
    ]
  };

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