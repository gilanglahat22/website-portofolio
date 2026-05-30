export interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string[];
  logo: string;
  skills: string[];
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  tags: string[];
  category: string;
  link?: string;
  linkLabel?: string;
}

export interface AchievementItem {
  title: string;
  description: string;
  link?: string;
  linkLabel?: string;
}

export interface SkillGroupItem {
  title: string;
  icon: string;
  items: string[];
}

export interface CaseStudyItem {
  title: string;
  slug: string;
  date: string;
  readTime: number;
  excerpt: string;
  categories: string[];
  featuredImage: string;
  sections: {
    heading: string;
    body: string[];
    bullets?: string[];
  }[];
}

export const portfolio = {
  name: "Muhammad Gilang Ramadhan",
  title: "Software Engineer",
  headline:
    "Software Engineer building scalable gaming marketplaces, distributed systems, event-driven architectures, and production backend platforms.",
  summary:
    "Software Engineer with 4+ years of experience across Python/FastAPI, React/TypeScript, REST API design, event-driven architecture, Docker, Kubernetes/Rancher, SQL systems, and cloud-native backend services. Currently at Bukalapak in the Gaming Division — itemku C2C marketplace.",
  location: "South Jakarta, Jakarta, Indonesia",
  email: "muhammadgilangr471@gmail.com",
  phone: "+62 823-8221-1182",
  githubLabel: "github.com/gilanglahat22",
  githubUrl: "https://github.com/gilanglahat22",
  linkedinLabel: "Muhammad Gilang Ramadhan",
  linkedinUrl: "https://www.linkedin.com/in/muhammad-gilang-ramadhan-54b58a20b",
  languages: ["Indonesian", "English"],
  education: {
    degree: "Bachelor of Engineering in Informatics Engineering",
    institution: "Bandung Institute of Technology (ITB)",
    date: "September 2020 - October 2025",
    thesis:
      "Optimization of blockchain Avalanche Consensus Protocol using microservices architecture.",
  },
  focusAreas: [
    "Backend-focused product engineering",
    "Distributed workers and scalable APIs",
    "Education and analytics platforms",
    "AI-powered SaaS",
  ],
};

