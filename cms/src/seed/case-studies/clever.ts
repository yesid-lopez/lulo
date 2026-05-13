import type { CaseStudySeed } from './index'

export const slug = 'clever'

export const data: CaseStudySeed = {
  type: 'hackathon',
  title: 'Clever',
  slug,
  description:
    'Clever is an iOS educational app powered by AI agents that transform learning through interactive conversations, automated content generation, and intelligent document analysis.',
  category: 'education',
  platform: 'mobile',
  award: {
    title: 'Winner (2nd Place)',
    event: 'TiDB Future App Hackathon',
    position: 'second',
  },
  keyFeatures: [
    {
      number: '01',
      title: 'AI Agent Tutoring',
      description:
        'AI agents engage students in interactive conversations to guide understanding and answer questions in real time.',
    },
    {
      number: '02',
      title: 'Automated Content Generation',
      description:
        'Generates study materials, quizzes, and summaries from any uploaded document or topic.',
    },
    {
      number: '03',
      title: 'Intelligent Document Analysis',
      description:
        'Parses and interprets uploaded documents to extract key concepts and learning objectives.',
    },
  ],
  tags: [
    { tag: 'iOS App' },
    { tag: 'Educational Technology' },
    { tag: 'AI Agents' },
  ],
  links: {
    demo: 'https://devpost.com/software/clever',
  },
  status: 'published',
  featured: false,
}
