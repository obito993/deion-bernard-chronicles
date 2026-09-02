"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import IntroAnimation from "@/components/IntroAnimation";
import TerminalCard from "@/components/TerminalCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaceLogo from "@/components/FaceLogo";
import MacDock from "@/components/MacDock";
import { ArrowUpRight, Sparkles, FolderGit2, BookOpen, Film, Music, User, FileText, Mail, Layers } from "lucide-react";

export default function HomePage() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      {!introFinished && <IntroAnimation onComplete={() => setIntroFinished(true)} />}

      <div className="min-h-screen bg-black text-white selection:bg-brand-orange selection:text-black pb-24">
        <Navbar />

        <main className="relative overflow-hidden">
          {/* Background Ambient Glowing Orbs */}
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-brand-orange/15 blur-[120px]" />
          <div className="pointer-events-none absolute top-[600px] left-10 h-[350px] w-[350px] rounded-full bg-brand-orange/10 blur-[100px]" />

          {/* HERO SECTION */}
          <section className="relative mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            {/* FACE-SKETCH LOGO */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-4 flex flex-col items-center"
            >
              <FaceLogo size="lg" />
            </motion.div>

            {/* MAIN HEADINGS */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white"
            >
              DEION BERNARD
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-3 space-y-1"
            >
              <p className="font-mono text-sm sm:text-base text-gray-300 font-medium tracking-wide">
                Computer Science Graduate
              </p>
              <p className="font-mono text-xs sm:text-sm text-brand-orange tracking-widest uppercase font-semibold">
                Developer • AI Enthusiast • Creator
              </p>
            </motion.div>

            {/* NPX TERMINAL COMPONENT */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 w-full flex justify-center"
            >
              <TerminalCard />
            </motion.div>
          </section>

          {/* HORIZONTAL DESTINATIONS PORTALS */}
          <section className="relative py-16 border-t border-white/10 bg-surface/50 space-y-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs font-bold tracking-widest text-brand-orange uppercase">
                    INTERACTIVE PORTALS
                  </span>
                  <h2 className="font-display text-2xl sm:text-4xl font-black text-white">
                    EXPLORE DEION&apos;S WORLD
                  </h2>
                </div>
                <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-gray-400">
                  <span>SWIPE / SCROLL HORIZONTALLY</span>
                  <span className="text-brand-orange">→</span>
                </div>
              </div>
            </div>

            {/* FIRST GROUP: CORE PROFESSIONAL (ABOUT, RESUME, CONTACT, PROJECTS) */}
            <div className="space-y-4">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest font-bold">
                  GROUP 01 — CORE PROFESSIONAL
                </span>
              </div>

              <div className="no-scrollbar horizontal-scroll-container px-4 sm:px-6 lg:px-8 space-x-6 pb-4">
                {/* PORTAL 1: ABOUT ME */}
                <Link
                  href="/about"
                  data-cursor-text="OPEN"
                  className="horizontal-scroll-item group relative h-[320px] w-[280px] sm:w-[340px] flex flex-col justify-between rounded-2xl border border-white/15 bg-gradient-to-b from-surface-card to-black p-6 transition-all duration-300 hover:border-brand-orange hover:shadow-[0_0_30px_rgba(255,85,0,0.3)] hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-brand-orange font-bold">01 / PORTAL</span>
                    <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-black transition-all">
                      <User className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl font-extrabold text-white group-hover:text-brand-orange transition-colors">
                      ABOUT ME
                    </h3>
                    <p className="mt-2 font-mono text-xs text-gray-400">
                      Who I am, Tamil • French • English languages, journey & passions.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 font-mono text-xs text-gray-300 group-hover:text-white">
                    <span>EXPLORE BIOGRAPHY</span>
                    <ArrowUpRight className="h-4 w-4 text-brand-orange transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>

                {/* PORTAL 2: RESUME */}
                <Link
                  href="/resume"
                  data-cursor-text="VIEW"
                  className="horizontal-scroll-item group relative h-[320px] w-[280px] sm:w-[340px] flex flex-col justify-between rounded-2xl border border-white/15 bg-gradient-to-b from-surface-card to-black p-6 transition-all duration-300 hover:border-brand-orange hover:shadow-[0_0_30px_rgba(255,85,0,0.3)] hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-brand-orange font-bold">02 / PORTAL</span>
                    <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-black transition-all">
                      <FileText className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl font-extrabold text-white group-hover:text-brand-orange transition-colors">
                      RESUME
                    </h3>
                    <p className="mt-2 font-mono text-xs text-gray-400">
                      Patrician College, 8QUEENS Internship, Certifications & Skills.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 font-mono text-xs text-gray-300 group-hover:text-white">
                    <span>VIEW DIGITAL RESUME</span>
                    <ArrowUpRight className="h-4 w-4 text-brand-orange transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>

                {/* PORTAL 3: CONTACT */}
                <Link
                  href="/contact"
                  data-cursor-text="CONNECT"
                  className="horizontal-scroll-item group relative h-[320px] w-[280px] sm:w-[340px] flex flex-col justify-between rounded-2xl border border-white/15 bg-gradient-to-b from-surface-card to-black p-6 transition-all duration-300 hover:border-brand-orange hover:shadow-[0_0_30px_rgba(255,85,0,0.3)] hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-brand-orange font-bold">03 / PORTAL</span>
                    <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-black transition-all">
                      <Mail className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl font-extrabold text-white group-hover:text-brand-orange transition-colors">
                      CONTACT
                    </h3>
                    <p className="mt-2 font-mono text-xs text-gray-400">
                      Email, Phone (+91 9080325507), Chennai location & form.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 font-mono text-xs text-gray-300 group-hover:text-white">
                    <span>START CONVERSATION</span>
                    <ArrowUpRight className="h-4 w-4 text-brand-orange transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>

                {/* PORTAL 4: PROJECTS */}
                <Link
                  href="/projects"
                  data-cursor-text="EXPLORE"
                  className="horizontal-scroll-item group relative h-[320px] w-[280px] sm:w-[340px] flex flex-col justify-between rounded-2xl border border-brand-orange/40 bg-gradient-to-b from-brand-orange/10 via-surface-card to-black p-6 transition-all duration-300 hover:border-brand-orange hover:shadow-[0_0_35px_rgba(255,85,0,0.4)] hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-brand-orange font-bold">04 / PORTAL</span>
                    <div className="h-10 w-10 rounded-full border border-brand-orange/50 bg-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-black transition-all">
                      <FolderGit2 className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-brand-orange tracking-widest font-bold">4 REPOSITORIES</span>
                    <h3 className="font-display text-3xl font-extrabold text-white group-hover:text-brand-orange transition-colors">
                      PROJECTS
                    </h3>
                    <p className="mt-2 font-mono text-xs text-gray-400">
                      AI Tool Box, Spam Detector, Virtuoso AI, Seating Allocator.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 font-mono text-xs text-gray-300 group-hover:text-white">
                    <span>BROWSE ALL 4 PROJECTS</span>
                    <ArrowUpRight className="h-4 w-4 text-brand-orange transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>
              </div>
            </div>

            {/* SECOND GROUP: CREATIVE & PERSONAL ARCHIVES (BLOGS, MOVIES, SONGS, CREATIVE SPACE) */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest font-bold">
                  GROUP 02 — CREATIVE & PERSONAL ARCHIVES
                </span>
              </div>

              {/* SECOND GROUP PORTAL CARDS */}
              <div className="no-scrollbar horizontal-scroll-container px-4 sm:px-6 lg:px-8 space-x-6 pb-6">
                {/* PORTAL 5: BLOGS */}
                <Link
                  href="/blogs"
                  data-cursor-text="READ"
                  className="horizontal-scroll-item group relative h-[320px] w-[280px] sm:w-[340px] flex flex-col justify-between rounded-2xl border border-white/15 bg-gradient-to-b from-surface-card to-black p-6 transition-all duration-300 hover:border-brand-orange hover:shadow-[0_0_30px_rgba(255,85,0,0.3)] hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-brand-orange font-bold">05 / PORTAL</span>
                    <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-black transition-all">
                      <BookOpen className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl font-extrabold text-white group-hover:text-brand-orange transition-colors">
                      BLOGS
                    </h3>
                    <p className="mt-2 font-mono text-xs text-gray-400">
                      Reading, Gaming, Continuous Learning, Gym & Outdoor Adventures.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 font-mono text-xs text-gray-300 group-hover:text-white">
                    <span>READ 5 ARTICLES</span>
                    <ArrowUpRight className="h-4 w-4 text-brand-orange transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>

                {/* PORTAL 6: MOVIES (RED CINEMATIC THEME) */}
                <Link
                  href="/movies"
                  data-cursor-text="CINEMA"
                  className="horizontal-scroll-item group relative h-[320px] w-[280px] sm:w-[340px] flex flex-col justify-between rounded-2xl border border-movie-red/40 bg-gradient-to-b from-movie-red/10 via-surface-card to-black p-6 transition-all duration-300 hover:border-movie-red hover:shadow-[0_0_35px_rgba(229,9,20,0.4)] hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-movie-red font-bold">06 / CINEMATIC</span>
                    <div className="h-10 w-10 rounded-full border border-movie-red/50 bg-movie-red/20 flex items-center justify-center text-movie-red group-hover:bg-movie-red group-hover:text-white transition-all">
                      <Film className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-movie-red tracking-widest font-bold">CINEMATIC RED REVEAL</span>
                    <h3 className="font-display text-3xl font-extrabold text-white group-hover:text-movie-red transition-colors">
                      MOVIES
                    </h3>
                    <p className="mt-2 font-mono text-xs text-gray-400">
                      Interstellar, Titanic, Inception, Endgame, Shutter Island, No Way Home.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 font-mono text-xs text-gray-300 group-hover:text-white">
                    <span>ENTER MOVIE THEATRE</span>
                    <ArrowUpRight className="h-4 w-4 text-movie-red transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>

                {/* PORTAL 7: MUSIC / SONGS */}
                <Link
                  href="/music"
                  data-cursor-text="LISTEN"
                  className="horizontal-scroll-item group relative h-[320px] w-[280px] sm:w-[340px] flex flex-col justify-between rounded-2xl border border-white/15 bg-gradient-to-b from-surface-card to-black p-6 transition-all duration-300 hover:border-brand-orange hover:shadow-[0_0_30px_rgba(255,85,0,0.3)] hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-brand-orange font-bold">07 / AUDIO</span>
                    <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-black transition-all">
                      <Music className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-brand-orange tracking-widest font-bold">TENOR & BASS VOCALIST</span>
                    <h3 className="font-display text-3xl font-extrabold text-white group-hover:text-brand-orange transition-colors">
                      SONGS / MUSIC
                    </h3>
                    <p className="mt-2 font-mono text-xs text-gray-400">
                      Can&apos;t Help Falling in Love, Unchained Melody, Heaven, BSB & Everly.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 font-mono text-xs text-gray-300 group-hover:text-white">
                    <span>EXPLORE MUSIC ARCHIVE</span>
                    <ArrowUpRight className="h-4 w-4 text-brand-orange transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>

                {/* PORTAL 8: CREATIVE SPACE (SKETCH & CANVAS STUDIO) */}
                <Link
                  href="/creative"
                  data-cursor-text="LAB"
                  className="horizontal-scroll-item group relative h-[320px] w-[280px] sm:w-[340px] flex flex-col justify-between rounded-2xl border border-white/15 bg-gradient-to-b from-surface-card to-black p-6 transition-all duration-300 hover:border-brand-orange hover:shadow-[0_0_30px_rgba(255,85,0,0.3)] hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-brand-orange font-bold">08 / CREATIVE SPACE</span>
                    <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-black transition-all">
                      <Sparkles className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl font-extrabold text-white group-hover:text-brand-orange transition-colors">
                      CREATIVE SPACE
                    </h3>
                    <p className="mt-2 font-mono text-xs text-gray-400">
                      Personal philosophy, Tenor vocalist achievements & Western ensemble.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 font-mono text-xs text-gray-300 group-hover:text-white">
                    <span>ENTER CREATIVE SPACE</span>
                    <ArrowUpRight className="h-4 w-4 text-brand-orange transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </main>

        {/* ========================================================================= */}
        {/* macOS-STYLE ANIMATED ORANGE DOCK — CENTERED BOTTOM (HOME ONLY)           */}
        {/* ========================================================================= */}
        {introFinished && <MacDock />}

        <Footer />
      </div>
    </>
  );
}
