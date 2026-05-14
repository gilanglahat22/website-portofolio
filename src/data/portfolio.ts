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

export const portfolio = {
  name: "Muhammad Gilang Ramadhan",
  title: "Backend-focused Fullstack Engineer",
  headline:
    "Backend-focused Fullstack Engineer building scalable APIs, multi-tenant systems, distributed workers, and production web platforms.",
  summary:
    "Software Engineer with 3+ years of experience across Python/FastAPI, React/TypeScript, REST API design, event-driven architecture, Docker, Kubernetes/Rancher, SQL systems, and cloud-native backend services.",
  location: "South Jakarta, Jakarta, Indonesia",
  email: "muhammadgilangr471@gmail.com",
  phone: "+62 823-8221-1182",
  githubLabel: "github.com/gilanglahat22",
  githubUrl: "https://github.com/gilanglahat22",
  linkedinLabel: "Muhammad Gilang Ramadhan",
  linkedinUrl: "https://www.linkedin.com/in/muhammad-gilang-ramadhan-54b58a20b",
  languages: ["Indonesian", "English"],
  education: {
    degree: "Bachelor Engineering of Informatics Engineering (IF)",
    institution: "Bandung Institute of Technology (ITB)",
    date: "September 2020 - October 2025",
    thesis:
      "Research on optimizing blockchain's Avalanche Consensus Protocol using Microservices Architecture.",
  },
  focusAreas: [
    "Backend Engineering",
    "Distributed Systems",
    "AI Document Processing",
    "Multi-tenant Platforms",
  ],
};

