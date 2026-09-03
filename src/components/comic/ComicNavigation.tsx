"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen, User, FileText, FolderGit2, Film, Music, Mail, Home } from "lucide-react";
import FaceLogo from "@/components/FaceLogo";

const navItems = [
  { label: "HOME", path: "/", icon: Home, color: "bg-comic-yellow" },
  { label: "ABOUT", path: "/about", icon: User, color: "bg-comic-violet" },
  { label: "RESUME", path: "/resume", icon: FileText, color: "bg-comic-red text-white" },
  { label: "PROJECTS", path: "/projects", icon: FolderGit2, color: "bg-comic-yellow" },
  { label: "BLOGS", path: "/blogs", icon: BookOpen, color: "bg-comic-violet" },
  { label: "MOVIES", path: "/movies", icon: Film, color: "bg-comic-red text-white" },
  { label: "MUSIC", path: "/music", icon: Music, color: "bg-comic-yellow" },
  { label: "CONTACT", path: "/contact", icon: Mail, color: "bg-comic-violet" },
];

export default function ComicNavigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b-4 border-black bg-comic-cream/95 backdrop-blur-sm px-4 py-3 shadow-comic-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* LOGO / COMIC TITLE BADGE */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-black bg-comic-yellow shadow-comic-sm transition-transform group-hover:scale-105">
            <FaceLogo size="sm" disabled />
          </div>
          <div className="flex flex-col">
            <span className="font-comic text-xl tracking-wider text-black group-hover:text-comic-red transition-colors leading-none">
              THE DEION CHRONICLES
            </span>
            <span className="font-mono text-[10px] font-black text-gray-700 tracking-widest">
              ISSUE #001 • COMIC PORTFOLIO
            </span>
          </div>
        </Link>

        {/* DESKTOP CHAPTER TABS */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {navItems.map((item) => {
            const isActive = pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-3 py-1.5 text-xs font-black tracking-wider uppercase rounded-md border-2 border-black transition-all duration-150 active:translate-x-0.5 active:translate-y-0.5 ${
                  isActive
                    ? `${item.color} shadow-comic-sm -rotate-1 font-extrabold`
                    : "bg-white text-black hover:bg-comic-paper hover:-translate-y-0.5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden rounded-md border-2 border-black bg-comic-yellow p-2 shadow-comic-sm active:translate-x-0.5 active:translate-y-0.5"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
        </button>
      </div>

      {/* MOBILE POP-UP DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-3 border-t-2 border-black bg-comic-yellow p-4 shadow-comic"
          >
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2 rounded-lg border-2 border-black p-3 text-xs font-black uppercase tracking-wider ${
                      isActive ? "bg-black text-white shadow-comic-sm" : "bg-white text-black hover:bg-comic-cream"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
