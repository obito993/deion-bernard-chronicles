"use client";

import React from "react";
import Link from "next/link";
import ComicPanel from "@/components/comic/ComicPanel";
import Sticker from "@/components/comic/Sticker";
import ActionBurst from "@/components/comic/ActionBurst";
import ComicButton from "@/components/comic/ComicButton";
import { Sparkles, Terminal, Palette, Cpu, Compass, ArrowRight } from "lucide-react";

import CreativeHeroCharacter from "@/components/characters/creative-hero-character";

export default function CreativeSpacePage() {
  const experiments = [
    {
      title: "INTERACTIVE SKETCH STUDIO",
      category: "DESIGN EXPERIMENT",
      description: "Interactive canvas board for experimenting with halftone dot shading, ink line density, and vector pop-art rendering.",
      icon: Palette,
      color: "yellow" as const,
    },
    {
      title: "AI PROMPT & LOGIC LAB",
      category: "AI EXPERIMENT",
      description: "Testing LLM logic chains, zero-shot structured outputs, and automated developer utilities inside custom Next.js endpoints.",
      icon: Cpu,
      color: "violet" as const,
    },
    {
      title: "ACOUSTIC PITCH ANALYZER",
      category: "AUDIO EXPERIMENT",
      description: "Real-time FFT audio frequency analysis detecting vocal pitch and acoustic harmonies through Web Audio API.",
      icon: Sparkles,
      color: "red" as const,
    },
    {
      title: "COMIC CLI EXECUTABLE",
      category: "CLI EXPERIMENT",
      description: "Node.js terminal executable package outputting comic facts ($ npx deion) formatted with ASCII visual styling.",
      icon: Terminal,
      color: "cream" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-comic-cream text-black pb-24 font-sans relative overflow-hidden">
      {/* Halftone Overlay */}
      <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />

      {/* HEADER BAR */}
      <section className="relative border-b-4 border-black bg-comic-violet py-8 px-4 text-black shadow-comic-sm">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Sticker text="BONUS PANEL" variant="yellow" rotate={-2} />
              <span className="font-mono text-xs font-black uppercase tracking-widest text-black">
                EXPERIMENTAL ARENA
              </span>
            </div>
            <h1 className="font-comic text-6xl sm:text-8xl font-black tracking-wider text-black text-shadow-yellow uppercase mt-1">
              THE CREATIVE SPACE
            </h1>
            <p className="font-mono text-xs sm:text-sm font-bold text-black border-l-4 border-black pl-3 mt-1">
              &quot;THE PANELS BEYOND THE MAIN STORY.&quot;
            </p>
          </div>
          <div className="flex items-center gap-4">
            <CreativeHeroCharacter />
            <div className="hidden lg:block">
              <ActionBurst text="BONUS ISSUE!" color="yellow" size="md" rotate={8} />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIMENTAL PANELS GRID */}
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiments.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <ComicPanel
                key={idx}
                bgColor={exp.color}
                shadowSize="xl"
                badgeText={`PANEL #${idx + 1}`}
                badgeBg="bg-black text-white"
                className="p-6 sm:p-8 space-y-4"
              >
                <div className="flex items-center justify-between border-b-3 border-black pb-3">
                  <span className="font-mono text-xs font-black uppercase tracking-widest text-black bg-white px-2 py-0.5 border border-black shadow-comic-sm">
                    {exp.category}
                  </span>
                  <Icon className="h-7 w-7 text-black" />
                </div>

                <div>
                  <h3 className="font-comic text-3xl sm:text-4xl text-black leading-none">{exp.title}</h3>
                  <p className="mt-2 font-mono text-xs sm:text-sm font-bold text-black leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t-2 border-black font-mono text-xs font-black">
                  <span>EXPERIMENTAL PROTOTYPE</span>
                  <Sparkles className="h-4 w-4 text-comic-red" />
                </div>
              </ComicPanel>
            );
          })}
        </div>

        {/* RETURN ACTION */}
        <div className="pt-6 flex justify-center">
          <Link href="/">
            <ComicButton variant="yellow" size="lg">
              <Compass className="h-5 w-5" />
              <span>RETURN TO FRONT COVER (HOME)</span>
            </ComicButton>
          </Link>
        </div>

      </div>
    </div>
  );
}