export const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer | Full-time",
    company: "Bukalapak",
    date: "June 2026 - Present",
    description: [
      "Joined Bukalapak's Gaming Division as a Software Engineer, working on itemku — Indonesia's leading C2C marketplace for gaming items, virtual goods, and game accounts.",
      "Contributing to backend systems and platform features that power the itemku marketplace, supporting game-item transactions, seller flows, buyer discovery, and C2C trading infrastructure.",
      "Building and maintaining scalable services for the gaming commerce ecosystem, enabling peer-to-peer transactions across a wide range of games and digital goods categories.",
    ],
    logo: "/icons/bukalapak.png",
    skills: ["Software Engineering", "Marketplace", "C2C Platform", "Gaming", "Backend Systems"],
  },
  {
    title: "Software Engineer | Full-time",
    company: "Quantum Teknologi Nusantara",
    date: "September 2025 - May 2026",
    description: [
      "Built and optimized Nexius AI, a 7-stage AI financial document processing SaaS covering OCR, parsing, extraction, validation, journal mapping, report generation, and download delivery.",
      "Standardized FastAPI backend architecture using Domain-Driven Design across multiple services to improve maintainability, service consistency, and readiness for future AI integrations.",
      "Migrated long-running file-processing flows from a monolith into RabbitMQ-based distributed workers and Kubernetes worker pods, improving scalability under high upload volume.",
      "Developed production REST APIs and real-time SSE progress tracking for upload status, queue visibility, per-report/month processing state, worker heartbeat, and background jobs.",
      "Improved product observability with OpenTelemetry, SigNoz, structured logs, queue diagnostics, and progress snapshots to make production issues easier to trace and debug.",
      "Delivered end-to-end features across 3 product surfaces: customer application, partner/affiliate portal, and admin dashboard.",
      "Supported AI quality evaluation through clustering logic, transaction categorization, Chart of Accounts mapping workflows, and metric-based validation of ambiguous transaction results.",
    ],
    logo: "/icons/quantum.jpeg",
    skills: ["Python", "FastAPI", "MongoDB", "RabbitMQ", "SSE", "Kubernetes", "OpenTelemetry"],
  },
  {
    title: "Full Stack Engineer | Freelance",
    company: "One Code Solution",
    date: "June 2025 - August 2025",
    description: [
      "Built and maintained full-stack features for 3 regional Philip Morris International platforms: Kazakhstan, Chesterfield Philippines, and PRJWHEART.",
      "Developed Vue.js, ASP.NET, and Sitefinity CMS modules for authentication, profile management, biometric credentials, content flows, and reward redemption workflows.",
      "Built campaign-based redemption engines covering 3 promo patterns: lucky promo campaigns, SKU-based campaigns, and UPC-based promotional flows.",
      "Implemented reusable backend patterns using Domain-Driven Design and Template Pattern to reduce duplicated logic across customized regional and brand-specific products.",
      "Worked in a client-aligned consultancy environment requiring fast iteration, strong requirement analysis, and reliable delivery across product, content, and engineering stakeholders.",
    ],
    logo: "/icons/one_code.jpeg",
    skills: ["Vue.js", "ASP.NET", "Sitefinity CMS", "DDD", "Template Pattern", "Reward Engines"],
  },
  {
    title: "Research and Development Engineer | Apprenticeship",
    company: "MarkAny",
    date: "April 2025 - May 2025",
    description: [
      "Completed a 2-month R&D apprenticeship focused on Endpoint Detection & Response, Intrusion Detection Systems, user behavior monitoring, and anomaly detection.",
      "Analyzed cybersecurity datasets from Indonesia's National Cyber and Crypto Agency to identify patterns related to endpoint behavior and security event classification.",
      "Produced technical research insights on user behavior monitoring, threat detection, security pattern analysis, and anomaly-driven endpoint protection concepts.",
    ],
    logo: "/icons/markany.png",
    skills: ["EDR", "IDS", "Anomaly Detection", "Security Research", "Dataset Analysis"],
  },
  {
    title: "Junior Software Engineer | Full-time",
    company: "PT Fata Organa Solusi",
    date: "July 2024 - March 2025",
    description: [
      "Served as PIC Assistant for Hashigake, a Japanese multi-tenant B2B corporate matching platform, supporting backend architecture, frontend delivery, QA coordination, and production releases.",
      "Developed services using .NET, React/TypeScript, Azure Service Bus, WebSocket services, cron jobs, and event-driven communication for real-time and asynchronous workflows.",
      "Built key platform modules for meeting synchronization, automatic meeting status updates, messaging backend services, admin management, and real-time communication features.",
      "Implemented asynchronous communication using Azure Service Bus to improve reliability between backend services and external integration workflows.",
      "Collaborated with QA, Project Management, and Data Science teams to deliver production-ready features across a multi-functional engineering workflow.",
    ],
    logo: "/icons/fata_organa.jpeg",
    skills: [".NET", "React", "TypeScript", "Azure Service Bus", "WebSocket", "Redux"],
  },
  {
    title: "Web Developer | Part-time",
    company: "PT Fata Organa Solusi",
    date: "December 2023 - June 2024",
    description: [
      "Developed a full-stack internal voting platform using ASP.NET, React, SQL Server, and Azure Services, covering 3 core layers: frontend, backend APIs, and database integration.",
      "Architected voting flows for employee participation, vote submission, percentage calculation, result reporting, and administrative review.",
      "Optimized SQL Server logic using stored procedures and database tuning to improve API reliability and maintainability for internal business workflows.",
      "Improved voting percentage calculation, UI behavior, and reporting accuracy in collaboration with full-time engineers and QA teams.",
    ],
    logo: "/icons/fata_organa.jpeg",
    skills: ["ASP.NET", "React", "SQL Server", "Azure Services", "Stored Procedures", "QA"],
  },
  {
    title: "Software Engineer | Internship",
    company: "PT Suitmedia Kreasi Indonesia",
    date: "May 2023 - November 2023",
    description: [
      "Developed API and CMS features for KLAR Smile's official platform using Laravel, NGINX, MySQL, and Docker, supporting production-ready customer engagement workflows.",
      "Optimized backend queries and application performance, reducing API latency by approximately 10%.",
      "Supported content management, API integration, backend debugging, and deployment-readiness improvements for a live customer-facing platform.",
    ],
    logo: "/icons/suitmedia.png",
    skills: ["Laravel", "NGINX", "MySQL", "Docker", "CMS", "API Development"],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Nexius AI",
    subtitle: "AI-powered financial document processing SaaS",
    description:
      "A production SaaS platform that processes financial documents through OCR, parsing, extraction, validation, journal mapping, report generation, and download delivery.",
    highlights: [
      "Designed a modular OCR and document-processing pipeline covering parsing, normalization, feature extraction, validation, transaction mapping, and report generation.",
      "Built backend services connecting document ingestion, background workers, structured output generation, user review flows, real-time progress events, and queue-based AI processing.",
      "Implemented ambiguous transaction clustering and a Weighted Purity evaluator to measure clustering quality using size-weighted purity and outlier penalties.",
      "Improved observability with OpenTelemetry, SigNoz, structured logs, queue diagnostics, and progress snapshots.",
    ],
    image: "/icons/quantum.jpeg",
    tags: ["FastAPI", "Python", "MongoDB", "RabbitMQ", "OCR", "SSE"],
    category: "ai",
    link: "https://nexiusai.com",
    linkLabel: "Visit Nexius AI",
  },
  {
    title: "Nakafa AI Learning Platform",
    subtitle: "Open-source AI learning platform",
    description:
      "An AI learning platform for university and high school students, aligned with education accessibility, student guidance, and AI-enabled learning support.",
    highlights: [
      "Built an open-source education product focused on accessible learning support for university and high school students.",
      "Designed around student guidance, learning-resource discovery, and AI-enabled study workflows.",
      "Connected the product direction to a broader interest in AI-enabled education from Southeast Asia.",
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    tags: ["AI", "Education", "Learning Platform", "Open Source"],
    category: "open-source",
    link: "https://nakafa.com",
    linkLabel: "Visit Nakafa",
  },
  {
    title: "TELISIK",
    subtitle: "Free learning platform for UTBK preparation",
    description:
      "A free learning platform that supports Indonesian students in UTBK preparation through accessible learning resources and exam-readiness features.",
    highlights: [
      "Developed a free learning platform to help Indonesian students prepare for UTBK.",
      "Focused on accessible learning resources and exam-readiness support for independent study.",
      "Positioned the product around education access and practical preparation outcomes.",
    ],
    image: "/telisik.jpg",
    tags: ["Education", "UTBK", "Learning Platform", "Web Application"],
    category: "open-source",
    link: "https://www.terasbelajarasik.web.id/",
    linkLabel: "Visit TELISIK",
  },
  {
    title: "Hashigake",
    subtitle: "Multi-tenant B2B corporate matching platform",
    description:
      "A Japanese B2B corporate matching platform with meeting synchronization, messaging flows, admin management, and real-time updates.",
    highlights: [
      "Developed backend service integrations for a Japanese B2B corporate matching platform.",
      "Built meeting synchronization, messaging flows, admin management, and real-time update modules.",
      "Implemented asynchronous communication using Azure Service Bus.",
      "Improved frontend maintainability through structured Redux state management.",
    ],
    image: "/hashigake.png",
    tags: [".NET", "React", "TypeScript", "Azure Service Bus", "WebSocket", "Redux"],
    category: "web",
    link: "https://hashigake.jp",
    linkLabel: "Visit Hashigake",
  },
  {
    title: "Pondering Circle Website",
    subtitle: "Internal voting platform for CAC Empath employees",
    description:
      "A full-stack internal employee voting platform with backend APIs, frontend flows, SQL Server data structures, and Azure Services integration.",
    highlights: [
      "Architected and implemented backend APIs, frontend flows, and database structures for an internal employee voting platform.",
      "Improved voting percentage calculation, UI behavior, reporting accuracy, and administrative review flows.",
      "Improved SQL Server reliability through stored procedures and backend tuning.",
    ],
    image: "/icons/fata_organa.jpeg",
    tags: ["ASP.NET", "React", "SQL Server", "Azure Services", "Stored Procedures"],
    category: "web",
    link: "https://pondering-circle.com",
    linkLabel: "Visit Pondering Circle",
  },
  {
    title: "Nexorrae",
    subtitle: "AI mental wellness chatbot",
    description:
      "An open-source AI chatbot that helps users write freely, reflect deeply, and receive gentle AI-guided support only when they choose.",
    highlights: [
      "Created an open-source AI chatbot centered on reflective writing and user agency.",
      "Designed the experience so AI support is optional and intentionally invoked by the user.",
      "Connected mental wellness support with a privacy-conscious, reflection-first product flow.",
    ],
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    tags: ["AI", "Mental Wellness", "Chatbot", "Open Source"],
    category: "open-source",
    link: "https://curhatinai.com",
    linkLabel: "Visit Nexorrae",
  },
];

