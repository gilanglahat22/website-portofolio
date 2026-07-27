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

export interface LifeChapter {
  year: string;
  title: string;
  body: string;
  tags: string[];
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
    "Software engineer building distributed backend systems and applied AI products at scale — shaped by competitive programming, sharpened by production incidents, and driven by the same question every time: how does this hold up at 10x the load?",
  summary:
    "I am a software engineer with 2+ years of experience shipping backend systems, applied AI products, and marketplace platforms into production. My work spans distributed workers processing high volumes of financial documents through an OCR-to-LLM pipeline, event-driven services synchronizing real-time state across marketplaces, and observability layers that make production failures explainable instead of mysterious. I care about the fundamentals that top-tier product engineering teams care about — throughput, latency, correctness under concurrency, and clear system boundaries. Outside of work, I'm an ICPC Asia Jakarta Regional finalist and Meta Hacker Cup top-7% finisher, and I still practice competitive programming and tinker with AI to keep my problem-solving sharp.",
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
    "Distributed backend systems & high-throughput services",
    "Applied AI in production — OCR, LLM pipelines, evaluation",
    "Competitive programming & algorithmic problem solving",
    "Marketplace and platform engineering at scale",
  ],
};

export const lifeStory: LifeChapter[] = [
  {
    year: "2020",
    title: "Where it started: a judge, not a job",
    body: "Before there were jobs, there was an online judge and a clock. Competitive programming is what pulled me into computer science seriously — not the syntax, but the discipline of turning an ambiguous problem into a provable solution under a time limit. That habit of reasoning from constraints first never left.",
    tags: ["ICPC", "Problem Solving", "ITB"],
  },
  {
    year: "2020 – 2025",
    title: "Formal training, informal obsession",
    body: "I studied Informatics Engineering at Bandung Institute of Technology while chasing contest results on the side — an ICPC Asia Jakarta Regional finals berth, a top-7% global finish in Meta Hacker Cup, and a national-team selection at Gemastik. My thesis pushed the same instincts into systems territory: optimizing the Avalanche consensus protocol with a microservices architecture.",
    tags: ["Avalanche Consensus", "Microservices", "Thesis"],
  },
  {
    year: "2023 – 2024",
    title: "First production code, real users",
    body: "Internship and early roles at Suitmedia and Fata Organa Solusi turned theory into shipped software: Laravel APIs cutting live latency, a .NET/React B2B platform synchronizing meetings and messaging in real time, and an internal voting system with SQL Server tuned under load. This is where I learned that clever code matters less than code that survives contact with production.",
    tags: [".NET", "React", "Azure Service Bus", "SQL Server"],
  },
  {
    year: "2025 – 2026",
    title: "Applied AI, at production scale",
    body: "At Quantum Teknologi Nusantara I built the backbone of Nexius AI — an OCR-to-LLM financial document pipeline running on FastAPI, RabbitMQ, and Kubernetes. Moving long-running jobs off a monolith and onto distributed workers, then instrumenting the whole system with OpenTelemetry, taught me what 'production-grade AI system' actually requires beyond a model that works in a notebook.",
    tags: ["FastAPI", "RabbitMQ", "Kubernetes", "OpenTelemetry"],
  },
  {
    year: "2026 – Present",
    title: "Marketplace scale, gaming division",
    body: "Now at Bukalapak, one of Indonesia's largest technology companies, building backend systems for itemku — a C2C marketplace moving gaming items, virtual goods, and game accounts between buyers and sellers. Different domain, same core problem I've chased since the judge days: keep a system correct and fast while real people depend on it.",
    tags: ["Bukalapak", "C2C Marketplace", "Backend Systems"],
  },
  {
    year: "Next",
    title: "What I'm building toward",
    body: "I'm aiming at the intersection of high-scale distributed systems and applied AI — the kind of engineering problems top-tier product companies solve at a size and speed I want to be tested by. Competitive programming gave me the reflexes; production systems gave me the scars. I'm looking for the next room where both matter.",
    tags: ["High-Scale Systems", "Applied AI", "SDE"],
  },
];

