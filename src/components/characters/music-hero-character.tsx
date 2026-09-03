"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SpeechBubble from "@/components/comic/SpeechBubble";

interface MusicHeroCharacterProps {
  isPlaying?: boolean;
}

export default function MusicHeroCharacter({ isPlaying }: MusicHeroCharacterProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative inline-block my-2 select-none">
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={
          isPlaying
            ? { y: [0, -10, 0], scale: [1, 1.06, 1], rotate: [-2, 2, -2] }
            : { y: [0, -8, 0] }
        }
        transition={{ duration: isPlaying ? 0.6 : 3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.08 }}
        className="relative flex flex-col items-center cursor-pointer"
      >
        <AnimatePresence>
          {(hovered || isPlaying) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute -top-12 z-30"
            >
              <SpeechBubble position="bottom-left" bgColor="yellow" speaker="THOR">
                {isPlaying ? "NOW PLAYING! FEEL THE SOUND THUNDER!" : "RETRO SOUNDTRACK IN SESSION! ⚡"}
              </SpeechBubble>
            </motion.div>
          )}
        </AnimatePresence>

        {/* TRANSPARENT THOR CUTOUT WITH ZERO WHITE BACKGROUND */}
        <div className="relative h-32 w-28 sm:h-44 sm:w-36 filter drop-shadow-[6px_6px_0px_#000000]">
          <Image
            src="/media/marvel-thor-transparent.png"
            alt="Thor Mythic Lightning Hero"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}
