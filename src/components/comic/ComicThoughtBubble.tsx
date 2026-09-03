"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ComicThoughtBubbleProps {
  text: string;
  label?: string;
  delay?: number;
}

export default function ComicThoughtBubble({
  text,
  label = "SECRET IDENTITY:",
  delay = 0.8,
}: ComicThoughtBubbleProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay * 1000);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <AnimatePresence>
      {visible && (
        <div className="relative select-none">
          {/* TINY THOUGHT DOT TRAIL LEADING FROM CHARACTER */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0, duration: 0.3 }}
            className="flex items-end gap-1.5 mb-2 pl-6"
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="h-2.5 w-2.5 rounded-full border-2 border-black bg-white shadow-[2px_2px_0px_#000]"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
              className="h-3.5 w-3.5 rounded-full border-2 border-black bg-white shadow-[2px_2px_0px_#000]"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
              className="h-5 w-5 rounded-full border-2 border-black bg-white shadow-[2px_2px_0px_#000]"
            />
          </motion.div>

          {/* SECRET IDENTITY LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="mb-1.5 pl-2"
          >
            <span className="font-mono text-[10px] font-black uppercase tracking-widest text-comic-red bg-comic-yellow border border-black px-2 py-0.5 shadow-[2px_2px_0px_#000]">
              {label}
            </span>
          </motion.div>

          {/* MAIN THOUGHT BUBBLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 280, damping: 22 }}
            className="relative"
          >
            {/* IRREGULAR ORGANIC THOUGHT BUBBLE SHAPE */}
            <div
              className="relative rounded-[2rem_3rem_2.5rem_2rem/3rem_2rem_3.5rem_2.5rem] border-4 border-black bg-white px-5 py-4 shadow-[7px_7px_0px_#000000]"
              style={{
                background: "#FFFDF5",
                borderRadius: "52% 48% 55% 45% / 46% 55% 45% 54%",
              }}
            >
              {/* TEXT WITH POP ANIMATION */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="font-comic text-xl sm:text-2xl text-black leading-snug text-center"
              >
                {text}
              </motion.p>

              {/* HALFTONE DOTS — outer border area only, NOT over text */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-10"
                style={{
                  backgroundImage: "radial-gradient(#000 12%, transparent 13%)",
                  backgroundSize: "8px 8px",
                  maskImage: "radial-gradient(ellipse 90% 85% at center, transparent 60%, black 100%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
