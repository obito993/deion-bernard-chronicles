"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import FaceLogo from "@/components/FaceLogo";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Strictly Home, About Me, Resume, Contact
  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT ME", href: "/about" },
    { label: "RESUME", href: "/resume" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Left: Face-Sketch Logo & Name */}
        <Link href="/" className="group flex items-center gap-3">
          <FaceLogo size="sm" />
          <div className="flex flex-col">
            <span className="font-display text-sm font-bold tracking-wider text-white transition-colors group-hover:text-brand-orange">
              DEION BERNARD
            </span>
            <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase">
              CS GRADUATE & DEVELOPER
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (Strictly Home, About Me, Resume, Contact) */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-1.5 font-mono text-xs font-bold tracking-widest transition-colors ${
                  isActive
                    ? "text-brand-orange"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-orange shadow-[0_0_10px_#FF5500]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-black/95 px-4 pt-2 pb-6 space-y-2 backdrop-blur-xl"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-lg px-4 py-3 font-mono text-sm tracking-widest transition-all ${
                    isActive
                      ? "bg-brand-orange/20 text-brand-orange font-bold border-l-4 border-brand-orange"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
