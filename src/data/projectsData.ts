export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  period: string;
  tools: string[];
  description: string;
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  theme: "orange" | "amber" | "emerald" | "cyan";
}

export const projectsData: ProjectItem[] = [
  {
    id: "ai-tool-box",
    number: "01",
    title: "AI TOOL BOX",
    period: "Jan 2025 – Present",
    tools: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JWT Authentication",
      "REST APIs",
      "CI/CD",
    ],
    description:
      "Built a full-stack AI Toolbox using Next.js 15, React, TypeScript, and Tailwind CSS with a modern, responsive UI.",
    highlights: [
      "Developed 100+ AI tools and utilities including PDF, image, text, developer, calculator, and converter tools.",
      "Implemented a secure admin dashboard with JWT authentication for managing tools, blogs, categories, and users.",
      "Optimized the platform for SEO, performance, and Core Web Vitals using server components, dynamic metadata, image optimization, and caching.",
    ],
    liveUrl: "https://aboriginal-smart-tool-core.base44.app/",
    category: "Full-Stack AI Platform",
    theme: "orange",
  },
  {
    id: "spam-detection-website",
    number: "02",
    title: "SPAM DETECTION WEBSITE",
    period: "Dec 2025 – Apr 2026",
    tools: [
      "Python",
      "Machine Learning",
      "ETL",
      "REST APIs",
      "Data Visualization",
      "Docker",
    ],
    description:
      "Engineered an end-to-end spam detection pipeline and web interface utilizing advanced machine learning models and data preprocessing techniques.",
    highlights: [
      "Performed data extraction, transformation, and loading (ETL) to preprocess text and feature vectors.",
      "Trained and evaluated machine learning classifiers achieving high accuracy in spam filter classification.",
      "Containerized application with Docker and exposed REST API endpoints for seamless web service integration.",
      "Implemented interactive data visualization dashboards for monitoring classification statistics and metric telemetry.",
    ],
    githubUrl: "https://github.com/obito993/spam-guard-ai",
    liveUrl: "https://019c48ac-04e1-7a18-9bd2-ed50af619793.arena.site/",
    category: "Machine Learning & Security",
    theme: "cyan",
  },
  {
    id: "virtuoso-ai",
    number: "03",
    title: "VIRTUOSO AI",
    period: "Feb 2025 – Present",
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Machine Learning",
      "REST APIs",
    ],
    description:
      "Built an AI-powered music learning platform using Next.js, React, TypeScript, Tailwind CSS, FastAPI, Python, and PostgreSQL.",
    highlights: [
      "Developed features for learning multiple instruments with personalized lessons, practice exercises, progress tracking, and interactive music theory.",
      "Integrated AI to analyze users' playing through the microphone, providing real-time feedback on pitch and rhythm, and recommending personalized practice sessions.",
      "Created a responsive, user-friendly interface with secure authentication, dashboard, cloud storage integration, and AI-powered learning assistance.",
    ],
    githubUrl: "https://github.com/obito993/VirtuosoAI",
    liveUrl: "https://ai-music-learning-pl-2sw5.bolt.host/",
    category: "AI & EdTech Music Platform",
    theme: "amber",
  },
  {
    id: "automatic-seating-allocation",
    number: "04",
    title: "AUTOMATIC SEATING ALLOCATION",
    period: "Nov 2025 – May 2026",
    tools: [
      "Excel Automation",
      "ETL",
      "Data Management",
      "Data Visualization",
      "Report Generation",
    ],
    description:
      "Engineered an automated seating allocation system assigning 300+ students to examination halls based on capacity, eliminating manual scheduling.",
    highlights: [
      "Reduced examination allocation time by 70% while assigning 300+ students across examination venues.",
      "Built an editable timetable module enabling real-time schedule updates, reducing revision turnaround from hours to minutes.",
      "Automated multi-format report generation (Excel, PDF, image export), enabling seating plans to be distributed with a single click.",
      "Delivered a scalable Excel-based solution that improved allocation accuracy by 95% and was adopted as the primary tool for examination management.",
    ],
    githubUrl: "https://github.com/obito993/Seating-Allocation-Website-AI",
    liveUrl: "https://019c93ad-db9a-7fba-bf17-0f05b600eb95.arena.site/",
    category: "Data Engineering & Automation",
    theme: "emerald",
  },
];
