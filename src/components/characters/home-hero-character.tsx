"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SpeechBubble from "@/components/comic/SpeechBubble";
import ActionBurst from "@/components/comic/ActionBurst";

export default function HomeHeroCharacter() {
  const [paused, setPaused] = useState(false);
  const [showSpeech, setShowSpeech] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setReducedMotion(true);
    }
  }, []);

  const handleHoverStart = () => {
    setPaused(true);
    setShowSpeech(true);
  };

  const handleHoverEnd = () => {
    setTimeout(() => {
      setShowSpeech(false);
      setPaused(false);
    }, 1500);
  };

  if (reducedMotion) return null;

  return (
    <div className="relative w-full h-48 overflow-hidden pointer-events-none my-2 select-none">
      {/* WEB LINE DRAWING (ATTACHED ABOVE VIEWPORT) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <path
          d="M 0 0 Q 50% 120, 100% 0"
          stroke="#000"
          strokeWidth="3"
          strokeDasharray="6 4"
          fill="none"
        />
      </svg>

      {/* CURVED PENDULUM SWINGING SPIDER-MAN (LEFT -> RIGHT) */}
      <motion.div
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        onClick={handleHoverStart}
        animate={
          paused
            ? { scale: 1.15, rotate: 0 }
            : {
                x: ["-15%", "115%"],
                y: [0, 60, 90, 60, 0],
                rotate: [-25, -10, 0, 15, 30],
              }
        }
        transition={
          paused
            ? { duration: 0.3 }
            : {
                x: { duration: 8, repeat: Infinity, ease: [0.45, 0.05, 0.55, 0.95] },
                y: { duration: 8, repeat: Infinity, ease: [0.45, 0.05, 0.55, 0.95] },
                rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              }
        }
        className="absolute top-0 left-0 z-20 pointer-events-auto cursor-pointer flex flex-col items-center"
      >
        <AnimatePresence>
          {showSpeech && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute -top-12 z-30"
            >
              <SpeechBubble position="bottom-left" bgColor="yellow" speaker="SECRET IDENTITY">
                HI. I&apos;M DEION!
              </SpeechBubble>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative h-32 w-28 sm:h-40 sm:w-32 filter drop-shadow-[5px_5px_0px_#000]">
          <Image
            src="/media/spiderman-swinging.jpg"
            alt="Spider-Man Pendulum Web Swinging"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* WHOOSH EFFECT AT SWING APEX */}
        {!paused && (
          <div className="absolute -bottom-2 -right-4 pointer-events-none">
            <ActionBurst text="WHOOSH!" color="yellow" size="sm" rotate={12} />
          </div>
        )}
      </motion.div>
    </div>
  );
}
