import type { CaseStudySeed, CaseStudyTranslations } from './index'

export const slug = 'artikel-der-die-das'

export const data: CaseStudySeed = {
  type: 'featured-project',
  title: 'Artikel: Der, Die, Das',
  slug,
  description:
    'An iOS app that helps German learners master noun articles (der/die/das) through a curated vocabulary of 1,000+ words across 50+ categories, complete with plurals, example sentences, and native-speaker audio pronunciation. No account, no subscription — fully free.',
  category: 'education',
  platform: 'mobile',
  keyFeatures: [
    {
      number: '01',
      title: '1,000+ Words with Articles',
      description:
        'A rich vocabulary organized into intuitive categories with articles, plurals, and example sentences for real-world context.',
    },
    {
      number: '02',
      title: 'Audio Pronunciation',
      description:
        'Native-speaker audio and text-to-speech for accent training and confident pronunciation of every word.',
    },
    {
      number: '03',
      title: 'Smart Categories',
      description:
        '50+ categories and subcategories — from Wohnung and Essen to Natur — let learners navigate to exactly the words they need.',
    },
    {
      number: '04',
      title: 'Quick Search',
      description: 'Find any word instantly across all categories with smart, responsive search.',
    },
    {
      number: '05',
      title: 'Favorites & Custom Lists',
      description:
        'Build personalized study lists from preferred categories to focus practice on what matters most.',
    },
    {
      number: '06',
      title: 'Practice Mode',
      description: 'Built-in quizzes test article retention and reinforce learning through active recall.',
    },
    {
      number: '07',
      title: 'Dark Mode',
      description: 'Comfortable studying in any lighting condition — day or night.',
    },
    {
      number: '08',
      title: 'Free & Account-Free',
      description: 'No sign-up, no subscription — the full experience is available to every learner for free.',
    },
  ],
  tags: [
    { tag: 'iOS App' },
    { tag: 'German' },
    { tag: 'Language Learning' },
    { tag: 'Vocabulary' },
    { tag: 'Education' },
  ],
  links: {
    demo: 'https://apps.apple.com/de/app/artikel-der-die-das/id6752939441',
    website: 'https://derdiedas.luloai.com/',
  },
  status: 'published',
  featured: false,
}

export const translations: CaseStudyTranslations = {
  es: {
    title: 'Artikel: Der, Die, Das',
    description:
      'Una app de iOS que ayuda a quienes aprenden alemán a dominar los artículos de los sustantivos (der/die/das) a través de un vocabulario curado de 1.000+ palabras organizadas en 50+ categorías, con plurales, frases de ejemplo y pronunciación en audio por hablantes nativos. Sin cuenta, sin suscripción — completamente gratis.',
    keyFeatures: [
      {
        title: '1.000+ palabras con artículos',
        description:
          'Un vocabulario amplio organizado en categorías intuitivas, con artículos, plurales y frases de ejemplo para entender cada palabra en contexto real.',
      },
      {
        title: 'Pronunciación en audio',
        description:
          'Audio de hablantes nativos y texto a voz para entrenar el acento y ganar confianza al pronunciar cada palabra.',
      },
      {
        title: 'Categorías inteligentes',
        description:
          '50+ categorías y subcategorías — desde Wohnung y Essen hasta Natur — para que cada estudiante navegue justo hacia las palabras que necesita.',
      },
      {
        title: 'Búsqueda rápida',
        description:
          'Encuentra cualquier palabra al instante en todas las categorías con una búsqueda ágil e inteligente.',
      },
      {
        title: 'Favoritos y listas personalizadas',
        description:
          'Crea listas de estudio personalizadas a partir de las categorías preferidas para enfocar la práctica en lo que más importa.',
      },
      {
        title: 'Modo práctica',
        description:
          'Cuestionarios integrados que prueban la retención de artículos y refuerzan el aprendizaje mediante recuperación activa.',
      },
      {
        title: 'Modo oscuro',
        description:
          'Estudio cómodo en cualquier condición de luz — de día o de noche.',
      },
      {
        title: 'Gratis y sin cuenta',
        description:
          'Sin registro, sin suscripción — la experiencia completa está disponible gratis para cualquier estudiante.',
      },
    ],
    tags: [
      { tag: 'App iOS' },
      { tag: 'Alemán' },
      { tag: 'Aprendizaje de idiomas' },
      { tag: 'Vocabulario' },
      { tag: 'Educación' },
    ],
  },
  de: {
    title: 'Artikel: Der, Die, Das',
    description:
      'Eine iOS-App, die Deutschlernenden hilft, die Artikel der Substantive (der/die/das) zu meistern — mit einem kuratierten Wortschatz von 1.000+ Wörtern in 50+ Kategorien, inklusive Pluralformen, Beispielsätzen und Audioaussprache durch Muttersprachler:innen. Kein Konto, kein Abo — komplett kostenlos.',
    keyFeatures: [
      {
        title: '1.000+ Wörter mit Artikeln',
        description:
          'Ein umfangreicher Wortschatz, in intuitive Kategorien gegliedert — mit Artikeln, Pluralformen und Beispielsätzen für echten Kontext.',
      },
      {
        title: 'Audioaussprache',
        description:
          'Aussprache von Muttersprachler:innen sowie Text-to-Speech für Aussprache-Training und selbstsicheres Sprechen jedes Wortes.',
      },
      {
        title: 'Smarte Kategorien',
        description:
          '50+ Kategorien und Unterkategorien — von Wohnung und Essen bis Natur — führen Lernende genau zu den Wörtern, die sie brauchen.',
      },
      {
        title: 'Schnelle Suche',
        description:
          'Finde jedes Wort sofort in allen Kategorien — mit smarter, reaktionsschneller Suche.',
      },
      {
        title: 'Favoriten & eigene Listen',
        description:
          'Erstelle persönliche Lernlisten aus bevorzugten Kategorien, um die Übung auf das Wichtigste zu fokussieren.',
      },
      {
        title: 'Übungsmodus',
        description:
          'Integrierte Quizze prüfen die Artikelkenntnis und festigen das Gelernte durch aktives Abrufen.',
      },
      {
        title: 'Dunkler Modus',
        description:
          'Bequemes Lernen bei jeder Lichtbedingung — bei Tag wie bei Nacht.',
      },
      {
        title: 'Gratis & ohne Konto',
        description:
          'Keine Anmeldung, kein Abo — das vollständige Erlebnis steht jedem Lernenden kostenlos zur Verfügung.',
      },
    ],
    tags: [
      { tag: 'iOS-App' },
      { tag: 'Deutsch' },
      { tag: 'Sprachenlernen' },
      { tag: 'Wortschatz' },
      { tag: 'Bildung' },
    ],
  },
}
