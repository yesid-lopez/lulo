import type { CaseStudySeed } from './index'

export const slug = 'yesid-platform-lab'

export const data: CaseStudySeed = {
  type: 'real-implementation',
  title: "Yesid's Platform Lab",
  slug,
  description:
    'A private Kubernetes platform built as a compact, security-focused environment for deploying applications, running experiments, and managing infrastructure through GitOps. It demonstrates production-style delivery: declarative state from Git, encrypted secrets, automated upgrades, and end-to-end observability — all behind controlled access boundaries.',
  category: 'technology',
  platform: 'web',
  keyFeatures: [
    {
      number: '01',
      title: 'GitOps Controller',
      description:
        'Continuously reconciles the cluster against desired state declared in Git, so every change is reviewable, reversible, and audit-friendly.',
    },
    {
      number: '02',
      title: 'Sealed Secret Encryption',
      description:
        'Sensitive values are encrypted before they ever land in version control, keeping credentials safe in public-readable manifests.',
    },
    {
      number: '03',
      title: 'Secure Access Automation',
      description:
        'Approved external access is provisioned through automated workflows rather than ad-hoc port-forwards or manual kubeconfigs.',
    },
    {
      number: '04',
      title: 'Traffic Management',
      description:
        'Ingress routing and network policies control which services are exposed and how requests flow between workloads.',
    },
    {
      number: '05',
      title: 'Persistent Storage',
      description:
        'A storage controller provisions persistent volumes on demand so stateful applications survive pod restarts and node rotations.',
    },
    {
      number: '06',
      title: 'Declarative Databases',
      description:
        'A database operator manages PostgreSQL instances declaratively — provisioning, backups, and recovery handled by the platform.',
    },
    {
      number: '07',
      title: 'Operational Telemetry',
      description:
        'Metrics, logs, and health signals are collected across workloads to make reliability and capacity visible at a glance.',
    },
    {
      number: '08',
      title: 'Automated Upgrades',
      description:
        'Platform components are kept current through automated update flows, reducing manual maintenance while keeping rollbacks safe.',
    },
  ],
  technologies: [
    { name: 'Kubernetes', category: 'platform' },
    { name: 'GitOps', category: 'tool' },
    { name: 'Sealed Secrets', category: 'tool' },
    { name: 'PostgreSQL', category: 'database' },
    { name: 'Next.js', category: 'framework' },
  ],
  tags: [
    { tag: 'Platform Engineering' },
    { tag: 'Kubernetes' },
    { tag: 'GitOps' },
    { tag: 'Infrastructure as Code' },
    { tag: 'DevOps' },
  ],
  links: {
    website: 'https://lab.yesidlopez.de/',
    github: 'https://github.com/yesid-lopez/homepage-landing',
  },
  status: 'published',
  featured: false,
}
