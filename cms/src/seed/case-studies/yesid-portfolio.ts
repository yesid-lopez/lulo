import type { CaseStudySeed, CaseStudyTranslations } from './index'

export const slug = 'yesid-portfolio'

export const data: CaseStudySeed = {
  type: 'real-implementation',
  title: 'Yesid López — AI & ML Engineering Portfolio',
  slug,
  description:
    'A personal portfolio site for an AI / ML engineer that presents production-ready AI systems, machine learning platforms, and applied research in a focused, recruiter-friendly format. Curated case studies highlight real-world impact across MLOps, LLMs, computer vision, and NLP, alongside a downloadable résumé and direct contact paths.',
  category: 'technology',
  platform: 'web',
  keyFeatures: [
    {
      number: '01',
      title: 'Curated Project Showcase',
      description:
        'A selected portfolio of AI and ML projects — from MLOps platforms to LLM recommendation systems and edge computer vision — each summarized with role, stack, and measurable impact.',
    },
    {
      number: '02',
      title: 'Categorized Case Studies',
      description:
        'Projects are grouped by domain (MLOps, LLMs, Computer Vision, NLP, Data Generation) so visitors can quickly scan the kind of work that matches their interest.',
    },
    {
      number: '03',
      title: 'Technology Tagging',
      description:
        'Every project lists the concrete tools and frameworks involved — Python, PyTorch, Kubeflow, AWS, OpenAI, TensorFlow, Snowflake — making the stack scannable at a glance.',
    },
    {
      number: '04',
      title: 'Downloadable Résumé',
      description:
        'A one-click link to a PDF résumé keeps the hiring path short for recruiters and engineering managers who need the formal version.',
    },
    {
      number: '05',
      title: 'Focused Personal Branding',
      description:
        'A concise hero — "AI Engineer | ML Engineer, building production-ready AI systems" — sets clear positioning above the fold without marketing fluff.',
    },
    {
      number: '06',
      title: 'Responsive, Minimal Design',
      description:
        'A clean, mobile-friendly layout puts content first: fast navigation, readable typography, and no distractions between visitors and the work itself.',
    },
    {
      number: '07',
      title: 'SEO-Ready Landing Page',
      description:
        'Structured metadata, descriptive titles, and crawlable project pages help the site surface for relevant AI / ML engineer searches.',
    },
    {
      number: '08',
      title: 'Direct Calls to Action',
      description:
        'Primary CTAs ("View Projects", "Open Resume") guide visitors toward the two outcomes that matter most: exploring the work or starting a conversation.',
    },
  ],
  technologies: [
    { name: 'Next.js', category: 'framework' },
    { name: 'React', category: 'framework' },
    { name: 'TypeScript', category: 'language' },
    { name: 'Tailwind CSS', category: 'framework' },
    { name: 'Vercel', category: 'platform' },
  ],
  tags: [
    { tag: 'Portfolio' },
    { tag: 'Personal Branding' },
    { tag: 'AI Engineer' },
    { tag: 'ML Engineer' },
    { tag: 'Landing Page' },
  ],
  links: {
    website: 'https://www.yesidlopez.de',
    other: [
      {
        label: 'Projects',
        url: 'https://www.yesidlopez.de/portfolio',
      },
      {
        label: 'Resume',
        url: 'https://www.yesidlopez.de/yesid-lopez-resume.pdf',
      },
    ],
  },
  status: 'published',
  featured: false,
}

