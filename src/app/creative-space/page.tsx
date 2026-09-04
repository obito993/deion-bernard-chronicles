"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ComicPanel from "@/components/comic/ComicPanel";
import Sticker from "@/components/comic/Sticker";
import ActionBurst from "@/components/comic/ActionBurst";
import ComicButton from "@/components/comic/ComicButton";
import { Sparkles, Terminal, Palette, Cpu, Compass, ArrowRight, Play } from "lucide-react";
import CreativeHeroCharacter from "@/components/characters/creative-hero-character";

import SketchStudioExperiment from "@/components/creative/SketchStudioExperiment";
import AiLogicLabExperiment from "@/components/creative/AiLogicLabExperiment";
import AcousticPitchAnalyzerExperiment from "@/components/creative/AcousticPitchAnalyzerExperiment";
import ComicCliExecutableExperiment from "@/components/creative/ComicCliExecutableExperiment";

export default function CreativeSpacePage() {
  const [activePanel, setActivePanel] = useState<"sketch" | "ai" | "audio" | "cli" | null>(null);

  const experiments = [
    {
      id: "sketch" as const,
      title: "INTERACTIVE SKETCH STUDIO",
      category: "DESIGN EXPERIMENT",
      description:
        "Interactive canvas board for experimenting with halftone dot shading, ink line density, and vector pop-art rendering.",
      icon: Palette,
      color: "yellow" as const,
      badgeText: "PANEL #1",
    },
    {
      id: "ai" as const,
      title: "AI PROMPT & LOGIC LAB",
      category: "AI EXPERIMENT",
      description:
        "Testing LLM logic chains, zero-shot structured outputs, and automated developer utilities inside custom Next.js endpoints.",
      icon: Cpu,
      color: "violet" as const,
      badgeText: "PANEL #2",
    },
    {
      id: "audio" as const,
      title: "ACOUSTIC PITCH ANALYZER",
      category: "AUDIO EXPERIMENT",
      description:
        "Real-time FFT audio frequency analysis detecting vocal pitch and acoustic harmonies through Web Audio API.",
      icon: Sparkles,
      color: "red" as const,
      badgeText: "PANEL #3",
    },
    {
      id: "cli" as const,
      title: "COMIC CLI EXECUTABLE",
      category: "CLI EXPERIMENT",
      description:
        "Node.js terminal executable package outputting comic facts ($ npx deion) formatted with ASCII visual styling.",
      icon: Terminal,
      color: "cream" as const,
      badgeText: "PANEL #4",
    },
  ];

  return (
    <div className="min-h-screen bg-comic-cream text-black pb-24 font-sans relative overflow-hidden">
      {/* Halftone Overlay */}
      <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />

      <AnimatePresence mode="wait">
        {activePanel === null ? (
          /* MAIN CREATIVE SPACE GRID VIEW */
          <motion.div
            key="main-grid"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
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
                    &quot;THE PANELS BEYOND THE MAIN STORY. CLICK ANY PANEL TO LAUNCH AN INTERACTIVE EXPERIMENT!&quot;
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
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {experiments.map((exp) => {
                  const Icon = exp.icon;
                  return (
                    <motion.div
                      key={exp.id}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 350, damping: 20 }}
                      onClick={() => setActivePanel(exp.id)}
                      className="cursor-pointer group"
                    >
                      <ComicPanel
                        bgColor={exp.color}
                        shadowSize="xl"
                        badgeText={exp.badgeText}
                        badgeBg="bg-black text-white"
                        className="p-6 sm:p-8 space-y-4 border-4 border-black group-hover:border-comic-red transition-all"
                      >
                        <div className="flex items-center justify-between border-b-3 border-black pb-3">
                          <span className="font-mono text-xs font-black uppercase tracking-widest text-black bg-white px-2.5 py-1 border border-black shadow-comic-sm">
                            {exp.category}
                          </span>
                          <Icon className="h-7 w-7 text-black group-hover:text-comic-red transition-colors" />
                        </div>

                        <div>
                          <h3 className="font-comic text-3xl sm:text-4xl text-black leading-none group-hover:text-shadow-red transition-all">
                            {exp.title}
                          </h3>
                          <p className="mt-2 font-mono text-xs sm:text-sm font-bold text-black leading-relaxed">
                            {exp.description}
                          </p>
                        </div>

                        <div className="pt-3 flex items-center justify-between border-t-2 border-black">
                          <span className="font-mono text-xs font-black text-comic-red group-hover:underline">
                            CLICK TO ENTER EXPERIMENT →
                          </span>

                          <div className="flex items-center gap-1 bg-black text-white font-comic text-sm px-3 py-1 rounded border border-black shadow-comic-sm group-hover:bg-comic-red transition-all">
                            <span>OPEN EXPERIMENT</span>
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </ComicPanel>
                    </motion.div>
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
          </motion.div>
        ) : (
          /* ACTIVE EXPERIMENT SUB-VIEW */
          <motion.div
            key={`experiment-${activePanel}`}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8"
          >
            {activePanel === "sketch" && (
              <SketchStudioExperiment onBack={() => setActivePanel(null)} />
            )}
            {activePanel === "ai" && (
              <AiLogicLabExperiment onBack={() => setActivePanel(null)} />
            )}
            {activePanel === "audio" && (
              <AcousticPitchAnalyzerExperiment onBack={() => setActivePanel(null)} />
            )}
            {activePanel === "cli" && (
              <ComicCliExecutableExperiment onBack={() => setActivePanel(null)} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
