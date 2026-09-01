export interface BlogItem {
  slug: string;
  number: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  shortDescription: string;
  fullContent: string[];
  theme: string;
}

export const blogsData: BlogItem[] = [
  {
    slug: "reading-and-studying",
    number: "01",
    title: "READING & STUDYING",
    category: "Personal Growth & Curiosity",
    readTime: "3 min read",
    date: "2026",
    shortDescription:
      "Reading and studying are more than academic requirements for Deion; they are doors to new perspectives and deep insights. Whether diving into technical documentation, software architecture, or personal growth literature, he values the quiet focus of deep reading. Exploring topics out of pure curiosity fuels problem-solving abilities and expands analytical thinking. It creates a space where complex concepts transform into structured understanding.",
    fullContent: [
      "Reading and studying are foundational habits that shape how I approach software development, creative projects, and everyday challenges.",
      "For me, picking up a technical book, reading engineering blogs, or exploring computer science literature isn't just about absorbing facts—it's about training the mind to recognize patterns and process complex ideas with clarity.",
      "Beyond technical subjects, I love reading books that challenge my perspective on focus, discipline, and human creativity. Taking time out of a busy day to sit quietly with a good text provides a rare sense of clarity in our fast-paced digital world.",
      "Studying systematically allows me to turn abstract curiosity into tangible skills. Every new chapter read or paper analyzed adds another tool to my problem-solving toolkit, keeping my work fresh, deliberate, and forward-looking.",
    ],
    theme: "amber",
  },
  {
    slug: "playing-games",
    number: "02",
    title: "PLAYING GAMES",
    category: "Interactive Worlds & Strategy",
    readTime: "4 min read",
    date: "2026",
    shortDescription:
      "Gaming offers Deion a dynamic blend of immersive storytelling, strategic challenge, and interactive design inspiration. He appreciates how video games combine art, sound, real-time physics, and intuitive user interfaces to craft memorable experiences. Engaging with puzzle mechanics and tactical decisions nurtures sharp spatial awareness and adaptive problem-solving skills. It serves as both a creative catalyst and an engaging way to unwind.",
    fullContent: [
      "Video games are one of the most sophisticated intersections of technology, visual art, narrative storytelling, and software design.",
      "When I play games, I find myself admiring the intricate mechanics, user interface layouts, and real-time responsiveness that developers craft. From strategic decision-making to spatial puzzle solving, gaming pushes the mind to think dynamically under varying rules and constraints.",
      "Whether navigating immersive open worlds or competing in tactical matches, gaming reinforces key mindset principles like perseverance, quick adaptation, and resource management.",
      "It also inspires my own software engineering projects—reminding me how important user experience, feedback loops, and fluid animations are when creating interactive software that people love using.",
    ],
    theme: "purple",
  },
  {
    slug: "learning-new-things",
    number: "03",
    title: "LEARNING NEW THINGS",
    category: "Technology & Continuous Learning",
    readTime: "4 min read",
    date: "2026",
    shortDescription:
      "The rapid evolution of technology makes continuous learning a core passion for Deion. From experimenting with new artificial intelligence frameworks to discovering modern web standards and data tools, he thrives on hands-on exploration. Stepping outside familiarity to master fresh concepts builds adaptability and keeps engineering practices sharp. Every new subject mastered is an exciting step forward in building better digital experiences.",
    fullContent: [
      "The technology landscape moves at incredible speed, and staying curious is the single most valuable habit a developer can cultivate.",
      "I love the feeling of starting with a completely unfamiliar framework, API, or algorithm, breaking it down into basic components, and building something real with it. Whether it's exploring Next.js server components, machine learning models, or automated pipelines, the process of learning is inherently rewarding.",
      "Learning isn't restricted to tech either—it extends to music vocal techniques, languages like Tamil and French, and new methodology frameworks.",
      "Embracing the beginner's mindset keeps me humble and adaptable. It turns every technical challenge into an invitation to discover something new.",
    ],
    theme: "cyan",
  },
  {
    slug: "the-gym",
    number: "04",
    title: "THE GYM",
    category: "Health, Discipline & Routine",
    readTime: "3 min read",
    date: "2026",
    shortDescription:
      "Physical fitness and regular gym sessions anchor Deion's weekly routine with structure, focus, and renewed energy. Engaging in consistent physical training fosters mental clarity, resilience, and personal discipline that directly benefits his creative and coding work. It is an essential practice for maintaining balance, staying grounded, and nurturing overall well-being. Small, steady daily efforts build long-term strength and focus.",
    fullContent: [
      "The gym is where physical effort translates into mental clarity and daily discipline.",
      "Spending long hours at a workstation writing code or analyzing data requires mental stamina, and regular workouts provide the energy and balance necessary to perform at a high level.",
      "Working out teaches patience and consistency—progress isn't measured in overnight shifts, but in steady repetitions and showing up every week regardless of motivation levels.",
      "That discipline carries straight over into software engineering. When faced with debugging a stubborn error or building a complex feature, the same persistence learned in training keeps me focused until the goal is achieved.",
    ],
    theme: "orange",
  },
  {
    slug: "adventure-and-exploring",
    number: "05",
    title: "ADVENTURE & EXPLORING",
    category: "Discovery & Experience",
    readTime: "4 min read",
    date: "2026",
    shortDescription:
      "Exploring new places, environments, and outdoor adventures gives Deion a fresh perspective on the world around him. Stepping away from screens to discover scenic spots, urban landscapes, and unfamiliar paths creates lasting memories and resets creative energy. Adventure encourages curiosity, open-mindedness, and an appreciation for spontaneous discovery. It enriches personal experiences and brings a sense of wonder to everyday life.",
    fullContent: [
      "Adventure and exploration remind us how vast and fascinating the world is beyond our routine environments.",
      "Stepping outside to explore new landscapes, travel to unfamiliar places, or simply take a new route through the city recharges my mind in ways that sitting indoors never can.",
      "Observing different environments, architectures, cultures, and natural beauty inspires fresh artistic ideas and expands my creative vision.",
      "Whether it's an outdoor trek, discovering local culture, or trying new experiences, staying adventurous keeps life exciting and feeds a lifelong passion for discovery.",
    ],
    theme: "emerald",
  },
];
