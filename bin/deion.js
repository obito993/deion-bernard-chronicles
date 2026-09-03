#!/usr/bin/env node

const facts = [
  "⚡ Deion Daniel Bernard graduated with a Bachelor of Computer Science from Patrician College, Chennai (CGPA: 8.5/10).",
  "🎤 Won 2nd prize in Western Music Competitions as a Tenor & Bass vocalist with the Shamrocks music ensemble!",
  "🎯 Selected player for the College Carrom Team, showcasing focus, discipline, and strategic calculation.",
  "🚀 Built AI Tool Box with 100+ automated web tools using Next.js 15, TypeScript, and Tailwind CSS.",
  "🎵 Created Virtuoso AI, an acoustic music learning platform that analyzes pitch and rhythm through microphone input.",
  "📊 Engineered an Automatic Seating Allocation engine for 300+ students, saving 70% scheduling time.",
  "🔍 Worked as a Software Testing Intern (QA Tester) at 8QUEENS Software Technologies.",
  "🌐 Speaks 3 languages: English, Tamil (தமிழ்), and French (Français)!",
  "📜 Holds certifications from Google (Data Analytics & AI), IBM (Web Dev), HP LIFE (Data Science), and MongoDB.",
  "🍿 Big movie fan! Favorites include Interstellar, Titanic, Inception, Endgame, Shutter Island, and Spider-Man."
];

const randomFact = facts[Math.floor(Math.random() * facts.length)];

console.log(`
============================================================
              THE DEION BERNARD CHRONICLES
============================================================
           [ ISSUE #001 • COMIC CLI TERMINAL ]

  Deion Daniel Bernard — Computer Science Graduate & Developer
  Location: Chennai, India
  Languages: English | Tamil (தமிழ்) | French (Français)

  ----------------------------------------------------------
  RANDOM DOSSIER FACT:
  ${randomFact}
  ----------------------------------------------------------

  Visit the interactive comic portfolio website:
  https://deionbernard.com (or local server)

============================================================
`);
