"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VisualThumbnail from "@/components/VisualThumbnails";
import { projectsData } from "@/data/projectsData";
import { Github, ExternalLink, ArrowRight, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-orange selection:text-black">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
        {/* PAGE HEADER */}
        <section className="text-center space-y-4">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-orange uppercase">
            SELECTED ENGINEERING WORK (RESUME PROJECTS)
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black text-white">
            PROJECTS
          </h1>
          <p className="font-mono text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
            Explore Deion&apos;s four official resume projects spanning full-stack web platforms, machine learning security, AI audio processing, and automated enterprise scheduling.
          </p>
          <div className="h-0.5 w-24 bg-brand-orange mx-auto shadow-[0_0_10px_#FF5500]" />
        </section>

        {/* 2-COLUMN VERTICAL PROJECTS LIST */}
        <section className="space-y-16">
          {projectsData.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-2xl border border-white/15 bg-surface-card p-6 sm:p-8 hover:border-brand-orange/50 transition-all duration-300 shadow-2xl"
            >
              {/* LEFT COLUMN: LARGE UNIQUE THUMBNAIL */}
              <div
                data-cursor-text="OPEN"
                className="lg:col-span-6 h-64 sm:h-80 lg:h-auto min-h-[260px] w-full overflow-hidden rounded-xl"
              >
                <VisualThumbnail type={project.id} className="h-full w-full" />
              </div>

              {/* RIGHT COLUMN: INFORMATION & CONTENT */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-brand-orange tracking-widest">
                      {project.number} — {project.category.toUpperCase()}
                    </span>
                    <span className="font-mono text-[11px] text-gray-400 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                      {project.period}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                    {project.title}
                  </h2>

                  <p className="font-mono text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* HIGHLIGHTS */}
                <div className="space-y-2">
                  <h4 className="font-mono text-[11px] font-bold text-brand-orange uppercase tracking-wider">
                    KEY ACHIEVEMENTS & FEATURES
                  </h4>
                  <ul className="space-y-1.5 font-mono text-xs text-gray-300">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-brand-orange mt-0.5">✦</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* TECHNOLOGIES TAGS */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] bg-white/5 border border-white/10 text-gray-300 px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* LINKS */}
                <div className="flex items-center gap-4 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 font-mono text-xs font-bold text-white transition-all hover:border-brand-orange hover:bg-brand-orange/20"
                    >
                      <Github className="h-4 w-4" />
                      <span>GITHUB REPO</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2 font-mono text-xs font-bold text-black transition-all hover:bg-white shadow-[0_0_15px_rgba(255,85,0,0.4)]"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>LIVE DEMO</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
