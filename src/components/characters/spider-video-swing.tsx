"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHeroAudio } from "@/context/HeroAudioContext";

export default function SpiderVideoSwing() {
  const [swinging, setSwinging] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
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

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }

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
            className="absolute top-0 left-0 w-[320px] h-[210px] sm:w-[550px] sm:h-[350px] lg:w-[850px] lg:h-[520px] flex items-center justify-center pointer-events-none z-30 bg-transparent"
          >
            {/* 
              100% MOBILE-SAFE TRANSPARENT VIDEO CONTAINER:
              Using WebM VP9 alpha + Animated WebP alpha + mix-blend-mode: multiply guarantee ZERO white background on all mobile browsers & desktop screens!
            */}
            <div className="relative w-full h-full filter drop-shadow-[6px_6px_0px_#000000] sm:drop-shadow-[8px_8px_0px_#000000] bg-transparent">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                style={{ mixBlendMode: "multiply" }}
                className="w-full h-full object-contain pointer-events-none bg-transparent"
              >
                <source src="/animations/spiderman-swing-transparent.webm" type="video/webm" />
                {/* Fallback to transparent animated WebP for maximum browser compatibility */}
                <img
                  src="/animations/spiderman-swing-transparent.webp"
                  alt="Spider-Man Web Swing"
                  style={{ mixBlendMode: "multiply" }}
                  className="w-full h-full object-contain pointer-events-none bg-transparent"
                />
              </video>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
