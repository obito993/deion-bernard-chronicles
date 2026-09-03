"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHeroAudio } from "@/context/HeroAudioContext";
import ActionBurst from "@/components/comic/ActionBurst";
import { X } from "lucide-react";

export default function TrumpetHeroBanner() {
  const { showTrumpetBanner, dismissTrumpetBanner } = useHeroAudio();
  const [introSeen, setIntroSeen] = useState(false);
  const [active, setActive] = useState(false);

  // 1. Monitor when intro animation finishes
  useEffect(() => {
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

  // 2. Activate banner when trumpet trigger fires post-intro
  useEffect(() => {
    if (showTrumpetBanner && introSeen) {
      setActive(true);

      // Auto fade-out after 5 seconds
      const timer = setTimeout(() => {
        setActive(false);
        dismissTrumpetBanner();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showTrumpetBanner, introSeen, dismissTrumpetBanner]);

  const handleManualClose = () => {
    setActive(false);
    dismissTrumpetBanner();
  };

  return (
    <AnimatePresence>
      {active && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center p-4 select-none overflow-hidden">
          {/* HALFTONE OVERLAY WITH FADE OUT */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 bg-halftone pointer-events-none"
          />

          {/* MAIN HERO IMPACT BANNER WITH SMOOTH 5S FADE-OUT */}
          <motion.div
            initial={{ scale: 0.3, rotate: -8, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: -30 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 24,
              opacity: { duration: 0.8, ease: "easeOut" },
            }}
            className="relative max-w-xl w-full rounded-2xl border-4 border-black bg-comic-yellow p-6 sm:p-8 shadow-[10px_10px_0px_#000000] text-center pointer-events-auto"
          >
            {/* MANUAL CLOSE BUTTON */}
            <button
              onClick={handleManualClose}
              className="absolute -top-3 -right-3 z-30 flex h-8 w-8 items-center justify-center rounded-full border-2 border-black bg-white text-black shadow-[2px_2px_0px_#000] hover:bg-comic-red hover:text-white transition-all"
              aria-label="Close Banner"
            >
              <X className="h-4 w-4" />
            </button>

            {/* ACTION BURST BADGE */}
            <div className="absolute -top-6 -left-6 z-20">
              <ActionBurst text="BA-DAAM!" color="red" size="md" rotate={-14} />
            </div>

            <div className="absolute -top-5 right-8 z-20">
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
