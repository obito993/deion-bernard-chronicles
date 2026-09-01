"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { resumeData } from "@/data/resumeData";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, Terminal as TerminalIcon } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-orange selection:text-black">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
        {/* PAGE HEADER */}
        <section className="text-center space-y-4">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-orange uppercase">
            CONNECT & COLLABORATE
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black text-white">
            CONTACT DEION
          </h1>
          <p className="font-mono text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
            Whether discussing engineering opportunities, AI projects, web applications, vocal performances, or general inquiries, feel free to reach out directly.
          </p>
          <div className="h-0.5 w-24 bg-brand-orange mx-auto shadow-[0_0_10px_#FF5500]" />
        </section>

        {/* 2-COLUMN CONTACT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: DIRECT CONTACT DETAILS */}
          <div className="lg:col-span-5 space-y-8 rounded-2xl border border-white/15 bg-surface-card p-6 sm:p-8">
            <div className="flex items-center gap-4 border-b border-white/10 pb-6">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-brand-orange shadow-[0_0_15px_rgba(255,85,0,0.5)]">
                <Image
                  src="/deion-sketch-logo.jpg"
                  alt="Deion Sketch Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  DEION DANIEL BERNARD
                </h3>
                <p className="font-mono text-xs text-brand-orange">
                  Computer Science Graduate
                </p>
              </div>
            </div>

            <div className="space-y-6 font-mono text-xs text-gray-300">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-orange/40 bg-brand-orange/10 text-brand-orange">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block">EMAIL ADDRESS</span>
                  <a href={`mailto:${resumeData.personalInfo.email}`} className="text-white hover:text-brand-orange transition-colors font-bold text-sm">
                    {resumeData.personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-orange/40 bg-brand-orange/10 text-brand-orange">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block">PHONE / WHATSAPP</span>
                  <a href={`tel:${resumeData.personalInfo.phone}`} className="text-white hover:text-brand-orange transition-colors font-bold text-sm">
                    {resumeData.personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-orange/40 bg-brand-orange/10 text-brand-orange">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block">LOCATION</span>
                  <span className="text-white font-bold text-sm">
                    {resumeData.personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* SOCIAL BUTTONS */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block">
                OFFICIAL ONLINE PROFILES
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={resumeData.personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 font-mono text-xs text-white hover:border-brand-orange hover:bg-brand-orange/20 transition-all"
                >
                  <Github className="h-4 w-4" />
                  <span>GITHUB</span>
                </a>
                <a
                  href={resumeData.personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 font-mono text-xs text-white hover:border-brand-orange hover:bg-brand-orange/20 transition-all"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE CONTACT FORM */}
          <div className="lg:col-span-7 rounded-2xl border border-white/15 bg-surface-card p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-xs font-bold text-brand-orange tracking-widest flex items-center gap-1.5">
                <TerminalIcon className="h-4 w-4" />
                SEND A MESSAGE
              </span>
              <span className="font-mono text-[10px] text-gray-400">INPUT FORM</span>
            </div>

            {submitted ? (
              <div className="rounded-xl border border-green-500/40 bg-green-950/20 p-8 text-center space-y-3">
                <CheckCircle2 className="h-12 w-12 text-green-400 mx-auto animate-bounce" />
                <h3 className="font-display text-xl font-bold text-white">
                  MESSAGE DISPATCHED SUCCESSFULLY!
                </h3>
                <p className="font-mono text-xs text-gray-300">
                  Thank you for reaching out. Deion will respond to your email at <strong className="text-brand-orange">{formState.email || "your address"}</strong> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-gray-300 mb-1 font-bold">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className="w-full rounded-lg border border-white/15 bg-black px-4 py-3 text-white focus:border-brand-orange focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-1 font-bold">YOUR EMAIL</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className="w-full rounded-lg border border-white/15 bg-black px-4 py-3 text-white focus:border-brand-orange focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-1 font-bold">SUBJECT</label>
                  <input
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Project Inquiry / Opportunity"
                    className="w-full rounded-lg border border-white/15 bg-black px-4 py-3 text-white focus:border-brand-orange focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-1 font-bold">MESSAGE</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full rounded-lg border border-white/15 bg-black px-4 py-3 text-white focus:border-brand-orange focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand-orange py-3.5 font-mono text-xs font-bold text-black hover:bg-white transition-all shadow-[0_0_20px_rgba(255,85,0,0.4)]"
                >
                  <Send className="h-4 w-4" />
                  <span>TRANSMIT MESSAGE</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
