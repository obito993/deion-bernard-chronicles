"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SpeechBubble from "@/components/comic/SpeechBubble";

export default function JournalHeroCharacter() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative inline-block my-2 select-none">
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{ y: [0, -8, 0], rotate: [0, 1, 0, -1, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
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
              <SpeechBubble position="bottom-left" bgColor="yellow" speaker="DOCTOR STRANGE">
                EVERY STORY HAS A CHAPTER.
              </SpeechBubble>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative h-28 w-24 sm:h-36 sm:w-28">
          <Image
            src="/media/marvel-doctor-strange.jpg"
            alt="Doctor Strange Mystical Hero"
            fill
            className="object-contain"
            style={{ mixBlendMode: "multiply" }}
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}
