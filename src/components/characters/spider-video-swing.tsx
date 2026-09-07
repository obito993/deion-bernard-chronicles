"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHeroAudio } from "@/context/HeroAudioContext";

export default function SpiderVideoSwing() {
  const [swinging, setSwinging] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const { showTrumpetBanner } = useHeroAudio();

  // Check user motion preferences
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        setReducedMotion(true);
      }
    }
  }, []);

  // Trigger initial swing animation after page load
  useEffect(() => {
    if (reducedMotion) return;

    const startTimer = setTimeout(() => {
      triggerSwing();
    }, 1200);

    return () => clearTimeout(startTimer);
  }, [reducedMotion]);

  // Re-trigger swing when Trumpet Banner fires
  useEffect(() => {
    if (showTrumpetBanner && !reducedMotion) {
      triggerSwing();
    }
  }, [showTrumpetBanner, reducedMotion]);

  const triggerSwing = () => {
    if (swinging) return;
    setSwinging(true);

    // End swing sequence after 5.2s, reset off-screen left
    setTimeout(() => {
      setSwinging(false);
    }, 5200);
  };

  if (reducedMotion) return null;

  return (
    <div className="fixed inset-0 z-30 pointer-events-none overflow-hidden select-none bg-transparent">
      <AnimatePresence>
        {swinging && (
          <motion.div
            initial={{ x: "-30vw", y: "5vh", rotate: -15, opacity: 0 }}
            animate={{
              x: ["-30vw", "12vw", "45vw", "80vw", "125vw"],
              y: ["5vh", "22vh", "45vh", "20vh", "5vh"],
              rotate: [-15, -8, 0, 10, 20],
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              duration: 4.8,
              ease: [0.42, 0, 0.58, 1], // Natural curved pendulum trajectory
            }}
            className="absolute top-0 left-0 w-[300px] h-[190px] sm:w-[520px] sm:h-[330px] lg:w-[850px] lg:h-[520px] flex items-center justify-center pointer-events-none z-30 bg-transparent"
          >
            {/* 
              100% UNIVERSAL TRANSPARENT MEDIA (ZERO BLACK BOX ON iOS SAFARI & MOBILE):
              Uses 8-bit alpha transparent WebP with HTML5 video fallback.
              Guarantees zero black/white box across iOS Safari, Android Chrome, and Desktop browsers.
            */}
            <div className="relative w-full h-full filter drop-shadow-[6px_6px_0px_#000000] sm:drop-shadow-[8px_8px_0px_#000000] bg-transparent">
              <picture className="w-full h-full block bg-transparent">
                <source srcSet="/animations/spiderman-swing-transparent.webp" type="image/webp" />
                <img
                  src="/animations/spiderman-swing-transparent.webp"
                  alt="Spider-Man Web Swing"
                  className="w-full h-full object-contain pointer-events-none bg-transparent"
                />
              </picture>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
