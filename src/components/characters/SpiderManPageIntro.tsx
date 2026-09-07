"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function SpiderManPageAnimation() {
  return <SpiderManPageIntro />;
}

export default function SpiderManPageIntro() {
  const pathname = usePathname();
  const [animState, setAnimState] = useState<"idle" | "descending" | "greeting" | "ascending" | "done">("idle");
  const [reducedMotion, setReducedMotion] = useState(false);

  // Allowed pages for Spider-Man page entry greeting (All 9 pages + blog details)
  const isAllowedPage =
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/resume" ||
    pathname === "/projects" ||
    pathname === "/movies" ||
    pathname === "/music" ||
    pathname === "/contact" ||
    pathname === "/creative-space" ||
    pathname === "/creative" ||
    pathname.startsWith("/blogs");

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

    // Sequence timing:
    // 0.0s - 1.2s: Descend from top (-100vh -> center position)
    // 1.2s - 3.5s: Stop in center & display comic "HI! 👋" speech bubble beside head
    // 3.5s - 4.8s: Ascend back up to top (-100vh)
    // 4.8s+: Done (unmounts)

    const timerGreeting = setTimeout(() => {
      setAnimState("greeting");
    }, 1200);

    const timerAscend = setTimeout(() => {
      setAnimState("ascending");
    }, 3500);

    const timerDone = setTimeout(() => {
      setAnimState("done");
    }, 4800);

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
    /* 
      DEDICATED FULL-VIEWPORT OVERLAY WITH FLEX CENTERING:
      Using `flex justify-center` on the fixed full-screen viewport container guarantees
      horizontal centering at X=50vw without relying on CSS transform rules that Framer Motion overrides.
    */
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden select-none w-screen h-screen flex justify-center items-start bg-transparent">
      <AnimatePresence>
        {(animState === "descending" || animState === "greeting" || animState === "ascending") && (
          <motion.div
            key={`spidey-page-entry-${pathname}`}
            initial={{ y: "-100vh", opacity: 0 }}
            animate={
              animState === "descending" || animState === "greeting"
                ? { y: "6vh", opacity: 1 }
                : { y: "-100vh", opacity: 0 }
            }
            transition={{
              duration: animState === "descending" ? 1.2 : animState === "ascending" ? 1.2 : 0,
              ease: [0.34, 1.35, 0.64, 1], // Natural comic spring bounce
            }}
            className="relative w-[320px] h-[180px] sm:w-[600px] sm:h-[338px] md:w-[880px] md:h-[495px] flex flex-col items-center pointer-events-none bg-transparent"
          >
            {/* "HI! 👋" COMIC SPEECH BUBBLE (ANCHORED BESIDE SPIDER-MAN'S HEAD, GUARANTEED INSIDE VIEWPORT) */}
            <AnimatePresence>
              {animState === "greeting" && (
                <motion.div
                  initial={{ scale: 0, opacity: 0, x: -10 }}
                  animate={{ scale: 1, opacity: 1, x: 0 }}
                  exit={{ scale: 0, opacity: 0, x: -10 }}
                  transition={{ type: "spring", stiffness: 450, damping: 22 }}
                  className="absolute left-[56%] sm:left-[58%] top-[10%] sm:top-[12%] z-50 pointer-events-none max-w-[36vw] sm:max-w-none"
                >
                  <div className="relative rounded-2xl border-4 border-black bg-white px-3 py-1.5 sm:px-5 sm:py-2.5 shadow-[4px_4px_0px_#000000] sm:shadow-[5px_5px_0px_#000000]">
                    <span className="font-comic text-lg sm:text-3xl md:text-4xl text-black uppercase tracking-wider block whitespace-nowrap">
                      HI! 👋
                    </span>
                    {/* SPEECH BUBBLE TAIL POINTING LEFT TOWARD SPIDER-MAN'S HEAD */}
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] sm:border-t-[8px] border-t-transparent border-b-[6px] sm:border-b-[8px] border-b-transparent border-r-[10px] sm:border-r-[14px] border-r-black" />
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[4px] sm:border-t-[6px] border-t-transparent border-b-[4px] sm:border-b-[6px] border-b-transparent border-r-[8px] sm:border-r-[12px] border-r-white" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 
              PERFECT SYNCHRONIZED SPIDER-MAN CHARACTER + ORIGINAL WEB:
              Uses crisp 8-bit alpha transparent high-definition graphic asset spiderman-hanging-pose.png/webp.
              Guarantees zero timing desync, zero disappearing character, and zero video player glitches across all devices.
            */}
            <div className="relative w-full h-full filter drop-shadow-[6px_6px_0px_#000000] sm:drop-shadow-[8px_8px_0px_#000000] bg-transparent">
              <picture className="w-full h-full block bg-transparent">
                <source srcSet="/animations/spiderman-hanging-pose.webp" type="image/webp" />
                <img
                  src="/animations/spiderman-hanging-pose.png"
                  alt="Spider-Man Center Page Entry Greeting"
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
