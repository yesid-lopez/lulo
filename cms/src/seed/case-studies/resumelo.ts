import type { CaseStudySeed } from './index'

export const slug = 'resumelo'

export const data: CaseStudySeed = {
  type: 'featured-project',
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
