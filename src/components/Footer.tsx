"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowUpRight, RotateCcw } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function Footer() {
  const replayIntro = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("deion_intro_seen");
      window.location.href = "/";
    }
  };

  return (
    <footer className="w-full border-t border-white/10 bg-black pt-16 pb-12 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-brand-orange shadow-[0_0_15px_rgba(255,85,0,0.4)]">
                <Image
                  src="/deion-sketch-logo.jpg"
                  alt="Deion Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white tracking-wider">
                  DEION BERNARD
                </h3>
                <p className="font-mono text-xs text-brand-orange">
                  Computer Science Graduate & Developer
                </p>
              </div>
            </div>
            <p className="font-mono text-xs text-gray-400 leading-relaxed max-w-md">
              Combining creative personal branding, software architecture, AI experimentation, and editorial storytelling. Tamil • French • English.
            </p>
            <button
              onClick={replayIntro}
              className="inline-flex items-center gap-2 font-mono text-xs text-gray-400 hover:text-brand-orange transition-colors pt-2"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>REPLAY CINEMATIC INTRO</span>
            </button>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold tracking-widest text-white uppercase">
              PORTALS
            </h4>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <Link href="/about" className="hover:text-brand-orange transition-colors">
                  ABOUT ME
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-brand-orange transition-colors">
                  DIGITAL RESUME
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-brand-orange transition-colors">
                  PROJECTS (4 REPOSITORIES)
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-brand-orange transition-colors">
                  JOURNAL & BLOGS
                </Link>
              </li>
              <li>
                <Link href="/movies" className="hover:text-movie-red transition-colors">
                  MOVIES ARCHIVE
                </Link>
              </li>
              <li>
                <Link href="/music" className="hover:text-brand-orange transition-colors">
                  MUSIC ARCHIVE
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Socials */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-xs font-bold tracking-widest text-white uppercase">
              GET IN TOUCH
            </h4>
            <p className="font-mono text-xs text-gray-400">
              {resumeData.personalInfo.email}
            </p>
            <p className="font-mono text-xs text-gray-400">
              {resumeData.personalInfo.phone} • {resumeData.personalInfo.location}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={resumeData.personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all hover:border-brand-orange hover:bg-brand-orange/20 hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={resumeData.personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all hover:border-brand-orange hover:bg-brand-orange/20 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${resumeData.personalInfo.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all hover:border-brand-orange hover:bg-brand-orange/20 hover:text-white"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 font-mono text-[11px] text-gray-500">
          <p>© {new Date().getFullYear()} DEION BERNARD. ALL RIGHTS RESERVED.</p>
          <p className="flex items-center gap-1">
            <span>DESIGNED & BUILT FOR DEION</span>
            <span className="text-brand-orange">✦</span>
            <span>NPX DEION</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
