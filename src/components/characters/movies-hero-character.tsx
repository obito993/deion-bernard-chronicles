"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SpeechBubble from "@/components/comic/SpeechBubble";
import { Film } from "lucide-react";

export default function MoviesHeroCharacter() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative inline-block my-4">
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex flex-col items-center cursor-pointer select-none"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute -top-12 z-30"
            >
              <SpeechBubble position="bottom-left" bgColor="yellow" speaker="CINEMA HERO">
                THE MOVIES THAT MADE THE CUT!
              </SpeechBubble>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-2 rounded-xl border-3 border-black bg-comic-red px-4 py-2 text-white shadow-comic-lg">
          <Film className="h-6 w-6 text-comic-yellow" />
          <span className="font-comic text-xl">CINEMA CLAWS HERO</span>
        </div>
      </motion.div>
    </div>
  );
}
