export type CaseStudy = {
  title: string;
  description: string;
  tags: string[];
  color: string;
  award: string;
  image: string;
  link: string;
};

export type CaseStudiesData = {
  [language: string]: CaseStudy[];
};

export const caseStudiesData: CaseStudiesData = {
  en: [
    {
      title: "Vita",
      description: "Vita is an AI-powered personal health assistant that uses advanced natural language processing to provide personalized wellness recommendations, lifestyle tracking, and intelligent health insights.",
      tags: ["AI Health Assistant", "Natural Language Processing", "Wellness"],
      color: "#e0e0e0",
      award: "Winner (2nd Place) - Redpanda AI Hackathon",
      image: "/case_studies/vita.png",
      link: "https://www.linkedin.com/posts/yesid-lopez-sierra_the-future-is-not-gonna-be-built-in-batches-activity-7265122984590290944-3qGg?utm_source=share&utm_medium=member_desktop"
    },
    {
      title: "Clever",
      description: "Clever is an iOS educational app powered by AI agents that transform learning through interactive conversations, automated content generation, and intelligent document analysis.",
      tags: ["iOS App", "Educational Technology", "AI Agents"],
      color: "#333333",
      award: "Winner (2nd Place) - TiDB Future App Hackathon",
      image: "/case_studies/clever.png",
      link: "https://devpost.com/software/clever"
    },
    {
      title: "Medivise",
      description: "Medivise features an intelligent AI agent that acts as a personal wellness assistant, offering lifestyle recommendations, habit tracking, and personalized insights through natural conversation.",
      tags: ["AI Wellness", "Habit Tracking", "Personalized Insights"],
      color: "#f5d742",
      award: "Winner (1st Place) Best AI Innovation - Databricks Generative AI World Cup",
      image: "/case_studies/medivise.png",
      link: "https://devpost.com/software/medivise"
    },
    {
      title: "Study Buddy",
      description: "Study Buddy is an AI agent-based application that revolutionizes learning through intelligent document analysis, interactive tutoring, and personalized study plan generation.",
      tags: ["AI Tutoring", "Document Analysis", "Study Planning"],
      color: "#4287f5",
      award: "Winner (3rd Place) - Google x TruEra AI Hackathon",
      image: "/case_studies/study-buddy.png",
      link: "https://www.linkedin.com/posts/yesid-lopez-sierra_teamwork-innovation-hackathonsuccess-activity-7143566767397801984-Pvr_?utm_source=share&utm_medium=member_desktop"
    }
  ],
  es: [
    {
      title: "Vita",
      description: "Vita es un asistente de salud personal impulsado por IA que utiliza procesamiento avanzado de lenguaje natural para proporcionar recomendaciones personalizadas de bienestar, seguimiento del estilo de vida e información inteligente sobre la salud.",
      tags: ["Asistente de Salud IA", "Procesamiento de Lenguaje Natural", "Bienestar"],
      color: "#e0e0e0",
      award: "Ganador (2º Lugar) - Hackathon Redpanda AI",
      image: "/case_studies/vita.png",
      link: "https://www.linkedin.com/posts/yesid-lopez-sierra_the-future-is-not-gonna-be-built-in-batches-activity-7265122984590290944-3qGg?utm_source=share&utm_medium=member_desktop"
    },
    {
      title: "Clever",
      description: "Clever es una aplicación educativa para iOS impulsada por agentes de IA que transforman el aprendizaje a través de conversaciones interactivas, generación automática de contenido y análisis inteligente de documentos.",
      tags: ["Aplicación iOS", "Tecnología Educativa", "Agentes IA"],
      color: "#333333",
      award: "Ganador (2º Lugar) - Hackathon TiDB Future App",
      image: "/case_studies/clever.png",
      link: "https://devpost.com/software/clever"
    },
    {
      title: "Medivise",
      description: "Medivise cuenta con un agente inteligente de IA que actúa como asistente personal de bienestar, ofreciendo recomendaciones de estilo de vida, seguimiento de hábitos e información personalizada a través de conversaciones naturales.",
      tags: ["Bienestar IA", "Seguimiento de Hábitos", "Información Personalizada"],
      color: "#f5d742",
      award: "Ganador (1er Lugar) Mejor Innovación en IA - Copa Mundial de IA Generativa de Databricks",
      image: "/case_studies/medivise.png",
      link: "https://devpost.com/software/medivise"
    },
    {
      title: "Study Buddy",
      description: "Study Buddy es una aplicación basada en agentes de IA que revoluciona el aprendizaje mediante análisis inteligente de documentos, tutoría interactiva y generación de planes de estudio personalizados.",
      tags: ["Tutoría IA", "Análisis de Documentos", "Planificación de Estudios"],
      color: "#4287f5",
      award: "Ganador (3er Lugar) - Hackathon Google x TruEra AI",
      image: "/case_studies/study-buddy.png",
      link: "https://www.linkedin.com/posts/yesid-lopez-sierra_teamwork-innovation-hackathonsuccess-activity-7143566767397801984-Pvr_?utm_source=share&utm_medium=member_desktop"
    }
  ],
  de: [
    {
      title: "Vita",
      description: "Vita ist ein KI-gesteuerter persönlicher Gesundheitsassistent, der fortschrittliche natürliche Sprachverarbeitung nutzt, um personalisierte Wellness-Empfehlungen, Lifestyle-Tracking und intelligente Gesundheitseinblicke zu bieten.",
      tags: ["KI-Gesundheitsassistent", "Natürliche Sprachverarbeitung", "Wellness"],
      color: "#e0e0e0",
      award: "Gewinner (2. Platz) - Redpanda AI Hackathon",
      image: "/case_studies/vita.png",
      link: "https://www.linkedin.com/posts/yesid-lopez-sierra_the-future-is-not-gonna-be-built-in-batches-activity-7265122984590290944-3qGg?utm_source=share&utm_medium=member_desktop"
    },
    {
      title: "Clever",
      description: "Clever ist eine iOS-Bildungs-App, die von KI-Agenten angetrieben wird und das Lernen durch interaktive Gespräche, automatisierte Inhaltserstellung und intelligente Dokumentenanalyse transformiert.",
      tags: ["iOS-App", "Bildungstechnologie", "KI-Agenten"],
      color: "#333333",
      award: "Gewinner (2. Platz) - TiDB Future App Hackathon",
      image: "/case_studies/clever.png",
      link: "https://devpost.com/software/clever"
    },
    {
      title: "Medivise",
      description: "Medivise verfügt über einen intelligenten KI-Agenten, der als persönlicher Wellness-Assistent fungiert und Lifestyle-Empfehlungen, Gewohnheitstracking und personalisierte Einblicke durch natürliche Konversation bietet.",
      tags: ["KI-Wellness", "Gewohnheitstracking", "Personalisierte Einblicke"],
      color: "#f5d742",
      award: "Gewinner (1. Platz) Beste KI-Innovation - Databricks Generative AI World Cup",
      image: "/case_studies/medivise.png",
      link: "https://devpost.com/software/medivise"
    },
    {
      title: "Study Buddy",
      description: "Study Buddy ist eine auf KI-Agenten basierende Anwendung, die das Lernen durch intelligente Dokumentenanalyse, interaktives Tutoring und personalisierte Studienplanerstellung revolutioniert.",
      tags: ["KI-Tutoring", "Dokumentenanalyse", "Studienplanung"],
      color: "#4287f5",
      award: "Gewinner (3. Platz) - Google x TruEra AI Hackathon",
      image: "/case_studies/study-buddy.png",
      link: "https://www.linkedin.com/posts/yesid-lopez-sierra_teamwork-innovation-hackathonsuccess-activity-7143566767397801984-Pvr_?utm_source=share&utm_medium=member_desktop"
    }
  ]
}; 
