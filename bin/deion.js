#!/usr/bin/env node

const facts = [
  "✦ Fact: Deion speaks Tamil, French and English.",
  "✦ Interest: Deion enjoys movies, music, games, learning and adventures.",
  "✦ Developer: Deion enjoys building software, AI and web projects.",
  "✦ Education: Computer Science Graduate from Patrician College (8.5/10 CGPA).",
  "✦ Vocalist: Tenor & Bass vocalist who won 2nd prize in Western Music Competitions.",
  "✦ Project: Built AI Tool Box with 100+ AI utilities using Next.js 15 & TypeScript.",
  "✦ Project: Engineered Automatic Seating Allocation reducing exam schedule time by 70% for 300+ students.",
  "✦ Project: Built Virtuoso AI - an AI-powered music learning platform with real-time audio analysis."
];

const randomFact = facts[Math.floor(Math.random() * facts.length)];

console.log(`
╭──────────────────────────────────────────────────╮
│                 DEION BERNARD                    │
│   Computer Science Graduate • Developer • AI     │
╰──────────────────────────────────────────────────╯

${randomFact}

Run 'npx deion' again for another fact.
Website: https://deionbernard.com
Email:   deionbernard3322@gmail.com
GitHub:  https://github.com/deionbernard
`);
