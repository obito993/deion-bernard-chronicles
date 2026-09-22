export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  mission: string;
  techUsed: string[];
  features: string[];
  result: string;
  image: string;
  githubUrl: string | null;
  liveUrl?: string;
  color: "yellow" | "violet" | "red" | "paper";
  rotate: number;
  badge?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "personal-hub",
    number: "INVENTION #01",
    title: "PERSONAL HUB",
    subtitle: "PRODUCTIVITY / WEB APP / AI",
    duration: "Feb 2025 – Present",
    mission: "PERSONAL HUB is a personal productivity OS that brings useful tools, utilities, search, study workflows, coding practice, career workflows, AI assistance, and everyday digital resources together in one unified workspace.",
    techUsed: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI Integration", "Productivity OS"],
    features: [
      "Built a unified personal digital command center connecting tools, utilities, search, and study workflows.",
      "Integrated AI assistance, coding practice engines, and career workflows for streamlined daily productivity.",
      "Developed a responsive multi-tool interface with fast resource navigation and centralized digital workspace capabilities.",
    ],
    result: "Serves as Deion's primary digital command center and unified personal productivity OS.",
    image: "/media/project-personalhub.png",
    githubUrl: "https://github.com/obito993/PERSONAL-HUB",
    liveUrl: "https://personal-hub-one-steel.vercel.app/",
    color: "yellow",
    rotate: -1,
    badge: "★ TOP PROJECT",
  },
  {
    id: "ai-tool-box",
    number: "INVENTION #02",
    title: "AI TOOL BOX",
    subtitle: "Comprehensive AI Utility Platform",
    duration: "Jan 2025 – Present",
    mission: "Build a full-stack high-performance AI utility suite serving over 100+ automated tools for creators and developers.",
    techUsed: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "JWT Auth", "REST APIs", "CI/CD"],
    features: [
      "Built full-stack AI Toolbox using Next.js 15, React, TypeScript, and Tailwind CSS with modern UI.",
      "Developed 100+ AI tools and utilities including PDF, image, text, developer, calculator, and converter tools.",
      "Implemented a secure admin dashboard with JWT authentication for managing tools, categories, and users.",
      "Optimized platform for SEO, performance, and Core Web Vitals using Server Components, dynamic metadata, and caching.",
    ],
    result: "Engineered a production-ready ecosystem handling 100+ tools with lightning fast response times and secure admin operations.",
    image: "/media/project-aitoolbox.png",
    githubUrl: "",
    liveUrl: "https://aboriginal-smart-tool-core.base44.app/",
    color: "violet",
    rotate: 1,
  },
  {
    id: "spam-detection-website",
    number: "INVENTION #03",
    title: "SPAM DETECTION WEBSITE",
    subtitle: "Machine Learning Security Filter",
    duration: "Dec 2025 – Apr 2026",
    mission: "Train and deploy intelligent machine learning pipelines to detect malicious messages and spam content in real-time.",
    techUsed: ["Python", "Machine Learning", "ETL", "REST APIs", "Data Visualization", "Docker"],
    features: [
      "Performed functional and usability testing on machine learning web-based classification engines.",
      "Designed and executed robust test cases for data ingestion, identifying model edge-case defects.",
      "Collaborated with data scientists and web developers to resolve classification bottlenecks.",
      "Acquired data from primary sources and maintained database records to ensure high data integrity.",
    ],
    result: "Achieved high classification accuracy with containerized Docker deployment and REST API integrations.",
    image: "/media/project-spam.png",
    githubUrl: "https://github.com/obito993/spam-guard-ai",
    liveUrl: "https://019c48ac-04e1-7a18-9bd2-ed50af619793.arena.site/",
    color: "red",
    rotate: 1.5,
  },
  {
    id: "virtuoso-ai",
    number: "INVENTION #04",
    title: "VIRTUOSO AI",
    subtitle: "AI Music & Pitch Analysis Platform",
    duration: "Feb 2025 – Present",
    mission: "Transform instrument practice with real-time acoustic pitch detection and personalized AI music feedback.",
    techUsed: ["Next.js", "React", "TypeScript", "FastAPI", "Python", "PostgreSQL", "Machine Learning"],
    features: [
      "Built an AI-powered music learning platform using Next.js, React, TypeScript, Tailwind CSS, FastAPI, and PostgreSQL.",
      "Developed features for learning multiple instruments with personalized lessons, practice exercises, and interactive music theory.",
      "Integrated AI to analyze users' playing through the microphone, providing real-time feedback on pitch and rhythm.",
      "Created a responsive interface with secure authentication, dashboard, cloud storage, and AI-powered practice recommendations.",
    ],
    result: "Combines Deion's dual passion for computer science and music into an interactive acoustic learning engine.",
    image: "/media/project-virtuoso.png",
    githubUrl: "https://github.com/obito993/VirtuosoAI",
    liveUrl: "https://ai-music-learning-pl-2sw5.bolt.host/",
    color: "paper",
    rotate: -1.5,
  },
  {
    id: "automatic-seating-allocation",
    number: "INVENTION #05",
    title: "AUTOMATIC SEATING ALLOCATION",
    subtitle: "Institutional Examination Management Engine",
    duration: "Nov 2025 – May 2026",
    mission: "Automate complex examination seating arrangements for 300+ students across variable hall capacities.",
    techUsed: ["Excel Automation", "ETL", "Data Management", "Data Visualization", "Report Generation"],
    features: [
      "Engineered an automated seating allocation system assigning 300+ students to examination halls based on capacity, reducing allocation time by 70%.",
      "Built an editable timetable module enabling real-time schedule updates, reducing revision turnaround from hours to minutes.",
      "Automated multi-format report generation (Excel, PDF, image export), enabling seating plans to be distributed with a single click.",
      "Delivered a scalable solution that improved allocation accuracy by 95% and was adopted as the primary exam management tool.",
    ],
    result: "Saved 70% scheduling time and achieved 95% allocation accuracy across official college examinations.",
    image: "/media/project-seating.png",
    githubUrl: "https://github.com/obito993/Seating-Allocation-Website-AI",
    liveUrl: "https://019c93ad-db9a-7fba-bf17-0f05b600eb95.arena.site/",
    color: "yellow",
    rotate: 1,
  },
];
