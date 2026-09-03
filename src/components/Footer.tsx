"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, RotateCcw, Sparkles } from "lucide-react";
import { resumeData } from "@/data/resumeData";
import Sticker from "@/components/comic/Sticker";

export default function Footer() {
  const replayIntro = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("deion_comic_intro_seen");
      window.location.href = "/";
    }
  };

  return (
    <footer className="w-full border-t-4 border-black bg-comic-yellow pt-12 pb-8 text-black font-sans shadow-comic-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b-3 border-black">
          
          {/* Col 1: Brand & Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-black bg-black shadow-comic-sm">
                <Image
                  src="/media/spiderman-intro-stinger.jpg"
                  alt="Comic Hero Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-comic text-2xl text-black leading-none">
                  THE DEION BERNARD CHRONICLES
                </h3>
                <p className="font-mono text-xs font-black text-comic-red uppercase">
                  ISSUE #001 • COMIC PORTFOLIO
                </p>
              </div>
            </div>

            <p className="font-mono text-xs font-bold text-black leading-relaxed max-w-md">
              A premium, fully interactive graphic novel portfolio. Built with Next.js, TypeScript, Tailwind CSS &amp; Framer Motion. Tamil • French • English.
            </p>

            <button
              onClick={replayIntro}
              className="inline-flex items-center gap-2 rounded border-2 border-black bg-white px-3 py-1.5 font-mono text-xs font-black text-black shadow-comic-sm hover:bg-comic-red hover:text-white transition-all"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>REPLAY ISSUE #000 INTRO</span>
            </button>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <Sticker text="CHAPTER DIRECTORY" variant="red" rotate={-1} />
            <ul className="space-y-1.5 font-mono text-xs font-bold pt-1">
              <li>
                <Link href="/" className="hover:text-comic-red transition-colors">
                  ★ COVER PAGE (HOME)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-comic-red transition-colors">
                  ★ CHAPTER 01: ORIGIN STORY
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-comic-red transition-colors">
                  ★ CHAPTER 02: CHARACTER FILE
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-comic-red transition-colors">
                  ★ CHAPTER 03: MY INVENTIONS
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-comic-red transition-colors">
                  ★ CHAPTER 04: THE JOURNAL
                </Link>
              </li>
              <li>
                <Link href="/movies" className="hover:text-comic-red transition-colors">
                  ★ CHAPTER 05: CINEMA ISSUE
                </Link>
              </li>
              <li>
                <Link href="/music" className="hover:text-comic-red transition-colors">
                  ★ CHAPTER 06: MY SOUNDTRACK
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-comic-red transition-colors">
                  ★ CHAPTER 07: TEAM-UP FINALE
                </Link>
              </li>
              <li>
                <Link href="/creative-space" className="hover:text-comic-red transition-colors">
                  ★ BONUS: CREATIVE SPACE
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <Sticker text="COMMUNICATION HUB" variant="violet" rotate={2} />
            <div className="font-mono text-xs font-bold space-y-1 pt-1">
              <p>EMAIL: {resumeData.contact.email}</p>
              <p>PHONE: {resumeData.contact.phone}</p>
              <p>LOCATION: {resumeData.contact.location}</p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={resumeData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-black bg-white text-black shadow-comic-sm hover:bg-black hover:text-white transition-all"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={resumeData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-black bg-white text-black shadow-comic-sm hover:bg-black hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${resumeData.contact.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-black bg-white text-black shadow-comic-sm hover:bg-black hover:text-white transition-all"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-2 font-mono text-xs font-black text-black">
          <p>© {new Date().getFullYear()} DEION BERNARD. ALL RIGHTS RESERVED.</p>
          <p className="flex items-center gap-1">
            <span>THE DEION BERNARD CHRONICLES</span>
            <span className="text-comic-red">★</span>
            <span>npx deion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
