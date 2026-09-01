"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VisualThumbnail from "@/components/VisualThumbnails";
import { blogsData } from "@/data/blogsData";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-orange selection:text-black">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
        {/* PAGE HEADER */}
        <section className="text-center space-y-4">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-orange uppercase">
            EDITORIAL JOURNAL & PERSONAL INTERESTS
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black text-white">
            BLOGS
          </h1>
          <p className="font-mono text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
            Insights into Deion&apos;s personal interests, hobbies, continuous learning, fitness routine, gaming, and outdoor exploration.
          </p>
          <div className="h-0.5 w-24 bg-brand-orange mx-auto shadow-[0_0_10px_#FF5500]" />
        </section>

        {/* 2-COLUMN VERTICAL BLOGS LIST */}
        <section className="space-y-12">
          {blogsData.map((blog, index) => (
            <motion.article
              key={blog.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl border border-white/15 bg-surface-card p-6 sm:p-8 hover:border-brand-orange/50 transition-all duration-300 shadow-xl"
            >
              {/* LEFT COLUMN: LARGE THUMBNAIL */}
              <Link
                href={`/blogs/${blog.slug}`}
                data-cursor-text="READ"
                className="lg:col-span-5 h-60 sm:h-72 w-full overflow-hidden rounded-xl block"
              >
                <VisualThumbnail type={blog.slug} className="h-full w-full" />
              </Link>

              {/* RIGHT COLUMN: CONTENT */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-bold text-brand-orange tracking-widest">
                      {blog.number} — {blog.category.toUpperCase()}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400">
                      <Clock className="h-3.5 w-3.5" />
                      {blog.readTime}
                    </span>
                  </div>

                  <Link href={`/blogs/${blog.slug}`} className="group block">
                    <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white group-hover:text-brand-orange transition-colors">
                      {blog.title}
                    </h2>
                  </Link>

                  <p className="font-mono text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {blog.shortDescription}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 flex justify-end">
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-5 py-2 font-mono text-xs font-bold text-brand-orange hover:bg-brand-orange hover:text-black transition-all"
                  >
                    <span>READ ARTICLE</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
