type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

export const translations: Translations = {
  en: {
    instagram: 'INSTAGRAM',
    faq: 'FAQ',
    apply: 'APPLY',
    dedicated: 'Innovation Made Simple.',
    subtitle: 'Advanced AI Applications and Intelligent Agents',
    applyTodayLine1: 'The next big thing? It starts',
    applyTodayLine2: 'with AI—Let\'s talk.',
    'home': 'Home',
    'about': 'About',
    'contact': 'Contact',
    'welcome': 'Welcome to our website',
    'description': 'This is a multilingual website example',
  },
  es: {
    instagram: 'INSTAGRAM',
    faq: 'PREGUNTAS FRECUENTES',
    apply: 'APLICAR',
    dedicated: 'Innovación Simplificada.',
    subtitle: 'Aplicaciones Avanzadas de IA y Agentes Inteligentes',
    applyTodayLine1: '¿Lo próximo grande? Comienza',
    applyTodayLine2: 'con IA—Hablemos.',
    'home': 'Inicio',
    'about': 'Acerca de',
    'contact': 'Contacto',
    'welcome': 'Bienvenido a nuestro sitio web',
    'description': 'Este es un ejemplo de sitio web multilingüe',
  },
};

export function getTranslation(key: string, lang: string = 'en'): string {
  return translations[lang]?.[key] || translations['en'][key] || key;
} 