export const achievements: AchievementItem[] = [
  {
    title: "Finalist, ICPC Asia Jakarta Regional 2021",
    description: "Qualified through Indonesia National Contest against 100+ national teams.",
    link: "https://icpc.global/ICPCID/N1FILTJWC0D4",
    linkLabel: "View ICPC profile",
  },
  {
    title: "National Finalist, Indonesia National Contest 2021",
    description: "Placed in the top undergraduate university team category.",
    link: "https://icpc.global/ICPCID/N1FILTJWC0D4",
    linkLabel: "View ICPC profile",
  },
  {
    title: "Participant, Gemastik XV Programming Division 2022",
    description: "Selected as Bandung Institute of Technology representative team.",
    link: "https://www.linkedin.com/in/muhammad-gilang-ramadhan-54b58a20b/details/certifications/1738303065136/single-media-viewer/?profileId=ACoAADVM-osBxaALQRCedj4NExDzmKmAzGyAnKY",
    linkLabel: "View certificate",
  },
  {
    title: "Top 7% in Meta Hacker Cup Round 1 2022",
    description: "Ranked 946th of 12,330 global participants.",
    link: "https://www.facebook.com/codingcompetitions/hacker-cup/2022/certificate/1658558797848533",
    linkLabel: "View certificate",
  },
];

