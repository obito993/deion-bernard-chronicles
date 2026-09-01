"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import FaceLogo from "@/components/FaceLogo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { resumeData } from "@/data/resumeData";
import { motion } from "framer-motion";
import { User, GraduationCap, Code2, Globe, Music, Award, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-orange selection:text-black">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 space-y-20">
        {/* HERO SECTION */}
        <section className="flex flex-col items-center text-center space-y-6">
          {/* FACE-SKETCH LOGO (TOUCH TO BLUSH) */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            <FaceLogo size="xl" />
            <span className="mt-3 font-mono text-xs text-brand-orange tracking-widest uppercase font-semibold">
              ✦ TOUCH MY FACE TO MAKE ME BLUSH 😊
            </span>
          </motion.div>

          <div>
            <span className="font-mono text-xs font-bold tracking-widest text-brand-orange uppercase">
              BIOGRAPHY & PERSONAL PROFILE
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-black text-white mt-1">
              ABOUT ME
            </h1>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-300 mt-2">
              DEION BERNARD
            </h2>
            <p className="font-mono text-sm text-brand-orange mt-2 tracking-widest uppercase font-semibold">
              Computer Science Graduate • Developer • AI Enthusiast • Creator
            </p>
          </div>
          <div className="h-0.5 w-24 bg-brand-orange shadow-[0_0_10px_#FF5500]" />
        </section>

        {/* 01. WHO I AM */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-white/10 pt-12">
          <div className="md:col-span-4">
            <span className="font-mono text-xs text-brand-orange font-bold">01 / OVERVIEW</span>
            <h3 className="font-display text-2xl font-bold text-white mt-1">WHO I AM</h3>
          </div>
          <div className="md:col-span-8 space-y-4 font-mono text-sm text-gray-300 leading-relaxed">
            <p className="text-base text-white font-sans font-medium">
              {resumeData.personalInfo.objective}
            </p>
            <p>
              I am a driven software developer and Computer Science graduate based in Chennai, India. My core focus spans full-stack web development, artificial intelligence tools, machine learning pipelines, and database architecture.
            </p>
            <p>
              I believe in clean code, intuitive user experiences, continuous learning, and combining technical rigor with creative artistic expression.
            </p>
          </div>
        </section>

        {/* 02. MY JOURNEY & INTERNSHIP */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-white/10 pt-12">
          <div className="md:col-span-4">
            <span className="font-mono text-xs text-brand-orange font-bold">02 / EXPERIENCE</span>
            <h3 className="font-display text-2xl font-bold text-white mt-1">MY JOURNEY</h3>
          </div>
          <div className="md:col-span-8 space-y-6">
            <div className="rounded-2xl border border-white/15 bg-surface-card p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div>
                  <h4 className="font-display text-xl font-bold text-white">
                    {resumeData.internship.company}
                  </h4>
                  <p className="font-mono text-xs text-brand-orange font-semibold">
                    {resumeData.internship.role}
                  </p>
                </div>
                <span className="font-mono text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10 w-fit">
                  {resumeData.internship.period}
                </span>
              </div>
              <ul className="space-y-2 font-mono text-xs text-gray-300">
                {resumeData.internship.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">✦</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 03. EDUCATION */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-white/10 pt-12">
          <div className="md:col-span-4">
            <span className="font-mono text-xs text-brand-orange font-bold">03 / ACADEMICS</span>
            <h3 className="font-display text-2xl font-bold text-white mt-1">EDUCATION</h3>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {resumeData.education.map((edu, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/15 bg-surface-card p-6 space-y-3 hover:border-brand-orange/50 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-orange/40 bg-brand-orange/10 text-brand-orange">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h4 className="font-display text-lg font-bold text-white">
                  {edu.degree}
                </h4>
                <p className="font-mono text-xs text-gray-300">
                  {edu.institution}
                </p>
                <span className="inline-block font-mono text-xs font-bold text-brand-orange bg-brand-orange/10 px-3 py-1 rounded">
                  {edu.score}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 04. TECHNICAL & SOFT SKILLS */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-white/10 pt-12">
          <div className="md:col-span-4">
            <span className="font-mono text-xs text-brand-orange font-bold">04 / CAPABILITIES</span>
            <h3 className="font-display text-2xl font-bold text-white mt-1">SKILLS</h3>
          </div>
          <div className="md:col-span-8 space-y-6">
            {/* Programming Languages */}
            <div className="space-y-2">
              <h4 className="font-mono text-xs font-bold text-brand-orange uppercase">
                Programming Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {resumeData.technicalSkills.programmingLanguages.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs bg-white/5 border border-white/10 text-gray-200 px-3.5 py-1.5 rounded-full hover:border-brand-orange hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Web Dev */}
            <div className="space-y-2">
              <h4 className="font-mono text-xs font-bold text-brand-orange uppercase">
                Web Development & Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {resumeData.technicalSkills.webDevelopment.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs bg-white/5 border border-white/10 text-gray-200 px-3.5 py-1.5 rounded-full hover:border-brand-orange hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases & OS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-mono text-xs font-bold text-brand-orange uppercase">
                  Databases
                </h4>
                <div className="flex flex-wrap gap-2">
                  {resumeData.technicalSkills.databaseManagement.map((db) => (
                    <span
                      key={db}
                      className="font-mono text-xs bg-white/5 border border-white/10 text-gray-200 px-3 py-1 rounded-full"
                    >
                      {db}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono text-xs font-bold text-brand-orange uppercase">
                  Soft Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {resumeData.softSkills.map((ss) => (
                    <span
                      key={ss}
                      className="font-mono text-xs bg-brand-orange/10 border border-brand-orange/30 text-brand-orange px-3 py-1 rounded-full font-semibold"
                    >
                      {ss}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05. LANGUAGES */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-white/10 pt-12">
          <div className="md:col-span-4">
            <span className="font-mono text-xs text-brand-orange font-bold">05 / COMMUNICATION</span>
            <h3 className="font-display text-2xl font-bold text-white mt-1">LANGUAGES</h3>
          </div>
          <div className="md:col-span-8 grid grid-cols-3 gap-4">
            {resumeData.languages.map((lang) => (
              <div
                key={lang}
                className="rounded-xl border border-white/15 bg-surface-card p-4 text-center space-y-2 hover:border-brand-orange transition-colors"
              >
                <Globe className="h-6 w-6 text-brand-orange mx-auto" />
                <h4 className="font-display text-lg font-bold text-white">{lang}</h4>
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                  Fluent
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 06. INTERESTS & EXTRACURRICULARS */}
        <section id="interests" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-white/10 pt-12">
          <div className="md:col-span-4">
            <span className="font-mono text-xs text-brand-orange font-bold">06 / BEYOND CODE</span>
            <h3 className="font-display text-2xl font-bold text-white mt-1">INTERESTS & MUSIC</h3>
          </div>
          <div className="md:col-span-8 space-y-6">
            <div className="rounded-2xl border border-white/15 bg-surface-card p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-orange/40 bg-brand-orange/10 text-brand-orange">
                  <Music className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-white">
                    Western Music & Vocal Ensemble
                  </h4>
                  <p className="font-mono text-xs text-brand-orange font-semibold">
                    Tenor & Bass Vocalist — Shamrocks Ensemble
                  </p>
                </div>
              </div>
              <ul className="space-y-2 font-mono text-xs text-gray-300">
                {resumeData.extracurriculars.map((ec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-brand-orange mt-0.5">✦</span>
                    <span>{ec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end pt-4">
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 font-mono text-xs font-bold text-black hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(255,85,0,0.4)]"
              >
                <span>VIEW FULL RESUME</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
