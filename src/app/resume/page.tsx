"use client";

import React, { useState } from "react";
import ComicPanel from "@/components/comic/ComicPanel";
import ComicButton from "@/components/comic/ComicButton";
import Sticker from "@/components/comic/Sticker";
import ActionBurst from "@/components/comic/ActionBurst";
import ResumeHeroCharacter from "@/components/characters/resume-hero-character";
import { resumeData } from "@/data/resumeData";
import { Download, Eye, GraduationCap, Award, CheckCircle2, X } from "lucide-react";

export default function ResumePage() {
  const [showPdfModal, setShowPdfModal] = useState(false);

  return (
    <div className="min-h-screen bg-comic-cream text-black pb-24 font-sans relative overflow-hidden">
      {/* Halftone background */}
      <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />

      {/* HEADER BAR */}
      <section className="relative border-b-4 border-black bg-comic-red py-8 px-4 text-white shadow-comic-sm">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Sticker text="CLASSIFIED FILE #001" variant="yellow" rotate={-2} />
              <span className="font-mono text-xs font-black uppercase tracking-widest text-yellow-300">
                TOP SECRET DOSSIER
              </span>
            </div>
            <h1 className="font-comic text-6xl sm:text-8xl font-black tracking-wider text-white text-shadow-comic uppercase mt-1">
              CHARACTER FILE
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-4 sm:mt-0">
            <ResumeHeroCharacter />
            <ComicButton onClick={() => setShowPdfModal(true)} variant="yellow" size="md">
              <Eye className="h-4 w-4" />
              <span>VIEW RESUME</span>
            </ComicButton>
            <a href="/deion-resume.pdf" download="Deion_Bernard_Resume.pdf">
              <ComicButton variant="white" size="md">
                <Download className="h-4 w-4" />
                <span>DOWNLOAD PDF</span>
              </ComicButton>
            </a>
          </div>
        </div>
      </section>

      {/* DOSSIER CONTAINER */}
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 space-y-10">
        
        {/* TOP DOSSIER HEADER CARD */}
        <ComicPanel bgColor="dark" shadowSize="xl" className="p-6 sm:p-8 text-white relative overflow-hidden">
          <div className="absolute -top-6 -right-6">
            <ActionBurst text="APPROVED!" color="red" size="sm" rotate={12} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-2">
              <span className="font-mono text-xs font-black text-comic-yellow tracking-widest uppercase">
                CODE NAME: DEION BERNARD
              </span>
              <h2 className="font-comic text-4xl sm:text-5xl text-white">DEION DANIEL BERNARD</h2>
              <p className="font-mono text-sm font-bold text-gray-300 uppercase">
                ROLE: COMPUTER SCIENCE GRADUATE • QA TESTER • DEVELOPER
              </p>
              <p className="font-mono text-xs text-gray-400">
                LOCATION: {resumeData.contact.location} | EMAIL: {resumeData.contact.email} | PHONE: {resumeData.contact.phone}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 border-l-0 md:border-l-3 border-comic-red pl-0 md:pl-6">
              <div className="border-2 border-comic-yellow bg-black p-4 rounded text-center flex-1">
                <span className="font-mono text-[10px] font-black text-comic-yellow uppercase block">CGPA SCORE</span>
                <span className="font-comic text-4xl text-white">8.5 / 10</span>
                <span className="font-mono text-[10px] text-gray-400 block">PATRICIAN COLLEGE</span>
              </div>
              <div className="border-2 border-comic-red bg-black p-4 rounded text-center flex-1">
                <span className="font-mono text-[10px] font-black text-comic-red uppercase block">INTERNSHIP STATUS</span>
                <span className="font-comic text-2xl text-yellow-300">QA TESTER</span>
                <span className="font-mono text-[10px] text-gray-400 block">8QUEENS TECH</span>
              </div>
            </div>
          </div>
        </ComicPanel>

        {/* SECTION 1: INTERNSHIP EXPERIENCE */}
        <ComicPanel bgColor="yellow" shadowSize="lg" badgeText="DOSSIER SECTION 01 • INTERNSHIP" badgeBg="bg-comic-red text-white">
          <div className="p-6 sm:p-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between border-b-3 border-black pb-3">
              <div>
                <span className="font-mono text-xs font-black text-comic-red uppercase">{resumeData.internship.duration}</span>
                <h3 className="font-comic text-3xl text-black">{resumeData.internship.company}</h3>
                <p className="font-mono text-sm font-black text-black">{resumeData.internship.role}</p>
              </div>
              <Sticker text="SOFTWARE TESTING" variant="red" rotate={-2} />
            </div>

            <ul className="space-y-2.5 font-mono text-xs sm:text-sm font-bold text-black pt-2">
              {resumeData.internship.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2 border-l-3 border-black pl-3 py-1 bg-white/60 rounded-r">
                  <span className="text-comic-red font-black">★</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </ComicPanel>

        {/* SECTION 2: EDUCATION & CERTIFICATIONS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* EDUCATION */}
          <ComicPanel bgColor="white" shadowSize="lg" badgeText="DOSSIER SECTION 02 • EDUCATION" badgeBg="bg-comic-violet">
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3 border-b-2 border-black pb-2">
                <GraduationCap className="h-6 w-6 text-black" />
                <h3 className="font-comic text-3xl text-black">ACADEMIC BACKGROUND</h3>
              </div>

              <div className="space-y-4">
                {resumeData.education.map((edu, idx) => (
                  <div key={idx} className="border-2 border-black bg-comic-paper p-4 rounded-lg shadow-comic-sm">
                    <span className="font-mono text-xs font-black text-comic-red">{edu.year}</span>
                    <h4 className="font-comic text-2xl text-black">{edu.degree}</h4>
                    <p className="font-mono text-xs font-bold text-gray-800">{edu.institution}</p>
                    <span className="mt-2 inline-block bg-comic-yellow border border-black px-2.5 py-0.5 font-mono text-xs font-black">
                      {edu.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ComicPanel>

          {/* CERTIFICATIONS */}
          <ComicPanel bgColor="violet" shadowSize="lg" badgeText="DOSSIER SECTION 03 • CERTIFICATIONS" badgeBg="bg-comic-yellow">
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3 border-b-2 border-black pb-2">
                <Award className="h-6 w-6 text-black" />
                <h3 className="font-comic text-3xl text-black">OFFICIAL CERTIFICATIONS</h3>
              </div>

              <ul className="space-y-2 font-mono text-xs font-bold text-black">
                {resumeData.certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-center gap-2 border-2 border-black bg-white p-2.5 rounded shadow-comic-sm">
                    <CheckCircle2 className="h-4 w-4 text-comic-red flex-shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ComicPanel>

        </div>

        {/* SECTION 3: ACHIEVEMENTS & WORKSHOPS */}
        <ComicPanel bgColor="paper" shadowSize="lg" badgeText="DOSSIER SECTION 04 • ACHIEVEMENTS & WORKSHOPS" badgeBg="bg-comic-red text-white">
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <h4 className="font-comic text-2xl text-black border-b-2 border-black pb-1 mb-3">KEY ACHIEVEMENTS</h4>
                <ul className="space-y-2 font-mono text-xs font-bold text-black">
                  {resumeData.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-comic-red font-black">▶</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-comic text-2xl text-black border-b-2 border-black pb-1 mb-3">WORKSHOPS &amp; WEBINARS</h4>
                <ul className="space-y-2 font-mono text-xs font-bold text-black">
                  {resumeData.workshops.map((wk, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-comic-violet font-black">▶</span>
                      <span>{wk}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </ComicPanel>

      </div>

      {/* RESUME PDF VIEW MODAL */}
      {showPdfModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl h-[85vh] rounded-2xl border-4 border-black bg-white p-4 shadow-comic-xl flex flex-col">
            <div className="flex items-center justify-between border-b-3 border-black pb-3 mb-3">
              <h3 className="font-comic text-2xl text-black">OFFICIAL RESUME PREVIEW</h3>
              <button
                onClick={() => setShowPdfModal(false)}
                className="rounded border-2 border-black bg-comic-red p-1.5 text-white hover:bg-black"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <iframe src="/deion-resume.pdf" className="w-full flex-1 border-2 border-black rounded" title="Deion Resume PDF" />
          </div>
        </div>
      )}
    </div>
  );
}