export const skillGroups: SkillGroupItem[] = [
  {
    title: "Full Stack & UI",
    icon: "/icons/skills/react.svg",
    items: [
      "React.js",
      "TypeScript",
      "Vue.js",
      "Responsive web apps",
      "Admin dashboards",
      "User-facing product features",
      "CMS-based platforms",
    ],
  },
  {
    title: "Backend & Architecture",
    icon: "/icons/skills/code.svg",
    items: [
      "Python",
      "FastAPI",
      ".NET",
      "RESTful APIs",
      "Domain-Driven Design",
      "SOLID",
      "Microservices",
      "Event-driven systems",
      "Distributed workers",
    ],
  },
  {
    title: "AI, Data & Analytics",
    icon: "/icons/skills/data.svg",
    items: [
      "LLM applications",
      "LangChain",
      "OCR pipelines",
      "Data extraction",
      "MongoDB",
      "SQL Server",
      "MySQL",
      "BigQuery",
      "Clustering",
      "Evaluation metrics",
      "Analytics dashboards",
    ],
  },
  {
    title: "Infrastructure & Delivery",
    icon: "/icons/skills/docker.svg",
    items: [
      "Docker",
      "Kubernetes/Rancher",
      "RabbitMQ",
      "Azure Service Bus",
      "Redis",
      "S3-compatible storage",
      "CI/CD",
      "Git",
      "OpenTelemetry",
      "SigNoz",
      "Technical documentation",
    ],
  },
];