export const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer (Fulltime)",
    company: "Quantum Teknologi Nusantara",
    date: "September 2025 - Present",
    description: [
      "Standardized backend architecture using Domain-Driven Design in FastAPI to improve maintainability, consistency, and scalability across Nexius AI services.",
      "Built and optimized an AI-powered financial document processing pipeline covering OCR, parsing, extraction, validation, journal mapping, and report generation.",
      "Migrated core file-processing flow from a monolith into event-driven distributed workers using RabbitMQ and scalable worker pods.",
      "Developed production REST APIs and real-time SSE progress tracking for upload status, queue visibility, report monitoring, and long-running background jobs.",
      "Improved reliability and observability with OpenTelemetry, SigNoz, structured logging, and Rancher Kubernetes deployment support.",
    ],
    logo: "/icons/quantum.jpeg",
    skills: ["FastAPI", "Python", "DDD", "RabbitMQ", "SSE", "OpenTelemetry", "Kubernetes"],
  },
  {
    title: "Fullstack Engineer (Freelance)",
    company: "One Code Solution",
    date: "June 2025 - August 2025",
    description: [
      "Built and maintained backend systems for three regional Philip Morris International platforms: Kazakhstan, Chesterfield Philippines, and PRJWHEART.",
      "Implemented reusable backend patterns using Domain-Driven Design and Template Pattern to reduce duplicated logic across regional platforms.",
      "Developed fullstack features with Vue.js, ASP.NET, and Sitefinity CMS for authentication, profile management, biometric credentials, and reward redemption flows.",
      "Built campaign-based redeem engine features for SKU and UPC promotional workflows supporting Fortune and Chesterfield brands.",
    ],
    logo: "/icons/one_code.jpeg",
    skills: ["Vue.js", "ASP.NET", "Sitefinity CMS", "DDD", "Template Pattern", "Reward Engines"],
  },
  {
    title: "Research and Development Engineer (Apprenticeship)",
    company: "MarkAny",
    date: "April 2025 - May 2025",
    description: [
      "Researched and developed Endpoint Detection & Response concepts focused on Intrusion Detection Systems, user behavior monitoring, and security pattern analysis.",
      "Analyzed cybersecurity datasets from Indonesia's National Cyber and Crypto Agency to support anomaly detection and endpoint security behavior research.",
      "Produced technical research insights related to user behavior monitoring, threat detection, and security event classification.",
    ],
    logo: "/icons/markany.png",
    skills: ["EDR", "IDS", "Security Research", "Anomaly Detection", "BSSN Dataset"],
  },
  {
    title: "Junior Software Engineer (Fulltime)",
    company: "PT Fata Organa Solusi",
    date: "July 2024 - March 2025",
    description: [
      "Served as PIC Assistant for Hashigake, a Japanese multi-tenant corporate matching platform, contributing to backend architecture, frontend development, QA coordination, and production delivery.",
      "Developed backend services and integrations using .NET, React/TypeScript, Azure Service Bus, WebSocket services, cron jobs, and event-driven communication.",
      "Built service integration flows for meeting platform synchronization, automatic meeting status updates, messaging backend services, admin management, and real-time communication features.",
      "Improved frontend state management and security with structured Redux-based global state handling for user data and authentication tokens.",
      "Supported centralized logging and telemetry improvements to reduce debugging time and improve production visibility.",
    ],
    logo: "/icons/fata_organa.jpeg",
    skills: [".NET", "React", "TypeScript", "Azure Service Bus", "WebSocket", "Redux"],
  },
  {
    title: "Web Developer (Part Time)",
    company: "PT Fata Organa Solusi",
    date: "December 2023 - June 2024",
    description: [
      "Developed a fullstack internal voting platform using ASP.NET, React, SQL Server, and Azure Services.",
      "Improved critical voting logic, including vote percentage calculation and UI behavior, in collaboration with full-time engineers and QA teams.",
      "Optimized backend API and SQL query behavior using stored procedures and database tuning.",
      "Reduced recurring sprint-level defects through better testing coordination, code cleanup, and feature validation with QA.",
    ],
    logo: "/icons/fata_organa.jpeg",
    skills: ["ASP.NET", "React", "SQL Server", "Azure Services", "Stored Procedures", "QA"],
  },
  {
    title: "Software Engineer (Internship)",
    company: "PT Suitmedia Kreasi Indonesia",
    date: "May 2023 - November 2023",
    description: [
      "Developed API and CMS features for KLAR Smile's official platform using Laravel, NGINX, MySQL, and Docker.",
      "Optimized backend queries and application performance, reducing API latency by approximately 10%.",
      "Supported production-ready CMS and API development to improve customer engagement and content management workflows.",
    ],
    logo: "/icons/suitmedia.png",
    skills: ["Laravel", "NGINX", "MySQL", "Docker", "CMS", "API Development"],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Nexius AI",
    subtitle: "Financial document OCR and reporting platform",
    description:
      "End-to-end OCR pipeline for financial documents that turns uploads into validated transactions, journal mappings, and generated reports.",
    highlights: [
      "Designed modular ingestion, OCR, parsing, normalization, extraction, validation, transaction mapping, and report generation flows.",
      "Implemented ambiguous transaction clustering using text features and domain rules to recommend categories and Chart of Accounts mappings.",
      "Delivered real-time processing visibility with SSE progress events, worker heartbeats, auto-reconnect behavior, and structured logs.",
      "Moved long-running AI workloads into distributed worker services and queue-based processing.",
    ],
    image: "/icons/quantum.jpeg",
    tags: ["FastAPI", "Python", "OCR", "RabbitMQ", "SSE", "OpenTelemetry"],
    category: "ai",
    link: "https://nexiusai.com",
    linkLabel: "Visit Nexius AI",
  },
  {
    title: "Hashigake",
    subtitle: "Corporate matching website for CAC Empath Inc.",
    description:
      "A Japanese multi-tenant corporate matching platform with meeting synchronization, messaging services, and admin management flows.",
    highlights: [
      "Developed backend service integrations for a multi-tenant platform serving Japanese business users.",
      "Built meeting platform integration using WebSocket services, automated meeting status updates, messaging services, and admin management flows.",
      "Implemented asynchronous communication with Azure Service Bus to improve reliability between backend services.",
      "Improved frontend security and maintainability through structured Redux state management.",
    ],
    image: "/hashigake.png",
    tags: ["React", "TypeScript", ".NET", "Azure Service Bus", "WebSocket", "Redux"],
    category: "web",
    link: "https://hashigake.jp",
    linkLabel: "Visit Hashigake",
  },
  {
    title: "Pondering Circle",
    subtitle: "Internal voting platform for CAC Empath Inc.",
    description:
      "A fullstack internal employee voting website with backend APIs, frontend flows, and SQL Server data structures.",
    highlights: [
      "Architected and implemented backend APIs, frontend flows, and database structures.",
      "Improved voting percentage calculation, UI behavior, and reporting flow accuracy.",
      "Optimized SQL Server logic with stored procedures to improve API reliability and maintainability.",
    ],
    image: "/icons/fata_organa.jpeg",
    tags: ["ASP.NET", "React", "SQL Server", "Azure Services", "Stored Procedures"],
    category: "web",
    link: "https://pondering-circle.com",
    linkLabel: "Visit Website",
  },
  {
    title: "PMI Website Factory - Chesterfield PH",
    subtitle: "Regional digital engagement platform",
    description:
      "Product work for Philip Morris International regional platforms supporting Fortune and Chesterfield digital campaign workflows.",
    highlights: [
      "Developed and maintained engagement features across Kazakhstan, Chesterfield Philippines, and PRJWHEART platforms.",
      "Built reward redemption engines for lucky promo campaigns, SKU-based campaigns, and UPC-based promotional flows.",
      "Delivered reusable backend and frontend components across multiple brand platforms.",
    ],
    image: "/pmi.svg",
    tags: ["ASP.NET", "Vue.js", "Sitefinity CMS", "DDD", "Template Pattern"],
    category: "web",
  },
  {
    title: "Nakafa AI",
    subtitle: "Open-source learning platform",
    description:
      "AI learning platform for university and high school students, focused on accessible educational support and interactive study workflows.",
    highlights: [
      "Created an open-source education platform concept for student learning support.",
      "Designed around AI-assisted learning, resource discovery, and interactive study experiences.",
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    tags: ["AI", "Education", "Open Source", "Learning Platform"],
    category: "open-source",
    link: "https://github.com/gilanglahat22/nakafa-ai",
    linkLabel: "View GitHub",
  },
  {
    title: "TELISIK",
    subtitle: "Free UTBK preparation platform",
    description:
      "Free learning platform for Indonesian university entrance exam preparation, built to help students prepare for UTBK.",
    highlights: [
      "Built around accessible preparation material for Indonesian high school students.",
      "Focused on reducing friction for students learning independently before university entrance exams.",
    ],
    image: "/telisik.jpg",
    tags: ["Education", "Open Source", "UTBK", "Web Platform"],
    category: "open-source",
    link: "https://github.com/gilanglahat22/telisik",
    linkLabel: "View GitHub",
  },
  {
    title: "Nexorrae",
    subtitle: "Open-source mental wellness AI chatbot",
    description:
      "Digital mental wellness AI chatbot that lets users write freely, reflect deeply, and receive gentle AI guidance only when they choose.",
    highlights: [
      "Designed as a reflection-first AI experience for mental wellness journaling.",
      "Focused on user agency, privacy-conscious interaction, and optional AI guidance.",
    ],
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    tags: ["AI", "Mental Wellness", "Open Source", "Chatbot"],
    category: "open-source",
  },
];

