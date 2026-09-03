"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SpeechBubble from "@/components/comic/SpeechBubble";

export default function CreativeHeroCharacter() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative inline-block my-2 select-none">
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.08 }}
        className="relative flex flex-col items-center cursor-pointer"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute -top-14 z-30"
            >
              <SpeechBubble position="bottom-left" bgColor="yellow" speaker="BATMAN">
                I AM BATMAN. CREATING IN THE SHADOWS. 🦇
              </SpeechBubble>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FLOATING TRANSPARENT BATMAN CUTOUT */}
        <div className="relative h-32 w-28 sm:h-44 sm:w-36 filter drop-shadow-[6px_6px_0px_#000000]">
          <Image
            src="/media/hero-batman-transparent.png"
            alt="Batman Creative Space Hero"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}
