"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { resumeData } from "@/data/resumeData";
import { projectsData } from "@/data/projectsData";
import { Download, Eye, GraduationCap, Briefcase, Award, CheckCircle2, FileText, Code2, Globe, Sparkles } from "lucide-react";
import Image from "next/image";

export default function ResumePage() {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    // Generate/Trigger print mode to save as PDF or view formatted printable sheet
    window.print();
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-orange selection:text-black">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
        {/* HEADER SECTION WITH BUTTONS */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-8">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-brand-orange shadow-[0_0_20px_rgba(255,85,0,0.5)] hidden sm:block">
              <Image
                src="/deion-sketch-logo.jpg"
                alt="Deion Logo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-mono text-xs font-bold tracking-widest text-brand-orange uppercase">
                DIGITAL CURRICULUM VITAE
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-black text-white">
                RESUME
              </h1>
              <p className="font-mono text-xs text-gray-300 mt-1">
                {resumeData.personalInfo.fullName} • {resumeData.personalInfo.title}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 font-mono text-xs font-bold text-white hover:border-brand-orange hover:bg-brand-orange/20 transition-all"
            >
              <Eye className="h-4 w-4 text-brand-orange" />
              <span>VIEW FULL RESUME</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-2 rounded-full bg-brand-orange px-6 py-2.5 font-mono text-xs font-bold text-black hover:bg-white transition-all shadow-[0_0_20px_rgba(255,85,0,0.4)]"
            >
              <Download className="h-4 w-4" />
              <span>DOWNLOAD RESUME</span>
            </button>
          </div>
        </section>

        {/* RESUME PAPER CARD */}
        <div id="printable-resume" className="rounded-2xl border border-white/15 bg-surface-card p-6 sm:p-10 space-y-10 shadow-2xl">
          {/* PERSONAL HEADER */}
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-black text-white">
                {resumeData.personalInfo.fullName}
              </h2>
              <p className="font-mono text-xs text-brand-orange font-semibold mt-1">
                {resumeData.personalInfo.title}
              </p>
            </div>
            <div className="font-mono text-xs text-gray-300 space-y-1 sm:text-right">
              <p>📍 {resumeData.personalInfo.location}</p>
              <p>✉️ {resumeData.personalInfo.email}</p>
              <p>📞 {resumeData.personalInfo.phone}</p>
            </div>
          </div>

          {/* OBJECTIVE */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs font-bold text-brand-orange tracking-widest uppercase flex items-center gap-2">
              <FileText className="h-4 w-4" />
              PERSONAL OBJECTIVE
            </h3>
            <p className="font-mono text-xs sm:text-sm text-gray-300 leading-relaxed">
              {resumeData.personalInfo.objective}
            </p>
          </div>

          {/* EXPERIENCE */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs font-bold text-brand-orange tracking-widest uppercase flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              INTERNSHIP EXPERIENCE
            </h3>
            <div className="border-l-2 border-brand-orange pl-4 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between font-mono text-xs">
                <span className="font-bold text-white text-sm">
                  {resumeData.internship.company} — {resumeData.internship.role}
                </span>
                <span className="text-brand-orange">{resumeData.internship.period}</span>
              </div>
              <ul className="space-y-1.5 font-mono text-xs text-gray-300">
                {resumeData.internship.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-brand-orange">•</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* TECHNICAL PROJECTS */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs font-bold text-brand-orange tracking-widest uppercase flex items-center gap-2">
              <Code2 className="h-4 w-4" />
              PROJECTS (4 OFFICIAL RESUME PROJECTS)
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {projectsData.map((proj) => (
                <div key={proj.id} className="rounded-xl border border-white/10 bg-black/50 p-4 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-display font-bold text-white text-base">
                      {proj.number} — {proj.title}
                    </span>
                    <span className="font-mono text-[11px] text-brand-orange font-semibold">
                      {proj.period}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-gray-400">
                    <strong className="text-gray-300">TOOLS USED:</strong> {proj.tools.join(" · ")}
                  </p>
                  <ul className="space-y-1 font-mono text-xs text-gray-300 pt-1">
                    {proj.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-brand-orange">✦</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* TECHNICAL & SOFT SKILLS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-mono text-xs font-bold text-brand-orange tracking-widest uppercase flex items-center gap-2">
                <Code2 className="h-4 w-4" />
                TECHNICAL SKILLS
              </h3>
              <div className="space-y-2 font-mono text-xs text-gray-300">
                <p><strong className="text-white">Programming:</strong> {resumeData.technicalSkills.programmingLanguages.join(", ")}</p>
                <p><strong className="text-white">Web Dev:</strong> {resumeData.technicalSkills.webDevelopment.join(", ")}</p>
                <p><strong className="text-white">Databases:</strong> {resumeData.technicalSkills.databaseManagement.join(", ")}</p>
                <p><strong className="text-white">Operating Systems:</strong> {resumeData.technicalSkills.operatingSystems.join(", ")}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs font-bold text-brand-orange tracking-widest uppercase flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                SOFT SKILLS & LANGUAGES
              </h3>
              <div className="space-y-2 font-mono text-xs text-gray-300">
                <p><strong className="text-white">Soft Skills:</strong> {resumeData.softSkills.join(", ")}</p>
                <p><strong className="text-white">Languages:</strong> {resumeData.languages.join(", ")}</p>
              </div>
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-bold text-brand-orange tracking-widest uppercase flex items-center gap-2">
              <Award className="h-4 w-4" />
              CERTIFICATIONS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              {resumeData.certifications.map((c, i) => (
                <div key={i} className="flex items-center gap-2.5 rounded bg-white/5 p-2.5 border border-white/5">
                  <CheckCircle2 className="h-4 w-4 text-brand-orange shrink-0" />
                  <div>
                    <p className="font-bold text-white">{c.title}</p>
                    <p className="text-[11px] text-gray-400">{c.issuer} ({c.date})</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ACHIEVEMENTS & EXTRACURRICULAR */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-bold text-brand-orange tracking-widest uppercase flex items-center gap-2">
              <Award className="h-4 w-4" />
              ACHIEVEMENTS & EXTRA-CURRICULAR
            </h3>
            <ul className="space-y-1.5 font-mono text-xs text-gray-300">
              {resumeData.achievements.map((ach, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-brand-orange">✦</span>
                  <span>{ach}</span>
                </li>
              ))}
              {resumeData.extracurriculars.map((ec, idx) => (
                <li key={`ec-${idx}`} className="flex items-start gap-2">
                  <span className="text-brand-orange">✦</span>
                  <span>{ec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      {/* VIEW RESUME FULLSCREEN MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl">
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-brand-orange/40 bg-surface-card p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="font-display text-xl font-bold text-white">
                DEION BERNARD — OFFICIAL RESUME VIEW
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="rounded-full bg-white/10 px-4 py-1.5 font-mono text-xs text-white hover:bg-brand-orange hover:text-black font-bold"
              >
                CLOSE
              </button>
            </div>
            <div className="space-y-6 font-mono text-xs text-gray-300">
              <p className="text-white text-sm font-sans font-bold">
                {resumeData.personalInfo.fullName} | {resumeData.personalInfo.title}
              </p>
              <div className="space-y-2 border-l-2 border-brand-orange pl-4">
                <p className="font-bold text-white">Education:</p>
                {resumeData.education.map((e, idx) => (
                  <p key={idx}>{e.degree} — {e.institution} ({e.score})</p>
                ))}
              </div>
              <div className="space-y-2 border-l-2 border-brand-orange pl-4">
                <p className="font-bold text-white">Internship:</p>
                <p>{resumeData.internship.company} — {resumeData.internship.role} ({resumeData.internship.period})</p>
              </div>
              <div className="space-y-2 border-l-2 border-brand-orange pl-4">
                <p className="font-bold text-white">4 Official Resume Projects:</p>
                {projectsData.map((p) => (
                  <p key={p.id}>• {p.title} ({p.tools.join(", ")})</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
