"use client";

import React from "react";
import Image from "next/image";
import ComicPanel from "@/components/comic/ComicPanel";
import ComicButton from "@/components/comic/ComicButton";
import Sticker from "@/components/comic/Sticker";
import ActionBurst from "@/components/comic/ActionBurst";
import ProjectsHeroCharacter from "@/components/characters/projects-hero-character";
import { InfiniteMovingCards, InfiniteContentCard } from "@/components/ui/infinite-moving-cards";
import { projectsData } from "@/data/projectsData";
import { Github, ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ProjectsPage() {
  // Transform projects into InfiniteContentCard items
  const projectCards: InfiniteContentCard[] = projectsData.map((p) => ({
    id: p.id,
    title: p.title,
    subtitle: p.subtitle,
    image: p.image,
    category: p.number,
    description: p.mission,
    href: `#project-${p.id}`,
    badge: "INVENTION",
    color: p.color === "paper" ? "cream" : p.color,
  }));

  return (
    <div className="min-h-screen bg-comic-cream text-black pb-24 font-sans relative overflow-hidden">
      {/* Halftone Overlay */}
      <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />

      {/* HEADER BAR */}
      <section className="relative border-b-4 border-black bg-comic-violet py-8 px-4 shadow-comic-sm">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Sticker text="CHAPTER 03" variant="yellow" rotate={-2} />
              <span className="font-mono text-xs font-black uppercase tracking-widest text-black">
                INVENTOR&apos;S LAB
              </span>
            </div>
            <h1 className="font-comic text-6xl sm:text-8xl font-black tracking-wider text-black text-shadow-yellow uppercase mt-1">
              MY INVENTIONS
            </h1>
            <p className="font-mono text-xs sm:text-sm font-bold text-black border-l-4 border-black pl-3 mt-1">
              &quot;Things I built when I had an idea and decided to make it real.&quot;
            </p>
          </div>
          <div className="flex items-center gap-4">
            <ProjectsHeroCharacter />
            <ActionBurst text="4 INVENTIONS!" color="red" size="md" rotate={8} />
          </div>
        </div>
      </section>

      {/* INFINITE MOVING PROJECT CARDS SECTION */}
      <section className="py-12 border-b-4 border-black bg-comic-violet space-y-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Sticker text="INVENTIONS STRIP" variant="yellow" rotate={-1} />
          <span className="font-mono text-xs font-black text-black uppercase">
            AUTOMATICALLY MOVING PROJECT STRIP (RIGHT → SLOW)
          </span>
        </div>

        <InfiniteMovingCards items={projectCards} direction="right" speed="slow" />
      </section>

      {/* PROJECTS LIST CONTAINER */}
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 space-y-16">
        {projectsData.map((project) => {
          return (
            <div key={project.id} id={`project-${project.id}`}>
              <ComicPanel
                bgColor={project.color}
                shadowSize="xl"
                badgeText={project.number}
                badgeBg="bg-black text-white"
                className="p-6 sm:p-10 overflow-hidden border-4 border-black"
              >
                {/* DESKTOP: LEFT IMAGE, RIGHT CONTENT (NEVER IMAGE ABOVE ON DESKTOP) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* LEFT: LARGE PROJECT IMAGE (lg:col-span-5) */}
                  <div className="lg:col-span-5 relative flex flex-col items-center">
                    <div className="relative w-full h-64 sm:h-80 rounded-xl border-4 border-black bg-white overflow-hidden shadow-comic-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />
                    </div>
                    
                    {/* Decorative Comic Arrow Pointer */}
                    <div className="mt-3 hidden lg:flex items-center gap-2 font-mono text-xs font-black text-black">
                      <ArrowRight className="h-4 w-4 text-comic-red" />
                      <span>TECHNICAL ARCHITECTURE →</span>
                    </div>
                  </div>

                  {/* RIGHT: PROJECT DETAILS & LABELS (lg:col-span-7) */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center justify-between border-b-3 border-black pb-2">
                      <div>
                        <span className="font-mono text-xs font-black text-black uppercase tracking-widest">
                          {project.duration}
                        </span>
                        <h2 className="font-comic text-4xl sm:text-5xl text-black leading-none">
                          {project.title}
                        </h2>
                      </div>
                      <Sticker text={project.number} variant="white" rotate={2} />
                    </div>

                    {/* MISSION STATEMENT */}
                    <div className="bg-white/80 border-2 border-black p-3 rounded shadow-comic-sm">
                      <span className="font-mono text-[11px] font-black uppercase text-comic-red block">
                        MISSION:
                      </span>
                      <p className="font-mono text-xs sm:text-sm font-bold text-black leading-relaxed">
                        {project.mission}
                      </p>
                    </div>

                    {/* TECH USED LABELS */}
                    <div>
                      <span className="font-mono text-[11px] font-black uppercase text-black block mb-1">
                        TECH USED:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techUsed.map((t) => (
                          <span
                            key={t}
                            className="border-2 border-black bg-black text-white px-2 py-0.5 font-mono text-[11px] font-black rounded-sm shadow-comic-sm"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* KEY FEATURES */}
                    <div>
                      <span className="font-mono text-[11px] font-black uppercase text-black block mb-1">
                        KEY FEATURES:
                      </span>
                      <ul className="space-y-1.5 font-mono text-xs font-bold text-black">
                        {project.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-comic-red flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* RESULT */}
                    <div className="border-l-4 border-black pl-3 py-1 font-mono text-xs font-black text-black">
                      <span className="text-comic-red">RESULT:</span> {project.result}
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <ComicButton variant="dark" size="sm">
                            <Github className="h-4 w-4" />
                            <span>GITHUB CODE</span>
                          </ComicButton>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ComicButton variant="yellow" size="sm">
                            <ExternalLink className="h-4 w-4" />
                            <span>LIVE DEMO</span>
                          </ComicButton>
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              </ComicPanel>
            </div>
          );
        })}
      </div>
    </div>
  );
}
