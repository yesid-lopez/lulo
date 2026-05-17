import type { CaseStudySeed, CaseStudyTranslations } from './index'

export const slug = 'resumelo'

export const data: CaseStudySeed = {
  type: 'real-implementation',
  title: 'Resumelo',
  slug,
  description:
    'An AI-powered resume builder that helps job seekers craft publication-ready, ATS-optimized resumes. Generate from scratch, import an existing CV, or start from sample data — then tailor the result to any job description with professional templates (including a Harvard layout) and matching cover letters. Free tier available with no credit card required.',
  category: 'technology',
  platform: 'web',
  keyFeatures: [
    {
      number: '01',
      title: 'AI Resume Builder',
      description:
        'Generate a polished, recruiter-ready resume in minutes with AI that drafts, refines, and optimizes content for impact.',
    },
    {
      number: '02',
      title: 'ATS Optimization',
      description:
        'Layouts and formatting engineered to pass Applicant Tracking Systems so resumes reach human reviewers, not the reject pile.',
    },
    {
      number: '03',
      title: 'Job Description Matching',
      description:
        'Paste a job posting and let Resumelo tailor your resume — surfacing the right keywords, skills, and experience for each application.',
    },
    {
      number: '04',
      title: 'Resume Import',
      description:
        'Upload an existing PDF or DOCX and have it parsed, enhanced, and rewritten into a modern, optimized format.',
    },
    {
      number: '05',
      title: 'Professional Templates',
      description:
        'Pre-designed, publication-ready layouts — including a Harvard-style template — built for academic, professional, and corporate audiences.',
    },
    {
      number: '06',
      title: 'Cover Letter Generation',
      description:
        'Pair every resume with a matching cover letter generated from the same profile and job context for a consistent application package.',
    },
    {
      number: '07',
      title: 'Flexible Start Options',
      description:
        'Begin from scratch, import an existing document, or kick off with sample data — choose the on-ramp that fits your workflow.',
    },
    {
      number: '08',
      title: 'Free to Start',
      description:
        'Free tier with no credit card required, plus paid plans for users who need advanced templates and unlimited generation.',
    },
  ],
  tags: [
    { tag: 'Web App' },
    { tag: 'AI Tool' },
    { tag: 'Resume Builder' },
    { tag: 'Career Services' },
    { tag: 'ATS Optimization' },
  ],
  links: {
    website: 'https://resumelo.me',
  },
  status: 'published',
  featured: false,
}

