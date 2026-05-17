import type { CaseStudySeed, CaseStudyTranslations } from './index'

export const slug = 'deu-leben-in-deutschland-2026'

export const data: CaseStudySeed = {
  type: 'featured-project',
  title: 'DEU: Leben in Deutschland 2026',
  slug,
  description:
    'A comprehensive iOS learning platform for the German citizenship test (Einbürgerungstest / Leben in Deutschland). Covers all 310+ official questions across the 16 Bundesländer with detailed explanations and legal context, multiple study modes, exam simulation, and multilingual support across 10 languages.',
  category: 'education',
  platform: 'mobile',
  keyFeatures: [
    {
      number: '01',
      title: '310+ Official Questions',
      description:
        'Full official question bank covering all 16 German states, with detailed explanations and legal context for every answer.',
    },
    {
      number: '02',
      title: 'Multiple Study Modes',
      description:
        'Practice Mode, State Mode, Exam Mode, and Saved Questions let users tailor preparation to their learning style and progress.',
    },
    {
      number: '03',
      title: 'Multilingual Support',
      description:
        'Available in German, English, Turkish, Spanish, Russian, Arabic, Polish, Romanian, Italian, and Persian to support diverse candidates.',
    },
    {
      number: '04',
      title: 'Exam Simulation',
      description:
        '33-question mock tests that mirror the official Einbürgerungstest format under realistic time pressure.',
    },
    {
      number: '05',
      title: 'Region-Specific Content',
      description:
        'Select your Bundesland to access localized questions relevant to your state of residence.',
    },
    {
      number: '06',
      title: 'Offline Access',
      description: 'Full study experience without an internet connection — practice anywhere.',
    },
    {
      number: '07',
      title: 'Progress Tracking',
      description: 'Real-time monitoring of study advancement across modes and topics.',
    },
    {
      number: '08',
      title: 'Accessibility',
      description:
        'Dark interface, enlarged text up to 200%, and haptic feedback for an inclusive experience.',
    },
  ],
  tags: [
    { tag: 'iOS App' },
    { tag: 'Citizenship Test' },
    { tag: 'Education' },
    { tag: 'Test Preparation' },
    { tag: 'Multilingual' },
  ],
  links: {
    demo: 'https://apps.apple.com/de/app/deu-leben-in-deutschland-2026/id6746731600?l=en-GB',
  },
  status: 'published',
  featured: false,
}

export const translations: CaseStudyTranslations = {
  es: {
    title: 'DEU: Leben in Deutschland 2026',
    description:
      'Una plataforma de estudio completa para iOS, pensada para preparar el examen de ciudadanía alemana (Einbürgerungstest / Leben in Deutschland). Cubre las 310+ preguntas oficiales de los 16 Bundesländer con explicaciones detalladas y contexto legal, varios modos de estudio, simulación de examen y soporte multilingüe en 10 idiomas.',
    keyFeatures: [
      {
        title: '310+ preguntas oficiales',
        description:
          'Banco oficial completo de preguntas para los 16 estados alemanes, con explicaciones detalladas y contexto legal en cada respuesta.',
      },
      {
        title: 'Varios modos de estudio',
        description:
          'Modo Práctica, modo por Estado, modo Examen y Preguntas Guardadas permiten adaptar la preparación al estilo de aprendizaje y al progreso de cada usuario.',
      },
      {
        title: 'Soporte multilingüe',
        description:
          'Disponible en alemán, inglés, turco, español, ruso, árabe, polaco, rumano, italiano y persa para apoyar a candidatos de distintos orígenes.',
      },
      {
        title: 'Simulación de examen',
        description:
          'Simulacros de 33 preguntas que replican el formato oficial del Einbürgerungstest con presión de tiempo realista.',
      },
      {
        title: 'Contenido por región',
        description:
          'Elige tu Bundesland para acceder a las preguntas localizadas relevantes para tu estado de residencia.',
      },
      {
        title: 'Acceso sin conexión',
        description:
          'Experiencia de estudio completa sin conexión a Internet — practica donde quieras.',
      },
      {
        title: 'Seguimiento de progreso',
        description:
          'Monitoreo en tiempo real del avance de estudio por modos y temas.',
      },
      {
        title: 'Accesibilidad',
        description:
          'Interfaz oscura, texto ampliable hasta 200% y retroalimentación háptica para una experiencia inclusiva.',
      },
    ],
    tags: [
      { tag: 'App iOS' },
      { tag: 'Examen de ciudadanía' },
      { tag: 'Educación' },
      { tag: 'Preparación de examen' },
      { tag: 'Multilingüe' },
    ],
  },
  de: {
    title: 'DEU: Leben in Deutschland 2026',
    description:
      'Eine umfassende iOS-Lernplattform für den deutschen Einbürgerungstest („Leben in Deutschland"). Deckt alle 310+ offiziellen Fragen aus den 16 Bundesländern ab — mit ausführlichen Erklärungen und rechtlichem Kontext, mehreren Lernmodi, Prüfungssimulation und mehrsprachiger Unterstützung in 10 Sprachen.',
    keyFeatures: [
      {
        title: '310+ offizielle Fragen',
        description:
          'Vollständiger amtlicher Fragenkatalog für alle 16 Bundesländer — mit ausführlichen Erklärungen und rechtlichem Kontext zu jeder Antwort.',
      },
      {
        title: 'Mehrere Lernmodi',
        description:
          'Übungsmodus, Bundesland-Modus, Prüfungsmodus und gespeicherte Fragen erlauben es, die Vorbereitung an den eigenen Lernstil und Fortschritt anzupassen.',
      },
      {
        title: 'Mehrsprachige Unterstützung',
        description:
          'Verfügbar auf Deutsch, Englisch, Türkisch, Spanisch, Russisch, Arabisch, Polnisch, Rumänisch, Italienisch und Persisch — für ein breites Spektrum an Kandidat:innen.',
      },
      {
        title: 'Prüfungssimulation',
        description:
          'Probetests mit 33 Fragen, die das offizielle Format des Einbürgerungstests unter realistischem Zeitdruck nachbilden.',
      },
      {
        title: 'Regionalspezifische Inhalte',
        description:
          'Wähle dein Bundesland, um die für deinen Wohnort relevanten Landesfragen freizuschalten.',
      },
      {
        title: 'Offline-Zugriff',
        description:
          'Komplettes Lernerlebnis ohne Internetverbindung — üben, wo immer du gerade bist.',
      },
      {
        title: 'Fortschrittsverfolgung',
        description:
          'Echtzeit-Überblick über den Lernfortschritt nach Modus und Thema.',
      },
      {
        title: 'Barrierefreiheit',
        description:
          'Dunkles Interface, bis zu 200 % vergrößerter Text und haptisches Feedback für ein inklusives Erlebnis.',
      },
    ],
    tags: [
      { tag: 'iOS-App' },
      { tag: 'Einbürgerungstest' },
      { tag: 'Bildung' },
      { tag: 'Prüfungsvorbereitung' },
      { tag: 'Mehrsprachig' },
    ],
  },
}
