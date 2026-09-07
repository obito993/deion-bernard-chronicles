"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function SpiderManPageIntro() {
  const pathname = usePathname();
  const [animState, setAnimState] = useState<"idle" | "descending" | "greeting" | "ascending" | "done">("idle");
  const [reducedMotion, setReducedMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Allowed pages for Spider-Man page entry greeting (All 9 pages)
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

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }

    // Sequence timing:
    // 0.0s - 1.3s: Descend from top (-100vh -> 14vh) so Spider-Man stops in DEAD CENTER of page
    // 1.3s - 3.6s: Stop in center & display comic "HI! 👋" speech bubble on RIGHT side of head
    // 3.6s - 4.9s: Ascend back up (14vh -> -100vh)
    // 4.9s+: Done (unmounts offscreen)

    const timerGreeting = setTimeout(() => {
      setAnimState("greeting");
    }, 1300);

    const timerAscend = setTimeout(() => {
      setAnimState("ascending");
    }, 3600);

    const timerDone = setTimeout(() => {
      setAnimState("done");
    }, 4900);

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
                ? { y: "14vh", opacity: 1 }
                : animState === "greeting"
                ? { y: "14vh", opacity: 1 }
                : { y: "-100vh", opacity: 0 }
            }
            transition={{
              duration: animState === "descending" ? 1.3 : animState === "ascending" ? 1.3 : 0,
              ease: [0.34, 1.4, 0.64, 1], // Natural comic spring bounce
            }}
            /* 
              MATHEMATICAL CENTER ALIGNMENT:
              Because Spider-Man's visible body is offset inside the 16:9 video frame at X=63.6% (13.6% to the right of video center),
              we shift the container left by (50% + 13.6% = 63.6%) so the VISIBLE SPIDER-MAN CHARACTER stops at EXACTLY 50vw (DEAD CENTER OF THE SCREEN).
            */
            style={{ left: "50%", transform: "translateX(-63.6%)" }}
            className="absolute top-0 w-[550px] h-[350px] sm:w-[720px] sm:h-[460px] md:w-[920px] md:h-[580px] flex flex-col items-center pointer-events-none"
          >
            {/* "HI! 👋" COMIC SPEECH BUBBLE (ANCHORED DIRECTLY ON THE RIGHT SIDE OF SPIDER-MAN'S HEAD) */}
            <AnimatePresence>
              {animState === "greeting" && (
                <motion.div
                  initial={{ scale: 0, opacity: 0, x: -10 }}
                  animate={{ scale: 1, opacity: 1, x: 0 }}
                  exit={{ scale: 0, opacity: 0, x: -10 }}
                  transition={{ type: "spring", stiffness: 450, damping: 20 }}
                  className="absolute left-[62%] sm:left-[63%] top-[14%] sm:top-[16%] z-50 pointer-events-none"
                >
                  <div className="relative rounded-2xl border-4 border-black bg-white px-4 py-2 sm:px-6 sm:py-3 shadow-[5px_5px_0px_#000000]">
                    <span className="font-comic text-2xl sm:text-4xl text-black uppercase tracking-wider block">
                      HI! 👋
                    </span>
                    {/* SPEECH BUBBLE TAIL POINTING LEFT TOWARD SPIDER-MAN'S HEAD */}
                    <div className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[14px] border-r-black" />
                    <div className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[12px] border-r-white" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* VISIBLE SPIDER-MAN CHARACTER + ORIGINAL VIDEO WEB */}
            <div className="relative w-full h-full filter drop-shadow-[8px_8px_0px_#000000]">
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
