"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ComicPanel from "@/components/comic/ComicPanel";
import ComicButton from "@/components/comic/ComicButton";
import Sticker from "@/components/comic/Sticker";
import ActionBurst from "@/components/comic/ActionBurst";
import JournalHeroCharacter from "@/components/characters/journal-hero-character";
import { InfiniteMovingCards, InfiniteContentCard } from "@/components/ui/infinite-moving-cards";
import { blogsData } from "@/data/blogsData";
import { ArrowRight } from "lucide-react";

export default function BlogsPage() {
  // Transform blogs into InfiniteContentCard items
  const blogCards: InfiniteContentCard[] = blogsData.map((b) => ({
    id: b.slug,
    title: b.title,
    subtitle: b.category,
    image: b.image,
    category: b.number,
    description: b.intro,
    href: `/blogs/${b.slug}`,
    badge: "SKETCHBOOK",
    color: b.color,
  }));

  return (
    <div className="min-h-screen bg-comic-cream text-black pb-24 font-sans relative overflow-hidden">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-paper opacity-30 pointer-events-none" />

      {/* HEADER BAR */}
      <section className="relative border-b-4 border-black bg-comic-yellow py-8 px-4 shadow-comic-sm">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Sticker text="CHAPTER 04" variant="red" rotate={-2} />
              <span className="font-mono text-xs font-black uppercase tracking-widest text-black">
                PERSONAL SKETCHBOOK
              </span>
            </div>
            <h1 className="font-comic text-6xl sm:text-8xl font-black tracking-wider text-black text-shadow-red uppercase mt-1">
              THE JOURNAL
            </h1>
            <p className="font-mono text-xs sm:text-sm font-bold text-black border-l-4 border-black pl-3 mt-1">
              &quot;Stories, ideas &amp; things I&apos;m learning and experiencing.&quot;
            </p>
          </div>
          <div className="flex items-center gap-4">
            <JournalHeroCharacter />
            <ActionBurst text="SKETCHBOOK!" color="violet" size="md" rotate={-6} />
          </div>
        </div>
      </section>

      {/* INFINITE MOVING SKETCHBOOK CARDS SECTION */}
      <section className="py-12 border-b-4 border-black bg-comic-paper space-y-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Sticker text="SKETCHBOOK REEL" variant="red" rotate={2} />
          <span className="font-mono text-xs font-black text-black uppercase">
            MOVING SKETCHBOOK CARDS (LEFT → NORMAL)
          </span>
        </div>

        <InfiniteMovingCards items={blogCards} direction="left" speed="normal" />
      </section>

      {/* BLOG CHAPTERS DIRECTORY */}
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 space-y-12">
        <div className="flex items-center justify-between border-b-2 border-black pb-3">
          <Sticker text="5 JOURNAL CHAPTERS" variant="yellow" rotate={-1} />
          <span className="font-mono text-xs font-black text-gray-700">DESKTOP: IMAGE LEFT • CONTENT RIGHT</span>
        </div>

        {blogsData.map((blog) => (
          <ComicPanel
            key={blog.slug}
            bgColor={blog.color}
            shadowSize="xl"
            badgeText={blog.number}
            badgeBg="bg-black text-white"
            className="p-6 sm:p-10"
          >
            {/* DESKTOP LAYOUT: IMAGE LEFT, CONTENT RIGHT (NEVER IMAGE ABOVE ON DESKTOP) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* LEFT: UNIQUE COMIC ILLUSTRATION */}
              <div className="lg:col-span-5 relative flex flex-col items-center">
                <div className="relative w-full h-64 sm:h-72 rounded-xl border-4 border-black bg-white overflow-hidden shadow-comic-lg">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />
                </div>
                
                {/* DOODLES BADGES */}
                <div className="flex flex-wrap gap-2 mt-3 justify-center">
                  {blog.doodles.map((d, i) => (
                    <Sticker key={i} text={d} variant="white" rotate={i % 2 === 0 ? 3 : -3} />
                  ))}
                </div>
              </div>

              {/* RIGHT: BLOG CONTENT */}
              <div className="lg:col-span-7 space-y-4">
                <div className="border-b-3 border-black pb-2">
                  <span className="font-mono text-xs font-black uppercase text-black/70 tracking-widest">
                    {blog.category}
                  </span>
                  <h2 className="font-comic text-4xl sm:text-5xl text-black leading-none mt-1">
                    {blog.title}
                  </h2>
                </div>

                <div className="bg-white/80 border-2 border-black p-4 rounded shadow-comic-sm">
                  <p className="font-mono text-xs sm:text-sm font-bold text-black leading-relaxed">
                    {blog.intro}
                  </p>
                </div>

                <div className="pt-2">
                  <Link href={`/blogs/${blog.slug}`}>
                    <ComicButton variant="dark" size="md">
                      <span>READ MORE</span>
                      <ArrowRight className="h-4 w-4" />
                    </ComicButton>
                  </Link>
                </div>
              </div>

            </div>
          </ComicPanel>
        ))}
      </div>
    </div>
  );
}
