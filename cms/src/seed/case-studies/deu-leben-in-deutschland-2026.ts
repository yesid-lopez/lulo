import type { CaseStudySeed } from './index'

export const slug = 'deu-leben-in-deutschland-2026'

export const data: CaseStudySeed = {
  title: 'DEU: Leben in Deutschland 2026',
  slug,
  description:
    'A comprehensive iOS learning platform for the German citizenship test (Einbürgerungstest / Leben in Deutschland). Covers all 310+ official questions across the 16 Bundesländer with detailed explanations and legal context, multiple study modes, exam simulation, and multilingual support across 10 languages.',
  category: 'education',
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
