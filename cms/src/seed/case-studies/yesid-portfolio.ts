import type { CaseStudySeed } from './index'

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
