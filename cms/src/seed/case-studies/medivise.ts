import type { CaseStudySeed } from './index'

export const slug = 'medivise'

export const data: CaseStudySeed = {
  type: 'hackathon',
  title: 'Medivise',
  slug,
  description:
    'Medivise features an intelligent AI agent that acts as a personal wellness assistant, offering lifestyle recommendations, habit tracking, and personalized insights through natural conversation.',
  category: 'health-wellness',
  platform: 'web',
  award: {
    title: 'Winner (1st Place) Best AI Innovation',
    event: 'Databricks Generative AI World Cup',
    position: 'first',
  },
  keyFeatures: [
    {
      number: '01',
      title: 'AI Wellness Agent',
      description:
        'Conversational AI agent that acts as a personal wellness coach, providing tailored lifestyle recommendations.',
    },
    {
      number: '02',
      title: 'Habit Tracking',
      description:
        'Tracks daily habits and routines, surfacing patterns and nudges to help users improve their wellness.',
    },
    {
      number: '03',
      title: 'Personalized Insights',
      description:
        'Delivers data-driven, personalized health insights based on the user\'s history and goals.',
    },
  ],
  tags: [
    { tag: 'AI Wellness' },
    { tag: 'Habit Tracking' },
    { tag: 'Personalized Insights' },
  ],
  links: {
    demo: 'https://devpost.com/software/medivise',
  },
  status: 'draft',
  featured: false,
}
