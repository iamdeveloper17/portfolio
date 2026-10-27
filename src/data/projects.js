export const projects = [
  {
    id: 1,
    title: "MeterFlow — Usage-Based Billing Platform",
    description: "Full-stack SaaS for usage-based billing (Stripe Meters alternative). Event-driven metering with Fastify + BullMQ, Redis real-time counters, Postgres aggregation via 5-min cron, tiered pricing engine, Google OAuth, SHA-256 API keys, and webhooks. Monorepo with Turborepo. Deployed on Vercel + Railway + Neon + Upstash.",
    image: "/images/meterflow.png",
    tags: ["Next.js 15", "Fastify", "TypeScript", "Prisma", "Redis", "BullMQ", "NextAuth", "Recharts"],
    liveLink: "https://meterflow-beta.vercel.app",
    githubLink: "https://github.com/iamdeveloper17/meterflow",
    featured: true,
  },
  {
    id: 2,
    title: "NextForge — AI SaaS Starter Kit",
    description: "Production-ready open-source AI SaaS starter kit with Google OAuth authentication, real-time AI chat (Groq streaming), full chat history with sidebar and bulk delete, Paddle payment integration ($19/month subscription), dashboard with analytics, and fully responsive mobile-first UI. Built to help developers ship AI products in days, not months.",
    image: "/images/nextforge.png",
    tags: ["Next.js 16", "TypeScript", "MongoDB", "Prisma", "NextAuth v5", "Groq AI", "Paddle", "Tailwind CSS v4", "shadcn/ui", "Vercel"],
    liveLink: "https://nextforge-liard.vercel.app",
    githubLink: "https://github.com/iamdeveloper17/nextforge",
    featured: true,
  },
  {
    id: 3,
    title: "Codexa — AI Design to Code Generator",
    description: "Production-ready SaaS platform that converts natural language prompts into complete React + Tailwind components in seconds. Features real-time streaming AI, GSAP-powered cinematic animations, secure user authentication, and database-backed project management.",
    image: "/images/codexa.png",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "GSAP", "Supabase", "OpenRouter", "Vercel"],
    liveLink: "https://codexa-iota-five.vercel.app",
    githubLink: "https://github.com/iamdeveloper17/codexa",
    featured: true,
  },
  {
    id: 4,
    title: "ResumeAI",
    description: "AI-powered resume builder with live preview, Gemini AI content suggestions, ATS-friendly templates, and one-click clean PDF export. Features secure authentication, auto-save, and real-time editing.",
    image: "/images/resumeai.png",
    tags: ["Next.js 16", "TypeScript", "Gemini AI", "MongoDB", "NextAuth", "Tailwind CSS", "Zustand", "Vercel"],
    liveLink: "https://resume-ai-alpha-topaz.vercel.app/",
    githubLink: "https://github.com/iamdeveloper17/ResumeAI",
    featured: true,
  },
  {
    id: 5,
    title: "SupportFlow",
    description: "Multi-tenant SaaS helpdesk platform for managing customer support tickets. Features role-based access (Admin/Agent/Customer), real-time chat via Socket.io, email notifications, analytics dashboard, and subscription billing with Stripe/Razorpay.",
    image: "/images/supportflow.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Redux Toolkit", "JWT", "Docker", "Stripe", "Redis"],
    liveLink: "https://support-flow-gamma.vercel.app",
    githubLink: "https://github.com/iamdeveloper17/SupportFlow",
    featured: true,
  },
  {
    id: 6,
    title: "MMA Tradex LLP",
    description:
      "A production-grade full-stack platform for an AI & IPR consultancy firm. Features an AI Project Estimator, IPR Patentability Analyzer with PDF report generation, AI Chatbot with voice input, AI Smart Compose for contact forms, and a secure Admin CRM dashboard to manage leads and inquiries. Built with React, Tailwind CSS, Express, MongoDB, and Google Gemini AI.",
    image: "/images/mmatradex.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Gemini AI",
      "REST API",
      "jsPDF",
      "Admin Dashboard"
    ],
    liveLink: "https://mmatradex.com",
    githubLink: "https://github.com/iamdeveloper17/MMA_Tradex",
    highlights: [
      "Integrated Google Gemini AI for 4 distinct use cases",
      "Implemented secure Admin panel with hidden access",
      "Generated downloadable PDF reports using html2canvas & jsPDF",
      "Built custom dark/light theme using CSS variables & Tailwind"
    ]
  },
  {
    id: 7,
    title: "Divyaputri Tradex LLP",
    description:
      "A production-ready, full-stack platform for a nano-technology company. Built with React & Vite, Express, and MongoDB. Features a secure Admin Dashboard, Real-time AI integrations (Gemini API) for document reading and smart quotations, and a fully responsive UI.",
    image: "/images/divyaputri-tradex.png",
    tags: ["React", "Vite", "Node.js", "Express", "MongoDB", "REST API", "Gemini AI", "JWT Auth"],
    liveLink: "https://divyaputritradex.com",
    githubLink: "https://github.com/iamdeveloper17/divyaputri-tradex-india",
  },
  {
    id: 8,
    title: "Vego & Thomson",
    description:
      "Multi-page website for a group operating in infrastructure, healthcare, technology and agro. React with React Router on the frontend, and an Express and MongoDB backend that saves enquiries and emails them to the team through SMTP.",
    image: "/images/vego-thomson.png",
    tags: ["React", "React Router", "Node.js", "Express", "MongoDB", "Nodemailer"],
    liveLink: "https://vegothomsonindia.in",
    githubLink: "https://github.com/iamdeveloper17/vego-thomson",
  },
];

// ⚡ Naya project add karne ke liye bas upar wale array mein ek aur object push kar do