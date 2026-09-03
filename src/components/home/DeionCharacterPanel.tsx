"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Sticker from "@/components/comic/Sticker";
import ActionBurst from "@/components/comic/ActionBurst";
import ComicThoughtBubble from "@/components/comic/ComicThoughtBubble";

export default function DeionCharacterPanel() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-start select-none w-full">
      
      {/* THOUGHT BUBBLE — appears above / beside the photo */}
      <ComicThoughtBubble
        text={"Hey! I'm Deion.\nWelcome to my portfolio!"}
        label="SECRET IDENTITY:"
        delay={0.6}
      />

      {/* COMIC CHARACTER PHOTO PANEL */}
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => setHovered(true)}
        onTouchEnd={() => setTimeout(() => setHovered(false), 1200)}
        animate={
          hovered
            ? { y: -10, rotate: -1, scale: 1.03 }
            : { y: 0, rotate: 2, scale: 1 }
        }
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative mt-4 cursor-pointer"
        style={{ rotate: 2 }}
      >
        {/* HARD OFFSET COMIC SHADOW */}
        <motion.div
          animate={hovered ? { x: 12, y: 12 } : { x: 8, y: 8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute inset-0 rounded-2xl bg-black"
        />

        {/* CREAM PAPER BORDER WRAPPER */}
        <div className="relative rounded-2xl border-4 border-black bg-comic-cream p-2 overflow-hidden">

          {/* HALFTONE TEXTURE — only on outer paper border area, NOT over the face */}
          <div
            className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-20"
            style={{
              backgroundImage: "radial-gradient(#000 12%, transparent 13%)",
              backgroundSize: "10px 10px",
              maskImage:
                "radial-gradient(ellipse 88% 85% at center, transparent 55%, black 100%)",
            }}
          />

          {/* ACTUAL CHARACTER IMAGE — full mountain portrait */}
          <div className="relative w-56 h-72 sm:w-64 sm:h-80 lg:w-72 lg:h-96 rounded-xl overflow-hidden border-3 border-black">
            <Image
              src="/media/deion-portrait-hero.jpg"
              alt="Deion Bernard — Comic Portrait"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* ANIMATED BORDER GLOW ON HOVER */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="pointer-events-none absolute inset-0 rounded-2xl border-4 border-comic-yellow z-20"
              />
            )}
          </AnimatePresence>
        </div>

        {/* COMIC SPARK MARKS ON HOVER */}
        <AnimatePresence>
          {hovered && (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute -top-8 -right-8 z-30"
              >
                <ActionBurst text="★" color="yellow" size="sm" rotate={15} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute -bottom-4 -left-6 z-30"
              >
                <ActionBurst text="✦" color="red" size="sm" rotate={-10} />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* "THE MAIN CHARACTER" CAPTION ON HOVER */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="absolute -bottom-10 left-0 right-0 z-30 flex justify-center"
            >
              <span className="font-mono text-[11px] font-black uppercase tracking-widest border-2 border-black bg-comic-yellow px-3 py-1 shadow-[3px_3px_0px_#000]">
                ★ THE MAIN CHARACTER ★
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ISSUE NUMBER BADGE — top-left corner */}
        <div className="absolute -top-3 -left-4 z-20">
          <Sticker text="THE HERO" variant="red" rotate={-8} />
        </div>
      </motion.div>

    </div>
  );
}
