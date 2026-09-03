export interface BlogItem {
  slug: string;
  number: string;
  title: string;
  category: string;
  intro: string;
  fullStory: string[];
  image: string;
  color: "yellow" | "violet" | "red" | "cream";
  doodles: string[];
}

export const blogsData: BlogItem[] = [
  {
    slug: "reading-and-studying",
    number: "CHAPTER 01",
    title: "READING & STUDYING",
    category: "KNOWLEDGE & DEEP FOCUS",
    intro:
      "Deep diving into tech documentation, computer science fundamentals, data structures, and continuous learning. Every great developer begins with curiosity and a stack of books.",
    fullStory: [
      "In the fast-evolving world of software development, continuous reading is not just a habit—it's a superpower.",
      "From mastering Data Structures and Algorithms to dissecting Next.js 15 Server Components and FastAPI microservices, studying keeps my technical edge sharp.",
      "I dedicate structured time to reading engineering blogs, documentation, and technical papers on AI developments.",
      "Key Takeaway: Never stop reading. The code you write tomorrow depends on the ideas you absorb today.",
    ],
    image: "/media/blog-reading.jpg",
    color: "yellow",
    doodles: ["📚 BOOKS", "⚡ FOCUS", "💡 LOGIC"],
  },
  {
    slug: "playing-games",
    number: "CHAPTER 02",
    title: "PLAYING GAMES",
    category: "TACTICAL THINKING & GAMING",
    intro:
      "Whether it's strategic Carrom tournaments, multiplayer tactical games, or immersive worlds, gaming fuels problem-solving, spatial awareness, and quick decision making.",
    fullStory: [
      "Gaming is much more than entertainment—it is a workout for problem-solving under pressure.",
      "As a selected player for the college Carrom team, I developed focus, geometry-based calculation, and competitive resilience under pressure.",
      "Video games test system understanding, resource management, and team communication, skills that translate directly into clean code architecture.",
      "Key Takeaway: Strategy, timing, and composure lead to victory both in-game and in software engineering.",
    ],
    image: "/media/blog-games.jpg",
    color: "violet",
    doodles: ["🎮 GAMING", "🎯 FOCUS", "🏆 CARROM"],
  },
  {
    slug: "learning-new-things",
    number: "CHAPTER 03",
    title: "LEARNING NEW THINGS",
    category: "CURIOSITY & SKILL EXPANSION",
    intro:
      "Exploring emerging tech stacks, AI tools, new languages (Tamil, English, French), and new hobbies. Embracing the beginner mindset to grow continuously.",
    fullStory: [
      "The thrill of discovering something new keeps energy levels high and unlocks fresh perspective.",
      "From completing Google Data Analytics and HP LIFE Data Science certifications to building AI music pitch detectors in Virtuoso AI, I love pushing into unfamiliar territory.",
      "Learning languages—like honing French alongside English and my native Tamil—builds cognitive flexibility and appreciation for different structures.",
      "Key Takeaway: Stay curious, embrace challenges, and view every new technology as a tool in your creative belt.",
    ],
    image: "/media/blog-learning.jpg",
    color: "cream",
    doodles: ["🚀 EXPAND", "🤖 AI TOOLS", "🌐 LANGUAGES"],
  },
  {
    slug: "the-gym",
    number: "CHAPTER 04",
    title: "THE GYM",
    category: "DISCIPLINE & WELLBEING",
    intro:
      "Building daily physical consistency, energy management, routine, and mental clarity through regular exercise and physical wellness.",
    fullStory: [
      "Software development requires long hours of deep concentration. Maintaining physical health provides the energy foundation needed for high cognitive performance.",
      "My gym routine is focused on discipline, stamina, consistency, and overall wellbeing. Showing up every day builds mental fortitude.",
      "Just like debugging code line by line, physical training rewards patience, incremental progress, and structured routines.",
      "Key Takeaway: Consistency over intensity. A disciplined mind thrives in an energized body.",
    ],
    image: "/media/blog-gym.jpg",
    color: "red",
    doodles: ["💪 DISCIPLINE", "⚡ ENERGY", "🔄 ROUTINE"],
  },
  {
    slug: "adventure-and-exploring",
    number: "CHAPTER 05",
    title: "ADVENTURE & EXPLORING",
    category: "OUTDOORS & DISCOVERY",
    intro:
      "Stepping away from screens to explore new places, cityscapes, music events, and outdoor experiences. Inspiration happens outside the comfort zone.",
    fullStory: [
      "Inspiration often strikes when you step away from the keyboard and step into the world.",
      "Exploring historical places around Chennai, attending music ensemble performances, and taking spontaneous weekend journeys resets creative energy.",
      "Observing how people interact with real-world environments informs better UI design and user experience thinking.",
      "Key Takeaway: Life is the ultimate graphic novel—go out and write exciting new chapters.",
    ],
    image: "/media/blog-adventure.jpg",
    color: "yellow",
    doodles: ["🗺️ EXPLORE", "📍 CHENNAI", "✨ ADVENTURE"],
  },
];
