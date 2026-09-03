"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SpeechBubble from "@/components/comic/SpeechBubble";

export default function ContactHeroCharacter({ submitted }: { submitted?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative inline-block my-2 select-none">
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={
          submitted
            ? { scale: [1, 1.15, 1], y: [0, -15, 0] }
            : { y: [0, -10, 0] }
        }
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.08 }}
        className="relative flex flex-col items-center cursor-pointer"
      >
        <AnimatePresence>
          {(hovered || submitted) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute -top-14 z-30"
            >
              <SpeechBubble position="bottom-left" bgColor="yellow" speaker="CAPTAIN AMERICA">
                {submitted ? "MESSAGE RECEIVED! TEAM-UP ASSEMBLED!" : "CAPTAIN AMERICA — READY FOR THE TEAM-UP!"}
              </SpeechBubble>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FLOATING TRANSPARENT CAPTAIN AMERICA CUTOUT */}
        <div className="relative h-32 w-28 sm:h-44 sm:w-36 filter drop-shadow-[6px_6px_0px_#000000]">
          <Image
            src="/media/hero-captain-america-transparent.png"
            alt="Captain America Team-Up Hero"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}