export const translations: CaseStudyTranslations = {
  es: {
    title: 'Resumelo',
    description:
      'Un creador de currículums impulsado por IA que ayuda a quienes buscan trabajo a armar CVs listos para publicar y optimizados para ATS. Genéralo desde cero, importa uno existente o arranca con datos de ejemplo — y luego adáptalo a cualquier oferta laboral con plantillas profesionales (incluida una al estilo Harvard) y cartas de presentación a juego. Plan gratuito disponible sin tarjeta de crédito.',
    keyFeatures: [
      {
        title: 'Creador de CV con IA',
        description:
          'Genera un currículum pulido y listo para reclutadores en minutos, con una IA que redacta, refina y optimiza el contenido para que tenga impacto.',
      },
      {
        title: 'Optimización para ATS',
        description:
          'Diseños y formatos pensados para pasar los Applicant Tracking Systems, así los CV llegan a un revisor humano y no a la pila de descartados.',
      },
      {
        title: 'Ajuste a la oferta laboral',
        description:
          'Pega una vacante y deja que Resumelo adapte tu currículum — resaltando las palabras clave, habilidades y experiencia adecuadas para cada postulación.',
      },
      {
        title: 'Importar currículum',
        description:
          'Sube un PDF o DOCX existente y obtenlo analizado, mejorado y reescrito en un formato moderno y optimizado.',
      },
      {
        title: 'Plantillas profesionales',
        description:
          'Diseños prediseñados, listos para imprimir — incluida una plantilla al estilo Harvard — pensados para audiencias académicas, profesionales y corporativas.',
      },
      {
        title: 'Generación de carta de presentación',
        description:
          'Acompaña cada currículum con una carta de presentación a juego, generada desde el mismo perfil y contexto laboral para un paquete de postulación coherente.',
      },
      {
        title: 'Opciones flexibles de inicio',
        description:
          'Empieza desde cero, importa un documento existente o arranca con datos de ejemplo — elige la vía que mejor se ajuste a tu flujo de trabajo.',
      },
      {
        title: 'Gratis para empezar',
        description:
          'Plan gratuito sin tarjeta de crédito, más planes pagos para quienes necesiten plantillas avanzadas y generación ilimitada.',
      },
    ],
    tags: [
      { tag: 'App web' },
      { tag: 'Herramienta de IA' },
      { tag: 'Creador de CV' },
      { tag: 'Servicios de carrera' },
      { tag: 'Optimización ATS' },
    ],
  },
  de: {
    title: 'Resumelo',
    description:
      'Ein KI-gestützter Lebenslauf-Builder, der Bewerber:innen hilft, veröffentlichungsreife, ATS-optimierte Lebensläufe zu erstellen. Generiere von Grund auf, importiere einen bestehenden Lebenslauf oder starte mit Beispieldaten — und passe das Ergebnis dann mit professionellen Vorlagen (inklusive Harvard-Layout) und passenden Anschreiben an jede Stellenanzeige an. Kostenloser Tarif ohne Kreditkarte verfügbar.',
    keyFeatures: [
      {
        title: 'KI-Lebenslauf-Builder',
        description:
          'Erzeuge in Minuten einen polierten, recruiter-fertigen Lebenslauf — die KI entwirft, verfeinert und optimiert den Inhalt auf Wirkung.',
      },
      {
        title: 'ATS-Optimierung',
        description:
          'Layouts und Formatierung sind so gebaut, dass sie Applicant Tracking Systems passieren — damit der Lebenslauf bei einem Menschen landet, nicht im Abseits.',
      },
      {
        title: 'Abgleich mit der Stellenanzeige',
        description:
          'Füge eine Stellenanzeige ein und lass Resumelo deinen Lebenslauf zuschneiden — passende Keywords, Skills und Erfahrungen werden für jede Bewerbung hervorgehoben.',
      },
      {
        title: 'Lebenslauf-Import',
        description:
          'Lade ein bestehendes PDF oder DOCX hoch und lass es analysieren, verbessern und in ein modernes, optimiertes Format umschreiben.',
      },
      {
        title: 'Professionelle Vorlagen',
        description:
          'Vorgefertigte, druckfertige Layouts — inklusive einer Vorlage im Harvard-Stil — für akademische, professionelle und unternehmerische Zielgruppen.',
      },
      {
        title: 'Anschreiben-Generator',
        description:
          'Erzeuge zu jedem Lebenslauf ein passendes Anschreiben aus demselben Profil- und Stellen-Kontext — für ein konsistentes Bewerbungspaket.',
      },
      {
        title: 'Flexible Startoptionen',
        description:
          'Beginne bei null, importiere ein bestehendes Dokument oder starte mit Beispieldaten — wähle den Einstieg, der zu deinem Workflow passt.',
      },
      {
        title: 'Kostenloser Einstieg',
        description:
          'Kostenfreier Tarif ohne Kreditkarte, dazu bezahlte Pläne für alle, die fortgeschrittene Vorlagen und unbegrenzte Generierung brauchen.',
      },
    ],
    tags: [
      { tag: 'Web-App' },
      { tag: 'KI-Tool' },
      { tag: 'Lebenslauf-Builder' },
      { tag: 'Karriere-Services' },
      { tag: 'ATS-Optimierung' },
    ],
  },
}
