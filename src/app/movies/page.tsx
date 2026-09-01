"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VisualThumbnail from "@/components/VisualThumbnails";
import { moviesData } from "@/data/moviesData";
import { Film, Play, Star, Sparkles, Eye, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MoviesPage() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-movie-red selection:text-white bg-cinema-noise">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
        {/* CINEMATIC PAGE HEADER */}
        <section className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-movie-red/40 bg-movie-red/10 px-4 py-1.5 font-mono text-xs font-bold text-movie-red shadow-[0_0_20px_rgba(229,9,20,0.4)]">
            <Film className="h-4 w-4" />
            <span>CINEMATIC ARCHIVE & FILM COLLECTION</span>
          </div>

          <h1 className="font-display text-4xl sm:text-7xl font-black text-white tracking-tight">
            MY FAVORITE MOVIES
          </h1>

          <p className="font-mono text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
            A curated theater of groundbreaking storytelling, visionary directors, emotional soundscapes, and unforgettable cinematic moments that inspire Deion&apos;s creative world.
          </p>

          {/* VERY LARGE ROUNDED RED BUTTON */}
          <div className="pt-4 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsRevealed(!isRevealed)}
              className="group relative flex items-center gap-4 rounded-full bg-movie-red px-8 py-5 font-mono text-sm sm:text-base font-black text-white shadow-[0_0_40px_rgba(229,9,20,0.7)] transition-all hover:bg-red-600 border-2 border-white/20"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white">
                {isRevealed ? <Eye className="h-5 w-5" /> : <Play className="h-5 w-5 fill-current" />}
              </div>
              <span className="tracking-widest uppercase">
                {isRevealed ? "HIDE FAVORITE MOVIES" : "REVEAL MY FAVORITE MOVIES"}
              </span>
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  isRevealed ? "rotate-180" : ""
                }`}
              />
            </motion.button>
          </div>
        </section>

        {/* MOVIES COLLECTION (VERTICAL 2-COLUMN ITEMS) */}
        <AnimatePresence>
          {isRevealed ? (
            <motion.section
              key="movies-collection"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-16 pt-8 border-t border-movie-red/30"
            >
              {moviesData.map((movie, index) => (
                <motion.article
                  key={movie.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-2xl border border-movie-red/30 bg-gradient-to-br from-surface-card via-black to-red-950/20 p-6 sm:p-8 shadow-[0_0_30px_rgba(229,9,20,0.15)] hover:border-movie-red hover:shadow-[0_0_45px_rgba(229,9,20,0.35)] transition-all"
                >
                  {/* LEFT COLUMN: LARGE CINEMATIC MOVIE THUMBNAIL */}
                  <div
                    data-cursor-text="CINEMA"
                    className="lg:col-span-5 h-72 sm:h-96 lg:h-auto min-h-[300px] w-full overflow-hidden rounded-xl"
                  >
                    <VisualThumbnail type={movie.posterVisual} className="h-full w-full" />
                  </div>

                  {/* RIGHT COLUMN: INFORMATION & PERSONAL NOTE */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-movie-red tracking-widest">
                          {movie.number} — {movie.year}
                        </span>
                        <div className="flex items-center gap-1 font-mono text-xs text-yellow-400 font-bold bg-white/5 px-2.5 py-1 rounded border border-white/10">
                          <Star className="h-3.5 w-3.5 fill-current" />
                          <span>{movie.rating}</span>
                        </div>
                      </div>

                      <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                        {movie.title}
                      </h2>

                      <p className="font-mono text-xs text-gray-400">
                        DIRECTED BY <strong className="text-white">{movie.director.toUpperCase()}</strong>
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {movie.genre.map((g) => (
                          <span
                            key={g}
                            className="font-mono text-[11px] bg-movie-red/10 border border-movie-red/30 text-movie-red px-2.5 py-0.5 rounded-full font-bold"
                          >
                            {g}
                          </span>
                        ))}
                      </div>

                      <p className="font-mono text-xs sm:text-sm text-gray-300 leading-relaxed pt-2">
                        {movie.description}
                      </p>
                    </div>

                    {/* WHY I LIKE IT AREA */}
                    <div className="rounded-xl border border-movie-red/40 bg-black/80 p-4 space-y-2">
                      <h4 className="font-mono text-xs font-bold text-movie-red tracking-widest uppercase flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5" />
                        WHY DEION LOVES THIS FILM
                      </h4>
                      <p className="font-mono text-xs text-gray-200 leading-relaxed italic">
                        &quot;{movie.whyILikeIt}&quot;
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.section>
          ) : (
            <motion.div
              key="movies-placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-2xl border border-dashed border-movie-red/40 bg-surface-card/40 p-12 text-center space-y-4"
            >
              <Film className="h-16 w-16 text-movie-red mx-auto animate-pulse" />
              <h3 className="font-display text-2xl font-bold text-white">
                THEATER IS READY
              </h3>
              <p className="font-mono text-xs text-gray-400 max-w-md mx-auto">
                Press the red <strong className="text-movie-red">&quot;REVEAL MY FAVORITE MOVIES&quot;</strong> button above to illuminate the film collection with dramatic cinematic animations.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