export const caseStudies: CaseStudyItem[] = [
  {
    title: "Nexius AI: Building an AI Financial Document Processing SaaS",
    slug: "nexius-ai-financial-document-processing",
    date: "September 2025 - May 2026",
    readTime: 6,
    excerpt:
      "A CV-backed look at the 7-stage Nexius AI platform: OCR, parsing, extraction, validation, journal mapping, reporting, and delivery.",
    categories: ["AI SaaS", "FastAPI", "RabbitMQ", "Observability"],
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    sections: [
      {
        heading: "Product Scope",
        body: [
          "At Quantum Teknologi Nusantara (September 2025 – May 2026), I worked on Nexius AI, an AI-powered financial document processing SaaS. The platform converts uploaded financial documents into structured, validated outputs that users can review and download.",
          "The product spans customer-facing upload flows, partner and affiliate portals, and internal admin dashboards, so engineering decisions need to support both product usability and operational visibility.",
        ],
      },
      {
        heading: "Backend Architecture",
        body: [
          "I standardized FastAPI service architecture using Domain-Driven Design so services remain maintainable as AI integrations and document workflows grow.",
          "Long-running file-processing flows were moved from monolithic processing into RabbitMQ-based distributed workers and Kubernetes worker pods to improve scalability under high upload volume.",
        ],
        bullets: [
          "REST APIs for uploads, queue visibility, report/month processing state, and background jobs.",
          "Server-Sent Events for real-time upload and processing progress.",
          "Worker heartbeat, queue diagnostics, and progress snapshots for operational debugging.",
        ],
      },
      {
        heading: "AI Quality and Observability",
        body: [
          "The AI workflow includes transaction categorization, ambiguous transaction clustering, Chart of Accounts mapping, and metric-based validation.",
          "I also improved observability with OpenTelemetry, SigNoz, structured logs, and queue diagnostics so production issues are easier to trace.",
        ],
      },
    ],
  },
  {
    title: "Hashigake: Multi-Tenant B2B Corporate Matching",
    slug: "hashigake-b2b-corporate-matching",
    date: "July 2024 - March 2025",
    readTime: 5,
    excerpt:
      "How backend integrations, Azure Service Bus, WebSocket services, and React/TypeScript supported a Japanese B2B matching platform.",
    categories: ["B2B Platform", ".NET", "React", "Azure Service Bus"],
    featuredImage: "/hashigake.png",
    sections: [
      {
        heading: "Platform Role",
        body: [
          "At PT Fata Organa Solusi, I served as PIC Assistant for Hashigake, a Japanese multi-tenant B2B corporate matching platform.",
          "The role covered backend architecture, frontend delivery, QA coordination, and production releases across a multi-functional engineering workflow.",
        ],
      },
      {
        heading: "Core Modules",
        body: [
          "I developed services using .NET, React/TypeScript, Azure Service Bus, WebSocket services, cron jobs, and event-driven communication.",
          "The most important product areas included meeting synchronization, automatic meeting status updates, messaging backend services, admin management, and real-time communication features.",
        ],
        bullets: [
          "Asynchronous workflows with Azure Service Bus.",
          "Real-time communication through WebSocket services.",
          "Structured frontend state management with Redux.",
        ],
      },
    ],
  },
  {
    title: "PMI Regional Platforms: Campaign and Redemption Engines",
    slug: "pmi-regional-campaign-redemption-engines",
    date: "June 2025 - August 2025",
    readTime: 4,
    excerpt:
      "Full-stack work across Kazakhstan, Chesterfield Philippines, and PRJWHEART using Vue.js, ASP.NET, Sitefinity CMS, and reusable backend patterns.",
    categories: ["Full Stack", "Vue.js", "ASP.NET", "Sitefinity CMS"],
    featuredImage: "/pmi.svg",
    sections: [
      {
        heading: "Consultancy Delivery",
        body: [
          "As a freelance Full Stack Engineer at One Code Solution, I worked on 3 regional Philip Morris International platforms: Kazakhstan, Chesterfield Philippines, and PRJWHEART.",
          "The environment required fast iteration, strong requirement analysis, and reliable delivery across product, content, and engineering stakeholders.",
        ],
      },
      {
        heading: "Feature Work",
        body: [
          "I built Vue.js, ASP.NET, and Sitefinity CMS modules for authentication, profile management, biometric credentials, content flows, and reward redemption workflows.",
          "The campaign engine work covered lucky promo campaigns, SKU-based campaigns, and UPC-based promotional flows.",
        ],
        bullets: [
          "Reusable backend patterns with Domain-Driven Design.",
          "Template Pattern usage to reduce duplicated regional logic.",
          "Brand-specific customization while keeping shared engineering structure intact.",
        ],
      },
    ],
  },
  {
    title: "Education Platforms and Competitive Programming Foundation",
    slug: "education-platforms-competitive-programming-foundation",
    date: "2020 - 2025",
    readTime: 5,
    excerpt:
      "The education and algorithmic foundation behind Nakafa AI, TELISIK, ITB Informatics Engineering, and programming competition achievements.",
    categories: ["Education", "AI Learning", "ITB", "Programming Competitions"],
    featuredImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
    sections: [
      {
        heading: "Education Product Direction",
        body: [
          "Nakafa AI and TELISIK reflect my interest in AI-enabled education and accessible learning platforms for students.",
          "Nakafa AI focuses on AI learning support for university and high school students, while TELISIK supports Indonesian students preparing for UTBK through free learning resources.",
        ],
      },
      {
        heading: "Academic Foundation",
        body: [
          "I studied Informatics Engineering at Bandung Institute of Technology from September 2020 to October 2025.",
          "My thesis focused on optimizing blockchain Avalanche Consensus Protocol using microservices architecture.",
        ],
      },
      {
        heading: "Competitive Programming",
        body: [
          "Competitive programming shaped the way I approach systems problems: break down ambiguity, reason from constraints, and test edge cases carefully.",
        ],
        bullets: [
          "Finalist, ICPC Asia Jakarta Regional 2021.",
          "National Finalist, Indonesia National Contest 2021.",
          "Participant, Gemastik XV Programming Division 2022.",
          "Top 7% in Meta Hacker Cup Round 1 2022.",
        ],
      },
    ],
  },
];
