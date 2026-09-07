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
    // 0.0s - 1.2s: Descend from top (-100vh -> 10vh)
    // 1.2s - 3.2s: Stop & display "HI! 👋" speech bubble while showing peace sign ✌️
    // 3.2s - 4.5s: Ascend back up (10vh -> -100vh)
    // 4.5s+: Done (unmounts offscreen)

    const timerGreeting = setTimeout(() => {
      setAnimState("greeting");
    }, 1200);

    const timerAscend = setTimeout(() => {
      setAnimState("ascending");
    }, 3200);

    const timerDone = setTimeout(() => {
      setAnimState("done");
    }, 4500);

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
                ? { y: "10vh", opacity: 1 }
                : animState === "greeting"
                ? { y: "10vh", opacity: 1 }
                : { y: "-100vh", opacity: 0 }
            }
            transition={{
              duration: animState === "descending" ? 1.2 : animState === "ascending" ? 1.2 : 0,
              ease: [0.34, 1.56, 0.64, 1], // Natural comic spring bounce
            }}
            className="absolute top-0 right-4 sm:right-16 md:right-24 w-[280px] h-[340px] sm:w-[380px] sm:h-[450px] flex flex-col items-center pointer-events-none"
          >
            {/* SPEECH BUBBLE "HI! 👋" (POPS IN ONLY DURING GREETING STEP) */}
            <AnimatePresence>
              {animState === "greeting" && (
                <motion.div
                  initial={{ scale: 0, opacity: 0, y: 15 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0, opacity: 0, y: -10 }}
                  transition={{ type: "spring", stiffness: 450, damping: 20 }}
                  className="absolute -left-24 top-24 sm:-left-32 sm:top-32 z-50 pointer-events-none"
                >
                  <div className="relative rounded-2xl border-3 border-black bg-white px-4 py-2 sm:px-6 sm:py-3 shadow-[4px_4px_0px_#000000]">
                    <span className="font-comic text-2xl sm:text-4xl text-black uppercase tracking-wider block">
                      HI! 👋
                    </span>
                    {/* SPEECH BUBBLE TAIL POINTING TO SPIDER-MAN */}
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-black" />
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-white" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* TRANSPARENT SPIDER-MAN UP-DOWN VIDEO (ZERO BLACK LINES, ZERO WHITE RECTANGLE) */}
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
                  alt="Spider-Man Page Entry Greeting"
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
