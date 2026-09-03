"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SpeechBubble from "@/components/comic/SpeechBubble";

export default function ResumeHeroCharacter() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative inline-block my-2 select-none">
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.08 }}
        className="relative flex flex-col items-center cursor-pointer"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute -top-12 z-30"
            >
              <SpeechBubble position="bottom-left" bgColor="yellow" speaker="IRON MAN">
                IRON MAN — DOSSIER POWERED UP! 🚀
              </SpeechBubble>
            </motion.div>
          )}
        </AnimatePresence>

        {/* TRANSPARENT IRON MAN CUTOUT WITH ZERO WHITE BACKGROUND */}
        <div className="relative h-32 w-28 sm:h-44 sm:w-36 filter drop-shadow-[6px_6px_0px_#000000]">
          <Image
            src="/media/marvel-ironman-transparent.png"
            alt="Iron Man Powered Hero"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}
