"use client";

import React, { useState } from "react";
import Image from "next/image";
import ComicPanel from "@/components/comic/ComicPanel";
import ComicButton from "@/components/comic/ComicButton";
import Sticker from "@/components/comic/Sticker";
import ActionBurst from "@/components/comic/ActionBurst";
import MoviesHeroCharacter from "@/components/characters/movies-hero-character";
import { InfiniteMovingCards, InfiniteContentCard } from "@/components/ui/infinite-moving-cards";
import { moviesData } from "@/data/moviesData";
import { Film } from "lucide-react";

export default function MoviesPage() {
  const [moviesRevealed, setMoviesRevealed] = useState(true);

  // Transform movies into InfiniteContentCard items
  const movieCards: InfiniteContentCard[] = moviesData.map((m, idx) => ({
    id: m.id,
    title: m.title,
    subtitle: `${m.year} • ${m.genre}`,
    image: m.image,
    category: `MOVIE ISSUE #${idx + 1}`,
    description: m.description,
    href: `#movie-${m.id}`,
    badge: "WATCHLIST",
    color: m.color,
  }));

  return (
    <div className="min-h-screen bg-comic-dark text-white pb-24 font-sans relative overflow-hidden">
      {/* Cinema background overlay */}
      <div className="absolute inset-0 bg-halftone opacity-15 pointer-events-none" />

      {/* HEADER BAR */}
      <section className="relative border-b-4 border-black bg-comic-red py-8 px-4 text-white shadow-comic-sm">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Sticker text="CHAPTER 05" variant="yellow" rotate={-2} />
              <span className="font-mono text-xs font-black uppercase tracking-widest text-yellow-300">
                CINEMA ISSUE
              </span>
            </div>
            <h1 className="font-comic text-6xl sm:text-8xl font-black tracking-wider text-white text-shadow-comic uppercase mt-1">
              MY WATCHLIST
            </h1>
            <p className="font-mono text-xs sm:text-sm font-bold text-yellow-300 border-l-4 border-black pl-3 mt-1">
              &quot;The movies that made the cut. Cinematic stories that inspire grand vision.&quot;
            </p>
          </div>
          <div className="flex items-center gap-4">
            <MoviesHeroCharacter />
            <ActionBurst text="CINEMA!" color="yellow" size="md" rotate={8} />
          </div>
        </div>
      </section>

      {/* INFINITE MOVING CARDS SECTION FOR MOVIES */}
      <section className="py-12 border-b-4 border-black bg-comic-dark space-y-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Sticker text="INFINITE MOVIE STRIP" variant="yellow" rotate={-1} />
          <span className="font-mono text-xs font-black text-gray-400 uppercase">
            CONTINUOUSLY MOVING COMIC STRIP →
          </span>
        </div>

        <InfiniteMovingCards items={movieCards} direction="right" speed="slow" />
      </section>

      {/* DETAILED MOVIES LIST CONTAINER */}
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 space-y-12">
        <div className="flex items-center justify-between border-b-2 border-comic-red pb-3">
          <Sticker text="ALL-TIME FAVORITE CINEMA ARCHIVE" variant="yellow" rotate={-1} />
          <span className="font-mono text-xs font-black text-gray-400">DESKTOP: IMAGE LEFT • CONTENT RIGHT</span>
        </div>

        {moviesData.map((movie, index) => (
          <div key={movie.id} id={`movie-${movie.id}`}>
            <ComicPanel
              bgColor={movie.color === "red" ? "red" : movie.color === "yellow" ? "yellow" : "dark"}
              shadowSize="xl"
              badgeText={`MOVIE #${index + 1}`}
              badgeBg="bg-comic-red text-white"
              className="p-6 sm:p-10 border-4 border-black"
            >
              {/* DESKTOP LAYOUT: IMAGE LEFT, CONTENT RIGHT */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* LEFT: OFFICIAL COVER ARTWORK */}
                <div className="lg:col-span-4 relative flex justify-center">
                  <div className="relative w-full h-80 sm:h-96 rounded-xl border-4 border-black bg-black overflow-hidden shadow-comic-lg">
                    <Image
                      src={movie.image}
                      alt={movie.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />
                  </div>
                </div>

                {/* RIGHT: MOVIE INFORMATION */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="border-b-3 border-black pb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-black uppercase text-comic-yellow bg-black px-2 py-0.5 border border-black shadow-comic-sm">
                        {movie.year}
                      </span>
                      <span className="font-mono text-xs font-bold uppercase text-gray-300">
                        {movie.genre}
                      </span>
                    </div>
                    <h2 className="font-comic text-4xl sm:text-6xl text-white leading-none mt-2">
                      {movie.title}
                    </h2>
                  </div>

                  <div className="bg-black/70 border-2 border-black p-4 rounded text-white shadow-comic-sm space-y-1">
                    <span className="font-mono text-[11px] font-black uppercase text-comic-yellow block">
                      SPOILER-FREE DESCRIPTION:
                    </span>
                    <p className="font-mono text-xs sm:text-sm font-bold text-gray-200 leading-relaxed">
                      {movie.description}
                    </p>
                  </div>

                  <div className="border-l-4 border-comic-yellow pl-4 py-2 bg-black/80 rounded-r text-white">
                    <span className="font-mono text-[11px] font-black uppercase text-comic-red block">
                      WHY I LIKE IT:
                    </span>
                    <p className="font-mono text-xs sm:text-sm font-bold leading-relaxed text-yellow-100">
                      {movie.whyILikeIt}
                    </p>
                  </div>

                  <div className="pt-2">
                    <a
                      href={movie.imdbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border-3 border-black bg-comic-yellow px-5 py-2.5 font-comic text-lg text-black shadow-comic hover:bg-white active:translate-x-1 active:translate-y-1 active:shadow-comic-pressed transition-all"
                    >
                      <Film className="h-5 w-5" />
                      <span>KNOW MORE ABOUT {movie.title} (IMDb) ↗</span>
                    </a>
                  </div>

                </div>

              </div>
            </ComicPanel>
          </div>
        ))}
      </div>
    </div>
  );
}
