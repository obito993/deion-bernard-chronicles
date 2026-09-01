export interface DeionFact {
  category: "Language" | "Interest" | "Education" | "Developer" | "Vocalist" | "Achievement";
  icon: string;
  title: string;
  detail: string;
}

export const terminalFacts: DeionFact[] = [
  {
    category: "Language",
    icon: "🗣️",
    title: "Trilingual Communicator",
    detail: "Deion speaks Tamil, French, and English.",
  },
  {
    category: "Education",
    icon: "🎓",
    title: "Computer Science Graduate",
    detail: "Graduated with 8.5/10 CGPA from Patrician College of Arts and Science, Chennai.",
  },
  {
    category: "Developer",
    icon: "💻",
    title: "Full-Stack & AI Builder",
    detail: "Built AI Tool Box (100+ tools), Virtuoso AI, Spam Detector, and Seating Allocation software.",
  },
  {
    category: "Vocalist",
    icon: "🎵",
    title: "Tenor & Bass Vocalist",
    detail: "Won 2nd prize in Western Music Competitions with the Shamrocks music ensemble.",
  },
  {
    category: "Interest",
    icon: "🍿",
    title: "Movie & Cinema Enthusiast",
    detail: "Huge fan of immersive cinematic storytelling like Interstellar, Inception, and Titanic.",
  },
  {
    category: "Interest",
    icon: "🎮",
    title: "Gaming & Strategy",
    detail: "Enjoys video games, tactical problem-solving, and exploring interactive game design.",
  },
  {
    category: "Achievement",
    icon: "⚡",
    title: "70% Time Reduction in Allocation",
    detail: "Engineered automatic seating allocation for 300+ students with 95% accuracy improvement.",
  },
  {
    category: "Interest",
    icon: "🏋️",
    title: "Gym & Discipline",
    detail: "Regular workout routine for mental focus, consistency, and daily physical well-being.",
  },
  {
    category: "Interest",
    icon: "🏔️",
    title: "Adventure & Exploration",
    detail: "Enjoys exploring new places, outdoor environments, and learning new concepts.",
  },
];
