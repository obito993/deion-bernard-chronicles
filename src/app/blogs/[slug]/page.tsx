"use client";

import React from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VisualThumbnail from "@/components/VisualThumbnails";
import { blogsData } from "@/data/blogsData";
import { ArrowLeft, ArrowRight, Clock, Calendar, Share2 } from "lucide-react";

export default function SingleBlogPage() {
  const params = useParams();
  const slug = params.slug as string;

  const currentIndex = blogsData.findIndex((b) => b.slug === slug);
  if (currentIndex === -1) {
    return notFound();
  }

  const blog = blogsData[currentIndex];
  const nextBlog = blogsData[(currentIndex + 1) % blogsData.length];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-orange selection:text-black">
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
        {/* BACK TO BLOGS BUTTON */}
        <div>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 font-mono text-xs text-gray-400 hover:text-brand-orange transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>BACK TO ALL BLOGS</span>
          </Link>
        </div>

        {/* HERO HEADER */}
        <article className="space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <span className="font-bold text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/30">
                {blog.category}
              </span>
              <span className="flex items-center gap-1 text-gray-400">
                <Clock className="h-3.5 w-3.5" />
                {blog.readTime}
              </span>
              <span className="flex items-center gap-1 text-gray-400">
                <Calendar className="h-3.5 w-3.5" />
                {blog.date}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight">
              {blog.title}
            </h1>
          </div>

          {/* LARGE HERO THUMBNAIL */}
          <div className="h-72 sm:h-96 w-full overflow-hidden rounded-2xl border border-white/15">
            <VisualThumbnail type={blog.slug} className="h-full w-full" />
          </div>

          {/* ARTICLE BODY */}
          <div className="space-y-6 font-mono text-sm sm:text-base text-gray-300 leading-relaxed pt-6 border-t border-white/10">
            {blog.fullContent.map((paragraph, idx) => (
              <p key={idx} className="first-letter:text-3xl first-letter:font-bold first-letter:text-brand-orange">
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        {/* NEXT BLOG & FOOTER NAV */}
        <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 font-mono text-xs text-gray-400 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>ALL ARTICLES</span>
          </Link>

          <Link
            href={`/blogs/${nextBlog.slug}`}
            className="group flex items-center gap-3 rounded-2xl border border-brand-orange/30 bg-surface-card p-4 hover:border-brand-orange transition-all"
          >
            <div className="text-right">
              <span className="font-mono text-[10px] text-brand-orange tracking-widest font-bold block">
                NEXT BLOG ARTICLE
              </span>
              <span className="font-display text-base font-bold text-white group-hover:text-brand-orange transition-colors">
                {nextBlog.title}
              </span>
            </div>
            <ArrowRight className="h-5 w-5 text-brand-orange group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
