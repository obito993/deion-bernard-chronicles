"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type AnimationPhase = "idle" | "descend" | "greeting" | "swinging" | "done";

export default function SpiderManPageIntro() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<AnimationPhase>("idle");
  const [position, setPosition] = useState({ x: 50, y: 120, rotate: 0 });
  const [webTarget, setWebTarget] = useState({ x: 50, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Trigger animation sequence whenever pathname changes
  useEffect(() => {
    // Check prefers-reduced-motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      return;
    }

    setPhase("descend");
    setPosition({ x: 50, y: isMobile ? 80 : 120, rotate: -8 });
    setWebTarget({ x: 50, y: 0 });

    // Step 1 -> Step 2: Arrive & Show "HI!" Speech Bubble (after 0.8s)
    const t1 = setTimeout(() => {
      setPhase("greeting");
    }, 800);

    // Step 2 -> Step 3: Fire web & Swing Away along curved arc (after 2.2s)
    const t2 = setTimeout(() => {
      setPhase("swinging");
      setWebTarget({ x: 85, y: 0 });
    }, 2400);

    // Step 3 -> Step 4: Complete & Clear (after 4.0s)
    const t3 = setTimeout(() => {
      setPhase("done");
    }, 4000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname, isMobile]);

  if (phase === "idle" || phase === "done") return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* DYNAMIC SVG WEB LINE */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Descending web line (vertical) */}
        {phase !== "swinging" && (
          <motion.line
            x1="50%"
            y1="0"
            x2="50%"
            y2={isMobile ? "110px" : "150px"}
            stroke="#000000"
            strokeWidth="3.5"
            strokeDasharray="4 2"
            initial={{ y2: 0 }}
            animate={{ y2: isMobile ? "110px" : "150px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}

        {/* Diagonal swinging web line */}
        {phase === "swinging" && (
          <motion.line
            x1="85%"
            y1="0"
            x2={`${position.x}%`}
            y2={`${position.y + 30}px`}
            stroke="#000000"
            strokeWidth="4"
            strokeDasharray="5 2"
          />
        )}
      </svg>

      {/* SPIDER-MAN CHARACTER & SPEECH BUBBLE CONTAINER */}
      {phase !== "swinging" ? (
        <motion.div
          key="spidey-descend"
          initial={{ y: -300, x: "-50%", rotate: -15 }}
          animate={{
            y: isMobile ? 80 : 120,
            x: "-50%",
            rotate: [15, -10, 5, -2, 0],
          }}
          transition={{
            y: { duration: 0.7, ease: [0.175, 0.885, 0.32, 1.275] },
            rotate: { duration: 1.2, ease: "easeInOut" },
          }}
          className="absolute left-1/2 flex flex-col items-center"
          style={{ top: 0 }}
        >
          {/* ACTION BURST "THWIP!" */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="absolute -top-10 -left-12 border-2 border-black bg-comic-yellow px-2 py-0.5 font-comic text-xs text-black shadow-[2px_2px_0px_#000] rotate-[-12deg]"
          >
            THWIP!
          </motion.div>

          {/* SPEECH BUBBLE: "HI!" */}
          <AnimatePresence>
            {phase === "greeting" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.4, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="absolute -right-32 top-8 z-20 flex flex-col items-start"
              >
                <div className="border-2 border-black bg-comic-red px-2 py-0.5 font-mono text-[9px] font-black uppercase text-white shadow-[2px_2px_0px_#000] mb-1">
                  NEIGHBORHOOD CHECK!
                </div>
                <div className="relative rounded-2xl border-3 border-black bg-white px-4 py-2 shadow-[4px_4px_0px_#000]">
                  <p className="font-comic text-2xl sm:text-3xl text-black leading-none">
                    HI! 👋
                  </p>
                  {/* Little speech tail pointing to Spidey */}
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-r-[10px] border-r-black border-b-8 border-b-transparent" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* TRANSPARENT SPIDER-MAN CUTOUT */}
          <motion.div
            animate={
              phase === "greeting"
                ? {
                    scale: [1, 1.06, 1],
                    rotate: [0, 4, -4, 0],
                  }
                : {}
            }
            transition={{ duration: 0.8, repeat: phase === "greeting" ? 1 : 0 }}
            className="relative w-44 h-56 sm:w-56 sm:h-72 cursor-pointer"
          >
            <Image
              src="/media/spiderman-hanging-transparent.png"
              alt="Spider-Man Comic Page Transition"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      ) : (
        /* PHASE 3: REALISTIC CURVED ARC SWING AWAY */
        <motion.div
          key="spidey-swinging"
          initial={{ left: "50%", top: isMobile ? 80 : 120, rotate: 0, scale: 1 }}
          animate={{
            left: ["50%", "65%", "85%", "115%"],
            top: [
              isMobile ? 80 : 120,
              isMobile ? 160 : 220,
              isMobile ? 120 : 150,
              -120,
            ],
            rotate: [0, 25, 45, 60],
            scale: [1, 1.1, 0.9, 0.7],
          }}
          transition={{
            duration: 1.4,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          onUpdate={(latest) => {
            const xVal = parseFloat(String(latest.left));
            const yVal = parseFloat(String(latest.top));
            if (!isNaN(xVal) && !isNaN(yVal)) {
              setPosition({ x: xVal, y: yVal, rotate: Number(latest.rotate) || 0 });
            }
          }}
          className="absolute flex flex-col items-center -translate-x-1/2"
        >
          {/* SWING ACTION BURST "WHOOSH!" */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.4, 1] }}
            transition={{ duration: 0.3 }}
            className="absolute -top-8 -left-8 border-3 border-black bg-comic-yellow px-3 py-1 font-comic text-base text-black shadow-[3px_3px_0px_#000] rotate-[-15deg]"
          >
            WHOOSH! ⚡
          </motion.div>

          <div className="relative w-44 h-56 sm:w-56 sm:h-72">
            <Image
              src="/media/spiderman-hanging-transparent.png"
              alt="Spider-Man Swinging Away"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}
