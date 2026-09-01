export interface ResumeData {
  personalInfo: {
    fullName: string;
    displayName: string;
    title: string;
    subtitles: string[];
    phone: string;
    email: string;
    location: string;
    github: string;
    linkedin: string;
    portfolio: string;
    objective: string;
  };
  education: Array<{
    institution: string;
    degree: string;
    location: string;
    score: string;
  }>;
  internship: {
    company: string;
    role: string;
    period: string;
    responsibilities: string[];
  };
  technicalSkills: {
    programmingLanguages: string[];
    webDevelopment: string[];
    databaseManagement: string[];
    operatingSystems: string[];
  };
  softSkills: string[];
  certifications: Array<{
    title: string;
    issuer: string;
    date: string;
  }>;
  extracurriculars: string[];
  achievements: string[];
  workshops: string[];
  languages: string[];
}

export const resumeData: ResumeData = {
  personalInfo: {
    fullName: "Deion Daniel Bernard",
    displayName: "DEION BERNARD",
    title: "Computer Science Graduate",
    subtitles: ["Developer", "AI Enthusiast", "Creator"],
    phone: "+91 9080325507",
    email: "deionbernard3322@gmail.com",
    location: "Kodangaiyur, Chennai-118",
    github: "https://github.com/obito993",
    linkedin: "https://www.linkedin.com/in/deion-bernard-1515a8284/",
    portfolio: "https://deion-bernard-person-pzow.bolt.host/",
    objective:
      "Computer Science graduate with Google certifications and a strong interest in software development and problem-solving. A quick learner with excellent teamwork skills, adaptability, and a positive attitude. Passionate about coding, continuous learning, and contributing effectively to organizational success through dedication and technical expertise.",
  },
  education: [
    {
      institution: "Patrician College of Arts and Science, Chennai",
      degree: "Bachelor of Computer Science",
      location: "Chennai",
      score: "CGPA : 8.5/10",
    },
    {
      institution: "Bosco Academy Mat Hr Sec School, Chennai",
      degree: "Higher Secondary (Class XII)",
      location: "Chennai",
      score: "Percentage - 74%",
    },
  ],
  internship: {
    company: "8QUEENS SOFTWARE TECHNOLOGIES",
    role: "Software Testing Intern / QA Tester",
    period: "May 2025 – Oct 2025",
    responsibilities: [
      "Performed functional and usability testing on web-based applications to ensure quality and performance.",
      "Designed and executed test cases, identifying defects and improving system reliability.",
      "Collaborated with developers to resolve issues and verify fixes.",
      "Acquired data from primary and secondary sources and maintained database records to ensure ongoing data accuracy and system integrity.",
    ],
  },
  technicalSkills: {
    programmingLanguages: ["Python", "Java", "C", "C++", "JavaScript"],
    webDevelopment: ["HTML", "CSS", "React", "Node.js", "ASP.NET"],
    databaseManagement: ["MySQL", "MongoDB", "SQL Server"],
    operatingSystems: ["Windows", "Linux"],
  },
  softSkills: [
    "Problem Solving",
    "Logical Thinking",
    "Team Collaboration",
    "Communication Skills",
    "Time Management",
    "Adaptability",
  ],
  certifications: [
    {
      title: "Google Data Analytics",
      issuer: "Google",
      date: "Jun 2025",
    },
    {
      title: "Web Development Fundamentals",
      issuer: "IBM",
      date: "Mar 2025",
    },
    {
      title: "Data Science and Analytics",
      issuer: "HP LIFE",
      date: "Feb 2025",
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "Google",
      date: "Aug 2023",
    },
    {
      title: "Object-Oriented Programming using Python",
      issuer: "Infosys Springboard",
      date: "2024",
    },
    {
      title: "Introduction to MongoDB",
      issuer: "MongoDB",
      date: "Jun 2024",
    },
    {
      title: "React for Beginners + Introduction to SQL",
      issuer: "Skill Up",
      date: "2024",
    },
  ],
  extracurriculars: [
    "Won 2nd prize in Western Music Competitions as a Tenor & Bass vocalist with the Shamrocks music ensemble.",
    "Selected player for the College Carrom Team, showcasing focus, discipline, and teamwork.",
  ],
  achievements: [
    "Presented a technical paper on Artificial Intelligence Development, demonstrating research, analytical, and presentation skills.",
    "Participated in a Debugging Competition conducted by Madras Christian College.",
    "College proficiency showcasing problem solving ability and programming excellence.",
  ],
  workshops: [
    "Participated in workshops on Artificial Intelligence, Machine Learning, Cybersecurity, and Full-Stack Web Development.",
    "Attended technical webinars on emerging technologies and DevOps practices.",
  ],
  languages: ["Tamil", "French", "English"],
};
