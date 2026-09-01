"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VisualThumbnail from "@/components/VisualThumbnails";
import { musicData } from "@/data/musicData";
import { Music, Disc, ExternalLink, Volume2, Sparkles, Youtube } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicPage() {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-orange selection:text-black">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
        {/* PAGE HEADER */}
        <section className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-4 py-1.5 font-mono text-xs font-bold text-brand-orange shadow-[0_0_20px_rgba(255,85,0,0.3)]">
            <Music className="h-4 w-4" />
            <span>VOCAL ARCHIVE & MUSICAL SELECTIONS</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-black text-white">
            MY FAVORITE SONGS
          </h1>

          <p className="font-mono text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
            As a Tenor &amp; Bass vocalist who won 2nd prize in Western Music competitions, music holds a special place in Deion&apos;s life. Here are five timeless tracks that inspire his vocal harmony and creative rhythm.
          </p>
          <div className="h-0.5 w-24 bg-brand-orange mx-auto shadow-[0_0_10px_#FF5500]" />
        </section>

        {/* 2-COLUMN VERTICAL SONGS LIST */}
        <section className="space-y-12">
          {musicData.map((song, index) => {
            const isHovered = activeHoverId === song.id;

            return (
              <motion.article
                key={song.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setActiveHoverId(song.id)}
                onMouseLeave={() => setActiveHoverId(null)}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-2xl border p-6 sm:p-8 transition-all duration-300 shadow-2xl ${
                  isHovered
                    ? "border-brand-orange bg-gradient-to-br from-surface-card via-black to-brand-orange/10 shadow-[0_0_35px_rgba(255,85,0,0.3)]"
                    : "border-white/15 bg-surface-card"
                }`}
              >
                {/* LEFT COLUMN: REAL ALBUM COVER THUMBNAIL WITH VINYL SPIN HOVER */}
                <div
                  data-cursor-text="LISTEN"
                  className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto min-h-[260px] w-full overflow-hidden rounded-xl bg-black border border-white/10"
                >
                  {/* REAL ALBUM COVER IMAGE */}
                  <VisualThumbnail type={song.coverVisual} className="h-full w-full" />

                  {/* ROTATING VINYL OVERLAY ON HOVER */}
                  <div
                    className={`absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-300 ${
                      isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="relative h-44 w-44 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-4 border-black bg-gradient-to-tr from-gray-900 via-surface-card to-gray-950 p-2 shadow-2xl animate-spin-slow">
                        <div className="h-full w-full rounded-full border-4 border-gray-800/60 flex items-center justify-center">
                          <Disc className="h-20 w-20 text-brand-orange" />
                        </div>
                      </div>
                      <div className="relative z-10 h-16 w-16 rounded-full border-2 border-brand-orange bg-black flex flex-col items-center justify-center text-center p-1 shadow-[0_0_15px_#FF5500]">
                        <span className="font-mono text-[8px] text-brand-orange font-bold uppercase">
                          SIDE {song.number}
                        </span>
                        <span className="font-display text-[9px] font-black text-white truncate max-w-[50px]">
                          {song.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: SONG INFORMATION & AUDIO REACTION */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-brand-orange tracking-widest">
                        {song.number} — TRACK SELECTION
                      </span>
                      <span className="font-mono text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                        RELEASE: {song.year}
                      </span>
                    </div>

                    <h2
                      className={`font-display text-2xl sm:text-4xl font-extrabold transition-colors ${
                        isHovered ? "text-brand-orange" : "text-white"
                      }`}
                    >
                      {song.title}
                    </h2>

                    <p className="font-mono text-sm text-gray-200 font-bold">
                      ARTIST: <span className="text-white">{song.artist}</span>
                    </p>
                    <p className="font-mono text-xs text-gray-400">
                      ALBUM: {song.album}
                    </p>

                    {/* ANIMATED WAVEFORM ON HOVER */}
                    <div className="flex items-center gap-1 h-6 pt-2">
                      {[30, 70, 45, 90, 60, 100, 40, 80, 55, 95, 50, 75, 35].map((val, i) => (
                        <div
                          key={i}
                          className={`w-1 rounded-t transition-all duration-300 ${
                            isHovered ? "bg-brand-orange animate-pulse" : "bg-gray-700"
                          }`}
                          style={{
                            height: isHovered ? `${val}%` : "30%",
                            animationDelay: `${i * 0.1}s`,
                          }}
                        />
                      ))}
                      <span className="ml-2 font-mono text-[10px] text-brand-orange font-bold uppercase">
                        {isHovered ? "WAVEFORM ACTIVE" : "AUDIO READY"}
                      </span>
                    </div>
                  </div>

                  {/* PERSONAL NOTE */}
                  <div className="rounded-xl border border-white/10 bg-black/60 p-4 space-y-1.5">
                    <h4 className="font-mono text-xs font-bold text-brand-orange tracking-widest uppercase flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5" />
                      DEION&apos;S VOCAL & PERSONAL NOTE
                    </h4>
                    <p className="font-mono text-xs text-gray-300 leading-relaxed italic">
                      &quot;{song.personalNote}&quot;
                    </p>
                  </div>

                  {/* LISTEN BUTTONS (SPOTIFY & YOUTUBE) */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a
                      href={song.spotifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center gap-2 rounded-full border px-6 py-2.5 font-mono text-xs font-bold transition-all ${
                        isHovered
                          ? "bg-brand-orange text-black border-brand-orange shadow-[0_0_20px_rgba(255,85,0,0.5)] scale-105"
                          : "bg-white/5 text-white border-white/20 hover:border-brand-orange"
                      }`}
                    >
                      <Volume2 className="h-4 w-4" />
                      <span>SPOTIFY TRACK</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>

                    <a
                      href={song.youtubeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 font-mono text-xs font-bold text-gray-200 hover:text-white hover:border-red-500 hover:bg-red-500/20 transition-all"
                    >
                      <Youtube className="h-4 w-4 text-red-500" />
                      <span>YOUTUBE VIDEO</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </section>
      </main>

      <Footer />
    </div>
  );
}
