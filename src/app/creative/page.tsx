"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SketchStudio from "@/components/SketchStudio";
import { Sparkles, Palette, Layers, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export default function CreativePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-orange selection:text-black">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
        {/* PAGE HEADER */}
        <section className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-4 py-1.5 font-mono text-xs font-bold text-brand-orange shadow-[0_0_20px_rgba(255,85,0,0.3)]">
            <Sparkles className="h-4 w-4" />
            <span>DEION&apos;S DIGITAL ART &amp; CREATIVE SPACE</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-black text-white">
            CREATIVE SPACE
          </h1>

          <p className="font-mono text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto">
            Welcome to Deion&apos;s personal creative studio. Express yourself by uploading any image, sketching custom lines, drawing neon glow overlays, applying artistic filters, and downloading your creations!
          </p>

          <div className="h-0.5 w-24 bg-brand-orange mx-auto shadow-[0_0_10px_#FF5500]" />
        </section>

        {/* INTERACTIVE SKETCH STUDIO COMPONENT */}
        <section className="pt-4">
          <SketchStudio />
        </section>
      </main>

      <Footer />
    </div>
  );
}
