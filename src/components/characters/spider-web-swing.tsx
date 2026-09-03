"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ActionBurst from "@/components/comic/ActionBurst";

export default function SpiderWebSwing() {
  const [swinging, setSwinging] = useState(false);
  const [showWhoosh, setShowWhoosh] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Dynamic coordinates tracking for the SVG web line
  const [heroPos, setHeroPos] = useState({ x: -200, y: 50, rotate: -25 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setReducedMotion(true);
      return;
    }

    // Start swing animation 1.5s after page load
    const startTimer = setTimeout(() => {
      setSwinging(true);
    }, 1500);

    // Trigger WHOOSH effect at swing apex (around 3.2s)
    const whooshTimer = setTimeout(() => {
      setShowWhoosh(true);
    }, 3200);

    const whooshEndTimer = setTimeout(() => {
      setShowWhoosh(false);
    }, 4600);

    // Re-trigger swing periodically after 25s
    const loopInterval = setInterval(() => {
      setSwinging(false);
      setTimeout(() => {
        setSwinging(true);
        setTimeout(() => setShowWhoosh(true), 1700);
        setTimeout(() => setShowWhoosh(false), 3100);
      }, 500);
    }, 25000);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(whooshTimer);
      clearTimeout(whooshEndTimer);
      clearInterval(loopInterval);
    };
  }, []);

  if (reducedMotion) return null;

  return (
    <div className="fixed inset-0 z-30 pointer-events-none overflow-hidden select-none">
      {/* DYNAMIC SVG WEB LINE ATTACHED FROM TOP ANCHOR (50% 0) TO SPIDER-MAN */}
      {swinging && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <line
            x1="50%"
            y1="0"
            x2={`calc(${heroPos.x}px + 110px)`}
            y2={`calc(${heroPos.y}px + 50px)`}
            stroke="#000000"
            strokeWidth="3"
            strokeDasharray="6 4"
          />
          <circle cx="50%" cy="0" r="6" fill="#000000" />
        </svg>
      )}

      {/* FULL-SCREEN PENDULUM SWINGING SPIDER-MAN CHARACTER */}
      <AnimatePresence>
        {swinging && (
          <motion.div
            initial={{ x: "-25vw", y: "5vh", rotate: -25 }}
            animate={{
              x: ["-25vw", "15vw", "50vw", "85vw", "125vw"],
              y: ["5vh", "28vh", "58vh", "25vh", "5vh"],
              rotate: [-25, -12, 0, 15, 30],
            }}
            transition={{
              duration: 4.2,
              ease: [0.4, 0, 0.2, 1],
            }}
            onUpdate={(latest) => {
              if (typeof window !== "undefined") {
                const numX = typeof latest.x === "string" ? (parseFloat(latest.x) / 100) * window.innerWidth : Number(latest.x);
                const numY = typeof latest.y === "string" ? (parseFloat(latest.y) / 100) * window.innerHeight : Number(latest.y);
                const numRot = Number(latest.rotate) || 0;
                setHeroPos({ x: numX, y: numY, rotate: numRot });
              }
            }}
            className="absolute top-0 left-0 w-64 h-72 sm:w-80 sm:h-96 flex flex-col items-center justify-center pointer-events-none"
          >
            {/* ISOLATED TRANSPARENT SPIDER-MAN CHARACTER (NO RECTANGLE CARD) */}
            <div className="relative w-full h-full filter drop-shadow-[8px_8px_0px_#000000]">
              <Image
                src="/media/spiderman-swinging-transparent.png"
                alt="Spider-Man Web Swinging Hero"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* WHOOSH COMIC BURST & SPEED LINES AT APEX */}
            {showWhoosh && (
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1.3, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute -bottom-8 z-40"
              >
                <ActionBurst text="WHOOSH!" color="yellow" size="lg" rotate={-10} />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