export const achievements: AchievementItem[] = [
  {
    title: "Finalist ICPC Asia Jakarta Regional 2021",
    description: "Qualified through Indonesia National Contest and competed against 100+ national teams.",
    link: "https://icpc.global/ICPCID/N1FILTJWC0D4",
    linkLabel: "View ICPC profile",
  },
  {
    title: "National Finalist - Indonesia National Contest 2021",
    description: "Placed 42nd among undergraduate university teams in the INC Binus competition.",
    link: "https://icpc.global/ICPCID/N1FILTJWC0D4",
    linkLabel: "View ICPC profile",
  },
  {
    title: "Participant of Gemastik XV Programming Division 2022",
    description: "Selected as ITB's 4th place team representative among undergraduate teams in Indonesia.",
    link: "https://www.linkedin.com/in/muhammad-gilang-ramadhan-54b58a20b/details/certifications/1738303065136/single-media-viewer/?profileId=ACoAADVM-osBxaALQRCedj4NExDzmKmAzGyAnKY",
    linkLabel: "View certificate",
  },
  {
    title: "Top 7% in Meta Hacker Cup Round 1 2022",
    description: "Ranked 18th out of 64 participants in Indonesia and 946th out of 12,330 participants globally.",
    link: "https://www.facebook.com/codingcompetitions/hacker-cup/2022/certificate/1658558797848533",
    linkLabel: "View certificate",
  },
];

export const skillGroups = [
  {
    title: "Backend & Architecture",
    icon: "/icons/skills/code.svg",
    items: [
      "Backend Engineering",
      "RESTful API",
      "Domain-Driven Design",
      "SOLID Design Principle",
      "System Design",
      "Software Architecture",
      "Requirement Analysis",
    ],
  },
  {
    title: "Distributed & Cloud",
    icon: "/icons/skills/docker.svg",
    items: [
      "Distributed Systems",
      "Microservices",
      "Event-driven Architecture",
      "RabbitMQ",
      "Azure Service Bus",
      "Docker",
      "Kubernetes/Rancher",
      "CI/CD",
      "Cloud Computing",
    ],
  },
  {
    title: "Languages & Frameworks",
    icon: "/icons/skills/typescript.svg",
    items: [
      "Python/FastAPI",
      "React/TypeScript",
      "Vue.js",
      "ASP.NET",
      "Laravel",
      "SQL Systems",
      "Go",
      "Kotlin",
    ],
  },
  {
    title: "AI & Automation",
    icon: "/icons/skills/data.svg",
    items: [
      "Machine Learning",
      "LLM Optimization",
      "LangChain",
      "OCR Pipelines",
      "Agentic AI",
      "MCP",
      "n8n",
      "OpenClaw",
    ],
  },
  {
    title: "Engineering Fundamentals",
    icon: "/icons/skills/algorithm.svg",
    items: [
      "Object-Oriented Programming",
      "Data Structures and Algorithms",
      "Computer Networks",
      "Git Version Control",
      "Project Management",
      "Security Pattern Analysis",
    ],
  },
];
