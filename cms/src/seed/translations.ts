// Author-written ES/DE translations for the case studies that are seeded /
// already live in production. The script in `translate.ts` applies these via
// Payload's Local API into the `es` and `de` locales of each record.
//
// Brand names (Lulo, Photofolio, Resumelo, ...), proper nouns, and broadly
// English tech tags (iOS App, GitOps, Kubernetes, ...) are left untranslated by
// design — they are recognized as-is in Spanish and German tech contexts.
//
// Array sub-fields (keyFeatures, tags) here MUST be ordered identically to the
// English source: the translator updates existing array rows by index, so the
// `number` / structure stays stable across locales.

export type LocalizedFeature = {
  title: string
  description: string
}

export type CaseStudyTranslation = {
  title: string
  description: string
  keyFeatures: LocalizedFeature[]
  tags: string[]
  award?: {
    title?: string
    event?: string
  }
}

export type SlugTranslations = {
  es: CaseStudyTranslation
  de: CaseStudyTranslation
}

export const caseStudyTranslations: Record<string, SlugTranslations> = {
  'deu-leben-in-deutschland-2026': {
    es: {
      title: 'DEU: Leben in Deutschland 2026',
      description:
        'Una plataforma de aprendizaje completa para iOS pensada para el examen de ciudadanía alemana (Einbürgerungstest / Leben in Deutschland). Cubre las más de 310 preguntas oficiales de los 16 Bundesländer con explicaciones detalladas y contexto legal, varios modos de estudio, simulación de examen y soporte multilingüe en 10 idiomas.',
      keyFeatures: [
        {
          title: 'Más de 310 preguntas oficiales',
          description:
            'Banco de preguntas oficial completo de los 16 estados alemanes, con explicaciones detalladas y contexto legal para cada respuesta.',
        },
        {
          title: 'Varios modos de estudio',
          description:
            'Los modos Práctica, Estado, Examen y Preguntas guardadas permiten adaptar la preparación al estilo de aprendizaje y al progreso de cada persona.',
        },
        {
          title: 'Soporte multilingüe',
          description:
            'Disponible en alemán, inglés, turco, español, ruso, árabe, polaco, rumano, italiano y persa para acompañar a candidatos de orígenes diversos.',
        },
        {
          title: 'Simulación de examen',
          description:
            'Tests de 33 preguntas que replican el formato oficial del Einbürgerungstest bajo una presión de tiempo realista.',
        },
        {
          title: 'Contenido por región',
          description:
            'Selecciona tu Bundesland para acceder a las preguntas localizadas según tu estado de residencia.',
        },
        {
          title: 'Acceso sin conexión',
          description:
            'Experiencia de estudio completa sin necesidad de internet: practica donde quieras.',
        },
        {
          title: 'Seguimiento del progreso',
          description:
            'Monitorización en tiempo real del avance del estudio por modos y temas.',
        },
        {
          title: 'Accesibilidad',
          description:
            'Interfaz oscura, texto ampliable hasta el 200 % y retroalimentación háptica para una experiencia inclusiva.',
        },
      ],
      tags: ['iOS App', 'Examen de ciudadanía', 'Educación', 'Preparación de exámenes', 'Multilingüe'],
    },
    de: {
      title: 'DEU: Leben in Deutschland 2026',
      description:
        'Eine umfassende iOS-Lernplattform für den deutschen Einbürgerungstest (Leben in Deutschland). Sie deckt alle über 310 offiziellen Fragen für die 16 Bundesländer mit ausführlichen Erklärungen und rechtlichem Kontext ab — inklusive mehrerer Lernmodi, Prüfungssimulation und mehrsprachiger Unterstützung in zehn Sprachen.',
      keyFeatures: [
        {
          title: 'Über 310 offizielle Fragen',
          description:
            'Vollständiger offizieller Fragenkatalog für alle 16 Bundesländer, mit ausführlichen Erklärungen und rechtlichem Kontext zu jeder Antwort.',
        },
        {
          title: 'Mehrere Lernmodi',
          description:
            'Übungsmodus, Bundesland-Modus, Prüfungsmodus und gespeicherte Fragen passen die Vorbereitung an Lernstil und Fortschritt an.',
        },
        {
          title: 'Mehrsprachige Unterstützung',
          description:
            'Verfügbar in Deutsch, Englisch, Türkisch, Spanisch, Russisch, Arabisch, Polnisch, Rumänisch, Italienisch und Persisch — für Kandidat:innen unterschiedlicher Herkunft.',
        },
        {
          title: 'Prüfungssimulation',
          description:
            'Probetests mit 33 Fragen, die das offizielle Einbürgerungstest-Format unter realistischem Zeitdruck nachbilden.',
        },
        {
          title: 'Regionsspezifische Inhalte',
          description:
            'Wähle dein Bundesland und sieh nur die für deinen Wohnort relevanten Fragen.',
        },
        {
          title: 'Offline-Zugriff',
          description:
            'Vollständige Lernerfahrung ohne Internetverbindung — überall lernen.',
        },
        {
          title: 'Fortschrittsverfolgung',
          description:
            'Echtzeit-Überblick über den Lernfortschritt nach Modus und Themengebiet.',
        },
        {
          title: 'Barrierefreiheit',
          description:
            'Dunkles Interface, Text bis zu 200 % vergrößerbar und haptisches Feedback für eine inklusive Nutzung.',
        },
      ],
      tags: ['iOS App', 'Einbürgerungstest', 'Bildung', 'Prüfungsvorbereitung', 'Mehrsprachig'],
    },
  },

  'artikel-der-die-das': {
    es: {
      title: 'Artikel: Der, Die, Das',
      description:
        'Una app para iOS que ayuda a quienes aprenden alemán a dominar los artículos de los sustantivos (der/die/das) con un vocabulario seleccionado de más de 1.000 palabras en más de 50 categorías, junto con plurales, frases de ejemplo y pronunciación en audio nativo. Sin cuenta, sin suscripción: totalmente gratis.',
      keyFeatures: [
        {
          title: 'Más de 1.000 palabras con artículo',
          description:
            'Vocabulario amplio organizado en categorías intuitivas, con artículos, plurales y frases de ejemplo para entender cada palabra en contexto real.',
        },
        {
          title: 'Pronunciación en audio',
          description:
            'Audio de hablantes nativos y text-to-speech para entrenar el acento y pronunciar cada palabra con confianza.',
        },
        {
          title: 'Categorías inteligentes',
          description:
            'Más de 50 categorías y subcategorías — de Wohnung y Essen a Natur — para ir directo a las palabras que necesitas.',
        },
        {
          title: 'Búsqueda rápida',
          description:
            'Encuentra cualquier palabra al instante entre todas las categorías con una búsqueda fluida e inteligente.',
        },
        {
          title: 'Favoritos y listas personalizadas',
          description:
            'Crea listas de estudio personalizadas a partir de tus categorías preferidas y enfoca la práctica en lo que más importa.',
        },
        {
          title: 'Modo práctica',
          description:
            'Cuestionarios integrados que evalúan la retención de artículos y refuerzan el aprendizaje mediante recuerdo activo.',
        },
        {
          title: 'Modo oscuro',
          description:
            'Estudio cómodo en cualquier condición de luz, de día o de noche.',
        },
        {
          title: 'Gratis y sin cuenta',
          description:
            'Sin registro y sin suscripción: la experiencia completa está disponible para todos los usuarios de forma gratuita.',
        },
      ],
      tags: ['iOS App', 'Alemán', 'Aprendizaje de idiomas', 'Vocabulario', 'Educación'],
    },
    de: {
      title: 'Artikel: Der, Die, Das',
      description:
        'Eine iOS-App, die Deutschlernenden hilft, die Nomen-Artikel (der/die/das) zu meistern: kuratierter Wortschatz mit über 1.000 Wörtern in mehr als 50 Kategorien, inklusive Plural, Beispielsätzen und Aussprache durch Muttersprachler:innen. Kein Konto, kein Abo — komplett kostenlos.',
      keyFeatures: [
        {
          title: 'Über 1.000 Wörter mit Artikeln',
          description:
            'Umfangreicher Wortschatz, in intuitive Kategorien gegliedert, mit Artikeln, Pluralformen und Beispielsätzen für echten Kontext.',
        },
        {
          title: 'Audio-Aussprache',
          description:
            'Aussprache von Muttersprachler:innen und Text-to-Speech zum Trainieren der Aussprache und sicheren Sprechen jedes Wortes.',
        },
        {
          title: 'Intelligente Kategorien',
          description:
            'Über 50 Kategorien und Unterkategorien — von Wohnung und Essen bis Natur — führen direkt zu den benötigten Wörtern.',
        },
        {
          title: 'Schnellsuche',
          description:
            'Finde jedes Wort sofort in allen Kategorien mit einer flüssigen, intelligenten Suche.',
        },
        {
          title: 'Favoriten & eigene Listen',
          description:
            'Erstelle individuelle Lernlisten aus deinen Lieblingskategorien und konzentriere dich auf das, was zählt.',
        },
        {
          title: 'Übungsmodus',
          description:
            'Integrierte Quizze prüfen das Behalten der Artikel und festigen Gelerntes durch aktives Abrufen.',
        },
        {
          title: 'Dark Mode',
          description:
            'Komfortables Lernen bei jeder Lichtsituation — Tag und Nacht.',
        },
        {
          title: 'Kostenlos & ohne Konto',
          description:
            'Keine Anmeldung, kein Abo — die volle Erfahrung steht jeder Person kostenlos zur Verfügung.',
        },
      ],
      tags: ['iOS App', 'Deutsch', 'Sprachenlernen', 'Wortschatz', 'Bildung'],
    },
  },

  photofolio: {
    es: {
      title: 'Photofolio — Portafolio de fotografía de viajes',
      description:
        'Un portafolio personal de fotografía de viajes que muestra series cuidadas de viajes por Austria, Colombia, República Checa, Alemania, Italia, Polonia, España y Suiza. Cada país se abre en una galería paginada de imágenes en alta resolución, optimizadas para una carga rápida y una visualización inmersiva a pantalla completa en cualquier dispositivo.',
      keyFeatures: [
        {
          title: 'Colecciones por país',
          description:
            'Las fotos están organizadas por país, así cada viaje tiene su propia galería e imagen de portada y se puede explorar por destino en lugar de desplazarse por un único feed infinito.',
        },
        {
          title: 'Galerías paginadas',
          description:
            'Cada país se abre en un visor paginado que mantiene los tiempos de carga cortos y permite recorrer una secuencia curada página a página, en lugar de mostrar todas las fotos a la vez.',
        },
        {
          title: 'Entrega de imágenes en alta resolución',
          description:
            'Las imágenes se sirven desde Backblaze B2 y se redimensionan bajo demanda mediante Next.js Image, así cada dispositivo recibe la resolución adecuada sin sacrificar calidad visual.',
        },
        {
          title: 'Portadas inmersivas',
          description:
            'Cada tarjeta de país encabeza con una gran fotografía de portada y el nombre del país en tipografía marcada, convirtiendo la propia portada en un índice visual.',
        },
        {
          title: 'Diseño responsive y minimalista',
          description:
            'Una cuadrícula limpia y adaptada a móvil pone la fotografía en primer plano, sin elementos de UI que distraigan: la obra habla primero, la interfaz se aparta del camino.',
        },
        {
          title: 'Hospedaje en el edge de Vercel',
          description:
            'Desplegado en Vercel para caching global en el edge y arranques en frío instantáneos: la galería se siente ágil desde Bogotá, Berlín o Tokio.',
        },
      ],
      tags: ['Portafolio', 'Fotografía', 'Viajes', 'Galería', 'Proyecto personal'],
    },
    de: {
      title: 'Photofolio — Reisefotografie-Portfolio',
      description:
        'Ein persönliches Reisefotografie-Portfolio mit kuratierten Bildserien aus Österreich, Kolumbien, Tschechien, Deutschland, Italien, Polen, Spanien und der Schweiz. Jedes Land öffnet sich in einer paginierten Galerie mit hochauflösenden Bildern, optimiert für schnelle Ladezeiten und immersive Vollbildansicht auf jedem Gerät.',
      keyFeatures: [
        {
          title: 'Sammlungen nach Land',
          description:
            'Fotos sind nach Land geordnet — jede Reise hat eine eigene Galerie und ein Titelbild, sodass nach Reisezielen statt durch einen endlosen Feed geblättert wird.',
        },
        {
          title: 'Paginierte Galerien',
          description:
            'Jedes Land öffnet sich in einem paginierten Viewer, der die Ladezeit kurz hält und eine kuratierte Sequenz Seite für Seite zeigt — statt alle Aufnahmen auf einmal.',
        },
        {
          title: 'Hochauflösende Bildauslieferung',
          description:
            'Bilder werden aus Backblaze B2 bezogen und über Next.js Image bedarfsgerecht skaliert — jedes Gerät erhält die passende Auflösung ohne Verlust an Bildqualität.',
        },
        {
          title: 'Immersive Titelbilder',
          description:
            'Jede Länder-Kachel beginnt mit einem großen Titelfoto und dem Ländernamen in markanter Typografie und macht die Startseite selbst zu einem visuellen Inhaltsverzeichnis.',
        },
        {
          title: 'Responsives, minimalistisches Layout',
          description:
            'Ein klares, mobiloptimiertes Raster stellt die Fotografie in den Vordergrund — ohne ablenkende UI-Elemente. Die Arbeit spricht zuerst, das Interface tritt zurück.',
        },
        {
          title: 'Edge-Hosting auf Vercel',
          description:
            'Deployment auf Vercel mit globalem Edge-Caching und sofortigen Cold Starts — die Galerie fühlt sich aus Bogotá, Berlin oder Tokio gleichermaßen flott an.',
        },
      ],
      tags: ['Portfolio', 'Fotografie', 'Reisen', 'Galerie', 'Persönliches Projekt'],
    },
  },

  resumelo: {
    es: {
      title: 'Resumelo',
      description:
        'Un generador de currículums con IA que ayuda a quienes buscan empleo a crear CVs listos para publicar y optimizados para ATS. Empieza desde cero, importa un CV existente o parte de datos de ejemplo, y luego adapta el resultado a cualquier oferta con plantillas profesionales (incluida una de estilo Harvard) y cartas de presentación a juego. Plan gratuito disponible, sin tarjeta de crédito.',
      keyFeatures: [
        {
          title: 'Generador de CV con IA',
          description:
            'Crea un CV pulido y listo para reclutadores en minutos con una IA que redacta, refina y optimiza el contenido para causar impacto.',
        },
        {
          title: 'Optimización para ATS',
          description:
            'Diseños y formato pensados para pasar los Applicant Tracking Systems, para que el CV llegue a personas reales y no al montón de descartados.',
        },
        {
          title: 'Adaptación a la oferta',
          description:
            'Pega una oferta de empleo y deja que Resumelo adapte tu CV resaltando las palabras clave, habilidades y experiencias adecuadas para cada candidatura.',
        },
        {
          title: 'Importación de CV',
          description:
            'Sube un PDF o DOCX existente y conviértelo en un formato moderno y optimizado, analizado y reescrito automáticamente.',
        },
        {
          title: 'Plantillas profesionales',
          description:
            'Diseños prediseñados y listos para publicar — incluida una plantilla estilo Harvard — pensados para públicos académicos, profesionales y corporativos.',
        },
        {
          title: 'Generación de carta de presentación',
          description:
            'Acompaña cada CV con una carta de presentación generada a partir del mismo perfil y contexto de la oferta, para un paquete de candidatura coherente.',
        },
        {
          title: 'Opciones flexibles de inicio',
          description:
            'Empieza desde cero, importa un documento existente o arranca con datos de ejemplo: elige el camino que mejor se adapte a tu flujo.',
        },
        {
          title: 'Gratis para empezar',
          description:
            'Plan gratuito sin tarjeta de crédito, además de planes de pago con plantillas avanzadas y generación ilimitada.',
        },
      ],
      tags: ['Aplicación web', 'Herramienta de IA', 'Generador de CV', 'Servicios de carrera', 'Optimización ATS'],
    },
    de: {
      title: 'Resumelo',
      description:
        'Ein KI-gestützter Lebenslauf-Builder, der Bewerbenden hilft, druckreife, ATS-optimierte Lebensläufe zu erstellen. Beginne von null, importiere einen vorhandenen CV oder starte mit Beispieldaten — und passe das Ergebnis dann mit professionellen Vorlagen (inklusive Harvard-Layout) und passenden Anschreiben an jede Stellenausschreibung an. Kostenlose Stufe ohne Kreditkarte verfügbar.',
      keyFeatures: [
        {
          title: 'KI-Lebenslauf-Builder',
          description:
            'Erstelle in Minuten einen ausgefeilten, recruiterfertigen Lebenslauf — die KI entwirft, verfeinert und optimiert die Inhalte auf Wirkung.',
        },
        {
          title: 'ATS-Optimierung',
          description:
            'Layouts und Formatierung sind so konzipiert, dass sie Applicant-Tracking-Systeme passieren — der Lebenslauf landet bei Menschen, nicht im Ablehn-Stapel.',
        },
        {
          title: 'Anpassung an die Stellenanzeige',
          description:
            'Füge eine Stellenanzeige ein und Resumelo passt deinen Lebenslauf an: relevante Keywords, Skills und Erfahrungen werden für jede Bewerbung hervorgehoben.',
        },
        {
          title: 'Lebenslauf-Import',
          description:
            'Lade ein bestehendes PDF oder DOCX hoch und lass es parsen, aufwerten und in ein modernes, optimiertes Format umschreiben.',
        },
        {
          title: 'Professionelle Vorlagen',
          description:
            'Vorgefertigte, druckreife Layouts — inklusive einer Vorlage im Harvard-Stil — für akademische, professionelle und unternehmerische Zielgruppen.',
        },
        {
          title: 'Anschreiben-Generierung',
          description:
            'Ergänze jeden Lebenslauf um ein passendes Anschreiben, generiert aus demselben Profil und Stellenkontext — ein konsistentes Bewerbungspaket.',
        },
        {
          title: 'Flexibler Einstieg',
          description:
            'Beginne von null, importiere ein bestehendes Dokument oder starte mit Beispieldaten — wähle den Einstieg, der zu deinem Workflow passt.',
        },
        {
          title: 'Kostenlos starten',
          description:
            'Kostenlose Stufe ohne Kreditkarte, plus kostenpflichtige Pläne für erweiterte Vorlagen und unbegrenzte Generierung.',
        },
      ],
      tags: ['Web-App', 'KI-Tool', 'Lebenslauf-Builder', 'Karriere-Services', 'ATS-Optimierung'],
    },
  },

  'yesid-platform-lab': {
    es: {
      title: 'Yesid’s Platform Lab',
      description:
        'Una plataforma privada de Kubernetes construida como un entorno compacto y orientado a la seguridad para desplegar aplicaciones, ejecutar experimentos y gestionar infraestructura mediante GitOps. Muestra una entrega de estilo productivo: estado declarativo desde Git, secretos cifrados, actualizaciones automatizadas y observabilidad de extremo a extremo, todo dentro de límites de acceso controlados.',
      keyFeatures: [
        {
          title: 'Controlador GitOps',
          description:
            'Reconcilia continuamente el clúster contra el estado deseado declarado en Git, de modo que cada cambio es revisable, reversible y fácil de auditar.',
        },
        {
          title: 'Cifrado con Sealed Secrets',
          description:
            'Los valores sensibles se cifran antes de entrar al control de versiones, lo que mantiene las credenciales seguras en manifiestos públicamente legibles.',
        },
        {
          title: 'Automatización del acceso seguro',
          description:
            'El acceso externo aprobado se provisiona mediante flujos automatizados, en lugar de port-forwards ad-hoc o kubeconfigs manuales.',
        },
        {
          title: 'Gestión de tráfico',
          description:
            'El enrutamiento de ingress y las políticas de red controlan qué servicios se exponen y cómo fluyen las peticiones entre cargas de trabajo.',
        },
        {
          title: 'Almacenamiento persistente',
          description:
            'Un controlador de almacenamiento provisiona volúmenes persistentes bajo demanda, así las aplicaciones con estado sobreviven a reinicios de pods y rotaciones de nodos.',
        },
        {
          title: 'Bases de datos declarativas',
          description:
            'Un operador gestiona instancias de PostgreSQL de forma declarativa: aprovisionamiento, copias de seguridad y recuperación los maneja la plataforma.',
        },
        {
          title: 'Telemetría operativa',
          description:
            'Métricas, logs y señales de salud se recolectan en todas las cargas para hacer visible de un vistazo la fiabilidad y la capacidad.',
        },
        {
          title: 'Actualizaciones automatizadas',
          description:
            'Los componentes de la plataforma se mantienen al día mediante flujos de actualización automatizados, reduciendo el mantenimiento manual y manteniendo rollbacks seguros.',
        },
      ],
      tags: ['Platform Engineering', 'Kubernetes', 'GitOps', 'Infrastructure as Code', 'DevOps'],
    },
    de: {
      title: 'Yesid’s Platform Lab',
      description:
        'Eine private Kubernetes-Plattform als kompakte, sicherheitsorientierte Umgebung für Anwendungs-Deployments, Experimente und Infrastrukturverwaltung per GitOps. Sie zeigt produktionsnahe Auslieferung: deklarativer Zustand aus Git, verschlüsselte Secrets, automatisierte Upgrades und durchgängige Observability — alles innerhalb kontrollierter Zugriffsgrenzen.',
      keyFeatures: [
        {
          title: 'GitOps-Controller',
          description:
            'Gleicht das Cluster kontinuierlich mit dem in Git deklarierten Zielzustand ab — jede Änderung ist überprüfbar, rückgängig zu machen und audit-freundlich.',
        },
        {
          title: 'Sealed-Secrets-Verschlüsselung',
          description:
            'Sensible Werte werden verschlüsselt, bevor sie in die Versionskontrolle gelangen — Zugangsdaten bleiben auch in öffentlich lesbaren Manifesten geschützt.',
        },
        {
          title: 'Automatisierter sicherer Zugriff',
          description:
            'Genehmigter externer Zugriff wird über automatisierte Workflows bereitgestellt — keine spontanen Port-Forwards oder manuellen Kubeconfigs.',
        },
        {
          title: 'Traffic-Management',
          description:
            'Ingress-Routing und Netzwerk-Policies steuern, welche Dienste exponiert werden und wie Anfragen zwischen Workloads fließen.',
        },
        {
          title: 'Persistenter Speicher',
          description:
            'Ein Storage-Controller stellt Persistent Volumes bedarfsgerecht bereit, sodass zustandsbehaftete Anwendungen Pod-Restarts und Node-Rotationen überleben.',
        },
        {
          title: 'Deklarative Datenbanken',
          description:
            'Ein Datenbank-Operator verwaltet PostgreSQL-Instanzen deklarativ — Provisionierung, Backups und Recovery übernimmt die Plattform.',
        },
        {
          title: 'Operative Telemetrie',
          description:
            'Metriken, Logs und Gesundheitssignale werden über alle Workloads hinweg erfasst — Zuverlässigkeit und Kapazität sind auf einen Blick sichtbar.',
        },
        {
          title: 'Automatisierte Upgrades',
          description:
            'Plattformkomponenten werden über automatisierte Update-Flows aktuell gehalten — weniger manuelle Wartung, sichere Rollbacks.',
        },
      ],
      tags: ['Platform Engineering', 'Kubernetes', 'GitOps', 'Infrastructure as Code', 'DevOps'],
    },
  },

  'yesid-portfolio': {
    es: {
      title: 'Yesid López — Portafolio de ingeniería en IA y ML',
      description:
        'Un sitio de portafolio personal de un ingeniero de IA / ML que presenta sistemas de IA listos para producción, plataformas de machine learning e investigación aplicada en un formato directo y orientado a reclutadores. Los casos de estudio destacan impacto real en MLOps, LLMs, visión por computadora y NLP, junto con un currículum descargable y vías de contacto directas.',
      keyFeatures: [
        {
          title: 'Selección de proyectos curada',
          description:
            'Un portafolio seleccionado de proyectos de IA y ML —desde plataformas MLOps hasta sistemas de recomendación con LLMs y visión por computadora en el edge— cada uno resumido con rol, stack e impacto medible.',
        },
        {
          title: 'Casos de estudio categorizados',
          description:
            'Los proyectos se agrupan por dominio (MLOps, LLMs, Visión por computadora, NLP, Generación de datos) para que cada visitante encuentre rápido lo que le interesa.',
        },
        {
          title: 'Etiquetado tecnológico',
          description:
            'Cada proyecto lista las herramientas y frameworks concretos —Python, PyTorch, Kubeflow, AWS, OpenAI, TensorFlow, Snowflake— para que el stack sea fácil de escanear.',
        },
        {
          title: 'Currículum descargable',
          description:
            'Un enlace de un solo clic al currículum en PDF acorta el camino para reclutadores y engineering managers que necesitan la versión formal.',
        },
        {
          title: 'Posicionamiento personal claro',
          description:
            'Un titular conciso —"AI Engineer | ML Engineer, building production-ready AI systems"— fija el posicionamiento desde el primer pantallazo, sin paja de marketing.',
        },
        {
          title: 'Diseño responsive y minimalista',
          description:
            'Un layout limpio y adaptado a móvil pone el contenido primero: navegación rápida, tipografía legible y nada que distraiga entre la persona y la obra.',
        },
        {
          title: 'Landing preparada para SEO',
          description:
            'Metadata estructurada, títulos descriptivos y páginas de proyecto rastreables ayudan a que el sitio aparezca en búsquedas relevantes de ingeniería en IA / ML.',
        },
        {
          title: 'Llamadas a la acción directas',
          description:
            'Las CTAs principales ("Ver proyectos", "Abrir currículum") guían al visitante hacia los dos resultados que más importan: explorar la obra o iniciar una conversación.',
        },
      ],
      tags: ['Portafolio', 'Marca personal', 'AI Engineer', 'ML Engineer', 'Landing page'],
    },
    de: {
      title: 'Yesid López — KI- & ML-Engineering-Portfolio',
      description:
        'Eine persönliche Portfolio-Website eines KI-/ML-Ingenieurs, die produktionsreife KI-Systeme, Machine-Learning-Plattformen und angewandte Forschung in einem fokussierten, recruiterfreundlichen Format präsentiert. Kuratierte Fallstudien zeigen reale Wirkung in MLOps, LLMs, Computer Vision und NLP — ergänzt um einen herunterladbaren Lebenslauf und direkte Kontaktwege.',
      keyFeatures: [
        {
          title: 'Kuratiertes Projekt-Showcase',
          description:
            'Eine ausgewählte Sammlung von KI- und ML-Projekten — von MLOps-Plattformen über LLM-Empfehlungssysteme bis hin zu Computer Vision am Edge — jeweils zusammengefasst nach Rolle, Stack und messbarer Wirkung.',
        },
        {
          title: 'Kategorisierte Fallstudien',
          description:
            'Projekte sind nach Domäne gruppiert (MLOps, LLMs, Computer Vision, NLP, Datengenerierung), damit Besuchende schnell die für sie relevante Arbeit finden.',
        },
        {
          title: 'Technologie-Tagging',
          description:
            'Jedes Projekt nennt die konkret eingesetzten Tools und Frameworks — Python, PyTorch, Kubeflow, AWS, OpenAI, TensorFlow, Snowflake — der Stack ist auf einen Blick erfassbar.',
        },
        {
          title: 'Herunterladbarer Lebenslauf',
          description:
            'Ein Ein-Klick-Link zum PDF-Lebenslauf hält den Weg für Recruiter und Engineering-Manager kurz, die die formale Fassung brauchen.',
        },
        {
          title: 'Klare Personal Brand',
          description:
            'Eine prägnante Hero-Zeile — „AI Engineer | ML Engineer, building production-ready AI systems" — setzt das Positioning ohne Marketing-Floskeln direkt above the fold.',
        },
        {
          title: 'Responsives, minimalistisches Design',
          description:
            'Ein klares, mobiloptimiertes Layout stellt Inhalte in den Vordergrund: schnelle Navigation, lesbare Typografie, keine Ablenkung zwischen Besuch und Arbeit.',
        },
        {
          title: 'SEO-optimierte Landingpage',
          description:
            'Strukturierte Metadaten, beschreibende Titel und crawlbare Projektseiten sorgen dafür, dass die Seite bei relevanten Suchen nach KI-/ML-Engineering sichtbar wird.',
        },
        {
          title: 'Direkte Calls to Action',
          description:
            'Primäre CTAs („View Projects", „Open Resume") führen Besuchende zu den beiden wichtigsten Ergebnissen: die Arbeit erkunden oder ein Gespräch starten.',
        },
      ],
      tags: ['Portfolio', 'Personal Branding', 'AI Engineer', 'ML Engineer', 'Landing Page'],
    },
  },
}
