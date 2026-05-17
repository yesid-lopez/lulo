import type { CaseStudySeed, CaseStudyTranslations } from './index'

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

export const translations: CaseStudyTranslations = {
  es: {
    title: 'Yesid’s Platform Lab',
    description:
      'Una plataforma privada de Kubernetes construida como un entorno compacto y enfocado en seguridad para desplegar aplicaciones, correr experimentos y gestionar infraestructura mediante GitOps. Demuestra una entrega al estilo producción: estado declarativo desde Git, secretos cifrados, actualizaciones automatizadas y observabilidad de punta a punta — todo detrás de límites de acceso controlados.',
    keyFeatures: [
      {
        title: 'Controlador GitOps',
        description:
          'Reconcilia continuamente el clúster contra el estado deseado declarado en Git, así cada cambio es revisable, reversible y auditable.',
      },
      {
        title: 'Cifrado de Sealed Secrets',
        description:
          'Los valores sensibles se cifran antes de llegar al control de versiones, manteniendo las credenciales seguras incluso en manifiestos de lectura pública.',
      },
      {
        title: 'Automatización de acceso seguro',
        description:
          'El acceso externo aprobado se provisiona mediante flujos automatizados en lugar de port-forwards puntuales o kubeconfigs manuales.',
      },
      {
        title: 'Gestión de tráfico',
        description:
          'El enrutamiento de Ingress y las políticas de red controlan qué servicios se exponen y cómo fluyen las solicitudes entre cargas de trabajo.',
      },
      {
        title: 'Almacenamiento persistente',
        description:
          'Un controlador de almacenamiento provisiona volúmenes persistentes bajo demanda para que las aplicaciones con estado sobrevivan a reinicios de pods y rotaciones de nodos.',
      },
      {
        title: 'Bases de datos declarativas',
        description:
          'Un operador de base de datos gestiona instancias de PostgreSQL de forma declarativa — provisión, backups y recuperación los maneja la plataforma.',
      },
      {
        title: 'Telemetría operacional',
        description:
          'Métricas, logs y señales de salud se recolectan en todas las cargas de trabajo para hacer visibles, de un vistazo, la confiabilidad y la capacidad.',
      },
      {
        title: 'Actualizaciones automatizadas',
        description:
          'Los componentes de la plataforma se mantienen al día mediante flujos automatizados, reduciendo el mantenimiento manual sin perder rollbacks seguros.',
      },
    ],
    tags: [
      { tag: 'Platform Engineering' },
      { tag: 'Kubernetes' },
      { tag: 'GitOps' },
      { tag: 'Infraestructura como código' },
      { tag: 'DevOps' },
    ],
  },
  de: {
    title: 'Yesid’s Platform Lab',
    description:
      'Eine private Kubernetes-Plattform — gebaut als kompakte, sicherheitsorientierte Umgebung zum Deployen von Anwendungen, für Experimente und für das Verwalten von Infrastruktur per GitOps. Sie demonstriert Auslieferung im Produktionsstil: deklarativer Zustand aus Git, verschlüsselte Secrets, automatisierte Upgrades und durchgängige Observability — alles hinter kontrollierten Zugriffsgrenzen.',
    keyFeatures: [
      {
        title: 'GitOps-Controller',
        description:
          'Gleicht den Cluster fortlaufend mit dem in Git deklarierten Sollzustand ab — jede Änderung ist reviewbar, reversibel und auditierbar.',
      },
      {
        title: 'Sealed-Secret-Verschlüsselung',
        description:
          'Sensible Werte werden verschlüsselt, bevor sie überhaupt in die Versionskontrolle gelangen — so bleiben Credentials auch in öffentlich lesbaren Manifesten geschützt.',
      },
      {
        title: 'Automatisierter sicherer Zugriff',
        description:
          'Genehmigter externer Zugriff wird über automatisierte Workflows bereitgestellt — keine spontanen Port-Forwards oder manuell verteilten Kubeconfigs.',
      },
      {
        title: 'Traffic-Management',
        description:
          'Ingress-Routing und Network Policies steuern, welche Services exponiert sind und wie Requests zwischen Workloads fließen.',
      },
      {
        title: 'Persistenter Speicher',
        description:
          'Ein Storage-Controller stellt Persistent Volumes auf Anforderung bereit, sodass stateful Anwendungen Pod-Restarts und Node-Rotationen überleben.',
      },
      {
        title: 'Deklarative Datenbanken',
        description:
          'Ein Database-Operator verwaltet PostgreSQL-Instanzen deklarativ — Provisionierung, Backups und Recovery übernimmt die Plattform.',
      },
      {
        title: 'Betriebliche Telemetrie',
        description:
          'Metriken, Logs und Health-Signale werden über alle Workloads gesammelt — Zuverlässigkeit und Kapazität sind auf einen Blick sichtbar.',
      },
      {
        title: 'Automatisierte Upgrades',
        description:
          'Plattform-Komponenten werden über automatisierte Update-Flows aktuell gehalten — weniger manuelle Wartung, sichere Rollbacks bleiben möglich.',
      },
    ],
    tags: [
      { tag: 'Platform Engineering' },
      { tag: 'Kubernetes' },
      { tag: 'GitOps' },
      { tag: 'Infrastructure as Code' },
      { tag: 'DevOps' },
    ],
  },
}
