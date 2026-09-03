"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ComicPanel from "@/components/comic/ComicPanel";
import SpeechBubble from "@/components/comic/SpeechBubble";
import Sticker from "@/components/comic/Sticker";
import ActionBurst from "@/components/comic/ActionBurst";
import AboutHeroCharacter from "@/components/characters/about-hero-character";
import { resumeData } from "@/data/resumeData";
import { GraduationCap, Code, Music, Globe, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-comic-cream text-black pb-24 font-sans relative overflow-hidden">
      {/* Halftone background overlay */}
      <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />

      {/* PAGE HEADER */}
      <section className="relative border-b-4 border-black bg-comic-yellow py-8 px-4 shadow-comic-sm">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Sticker text="CHAPTER 01" variant="red" rotate={-3} />
              <span className="font-mono text-xs font-black uppercase tracking-widest text-black">
                THE MAIN CHARACTER DOSSIER
              </span>
            </div>
            <h1 className="font-comic text-6xl sm:text-8xl font-black tracking-wider text-black text-shadow-red uppercase mt-1">
              MY ORIGIN STORY
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <AboutHeroCharacter />
            <Link href="/resume">
              <button className="px-5 py-2.5 border-3 border-black bg-white font-comic text-xl text-black shadow-comic hover:bg-comic-violet active:translate-x-1 active:translate-y-1 active:shadow-comic-pressed transition-all">
                VIEW FULL DOSSIER →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT GRID */}
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 space-y-12">
        
        {/* TOP LAYOUT: LEFT PORTRAIT & RIGHT INTRO PANELS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: LARGE ILLUSTRATED PORTRAIT WITH SPEECH BUBBLE */}
          <div className="lg:col-span-5 flex flex-col items-center sticky top-24">
            <ComicPanel bgColor="white" shadowSize="xl" tilt="slight-left" className="p-6 text-center w-full">
              <div className="mb-4">
                <SpeechBubble position="bottom-right" bgColor="yellow" speaker="DEION BERNARD">
                  Hi, I&apos;m Deion. Computer Science Graduate &amp; Creator!
                </SpeechBubble>
              </div>

              <div className="relative mx-auto h-64 w-64 sm:h-72 sm:w-72 rounded-xl border-4 border-black overflow-hidden shadow-comic-lg">
                <Image
                  src="/media/deion-about-portrait.jpg"
                  alt="Deion Bernard Comic Portrait"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />
              </div>

              <div className="mt-6 space-y-2">
                <h3 className="font-comic text-4xl text-black">DEION DANIEL BERNARD</h3>
                <p className="font-mono text-xs font-black text-gray-700 uppercase">
                  CHENNAI, INDIA • COMPUTER SCIENCE GRADUATE
                </p>
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                  <Sticker text="TAMIL" variant="yellow" rotate={-2} />
                  <Sticker text="ENGLISH" variant="violet" rotate={3} />
                  <Sticker text="FRENCH" variant="red" rotate={-1} />
                </div>
              </div>
            </ComicPanel>
          </div>

          {/* RIGHT: STORY PANELS */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* PANEL 1: ORIGIN & OBJECTIVE */}
            <ComicPanel bgColor="paper" shadowSize="lg" badgeText="PANEL 01 • ORIGIN" badgeBg="bg-comic-yellow">
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 border-b-2 border-black pb-2">
                  <GraduationCap className="h-6 w-6 text-comic-red" />
                  <h3 className="font-comic text-3xl text-black">ACADEMIC ORIGIN</h3>
                </div>
                <p className="font-mono text-sm font-bold text-gray-800 leading-relaxed">
                  {resumeData.objective}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {resumeData.education.map((edu, idx) => (
                    <div key={idx} className="border-2 border-black bg-white p-3 rounded-lg shadow-comic-sm">
                      <span className="font-mono text-[10px] font-black text-comic-red">{edu.year}</span>
                      <h4 className="font-comic text-xl text-black">{edu.degree}</h4>
                      <p className="font-mono text-xs text-gray-700 font-bold">{edu.institution}</p>
                      <span className="mt-1 inline-block bg-comic-yellow border border-black px-2 py-0.5 font-mono text-[11px] font-black">
                        {edu.score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ComicPanel>

            {/* PANEL 2: SKILLS UNLOCKED */}
            <ComicPanel bgColor="white" shadowSize="lg" badgeText="PANEL 02 • SKILLS UNLOCKED" badgeBg="bg-comic-violet">
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 border-b-2 border-black pb-2">
                  <Code className="h-6 w-6 text-black" />
                  <h3 className="font-comic text-3xl text-black">TECHNICAL ARSENAL</h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="font-mono text-xs font-black uppercase text-gray-600 block mb-1">
                      PROGRAMMING LANGUAGES:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.programming.map((sk) => (
                        <span key={sk} className="border-2 border-black bg-comic-yellow px-2.5 py-1 font-mono text-xs font-black shadow-comic-sm">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-xs font-black uppercase text-gray-600 block mb-1">
                      WEB &amp; FRAMEWORKS:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.webDev.map((sk) => (
                        <span key={sk} className="border-2 border-black bg-comic-violet px-2.5 py-1 font-mono text-xs font-black shadow-comic-sm">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-xs font-black uppercase text-gray-600 block mb-1">
                      DATABASES &amp; SYSTEMS:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.database.concat(resumeData.skills.operatingSystems).map((sk) => (
                        <span key={sk} className="border-2 border-black bg-white px-2.5 py-1 font-mono text-xs font-black shadow-comic-sm">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ComicPanel>

          </div>
        </div>

        {/* BOTTOM PANELS: CREATIVE MODE, LEARNING MODE, LANGUAGES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* PANEL 3: CREATIVE MODE */}
          <ComicPanel bgColor="yellow" shadowSize="lg" tilt="slight-left" badgeText="PANEL 03 • CREATIVE MODE" badgeBg="bg-comic-red text-white">
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2 border-b-2 border-black pb-2">
                <Music className="h-5 w-5 text-black" />
                <h3 className="font-comic text-2xl text-black">VOCAL &amp; CARROM</h3>
              </div>
              <p className="font-mono text-xs font-bold text-black leading-relaxed">
                {resumeData.extraCurricular[0]}
              </p>
              <p className="font-mono text-xs font-bold text-black leading-relaxed pt-1">
                {resumeData.extraCurricular[1]}
              </p>
            </div>
          </ComicPanel>

          {/* PANEL 4: LEARNING MODE */}
          <ComicPanel bgColor="violet" shadowSize="lg" badgeText="PANEL 04 • CERTIFICATIONS" badgeBg="bg-comic-yellow">
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2 border-b-2 border-black pb-2">
                <Award className="h-5 w-5 text-black" />
                <h3 className="font-comic text-2xl text-black">CERTIFIED KNOWLEDGE</h3>
              </div>
              <ul className="space-y-1.5 font-mono text-xs font-bold text-black">
                {resumeData.certifications.slice(0, 4).map((c, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-comic-red font-black">✓</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ComicPanel>

          {/* PANEL 5: LANGUAGES */}
          <ComicPanel bgColor="red" shadowSize="lg" tilt="slight-right" badgeText="PANEL 05 • LANGUAGES" badgeBg="bg-comic-yellow">
            <div className="p-6 space-y-3 text-white">
              <div className="flex items-center gap-2 border-b-2 border-black pb-2">
                <Globe className="h-5 w-5 text-yellow-300" />
                <h3 className="font-comic text-2xl text-white">TRILINGUAL HERO</h3>
              </div>
              <div className="space-y-2 font-sans font-black text-sm">
                <div className="border-2 border-black bg-black p-2.5 text-yellow-300 rounded shadow-comic-sm">
                  ENGLISH — Native Language
                </div>
                <div className="border-2 border-black bg-black p-2.5 text-white rounded shadow-comic-sm">
                  TAMIL (வணக்கம்) — Known / Spoken
                </div>
                <div className="border-2 border-black bg-black p-2.5 text-comic-violet rounded shadow-comic-sm">
                  FRENCH (Bonjour) — Conversational
                </div>
              </div>
            </div>
          </ComicPanel>

        </div>

      </div>
    </div>
  );
}
