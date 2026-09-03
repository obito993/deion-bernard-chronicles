"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SpeechBubble from "@/components/comic/SpeechBubble";
import ActionBurst from "@/components/comic/ActionBurst";

interface HeroStingerProps {
  onComplete: () => void;
}

export default function HeroStinger({ onComplete }: HeroStingerProps) {
  const [active, setActive] = useState(true);

  useEffect(() => {
    // Run for 3 seconds, then exit cleanly
    const timer = setTimeout(() => {
      setActive(false);
      setTimeout(onComplete, 600);
    }, 3200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="hero-stinger-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm pointer-events-none select-none"
        >
          {/* SPIDER-HERO STINGER POP-IN */}
          <motion.div
            initial={{ scale: 0.5, y: 100, rotate: -10 }}
            animate={{ scale: 1, y: 0, rotate: 0 }}
            exit={{ scale: 0.6, y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative flex flex-col items-center justify-center pointer-events-auto"
          >
            {/* SPEECH BUBBLE */}
            <div className="mb-4">
              <SpeechBubble position="bottom-left" bgColor="yellow" speaker="SECRET IDENTITY">
                HI! WELCOME TO MY CHRONICLES!
              </SpeechBubble>
            </div>

            {/* ISOLATED TRANSPARENT HERO PORTRAIT */}
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 filter drop-shadow-[8px_8px_0px_#000000]">
              <Image
                src="/media/spiderman-intro-stinger-transparent.png"
                alt="Spider-Hero Intro Stinger"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* ACTION BURST DECORATION */}
            <div className="absolute -top-6 -right-6">
              <ActionBurst text="THWIP!" color="red" size="md" rotate={12} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
