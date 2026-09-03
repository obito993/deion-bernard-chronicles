"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SpeechBubble from "@/components/comic/SpeechBubble";

export default function AboutHeroCharacter() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative inline-block my-2 select-none">
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
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
              <SpeechBubble position="bottom-left" bgColor="yellow" speaker="DEION">
                ORIGIN STORY UNLOCKED!
              </SpeechBubble>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative h-32 w-32 sm:h-40 sm:w-40 rounded-2xl overflow-hidden border-4 border-black filter drop-shadow-[4px_4px_0px_#000]">
          <Image
            src="/media/deion-about-portrait.jpg"
            alt="Deion Bernard — About Portrait"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}