export const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer | Full-time",
    company: "Bukalapak",
    date: "June 2026 - Present",
    description: [
      "Joined the Gaming Division at Bukalapak — one of Indonesia's largest technology companies — as a Software Engineer on itemku, a C2C marketplace for gaming items, virtual goods, and game accounts.",
      "Engineered and scaled mission-critical backend services for itemku's Order and Pricing domains, supporting reliable marketplace operations across international markets and processing more than 1.5 billion transactions daily.",
      "Delivered high-impact seller capabilities for Tokoku while supporting production on-call rotations, resolving critical incidents to protect service availability and transaction integrity for a large-scale user base.",
      "Architected AI-assisted engineering workflows for itemku, Bukalapak's most profitable product, integrating intelligent development tooling and automation to accelerate delivery and improve code quality.",
    ],
    logo: "/icons/bukalapak.png",
    skills: ["TypeScript", "Node.js", "Koa", "MySQL", "AWS", "Marketplace", "C2C Platform"],
  },
  {
    title: "Software Engineer | Full-time",
    company: "Quantum Teknologi Nusantara",
    date: "September 2025 - May 2026",
    description: [
      "Joined as Founding Engineer and built the core backend for Nexius AI, a production Applied AI system turning raw financial documents into structured, auditable data through OCR, parsing, extraction, validation, journal mapping, and report generation.",
      "Developed production-grade FastAPI services using LLM/VLM structured outputs, PyTorch-backed OCR pipelines, and deterministic fallback logic to improve financial-data extraction accuracy.",
      "Re-architected long-running file-processing pipelines off a monolith and onto RabbitMQ-based distributed workers running on Kubernetes, with OpenTelemetry-based observability powering scalability and fault isolation across 100+ document-processing workloads per second.",
      "Shipped production REST APIs and real-time SSE progress streams covering upload status, queue visibility, per-report/month processing state, worker heartbeat, and background jobs.",
      "Instrumented the platform with OpenTelemetry, SigNoz, structured logs, and queue diagnostics, turning a distributed async system into one that's debuggable in production.",
      "Owned end-to-end delivery across 3 product surfaces: the customer application, the partner/affiliate portal, and the internal admin dashboard.",
      "Supported AI quality through ambiguous-transaction clustering, Chart of Accounts mapping, and metric-based validation, keeping automated categorization trustworthy at scale.",
    ],
    logo: "/icons/quantum.jpeg",
    skills: ["Python", "FastAPI", "MongoDB", "RabbitMQ", "SSE", "Kubernetes", "OpenTelemetry"],
  },
  {
    title: "Research and Development Engineer | Apprenticeship",
    company: "MarkAny",
    date: "April 2025 - May 2025",
    description: [
      "Completed a 2-month R&D apprenticeship on Endpoint Detection & Response, Intrusion Detection Systems, user behavior monitoring, and anomaly detection.",
      "Analyzed cybersecurity datasets from Indonesia's National Cyber and Crypto Agency to surface patterns in endpoint behavior and security event classification.",
      "Produced technical research on user behavior monitoring, threat detection, and anomaly-driven endpoint protection — an early exercise in reasoning about systems under adversarial conditions.",
    ],
    logo: "/icons/markany.png",
    skills: ["EDR", "IDS", "Anomaly Detection", "Security Research", "Dataset Analysis"],
  },
  {
    title: "Junior Software Engineer | Full-time",
    company: "PT Fata Organa Solusi",
    date: "July 2024 - March 2025",
    description: [
      "Served as PIC Assistant for Hashigake, a Japanese multi-tenant B2B corporate matching platform, owning slices of backend architecture, frontend delivery, QA coordination, and production releases.",
      "Built services using .NET, React/TypeScript, Azure Service Bus, WebSocket services, cron jobs, and event-driven communication for real-time and asynchronous workflows.",
      "Delivered core platform modules for meeting synchronization, automatic status updates, messaging backend services, admin management, and real-time communication.",
      "Implemented asynchronous communication via Azure Service Bus to improve reliability between backend services and external integrations.",
      "Worked directly with QA, Project Management, and Data Science teams to ship features into a live multi-tenant production system.",
    ],
    logo: "/icons/fata_organa.jpeg",
    skills: [".NET", "React", "TypeScript", "Azure Service Bus", "WebSocket", "Redux"],
  },
  {
    title: "Web Developer | Part-time",
    company: "PT Fata Organa Solusi",
    date: "December 2023 - June 2024",
    description: [
      "Built a full-stack internal voting platform using ASP.NET, React, SQL Server, and Azure Services across 3 layers: frontend, backend APIs, and database integration.",
      "Designed voting flows for employee participation, vote submission, percentage calculation, result reporting, and administrative review.",
      "Optimized SQL Server logic with stored procedures and database tuning to improve API reliability under concurrent voting load.",
      "Refined voting percentage calculation, UI behavior, and reporting accuracy alongside full-time engineers and QA.",
    ],
    logo: "/icons/fata_organa.jpeg",
    skills: ["ASP.NET", "React", "SQL Server", "Azure Services", "Stored Procedures", "QA"],
  },
  {
    title: "Software Engineer | Internship",
    company: "PT Suitmedia Kreasi Indonesia",
    date: "May 2023 - November 2023",
    description: [
      "Built API and CMS features for KLAR Smile's official platform using Laravel, NGINX, MySQL, and Docker.",
      "Optimized backend queries and application performance, cutting API latency by roughly 10% on a live customer-facing platform.",
      "Supported content management, API integration, backend debugging, and deployment-readiness for a system real customers relied on daily.",
    ],
    logo: "/icons/suitmedia.png",
    skills: ["Laravel", "NGINX", "MySQL", "Docker", "CMS", "API Development"],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Nexius AI",
    subtitle: "Applied AI platform for financial document processing",
    description:
      "A production SaaS platform that turns raw financial documents into structured, auditable data through an OCR-to-LLM pipeline: parsing, extraction, validation, journal mapping, report generation, and delivery.",
    highlights: [
      "Designed a modular OCR and document-processing pipeline: parsing, normalization, feature extraction, validation, transaction mapping, and report generation.",
      "Built backend services connecting document ingestion, background workers, structured output generation, user review flows, real-time progress events, and queue-based AI processing.",
      "Built ambiguous-transaction clustering and a Weighted Purity evaluator that scores clustering quality with size-weighted purity and outlier penalties, keeping automated categorization honest at scale.",
      "Improved observability with OpenTelemetry, SigNoz, structured logs, queue diagnostics, and progress snapshots so a distributed async pipeline stays debuggable in production.",
    ],
    image: "/icons/quantum.jpeg",
    tags: ["FastAPI", "Python", "MongoDB", "RabbitMQ", "OCR", "SSE"],
    category: "ai",
    link: "https://nexiusai.com",
    linkLabel: "Visit Nexius AI",
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
      "A Japanese B2B corporate matching platform built for multi-tenant scale, with real-time meeting synchronization, messaging, and admin management.",
    highlights: [
      "Built backend service integrations for a Japanese multi-tenant B2B corporate matching platform.",
      "Delivered meeting synchronization, messaging flows, admin management, and real-time update modules.",
      "Implemented event-driven, asynchronous communication using Azure Service Bus.",
      "Improved frontend maintainability through structured Redux state management across a multi-tenant codebase.",
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
      "Designed and built backend APIs, frontend flows, and database structures for an internal employee voting platform.",
      "Improved voting percentage calculation, UI behavior, reporting accuracy, and administrative review flows.",
      "Improved SQL Server reliability under concurrent load through stored procedures and backend tuning.",
    ],
    image: "/icons/fata_organa.jpeg",
    tags: ["ASP.NET", "React", "SQL Server", "Azure Services", "Stored Procedures"],
    category: "web",
    link: "https://pondering-circle.com",
    linkLabel: "Visit Pondering Circle",
  },
  {
    title: "Nexorrae",
    subtitle: "A reflection-first chatbot experiment",
    description:
      "An open-source experiment in reflective writing, with optional AI guidance available only when the user asks for it.",
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
    title: "Finalist, Coding Algorithm Tournament (CAT) 2026",
    description:
      "Selected as one of the Top 30 finalists from over 2,000 participants nationwide across Indonesia in student, university, and professional categories.",
  },
  {
    title: "Finalist, ICPC Asia Jakarta Regional 2021",
    description: "Qualified through Indonesia National Contest against 100+ national teams.",
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
    title: "Web & UI",
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
    title: "Data & AI Tools",
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
    title: "Nexius AI: Lessons from a Financial Document Processing System",
    slug: "nexius-ai-financial-document-processing",
    date: "September 2025 - May 2026",
    readTime: 6,
    excerpt:
      "What I learned while working across OCR, parsing, validation, background processing, reporting, and delivery in Nexius AI.",
    categories: ["Document Processing", "FastAPI", "RabbitMQ", "Observability"],
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    sections: [
      {
        heading: "Product Scope",
        body: [
          "At Quantum Teknologi Nusantara (September 2025 – May 2026), I worked on Nexius AI, a financial document processing product that uses OCR and AI-assisted workflows. The platform converts uploaded documents into structured outputs that users can review and download.",
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
      "The education and algorithmic foundation behind TELISIK, ITB Informatics Engineering, and programming competition achievements.",
    categories: ["Education", "ITB", "Programming Competitions"],
    featuredImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
    sections: [
      {
        heading: "Education Product Direction",
        body: [
          "TELISIK reflects my interest in accessible learning tools and learning through side projects.",
          "TELISIK helps Indonesian students prepare for UTBK through free, accessible learning resources.",
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
  {
    title: "Dynamic Programming: Turning Brute Force Into Something That Scales",
    slug: "dynamic-programming-field-notes",
    date: "2020 - Present",
    readTime: 6,
    excerpt:
      "How I think about dynamic programming — from spotting overlapping subproblems in a contest to using the same instinct to design caching and reprocessing logic in production systems.",
    categories: ["Data Structures", "Algorithms", "Competitive Programming"],
    featuredImage: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    sections: [
      {
        heading: "Why Dynamic Programming Matters",
        body: [
          "Dynamic programming (DP) is what happens when a brute-force recursive solution keeps re-solving the same subproblem, and you decide to remember the answer instead of recomputing it. Two properties make a problem a DP candidate: optimal substructure, where the best answer is built from the best answers to its subproblems, and overlapping subproblems, where the same subproblem recurs throughout a naive recursion tree.",
          "In competitive programming, spotting these two properties quickly is often the difference between a solution that finishes in time and one that times out. The same instinct — cache what's expensive to recompute — shows up constantly in production systems, from memoized API calls to precomputed aggregation tables.",
        ],
      },
      {
        heading: "Top-Down vs. Bottom-Up",
        body: [
          "Top-down DP (memoization) starts from the original problem and recurses downward, storing each subproblem's answer the first time it's computed. It reads close to the natural recursive definition, which makes it easier to derive correctly under time pressure.",
          "Bottom-up DP (tabulation) builds the answer iteratively from the smallest subproblems upward. It avoids recursion overhead and stack limits, and it's usually easier to optimize for memory once the recurrence is proven correct.",
        ],
        bullets: [
          "Start top-down to find the correct recurrence; convert to bottom-up once the transition is proven.",
          "Watch for problems where only the last k rows of the table are needed — that's a rolling-array space optimization.",
          "Most DP bugs come from an incomplete state definition, not a wrong transition.",
        ],
      },
      {
        heading: "Patterns Worth Knowing Cold",
        body: [
          "A handful of patterns cover most interview and contest DP problems: 0/1 and unbounded knapsack, longest increasing subsequence (including its O(n log n) form), interval DP such as matrix chain multiplication, digit DP for counting numbers with a property, and bitmask DP for small-set combinatorial problems like TSP on at most ~20 nodes.",
          "Recognizing which pattern a new problem maps to is a skill built from repetition — the reason I keep returning to problem sets even outside of active contests.",
        ],
        bullets: [
          "Knapsack family — subset sum, partition, coin change.",
          "Sequence DP — LIS, LCS, edit distance.",
          "Interval DP — matrix chain multiplication, palindrome partitioning.",
          "Bitmask DP — assignment problems, small-graph TSP.",
        ],
      },
    ],
  },
  {
    title: "Segment Trees: Answering Range Queries Without Rescanning the Array",
    slug: "segment-trees-range-queries",
    date: "2020 - Present",
    readTime: 5,
    excerpt:
      "A practical walkthrough of segment trees — the structure that turns O(n) range queries and updates into O(log n) — and why the same idea underlies real-time analytics and time-series systems.",
    categories: ["Data Structures", "Algorithms", "Competitive Programming"],
    featuredImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    sections: [
      {
        heading: "The Problem It Solves",
        body: [
          "A segment tree answers two kinds of questions efficiently on an array: 'what is the sum/min/max/gcd of elements between index l and r?' and 'update the value at index i.' A naive approach recomputes a range answer in O(n) per query; a segment tree pushes both operations down to O(log n) by precomputing answers for fixed sub-ranges and combining them.",
          "It's built as a binary tree over the array, where each node stores the aggregated answer for the range it represents: the root covers the whole array, leaves cover single elements, and every internal node combines its two children.",
        ],
      },
      {
        heading: "Building, Querying, and Updating",
        body: [
          "Construction is O(n): build recursively, combining children into parents. A query walks down from the root, splitting the requested range across at most O(log n) nodes whose ranges are fully or partially covered. A point update walks a single root-to-leaf path and recomputes the O(log n) ancestors on the way back up.",
        ],
        bullets: [
          "Point update, range query — the classic form (sum, min, max, gcd).",
          "Range update, range query — needs lazy propagation to stay O(log n).",
          "Merge sort tree, persistent segment tree — variants for order statistics and versioned history.",
        ],
      },
      {
        heading: "Where the Same Idea Shows Up in Production",
        body: [
          "The core trick — precompute range aggregates so you never rescan raw data — is the same idea behind time-series rollups, real-time dashboards, and range-based rate limiters. Building progress tracking and queue diagnostics for Nexius AI relied on the same mental model: don't recompute a summary from scratch on every request; maintain a structure that answers 'what happened in this window' in far less than linear time.",
          "Competitive programming is where I learned to reach for this trade-off instinctively — spend a little more on the write path so the read path stays fast, which matters far more once traffic scales.",
        ],
      },
    ],
  },
  {
    title: "Graphs: The Data Structure Behind Almost Every Interesting System",
    slug: "graph-algorithms-field-guide",
    date: "2020 - Present",
    readTime: 7,
    excerpt:
      "Adjacency lists, traversal, shortest paths, and union-find — the graph toolkit I reach for in contests, and the same toolkit that shows up in dependency graphs, service topologies, and marketplace matching.",
    categories: ["Data Structures", "Algorithms", "Competitive Programming"],
    featuredImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    sections: [
      {
        heading: "Representations First",
        body: [
          "Almost every graph problem starts with picking a representation. An adjacency list (one list per node) is the default for sparse graphs and most competitive programming problems — O(V + E) space and fast iteration over a node's neighbors. An adjacency matrix trades space (O(V²)) for O(1) edge lookups, useful when the graph is dense or small.",
          "Getting the representation right early avoids rewriting the whole solution later — something I learned the hard way in early contests.",
        ],
      },
      {
        heading: "Traversal and Shortest Paths",
        body: [
          "BFS explores level by level and gives shortest paths on unweighted graphs; DFS explores depth-first and underlies cycle detection, topological sort, and connected components. For weighted graphs, Dijkstra's algorithm (with a priority queue) handles non-negative weights in O((V + E) log V); Bellman-Ford handles negative weights and detects negative cycles in O(VE); Floyd-Warshall computes all-pairs shortest paths in O(V³) when the graph is small enough.",
        ],
        bullets: [
          "BFS/DFS — connectivity, cycle detection, topological sort.",
          "Dijkstra — single-source shortest path, non-negative weights.",
          "Bellman-Ford — negative weights, negative-cycle detection.",
          "Floyd-Warshall — all-pairs shortest path on small graphs.",
        ],
      },
      {
        heading: "Beyond Shortest Path",
        body: [
          "Union-Find (Disjoint Set Union) answers connectivity and grouping questions in near-constant time per operation and is the backbone of Kruskal's minimum spanning tree algorithm. Tarjan's and Kosaraju's algorithms find strongly connected components in directed graphs, which matters for anything modeling dependencies or cyclic relationships.",
          "These structures map directly onto real systems: a service dependency graph is a DAG that needs topological sort before deployment ordering makes sense; a C2C marketplace matching buyers to sellers across categories is a bipartite graph; and clustering ambiguous transactions, like I did at Nexius AI, borrows the same connected-components thinking used to group nodes in a graph.",
        ],
      },
    ],
  },
];
