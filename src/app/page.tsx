"use client";

import React, { useState } from "react";
import Link from "next/link";
import IntroAnimation from "@/components/IntroAnimation";
import HeroStinger from "@/components/characters/hero-stinger";
import SpiderWebSwing from "@/components/characters/spider-web-swing";
import TerminalCard from "@/components/TerminalCard";
import Sticker from "@/components/comic/Sticker";
import ActionBurst from "@/components/comic/ActionBurst";
import ComicPanel from "@/components/comic/ComicPanel";
import DeionCharacterPanel from "@/components/home/DeionCharacterPanel";
import { User, FileText, Mail, FolderGit2, ArrowRight } from "lucide-react";

export default function HomePage() {
  const [introFinished, setIntroFinished] = useState(false);
  const [stingerFinished, setStingerFinished] = useState(false);

  return (
    <>
      {/* STEP 1: ISSUE #000 INTRO SEQUENCE */}
      {!introFinished && <IntroAnimation onComplete={() => setIntroFinished(true)} />}

      {/* STEP 2: SPIDER-HERO STINGER (2-4s, ONLY AFTER INTRO) */}
      {introFinished && !stingerFinished && (
        <HeroStinger onComplete={() => setStingerFinished(true)} />
      )}

      {/* STEP 3: FULL-SCREEN CINEMATIC SPIDER-MAN WEB SWING */}
      {introFinished && stingerFinished && <SpiderWebSwing />}

      <div className="min-h-screen bg-comic-cream text-black pb-24 font-sans relative overflow-hidden">
        {/* Halftone Background Pattern */}
        <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />

        {/* TOP COVER HEADER ISSUE BADGE */}
        <div className="border-b-4 border-black bg-comic-yellow py-2 px-4 shadow-comic-sm">
          <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between font-mono text-xs font-black uppercase tracking-widest text-black">
            <div className="flex items-center gap-2">
              <span className="bg-comic-red text-white px-2 py-0.5 border border-black shadow-comic-sm">
                ISSUE #001
              </span>
              <span>THE DEVELOPER CHRONICLES</span>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <span>TAGLINE: BUILD. LEARN. CREATE. EXPLORE.</span>
              <span className="text-comic-red font-comic text-sm">★ SPECIAL COLLECTOR&apos;S EDITION ★</span>
            </div>
          </div>
        </div>

        {/* ─── HERO SECTION — THE COMIC BOOK FRONT COVER ─── */}
        <section className="relative mx-auto max-w-7xl px-4 pt-6 pb-12 sm:px-6 lg:px-8">
          <ComicPanel bgColor="paper" shadowSize="xl" className="p-6 sm:p-12 overflow-visible bg-speed-lines">

            {/* STICKERS DECORATION */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Sticker text="BUILD." variant="red" rotate={-6} />
              <Sticker text="LEARN." variant="yellow" rotate={4} />
              <Sticker text="CREATE." variant="violet" rotate={-3} />
              <Sticker text="EXPLORE." variant="white" rotate={5} />
              <div className="ml-auto hidden sm:block">
                <ActionBurst text="NEW ISSUE!" color="yellow" size="sm" rotate={8} />
              </div>
            </div>

            {/* MAIN COVER GRID: LEFT TYPOGRAPHY ←→ RIGHT CHARACTER */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

              {/* ── LEFT: HERO TYPOGRAPHY & CTAs ── */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">

                <div className="inline-block border-3 border-black bg-comic-yellow px-3 py-1 font-mono text-xs font-black uppercase tracking-widest shadow-comic-sm">
                  ★ THE MAIN CHARACTER HAS ARRIVED ★
                </div>

                <h1 className="font-comic text-6xl sm:text-8xl lg:text-9xl font-black tracking-wider text-black text-shadow-red leading-none uppercase">
                  DEION<br />BERNARD
                </h1>

                <div className="space-y-3">
                  <h2 className="font-mono text-lg sm:text-2xl font-black uppercase tracking-wide text-black border-l-4 border-comic-red pl-3 inline-block">
                    COMPUTER SCIENCE GRADUATE
                  </h2>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                    <Sticker text="DEVELOPER" variant="yellow" rotate={-2} />
                    <Sticker text="AI ENTHUSIAST" variant="violet" rotate={2} />
                    <Sticker text="CREATOR" variant="red" rotate={-1} />
                  </div>
                </div>

                <p className="font-mono text-xs sm:text-sm font-bold text-gray-800 max-w-xl leading-relaxed mx-auto lg:mx-0">
                  Welcome to my interactive comic book portfolio. Step inside to read my origin story, inspect my inventions, explore my sketchbook journal, and team up on new projects!
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <Link href="/about">
                    <button className="px-6 py-3 border-3 border-black bg-comic-yellow font-comic text-xl text-black shadow-comic hover:bg-white active:translate-x-1 active:translate-y-1 active:shadow-comic-pressed transition-all">
                      READ ORIGIN STORY →
                    </button>
                  </Link>
                  <Link href="/projects">
                    <button className="px-6 py-3 border-3 border-black bg-comic-violet font-comic text-xl text-black shadow-comic hover:bg-white active:translate-x-1 active:translate-y-1 active:shadow-comic-pressed transition-all">
                      INSPECT INVENTIONS →
                    </button>
                  </Link>
                </div>
              </div>

              {/* ── RIGHT: DEION CHARACTER PHOTO PANEL + THOUGHT BUBBLE ── */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 pb-8 lg:pb-0">
                <DeionCharacterPanel />
              </div>

            </div>

            {/* NPX TERMINAL COMPONENT */}
            <div className="mt-12 pt-8 border-t-3 border-black flex justify-center">
              <TerminalCard />
            </div>

          </ComicPanel>
        </section>

        {/* ─── CORE PORTFOLIO STORY PORTALS ─── */}
        <section className="relative py-12 border-t-4 border-black bg-comic-cream space-y-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between border-b-3 border-black pb-4">
              <div>
                <Sticker text="MAIN STORY" variant="yellow" rotate={-2} />
                <h2 className="font-comic text-4xl sm:text-6xl font-black text-black mt-2">
                  EXPLORE THE CHRONICLES
                </h2>
              </div>
              <div className="hidden sm:flex items-center gap-2 font-mono text-xs font-black text-gray-700 uppercase">
                <span>SELECT A CHAPTER TO BEGIN</span>
                <span className="text-comic-red">→</span>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* PORTAL 1: ABOUT ME */}
              <Link href="/about">
                <ComicPanel
                  bgColor="white"
                  shadowSize="lg"
                  tilt="slight-left"
                  badgeText="CHAPTER 01"
                  badgeBg="bg-comic-violet"
                  className="h-[300px] p-6 flex flex-col justify-between group hover:bg-comic-paper transition-all"
                >
                  <div className="flex items-center justify-between border-b-2 border-black pb-3">
                    <span className="font-mono text-xs font-black text-comic-violet">ORIGIN STORY</span>
                    <User className="h-6 w-6 text-black group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="font-comic text-3xl text-black group-hover:text-comic-red transition-colors">ABOUT ME</h3>
                    <p className="mt-2 font-mono text-xs font-bold text-gray-700">
                      Who I am, CS degree, languages (Tamil • English • French), skills &amp; passions.
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t-2 border-black pt-3 font-mono text-xs font-black">
                    <span>READ ORIGIN</span>
                    <ArrowRight className="h-4 w-4 text-black group-hover:translate-x-1 transition-transform" />
                  </div>
                </ComicPanel>
              </Link>

              {/* PORTAL 2: RESUME */}
              <Link href="/resume">
                <ComicPanel
                  bgColor="yellow"
                  shadowSize="lg"
                  tilt="slight-right"
                  badgeText="CHAPTER 02"
                  badgeBg="bg-comic-red text-white"
                  className="h-[300px] p-6 flex flex-col justify-between group hover:bg-comic-cream transition-all"
                >
                  <div className="flex items-center justify-between border-b-2 border-black pb-3">
                    <span className="font-mono text-xs font-black text-black">CLASSIFIED FILE</span>
                    <FileText className="h-6 w-6 text-black group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="font-comic text-3xl text-black group-hover:text-comic-red transition-colors">RESUME</h3>
                    <p className="mt-2 font-mono text-xs font-bold text-black">
                      Patrician College, 8QUEENS QA Tester Internship, Certifications &amp; Skills.
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t-2 border-black pt-3 font-mono text-xs font-black">
                    <span>INSPECT DOSSIER</span>
                    <ArrowRight className="h-4 w-4 text-black group-hover:translate-x-1 transition-transform" />
                  </div>
                </ComicPanel>
              </Link>

              {/* PORTAL 3: PROJECTS */}
              <Link href="/projects">
                <ComicPanel
                  bgColor="violet"
                  shadowSize="lg"
                  tilt="slight-left"
                  badgeText="CHAPTER 03"
                  badgeBg="bg-comic-yellow"
                  className="h-[300px] p-6 flex flex-col justify-between group transition-all"
                >
                  <div className="flex items-center justify-between border-b-2 border-black pb-3">
                    <span className="font-mono text-xs font-black text-black">INVENTOR&apos;S LAB</span>
                    <FolderGit2 className="h-6 w-6 text-black group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="font-comic text-3xl text-black group-hover:text-comic-red transition-colors">MY INVENTIONS</h3>
                    <p className="mt-2 font-mono text-xs font-bold text-black">
                      AI Tool Box, Spam Detection, Virtuoso AI, &amp; Automatic Seating Allocation.
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t-2 border-black pt-3 font-mono text-xs font-black">
                    <span>EXPLORE LAB</span>
                    <ArrowRight className="h-4 w-4 text-black group-hover:translate-x-1 transition-transform" />
                  </div>
                </ComicPanel>
              </Link>

              {/* PORTAL 4: CONTACT */}
              <Link href="/contact">
                <ComicPanel
                  bgColor="red"
                  shadowSize="lg"
                  tilt="slight-right"
                  badgeText="CHAPTER 07"
                  badgeBg="bg-comic-yellow"
                  className="h-[300px] p-6 flex flex-col justify-between group transition-all"
                >
                  <div className="flex items-center justify-between border-b-2 border-black pb-3">
                    <span className="font-mono text-xs font-black text-yellow-300">TEAM-UP FINALE</span>
                    <Mail className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="font-comic text-3xl text-white group-hover:text-comic-yellow transition-colors">LET&apos;S TEAM UP!</h3>
                    <p className="mt-2 font-mono text-xs font-bold text-white/90">
                      Got an idea? Send a message directly to Deion (+91 9080325507).
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t-2 border-black pt-3 font-mono text-xs font-black text-white">
                    <span>SEND MESSAGE</span>
                    <ArrowRight className="h-4 w-4 text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </ComicPanel>
              </Link>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}
