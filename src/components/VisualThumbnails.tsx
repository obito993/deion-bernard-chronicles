"use client";

import React from "react";
import Image from "next/image";
import { Cpu, ShieldCheck, Music2, Grid, BookOpen, Gamepad2, Lightbulb, Dumbbell, Compass, Disc } from "lucide-react";

interface ThumbnailProps {
  type: string;
  className?: string;
}

export default function VisualThumbnail({ type, className = "" }: ThumbnailProps) {
  switch (type) {
    // REAL SONG ALBUM IMAGES (ALL 5 SONGS)
    case "cant-help-falling":
      return (
        <div className={`relative h-full w-full overflow-hidden rounded-xl bg-black ${className}`}>
          <Image
            src="/media/cant-help-falling.jpg"
            alt="Elvis Presley - Can't Help Falling in Love Album Art"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 font-mono text-xs text-white font-bold tracking-wider">
            ELVIS PRESLEY • CAN&apos;T HELP FALLING IN LOVE
          </div>
        </div>
      );

    case "unchained-melody":
      return (
        <div className={`relative h-full w-full overflow-hidden rounded-xl bg-black ${className}`}>
          <Image
            src="/media/unchained-melody.jpg"
            alt="The Righteous Brothers - Unchained Melody Cover"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 font-mono text-xs text-white font-bold tracking-wider">
            THE RIGHTEOUS BROTHERS • UNCHAINED MELODY
          </div>
        </div>
      );

    case "heaven-bryan-adams":
    case "heaven":
      return (
        <div className={`relative h-full w-full overflow-hidden rounded-xl bg-black ${className}`}>
          <Image
            src="/media/heaven.jpg"
            alt="Bryan Adams - Heaven Album Cover"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 font-mono text-xs text-white font-bold tracking-wider">
            BRYAN ADAMS • HEAVEN
          </div>
        </div>
      );

    case "i-want-it-that-way":
      return (
        <div className={`relative h-full w-full overflow-hidden rounded-xl bg-black ${className}`}>
          <Image
            src="/media/i-want-it-that-way.jpg"
            alt="Backstreet Boys - I Want It That Way Cover"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 font-mono text-xs text-white font-bold tracking-wider">
            BACKSTREET BOYS • I WANT IT THAT WAY
          </div>
        </div>
      );

    case "let-it-be-me":
      return (
        <div className={`relative h-full w-full overflow-hidden rounded-xl bg-black ${className}`}>
          <Image
            src="/media/let-it-be-me.jpg"
            alt="The Everly Brothers - Let It Be Me Cover"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 font-mono text-xs text-white font-bold tracking-wider">
            THE EVERLY BROTHERS • LET IT BE ME
          </div>
        </div>
      );

    // REAL MOVIE POSTERS
    case "interstellar":
      return (
        <div className={`relative h-full w-full overflow-hidden rounded-xl bg-black ${className}`}>
          <Image
            src="/media/interstellar.jpg"
            alt="Interstellar Movie Poster"
            fill
            className="object-cover object-top transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 font-mono text-xs text-white font-bold tracking-wider">
            INTERSTELLAR (2014) • CHRISTOPHER NOLAN
          </div>
        </div>
      );

    case "titanic":
      return (
        <div className={`relative h-full w-full overflow-hidden rounded-xl bg-black ${className}`}>
          <Image
            src="/media/titanic.jpg"
            alt="Titanic Movie Poster"
            fill
            className="object-cover object-top transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 font-mono text-xs text-white font-bold tracking-wider">
            TITANIC (1997) • JAMES CAMERON
          </div>
        </div>
      );

    case "inception":
      return (
        <div className={`relative h-full w-full overflow-hidden rounded-xl bg-black ${className}`}>
          <Image
            src="/media/inception.jpg"
            alt="Inception Movie Poster"
            fill
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 font-mono text-xs text-white font-bold tracking-wider">
            INCEPTION (2010) • CHRISTOPHER NOLAN
          </div>
        </div>
      );

    case "shutter-island":
      return (
        <div className={`relative h-full w-full overflow-hidden rounded-xl bg-black ${className}`}>
          <Image
            src="/media/shutter-island.jpg"
            alt="Shutter Island Movie Poster"
            fill
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 font-mono text-xs text-white font-bold tracking-wider">
            SHUTTER ISLAND (2010) • MARTIN SCORSESE
          </div>
        </div>
      );

    case "spiderman":
    case "spiderman-no-way-home":
      return (
        <div className={`relative h-full w-full overflow-hidden rounded-xl bg-black ${className}`}>
          <Image
            src="/media/spiderman.jpg"
            alt="Spider-Man: No Way Home Movie Poster"
            fill
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 font-mono text-xs text-white font-bold tracking-wider">
            SPIDER-MAN: NO WAY HOME (2021) • MARVEL / SONY
          </div>
        </div>
      );

    case "endgame":
    case "avengers-endgame":
      return (
        <div className={`relative h-full w-full overflow-hidden rounded-xl bg-black ${className}`}>
          <Image
            src="/media/endgame.jpg"
            alt="Avengers: Endgame Encore Movie Poster"
            fill
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 font-mono text-xs text-white font-bold tracking-wider">
            AVENGERS: ENDGAME (2019) • MARVEL STUDIOS
          </div>
        </div>
      );

    // PROJECTS — REAL UPLOADED SCREENSHOTS WITH BOLD PROMINENT TITLE BANNERS
    case "ai-tool-box":
      return (
        <div className={`relative h-full w-full overflow-hidden rounded-xl bg-black border border-brand-orange/40 ${className}`}>
          <Image
            src="/media/project-aitoolbox.png"
            alt="AI Toolbox — 100+ AI Tools Dashboard"
            fill
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          
          {/* Top Project Tag */}
          <div className="absolute top-3 left-3 z-10">
            <span className="font-mono text-[10px] font-bold text-black bg-brand-orange px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
              PROJECT 01
            </span>
          </div>

          {/* Prominent Bottom Title Banner */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/90 to-transparent space-y-1">
            <h3 className="font-display text-xl sm:text-2xl font-black text-white tracking-wider drop-shadow-md">
              01_ AI TOOL BOX
            </h3>
            <p className="font-mono text-xs text-brand-orange font-bold tracking-widest uppercase">
              100+ FULL-STACK AI UTILITIES &amp; ADMIN DASHBOARD
            </p>
          </div>
        </div>
      );

    case "spam-detection-website":
      return (
        <div className={`relative h-full w-full overflow-hidden rounded-xl bg-black border border-brand-orange/40 ${className}`}>
          <Image
            src="/media/project-spam.png"
            alt="Spam Detection Website — ML-Powered Detection Dashboard"
            fill
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          {/* Top Project Tag */}
          <div className="absolute top-3 left-3 z-10">
            <span className="font-mono text-[10px] font-bold text-black bg-brand-orange px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
              PROJECT 02
            </span>
          </div>

          {/* Prominent Bottom Title Banner */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/90 to-transparent space-y-1">
            <h3 className="font-display text-xl sm:text-2xl font-black text-white tracking-wider drop-shadow-md">
              02_ SPAM DETECTION WEBSITE
            </h3>
            <p className="font-mono text-xs text-brand-orange font-bold tracking-widest uppercase">
              PYTHON ML PIPELINE &amp; ETL CLASSIFICATION
            </p>
          </div>
        </div>
      );

    case "virtuoso-ai":
      return (
        <div className={`relative h-full w-full overflow-hidden rounded-xl bg-black border border-brand-orange/40 ${className}`}>
          <Image
            src="/media/project-virtuoso.png"
            alt="Virtuoso AI — AI-Powered Music Learning Platform"
            fill
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          {/* Top Project Tag */}
          <div className="absolute top-3 left-3 z-10">
            <span className="font-mono text-[10px] font-bold text-black bg-brand-orange px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
              PROJECT 03
            </span>
          </div>

          {/* Prominent Bottom Title Banner */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/90 to-transparent space-y-1">
            <h3 className="font-display text-xl sm:text-2xl font-black text-white tracking-wider drop-shadow-md">
              03_ VIRTUOSO AI
            </h3>
            <p className="font-mono text-xs text-brand-orange font-bold tracking-widest uppercase">
              AI MUSIC LEARNING PLATFORM &amp; FASTAPI
            </p>
          </div>
        </div>
      );

    case "automatic-seating-allocation":
      return (
        <div className={`relative h-full w-full overflow-hidden rounded-xl bg-black border border-brand-orange/40 ${className}`}>
          <Image
            src="/media/project-seating.png"
            alt="Automatic Seating Allocation — Examination Hall Management System"
            fill
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          {/* Top Project Tag */}
          <div className="absolute top-3 left-3 z-10">
            <span className="font-mono text-[10px] font-bold text-black bg-brand-orange px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
              PROJECT 04
            </span>
          </div>

          {/* Prominent Bottom Title Banner */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/90 to-transparent space-y-1">
            <h3 className="font-display text-xl sm:text-2xl font-black text-white tracking-wider drop-shadow-md">
              04_ AUTOMATIC SEATING ALLOCATION
            </h3>
            <p className="font-mono text-xs text-brand-orange font-bold tracking-widest uppercase">
              EXAM HALL AUTOMATION &amp; 95% ACCURACY
            </p>
          </div>
        </div>
      );

    // BLOGS — REAL UPLOADED PHOTOS
    case "reading-and-studying":
      return (
        <div className={`relative h-full w-full overflow-hidden rounded-xl bg-black ${className}`}>
          <Image
            src="/media/blog-reading.jpg"
            alt="Reading & Studying — Dictionary page with inspirational quote"
            fill
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 font-mono text-xs text-white font-bold tracking-wider">
            READING & STUDYING
          </div>
        </div>
      );

    case "playing-games":
      return (
        <div className={`relative h-full w-full overflow-hidden rounded-xl bg-black ${className}`}>
          <Image
            src="/media/blog-games.jpg"
            alt="Playing Games — PS4 game library"
            fill
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 font-mono text-xs text-white font-bold tracking-wider">
            PLAYING GAMES
          </div>
        </div>
      );

    case "learning-new-things":
      return (
        <div className={`relative h-full w-full overflow-hidden rounded-xl bg-black ${className}`}>
          <Image
            src="/media/blog-learning.jpg"
            alt="Learning New Things — Laptop, notes & study setup"
            fill
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 font-mono text-xs text-white font-bold tracking-wider">
            LEARNING NEW THINGS
          </div>
        </div>
      );

    case "the-gym":
      return (
        <div className={`relative h-full w-full overflow-hidden rounded-xl bg-black ${className}`}>
          <Image
            src="/media/blog-gym.jpg"
            alt="The Gym — Deion's gym with weights"
            fill
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 font-mono text-xs text-white font-bold tracking-wider">
            THE GYM & ROUTINE
          </div>
        </div>
      );

    case "adventure-and-exploring":
      return (
        <div className={`relative h-full w-full overflow-hidden rounded-xl bg-black ${className}`}>
          <Image
            src="/media/blog-adventure.jpg"
            alt="Adventure & Exploring — Backpacking & hiking mountain trail"
            fill
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 font-mono text-xs text-white font-bold tracking-wider">
            ADVENTURE & EXPLORING
          </div>
        </div>
      );

    default:
      return (
        <div className={`relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-brand-orange/30 bg-gradient-to-br from-black via-surface-card to-zinc-900 p-6 ${className}`}>
          <div className="relative z-10 flex flex-col items-center text-center space-y-3">
            <Disc className="h-14 w-14 text-brand-orange animate-spin-slow" />
            <span className="font-mono text-xs text-brand-orange tracking-widest uppercase font-bold">{type}</span>
          </div>
        </div>
      );
  }
}
