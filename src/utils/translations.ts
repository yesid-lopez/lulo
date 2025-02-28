type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

export const translations: Translations = {
  en: {
    caseStudies: 'Case Studies',
    contactUs: 'Contact Us',
    aboutUs: 'About Us',
    dedicated: 'Innovation Made Simple.',
    subtitle: 'Advanced AI Applications and Intelligent Agents',
    applyTodayLine1: 'The next big thing? It starts',
    applyTodayLine2: 'with AI—Let\'s talk.',
    // Contact form translations
    contactHeading: 'How can we help bring your ideas to life?',
    contactSubheading: 'Tell us about your project, and we\'ll be in touch soon!',
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    companyName: 'Company name',
    howCanWeHelp: 'How can we help',
    yourTimeline: 'Your timeline',
    yourBudget: 'Your budget range',
    anythingElse: 'Anything else',
    selectService: 'Select Service ...',
    selectSpeed: 'Select Speed ...',
    selectRange: 'Select Range ...',
    submit: 'Submit',
    // Service options
    aiDevelopment: 'AI Development',
    mlConsulting: 'Machine Learning Consulting',
    nlpSolutions: 'NLP Solutions',
    customAiAgents: 'Custom AI Agents',
    // Timeline options
    urgent: 'Urgent - ASAP',
    within1Month: 'Within 1 month',
    within3Months: 'Within 3 months',
    flexible: 'Flexible',
    // Budget options
    lessThan10k: 'Less than $10,000',
    from10kTo25k: '$10,000 - $25,000',
    from25kTo50k: '$25,000 - $50,000',
    from50kTo100k: '$50,000 - $100,000',
    moreThan100k: '$100,000+',
    // Placeholders
    namePlaceholder: 'Jane Smith',
    emailPlaceholder: 'jane@loremipsum.com',
    companyPlaceholder: 'Who do you work for',
    messagePlaceholder: 'Please tell us a bit more ...',
    // Success message
    thankYouMessage: 'Thank you for your message. We will get back to you soon!',
    'home': 'Home',
    'about': 'About',
    'contact': 'Contact',
    'welcome': 'Welcome to our website',
    'description': 'This is a multilingual website example',
    // About Us page translations
    meetTheFounders: 'Meet the Founders.',
    foundersDescription: 'Born in Colombia, Where Innovation Meets Passion. We\'re innovators, lifelong learners, and coffee lovers—turning complex AI into simple, powerful solutions.',
    saraName: 'Sara Ortiz Drada',
    saraRole: 'iOS Developer',
    yesidName: 'Yesid Leonardo López Sierra',
    yesidRole: 'AI Engineer',
    linkedin: 'LinkedIn',
    // Case Studies page translations
    selectedWorks: 'Selected Works',
    exploreAISolutions: 'Explore our innovative AI solutions and their real-world impact.',
    // Footer translations
    theGood: 'The Good',
    theBoring: 'The Boring',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    cookiePolicy: 'Cookie Policy',
    copyright: '© 2024 lulo. All rights reserved.',
  },
  es: {
    caseStudies: 'Casos de Estudio',
    contactUs: 'Contáctenos',
    aboutUs: 'Sobre Nosotros',
    dedicated: 'Innovación Simplificada.',
    subtitle: 'Aplicaciones Avanzadas de IA y Agentes Inteligentes',
    applyTodayLine1: '¿Lo próximo grande? Comienza',
    applyTodayLine2: 'con IA—Hablemos.',
    // Contact form translations
    contactHeading: '¿Cómo podemos ayudar a dar vida a tus ideas?',
    contactSubheading: '¡Cuéntanos sobre tu proyecto y nos pondremos en contacto pronto!',
    yourName: 'Tu Nombre',
    yourEmail: 'Tu Email',
    companyName: 'Nombre de la empresa',
    howCanWeHelp: 'Cómo podemos ayudar',
    yourTimeline: 'Tu cronograma',
    yourBudget: 'Tu rango de presupuesto',
    anythingElse: 'Algo más',
    selectService: 'Seleccionar Servicio ...',
    selectSpeed: 'Seleccionar Velocidad ...',
    selectRange: 'Seleccionar Rango ...',
    submit: 'Enviar',
    // Service options
    aiDevelopment: 'Desarrollo de IA',
    mlConsulting: 'Consultoría de Machine Learning',
    nlpSolutions: 'Soluciones de NLP',
    customAiAgents: 'Agentes de IA Personalizados',
    // Timeline options
    urgent: 'Urgente - Lo antes posible',
    within1Month: 'Dentro de 1 mes',
    within3Months: 'Dentro de 3 meses',
    flexible: 'Flexible',
    // Budget options
    lessThan10k: 'Menos de $10,000',
    from10kTo25k: '$10,000 - $25,000',
    from25kTo50k: '$25,000 - $50,000',
    from50kTo100k: '$50,000 - $100,000',
    moreThan100k: 'Más de $100,000',
    // Placeholders
    namePlaceholder: 'María García',
    emailPlaceholder: 'maria@loremipsum.com',
    companyPlaceholder: '¿Para quién trabajas?',
    messagePlaceholder: 'Por favor cuéntanos un poco más ...',
    // Success message
    thankYouMessage: '¡Gracias por tu mensaje. Nos pondremos en contacto contigo pronto!',
    'home': 'Inicio',
    'about': 'Acerca de',
    'contact': 'Contacto',
    'welcome': 'Bienvenido a nuestro sitio web',
    'description': 'Este es un ejemplo de sitio web multilingüe',
    // About Us page translations
    meetTheFounders: 'Conoce a los Fundadores.',
    foundersDescription: 'Nacidos en Colombia, donde la innovación se encuentra con la pasión. Somos innovadores, aprendices de por vida y amantes del café, convirtiendo la IA compleja en soluciones simples y poderosas.',
    saraName: 'Sara Ortiz Drada',
    saraRole: 'Desarrolladora iOS',
    yesidName: 'Yesid Leonardo López Sierra',
    yesidRole: 'Ingeniero de IA',
    linkedin: 'LinkedIn',
    // Case Studies page translations
    selectedWorks: 'Trabajos Seleccionados',
    exploreAISolutions: 'Explora nuestras soluciones innovadoras de IA y su impacto en el mundo real.',
    // Footer translations
    theGood: 'Lo Bueno',
    theBoring: 'Lo Aburrido',
    privacyPolicy: 'Política de Privacidad',
    termsOfService: 'Términos de Servicio',
    cookiePolicy: 'Política de Cookies',
    copyright: '© 2024 lulo. Todos los derechos reservados.',
  },
};

export function getTranslation(key: string, lang: string = 'en'): string {
  return translations[lang]?.[key] || translations['en'][key] || key;
} 