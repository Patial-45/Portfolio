export interface Project {
  id: string;
  title: string;
  category: 'ai' | 'fullstack' | 'automation';
  tagline: string;
  subtitle: string;
  description: string;
  bullets: string[];
  metrics: string[];
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
  image: string;
  badge?: string;
}

export interface Service {
  id: string;
  title: string;
  tags: string[];
  description: string;
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  avatarText: string;
}

export interface Article {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  tag: string;
  image: string;
  link: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Sahil Patial',
    targetDesignations: [
      'Full Stack Developer',
      'Software Engineer',
      'Software Developer'
    ],
    primaryRole: 'Full Stack Software Engineer',
    location: 'Chandigarh, India',
    email: 'patial2001@gmail.com',
    phone: '+91-7876369379',
    linkedin: 'https://linkedin.com/in/sahil-patial45',
    github: 'https://github.com/Patial-45',
    tagline: 'Building High-Impact Full-Stack & AI Systems.',
    avatar: '/images/sahil-portrait.jpg',
    bioHeadline: "Hey! I’m Sahil, a Full-Stack Software Engineer based in Chandigarh, India.",
    bioParagraphs: [
      "I specialize in architecting production web applications, high-throughput distributed backends, and AI-integrated systems using React, TypeScript, Node.js, and PostgreSQL with pgvector.",
      "At De Corporate Consulting, I architected and built an end-to-end AI-powered client-job matching platform combining semantic vector search with an explainable scoring engine, and automated sourcing workflows adopted across a 30–40 person team.",
      "I am deeply passionate about bridging modern user experiences with robust backend engineering and LLM-driven intelligence. I am pursuing my Master of Computer Applications in AI & Machine Learning at Chandigarh University (CGPA 9.0)."
    ]
  },

  skills: {
    languages: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'C/C++', 'SQL'],
    frontend: ['React 19', 'Next.js', 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS', 'Vite', 'Material UI', 'HTML5/CSS3'],
    backend: ['Node.js', 'Express.js', 'REST APIs', 'Prisma ORM', 'JWT Auth', 'OAuth', 'BullMQ', 'Zod'],
    databases: ['PostgreSQL (pgvector)', 'MongoDB', 'Redis', 'Elasticsearch', 'MySQL'],
    ai_ml: ['OpenAI API', 'Google Gemini API', 'Vector Embeddings', 'Semantic Search', 'Prompt Engineering', 'Groq (Llama 3.1)'],
    devops: ['AWS', 'Google Cloud (GCP)', 'Docker', 'Nginx', 'Git & GitHub Actions', 'CI/CD Pipelines'],
    core: ['OOP & System Design', 'Data Structures & Algorithms', 'Database Management (DBMS)', 'Operating Systems', 'Computer Networks']
  },

  services: [
    {
      id: 'fullstack',
      title: 'Full-Stack Web Engineering',
      tags: ['React 19', 'TypeScript', 'Next.js', 'Sub-200ms REST APIs', 'Microservices'],
      description: 'End-to-end web architecture engineered for speed, clean state management, and seamless responsiveness across devices.',
      deliverables: [
        'Modern React 19 / TypeScript SPAs with fluid UX',
        'High-performance Node.js/Express API servers',
        'Client-side state management with Redux & TanStack Query',
        'Code splitting, lazy loading, and Core Web Vitals optimization'
      ]
    },
    {
      id: 'ai-systems',
      title: 'AI & LLM Integration Systems',
      tags: ['Semantic Search', 'pgvector', 'OpenAI & Gemini APIs', 'Prompt Engineering', 'RAG'],
      description: 'Designing intelligent vector matching, explainable scoring algorithms, and autonomous LLM workflows that solve business problems.',
      deliverables: [
        'Hybrid vector search (PostgreSQL pgvector + BM25 keyword ranking)',
        'Explainable AI scoring engines and automated compatibility metrics',
        'Custom prompt pipelines and structured JSON schema validations',
        'Automated real-time ATS optimization & resume analysis'
      ]
    },
    {
      id: 'database-arch',
      title: 'Database Architecture & Backend',
      tags: ['PostgreSQL', 'MongoDB Indexing', 'Redis Caching', 'BullMQ Queues', 'Elasticsearch'],
      description: 'Scalable data models, asynchronous task processing pipelines, and multi-tenant security structures.',
      deliverables: [
        'Database indexing and query execution plan optimization',
        'Distributed background job processing with Redis & BullMQ',
        'RBAC authorization and secure JWT/OAuth session management',
        'Elasticsearch full-text search indexing over 20,000+ entities'
      ]
    },
    {
      id: 'automation',
      title: 'Automation & Internal Tooling',
      tags: ['Chrome Extensions', 'Python Pipelines', 'Selenium', 'Docker', 'CI/CD'],
      description: 'Bespoke automation tools and scrapers that replace manual operational bottlenecks and 10x team throughput.',
      deliverables: [
        'Custom browser extensions for candidate & data sourcing',
        'High-volume web scrapers (Selenium + BeautifulSoup) handling 500+ daily listings',
        'Automated email extraction and CRM enrichment pipelines',
        'Dockerized deployments with streamlined GitHub Actions CI/CD'
      ]
    }
  ] as Service[],

  projects: [
    {
      id: 'ai-resume-builder',
      title: 'AI-Powered Resume Scoring & Job Matcher',
      category: 'ai',
      tagline: 'ATS Optimization Engine & Automated Job Scraper',
      subtitle: 'TypeScript • Next.js / MERN • Python • OpenAI GPT-4 & Groq • BeautifulSoup',
      description: 'Full-stack AI platform that parses resumes, scores job description compatibility with 92% accuracy, and extracts 500+ targeted listings daily via automated scraping pipelines.',
      bullets: [
        'Integrated OpenAI GPT-4 and Groq (Llama 3.1) to analyze and score candidate compatibility with 92% accuracy.',
        'Engineered an automated Python job-scraping pipeline (BeautifulSoup + Selenium) pulling 500+ verified listings daily, slashing job search time by 70%.',
        'Rebuilt the UI with React 19, real-time ATS keyword optimization, and interactive resume builder with live scoring.'
      ],
      metrics: ['92% Match Accuracy', '500+ Daily Listings', '70% Sourcing Time Saved'],
      tech: ['TypeScript', 'React 19', 'Node.js', 'Python', 'OpenAI API', 'Groq', 'Selenium'],
      githubUrl: 'https://github.com/Patial-45/AI_Based_Resume_Builder',
      image: '/images/project-mock-1.png',
      badge: 'Featured AI Project'
    },
    {
      id: 'executive-search',
      title: 'Executive Search & Hybrid Vector Engine',
      category: 'fullstack',
      tagline: 'Enterprise AI Recruitment & Candidate Matching Platform',
      subtitle: 'React • TypeScript • Node.js • PostgreSQL (pgvector) • Redis • Elasticsearch',
      description: 'End-to-end recruitment matching engine built at De Corporate Consulting combining dense semantic vector search with an explainable scoring algorithm.',
      bullets: [
        'Architected hybrid vector search utilizing PostgreSQL pgvector and Elasticsearch to rank and justify candidate-job compatibility.',
        'Curated and indexed 1,000+ verified companies and 20,000+ corporate contacts across BFSI, Tech, and Healthcare.',
        'Led a 10-person operations pilot, surfacing 180+ daily matches and 80+ senior-level roles vetted personally.'
      ],
      metrics: ['20,000+ Contacts Indexed', '180+ Daily Matches', 'Redis Task Queue'],
      tech: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'pgvector', 'Redis', 'BullMQ', 'Elasticsearch'],
      githubUrl: 'https://github.com/Patial-45/executive-search-platform',
      image: '/images/project-mock-2.png',
      badge: 'Production System'
    },
    {
      id: 'online-freelance',
      title: 'VectraWork — Freelance Marketplace',
      category: 'fullstack',
      tagline: 'Production Multi-User Bidding & Work Platform',
      subtitle: 'MERN Stack • Redux Toolkit • JWT + RBAC • REST APIs • MongoDB',
      description: 'Full-featured freelance marketplace with real-time bidding, milestone workflows, JWT authentication, and compound-indexed queries.',
      bullets: [
        'Built secure REST APIs with sub-200ms average response time using Node.js, Express, and MongoDB compound indexes.',
        'Optimized React frontend performance with Redux Toolkit, code splitting, and lazy loading, cutting page load time by 35%.',
        'Implemented Role-Based Access Control (RBAC) securing 100+ active client and freelancer accounts.'
      ],
      metrics: ['<200ms API Latency', '35% Faster Load Time', '100+ Active Users'],
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux Toolkit', 'JWT', 'REST API'],
      githubUrl: 'https://github.com/Patial-45/Online-Freelance-Platform',
      image: '/images/project-mock-3.png',
      badge: 'Full Stack App'
    },
    {
      id: 'automation-tooling',
      title: 'Operations Intelligence & Sourcing Suite',
      category: 'automation',
      tagline: 'Custom Chrome Extension & AI Sourcing Pipelines',
      subtitle: 'JavaScript • Chrome Extension API • Python • AI Agents • REST',
      description: 'Internal tooling suite built for De Corporate Consulting operations team to automate candidate profile extraction and email verification.',
      bullets: [
        'Engineered custom Chrome extension for one-click LinkedIn and talent platform scraping, directly feeding into internal databases.',
        'Automated email-discovery workflows and AI-agent candidate evaluation adopted by a 30–40 person operations division.',
        'Led and mentored a 3-person database team on code reviews, data validation, and deployment.'
      ],
      metrics: ['40-Person Team Adoption', '3x Sourcing Throughput', 'Automated Scraping'],
      tech: ['JavaScript', 'Chrome Extensions API', 'Python', 'BeautifulSoup', 'Node.js'],
      githubUrl: 'https://github.com/Patial-45',
      image: '/images/project-mock-4.png',
      badge: 'Internal Tooling'
    },
    {
      id: 'quiet-hours',
      title: 'Quite Hours — Focus & Workflow Utility',
      category: 'automation',
      tagline: 'Developer Deep Work Orchestrator',
      subtitle: 'TypeScript • Node.js • Automation Tool',
      description: 'Intelligent focus utility designed to automate developer schedules, suppress interruptions, and boost uninterrupted coding blocks.',
      bullets: [
        'Built with TypeScript focusing on lightweight background process management.',
        'Configurable work session rules and automated calendar integration.'
      ],
      metrics: ['Deep Work Optimization', 'Zero Overhead', 'TypeScript'],
      tech: ['TypeScript', 'Node.js', 'CLI Tools'],
      githubUrl: 'https://github.com/Patial-45/quite-hours',
      image: '/images/thought-1.png',
      badge: 'Open Source'
    }
  ] as Project[],

  experience: [
    {
      company: 'De Corporate Consulting Pvt. Ltd.',
      role: 'Senior Operations Associate & Full Stack Lead',
      location: 'Chandigarh, India',
      period: 'Sep 2025 – Present',
      bullets: [
        'Architected and built an AI-powered client-job matching platform end-to-end using React, TypeScript, Node.js/Express, PostgreSQL with pgvector, Elasticsearch, and Redis/BullMQ.',
        'Built the company’s core database from scratch to 1,000+ verified companies and 20,000+ verified corporate contacts across BFSI, Tech/SaaS, Healthcare, and VC/PE.',
        'Leading a 10-person pilot of the matching platform ahead of full production rollout, surfacing 180+ job matches daily.',
        'Built and shipped internal automation tooling (Chrome extension for LinkedIn scraping, email-scraping tool, AI agent workflows) adopted across a 30–40 person team.',
        'Lead a 3-person database engineering team: designed training, daily code review process, and technical mentorship.'
      ]
    },
    {
      company: 'Sheryians Coding School',
      role: 'Re-Imagine — National-Level Web Dev Hackathon Finalist',
      location: 'India (National)',
      period: 'Sep 2024',
      bullets: [
        'Competed nationally as part of a 3-member engineering team.',
        'Designed and deployed 2 full-stack web applications (React, Node.js, MongoDB) across 2 elimination rounds within a 36-hour sprint.'
      ]
    }
  ],

  education: [
    {
      institution: 'Chandigarh University',
      degree: 'Master of Computer Applications – Artificial Intelligence & Machine Learning',
      location: 'Mohali, Punjab',
      period: 'Jan 2026 – Present',
      score: 'CGPA: 9.0'
    },
    {
      institution: 'Chandigarh University',
      degree: 'Bachelor of Computer Applications',
      location: 'Mohali, Punjab',
      period: 'Sep 2022 – Jun 2025'
    }
  ],

  certifications: [
    {
      title: 'OCI 2025 Certified Generative AI Professional',
      issuer: 'Oracle Cloud Infrastructure',
      year: '2025'
    },
    {
      title: 'Oracle Data Science Professional',
      issuer: 'Oracle',
      year: '2025'
    },
    {
      title: 'Oracle DevOps Professional',
      issuer: 'Oracle',
      year: '2025'
    },
    {
      title: 'Prompt Design in Vertex AI',
      issuer: 'Google Cloud',
      year: '2025'
    },
    {
      title: 'McKinsey Forward Program',
      issuer: 'McKinsey & Company',
      year: '2024'
    },
    {
      title: 'React JS Professional',
      issuer: 'Infosys Springboard',
      year: '2024'
    }
  ],

  testimonials: [
    {
      id: '1',
      quote: 'Sahil architected our AI matching platform end-to-end. His ability to bridge complex PostgreSQL vector embeddings with an intuitive, explainable interface cut our team’s manual sourcing time drastically.',
      author: 'Operations Director',
      role: 'Operations & Strategy',
      organization: 'De Corporate Consulting',
      avatarText: 'OD'
    },
    {
      id: '2',
      quote: 'During our 36-hour Re-Imagine hackathon sprint, Sahil was an absolute powerhouse. He orchestrated the backend APIs and connected the React frontend seamlessly under brutal deadlines.',
      author: 'Aman Sharma',
      role: 'Hackathon Teammate & Engineer',
      organization: 'Sheryians Hackathon',
      avatarText: 'AS'
    },
    {
      id: '3',
      quote: 'The ATS scoring system Sahil developed boasts 92% match accuracy. He approaches full-stack engineering with real rigor — prioritizing latency, clean database schemas, and seamless UI.',
      author: 'Priya Verma',
      role: 'Full-Stack Collaborator',
      organization: 'Tech Community',
      avatarText: 'PV'
    },
    {
      id: '4',
      quote: 'Sahil built internal browser extensions that our entire 40-person team uses on a daily basis. He consistently finds the high-leverage bottlenecks and automates them away with clean code.',
      author: 'Rohan Mehta',
      role: 'Senior Associate',
      organization: 'Operations Division',
      avatarText: 'RM'
    }
  ] as Testimonial[],

  articles: [
    {
      id: '1',
      title: 'Building Production AI Systems with Hybrid Vector Search',
      date: 'Jan 15, 2026',
      readTime: '6 min read',
      excerpt: 'How combining PostgreSQL pgvector embeddings with BM25 keyword ranking creates explainable, high-recall candidate matching.',
      tag: 'AI Engineering',
      image: '/images/thought-1.png',
      link: 'https://github.com/Patial-45/executive-search-platform'
    },
    {
      id: '2',
      title: 'Sub-200ms Full-Stack Latency: From React 19 to Redis Queues',
      date: 'Feb 02, 2026',
      readTime: '5 min read',
      excerpt: 'Practical techniques in code splitting, TanStack Query caching, and Redis/BullMQ task offloading for production apps.',
      tag: 'System Design',
      image: '/images/thought-2.png',
      link: 'https://github.com/Patial-45/Online-Freelance-Platform'
    },
    {
      id: '3',
      title: 'Why Most ATS Filters Fail & How LLMs Fix Resume Scoring',
      date: 'Mar 10, 2026',
      readTime: '7 min read',
      excerpt: 'Moving beyond naive keyword frequency checks to semantic compatibility, qualification verification, and automated scoring.',
      tag: 'LLM Architectures',
      image: '/images/thought-3.png',
      link: 'https://github.com/Patial-45/AI_Based_Resume_Builder'
    }
  ] as Article[]
};
