"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function SpiderManPageIntro() {
  const pathname = usePathname();
  const [animState, setAnimState] = useState<"idle" | "descending" | "greeting" | "ascending" | "done">("idle");
  const [reducedMotion, setReducedMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Allowed pages for Spider-Man page entry greeting
  const allowedPages = [
    "/",
    "/about",
    "/resume",
    "/projects",
    "/movies",
    "/music",
    "/contact",
    "/creative-space",
    "/creative",
  ];

  const isAllowedPage = allowedPages.includes(pathname);

  // Check reduced motion
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        setReducedMotion(true);
      }
    }
  }, []);

  // Trigger sequence on route change / page load
  useEffect(() => {
    if (reducedMotion || !isAllowedPage) return;

    setAnimState("descending");

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }

    // Sequence timing:
    // 0.0s - 1.2s: Descend from top (-100vh -> 12vh) in CENTER of screen
    // 1.2s - 3.4s: Stop in center & display medium-small "HI! 👋" speech bubble on RIGHT side of head
    // 3.4s - 4.7s: Ascend back up (12vh -> -100vh)
    // 4.7s+: Done (unmounts offscreen)

    const timerGreeting = setTimeout(() => {
      setAnimState("greeting");
    }, 1200);

    const timerAscend = setTimeout(() => {
      setAnimState("ascending");
    }, 3400);

    const timerDone = setTimeout(() => {
      setAnimState("done");
    }, 4700);

    return () => {
      clearTimeout(timerGreeting);
      clearTimeout(timerAscend);
      clearTimeout(timerDone);
    };
  }, [pathname, isAllowedPage, reducedMotion]);

  if (reducedMotion || !isAllowedPage || animState === "done" || animState === "idle") {
    return null;
  }

  return (
    <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden select-none">
      <AnimatePresence>
        {(animState === "descending" || animState === "greeting" || animState === "ascending") && (
          <motion.div
            key={`spidey-page-entry-${pathname}`}
            initial={{ y: "-100vh", opacity: 0 }}
            animate={
              animState === "descending"
                ? { y: "12vh", opacity: 1 }
                : animState === "greeting"
                ? { y: "12vh", opacity: 1 }
                : { y: "-100vh", opacity: 0 }
            }
            transition={{
              duration: animState === "descending" ? 1.2 : animState === "ascending" ? 1.2 : 0,
              ease: [0.34, 1.56, 0.64, 1], // Natural comic spring bounce
            }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-[400px] sm:w-[420px] sm:h-[500px] flex flex-col items-center pointer-events-none"
          >
            {/* MEDIUM-SMALL SPEECH BUBBLE "HI! 👋" (PLACED CORRECTLY ON THE RIGHT SIDE OF SPIDER-MAN'S HEAD) */}
            <AnimatePresence>
              {animState === "greeting" && (
                <motion.div
                  initial={{ scale: 0, opacity: 0, x: -10 }}
                  animate={{ scale: 1, opacity: 1, x: 0 }}
                  exit={{ scale: 0, opacity: 0, x: -10 }}
                  transition={{ type: "spring", stiffness: 450, damping: 22 }}
                  className="absolute right-0 sm:-right-8 top-16 sm:top-20 z-50 pointer-events-none"
                >
                  <div className="relative rounded-xl border-3 border-black bg-white px-3.5 py-1.5 sm:px-4 sm:py-2 shadow-[3px_3px_0px_#000000]">
                    <span className="font-comic text-xl sm:text-2xl text-black uppercase tracking-wider block">
                      HI! 👋
                    </span>
                    {/* SPEECH BUBBLE TAIL POINTING LEFT TO SPIDER-MAN'S HEAD */}
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-r-[11px] border-r-black" />
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[9px] border-r-white" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* MEDIUM-BIG SPIDER-MAN CHARACTER IN CENTER WITH VIDEO WEB */}
            <div className="relative w-full h-full filter drop-shadow-[6px_6px_0px_#000000]">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain pointer-events-none"
              >
                <source src="/animations/spiderman-updown-transparent.webm" type="video/webm" />
                {/* Fallback transparent WebP */}
                <img
                  src="/animations/spiderman-updown-transparent.webp"
                  alt="Spider-Man Center Page Entry Greeting"
                  className="w-full h-full object-contain pointer-events-none"
                />
              </video>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
