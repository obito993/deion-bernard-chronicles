"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import ComicPanel from "@/components/comic/ComicPanel";
import ComicButton from "@/components/comic/ComicButton";
import Sticker from "@/components/comic/Sticker";
import SpeechBubble from "@/components/comic/SpeechBubble";
import { blogsData } from "@/data/blogsData";
import { ArrowLeft, BookOpen, PenTool, CheckCircle2 } from "lucide-react";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-comic-cream p-12 text-center font-sans">
        <h1 className="font-comic text-6xl text-black">CHAPTER NOT FOUND</h1>
        <Link href="/blogs" className="mt-4 inline-block font-mono text-sm underline font-bold">
          ← BACK TO JOURNAL
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-comic-cream text-black pb-24 font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-paper opacity-40 pointer-events-none" />

      {/* BACK NAVIGATION BAR */}
      <section className="border-b-4 border-black bg-comic-yellow py-4 px-4 shadow-comic-sm">
        <div className="mx-auto max-w-5xl flex items-center justify-between">
          <Link href="/blogs">
            <button className="flex items-center gap-2 rounded border-2 border-black bg-white px-3 py-1.5 font-mono text-xs font-black uppercase shadow-comic-sm hover:bg-comic-paper">
              <ArrowLeft className="h-4 w-4" />
              <span>BACK TO JOURNAL</span>
            </button>
          </Link>
          <div className="flex items-center gap-2">
            <Sticker text={blog.number} variant="red" rotate={-2} />
            <span className="font-mono text-xs font-black uppercase tracking-widest text-black hidden sm:inline">
              SKETCHBOOK PAGE
            </span>
          </div>
        </div>
      </section>

      {/* SKETCHBOOK ARTICLE CONTAINER */}
      <main className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 space-y-8">
        <ComicPanel bgColor="white" shadowSize="xl" className="p-6 sm:p-12 border-4 border-black relative">
          
          {/* HEADER TITLE */}
          <div className="border-b-4 border-black pb-4 mb-6">
            <span className="font-mono text-xs font-black uppercase text-comic-red tracking-widest block">
              {blog.category}
            </span>
            <h1 className="font-comic text-5xl sm:text-7xl font-black text-black leading-none mt-1">
              {blog.title}
            </h1>
            <div className="flex flex-wrap gap-2 mt-3">
              {blog.doodles.map((d, i) => (
                <Sticker key={i} text={d} variant="yellow" rotate={i % 2 === 0 ? 2 : -2} />
              ))}
            </div>
          </div>

          {/* TOP IMAGE & SPEECH BUBBLE */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-8">
            <div className="md:col-span-6 relative h-64 sm:h-80 w-full rounded-xl border-4 border-black bg-white overflow-hidden shadow-comic-lg">
              <Image src={blog.image} alt={blog.title} fill className="object-cover" priority />
            </div>
            <div className="md:col-span-6 space-y-4">
              <SpeechBubble position="bottom-left" bgColor="yellow" speaker="AUTHOR NOTES">
                {blog.intro}
              </SpeechBubble>
            </div>
          </div>

          {/* STORY PARAGRAPHS AS SKETCHBOOK NOTES */}
          <div className="space-y-6 font-mono text-sm sm:text-base font-bold leading-relaxed text-black">
            {blog.fullStory.map((paragraph, index) => (
              <div
                key={index}
                className="border-l-4 border-black pl-4 py-2 bg-comic-paper/60 rounded-r shadow-comic-sm"
              >
                <p>{paragraph}</p>
              </div>
            ))}
          </div>

          {/* SKETCHBOOK FOOTER ANNOTATION */}
          <div className="mt-10 pt-6 border-t-3 border-black flex flex-wrap items-center justify-between font-mono text-xs font-black text-gray-700">
            <span>WRITTEN BY DEION BERNARD</span>
            <span>CHAPTER COMPLETE ★</span>
          </div>

        </ComicPanel>

        <div className="flex justify-between items-center">
          <Link href="/blogs">
            <ComicButton variant="yellow" size="md">
              <ArrowLeft className="h-4 w-4" />
              <span>RETURN TO ALL JOURNALS</span>
            </ComicButton>
          </Link>
        </div>
      </main>
    </div>
  );
}
