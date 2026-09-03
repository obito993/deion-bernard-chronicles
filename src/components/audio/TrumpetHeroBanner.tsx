"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHeroAudio } from "@/context/HeroAudioContext";
import ActionBurst from "@/components/comic/ActionBurst";

export default function TrumpetHeroBanner() {
  const { showTrumpetBanner, dismissTrumpetBanner } = useHeroAudio();
  const [introSeen, setIntroSeen] = useState(false);

  useEffect(() => {
    // Check if intro animation has finished
    const checkIntro = () => {
      if (typeof window !== "undefined" && sessionStorage.getItem("deion_comic_intro_seen")) {
        setIntroSeen(true);
        return true;
      }
      return false;
    };

    if (!checkIntro()) {
      const interval = setInterval(() => {
        if (checkIntro()) {
          clearInterval(interval);
        }
      }, 300);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    if (showTrumpetBanner && introSeen) {
      const timer = setTimeout(() => {
        dismissTrumpetBanner();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showTrumpetBanner, introSeen, dismissTrumpetBanner]);

  // Render ONLY after the intro has finished and trumpet trigger fired
  const isVisible = showTrumpetBanner && introSeen;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center p-4 select-none overflow-hidden">
          {/* HALFTONE FLASH & SPEED LINES OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0.15] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 bg-halftone pointer-events-none"
          />

          {/* MAIN COMIC IMPACT BANNER WITH SMOOTH FADE OUT */}
          <motion.div
            initial={{ scale: 0.3, rotate: -8, opacity: 0 }}
            animate={{ scale: [0.3, 1.1, 1], rotate: [-8, 2, 0], opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 22,
              opacity: { duration: 0.8, ease: "easeOut" },
            }}
            className="relative max-w-xl w-full rounded-2xl border-4 border-black bg-comic-yellow p-6 sm:p-8 shadow-[10px_10px_0px_#000000] text-center pointer-events-auto"
          >
            {/* ACTION BURST BADGE */}
            <div className="absolute -top-6 -left-6 z-20">
              <ActionBurst text="BA-DAAM!" color="red" size="md" rotate={-14} />
            </div>

            <div className="absolute -top-5 -right-4 z-20">
              <span className="font-mono text-xs font-black uppercase tracking-widest text-white bg-black px-3 py-1 border border-black shadow-[3px_3px_0px_#000]">
                🎺 TRUMPETS ENTER!
              </span>
            </div>

            {/* IMPACT HEADLINE */}
            <h2 className="font-comic text-4xl sm:text-6xl text-black leading-none uppercase text-shadow-red tracking-wider">
              THE HERO JUST ENTERED THE COMICS!
            </h2>

            <div className="my-3 h-1 w-full bg-black rounded-full" />

            <p className="font-mono text-xs sm:text-sm font-black text-black uppercase tracking-widest bg-white border-2 border-black py-1 px-3 inline-block shadow-[3px_3px_0px_#000]">
              ★ ISSUE #001 — THE ADVENTURE BEGINS ★
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