export const translations: CaseStudyTranslations = {
  es: {
    title: 'Yesid López — Portafolio de Ingeniería en IA y ML',
    description:
      'Un sitio de portafolio personal para un ingeniero de IA / ML que presenta sistemas de IA listos para producción, plataformas de machine learning e investigación aplicada en un formato enfocado y amigable para reclutadores. Casos de estudio curados destacan el impacto real en MLOps, LLMs, visión por computadora y NLP, junto con un CV descargable y vías directas de contacto.',
    keyFeatures: [
      {
        title: 'Showcase de proyectos curados',
        description:
          'Un portafolio seleccionado de proyectos de IA y ML — desde plataformas de MLOps hasta sistemas de recomendación con LLMs y visión por computadora en el edge — cada uno resumido con rol, stack e impacto medible.',
      },
      {
        title: 'Casos de estudio categorizados',
        description:
          'Los proyectos están agrupados por dominio (MLOps, LLMs, Visión por Computadora, NLP, Generación de Datos) para que los visitantes escaneen rápido el tipo de trabajo que les interesa.',
      },
      {
        title: 'Etiquetado de tecnologías',
        description:
          'Cada proyecto lista las herramientas y frameworks concretos involucrados — Python, PyTorch, Kubeflow, AWS, OpenAI, TensorFlow, Snowflake — haciendo el stack escaneable de un vistazo.',
      },
      {
        title: 'CV descargable',
        description:
          'Un enlace de un clic a un CV en PDF mantiene corto el camino de contratación para reclutadores y engineering managers que necesitan la versión formal.',
      },
      {
        title: 'Marca personal enfocada',
        description:
          'Un hero conciso — "AI Engineer | ML Engineer, construyendo sistemas de IA listos para producción" — establece un posicionamiento claro sin relleno de marketing.',
      },
      {
        title: 'Diseño responsivo y minimalista',
        description:
          'Un layout limpio y adaptable a móvil pone el contenido primero: navegación rápida, tipografía legible y cero distracciones entre el visitante y el trabajo.',
      },
      {
        title: 'Landing lista para SEO',
        description:
          'Metadatos estructurados, títulos descriptivos y páginas de proyecto rastreables ayudan a que el sitio aparezca en búsquedas relevantes de ingeniero de IA / ML.',
      },
      {
        title: 'Llamados a la acción directos',
        description:
          'Los CTAs principales ("Ver proyectos", "Abrir CV") guían a los visitantes hacia los dos resultados que más importan: explorar el trabajo o iniciar una conversación.',
      },
    ],
    tags: [
      { tag: 'Portafolio' },
      { tag: 'Marca personal' },
      { tag: 'AI Engineer' },
      { tag: 'ML Engineer' },
      { tag: 'Landing Page' },
    ],
  },
  de: {
    title: 'Yesid López — KI- & ML-Engineering-Portfolio',
    description:
      'Eine persönliche Portfolio-Seite für eine:n KI- / ML-Ingenieur:in, die produktionsreife KI-Systeme, Machine-Learning-Plattformen und angewandte Forschung in einem fokussierten, recruiterfreundlichen Format präsentiert. Kuratierte Case Studies zeigen reale Wirkung in MLOps, LLMs, Computer Vision und NLP — ergänzt um einen herunterladbaren Lebenslauf und direkte Kontaktwege.',
    keyFeatures: [
      {
        title: 'Kuratiertes Projekt-Showcase',
        description:
          'Ein ausgewähltes Portfolio aus KI- und ML-Projekten — von MLOps-Plattformen über LLM-Empfehlungssysteme bis hin zu Edge-Computer-Vision — jedes mit Rolle, Stack und messbarer Wirkung zusammengefasst.',
      },
      {
        title: 'Kategorisierte Case Studies',
        description:
          'Projekte sind nach Domäne gruppiert (MLOps, LLMs, Computer Vision, NLP, Data Generation), damit Besucher:innen schnell die Art von Arbeit erfassen, die sie interessiert.',
      },
      {
        title: 'Technologie-Tagging',
        description:
          'Jedes Projekt listet die konkret eingesetzten Tools und Frameworks — Python, PyTorch, Kubeflow, AWS, OpenAI, TensorFlow, Snowflake — der Stack ist auf einen Blick erfassbar.',
      },
      {
        title: 'Herunterladbarer Lebenslauf',
        description:
          'Ein Ein-Klick-Link zum PDF-Lebenslauf hält den Bewerbungspfad für Recruiter:innen und Engineering Manager kurz, wenn die formale Version gefragt ist.',
      },
      {
        title: 'Fokussiertes Personal Branding',
        description:
          'Ein knapper Hero — „AI Engineer | ML Engineer, baut produktionsreife KI-Systeme" — setzt klare Positionierung ohne Marketing-Floskeln.',
      },
      {
        title: 'Responsives, minimalistisches Design',
        description:
          'Ein klares, mobilfreundliches Layout stellt Inhalte in den Vordergrund: schnelle Navigation, lesbare Typografie und keine Ablenkung zwischen Besucher:in und Werk.',
      },
      {
        title: 'SEO-fähige Landingpage',
        description:
          'Strukturierte Metadaten, beschreibende Titel und crawlbare Projektseiten helfen der Seite, bei relevanten KI- / ML-Engineer-Suchen sichtbar zu werden.',
      },
      {
        title: 'Klare Calls-to-Action',
        description:
          'Die zentralen CTAs („Projekte ansehen", „Lebenslauf öffnen") führen Besucher:innen zu den beiden wichtigsten Ergebnissen: das Werk erkunden oder ein Gespräch starten.',
      },
    ],
    tags: [
      { tag: 'Portfolio' },
      { tag: 'Personal Branding' },
      { tag: 'KI-Ingenieur' },
      { tag: 'ML-Ingenieur' },
      { tag: 'Landingpage' },
    ],
  },
}
