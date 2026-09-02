"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

interface FaceLogoProps {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
  showBlushHint?: boolean;
}

export default function FaceLogo({ size = "md", className = "", showBlushHint = false }: FaceLogoProps) {
  const [isBlushing, setIsBlushing] = useState(false);

  const sizeClasses = {
    sm: "h-10 w-10",
    md: "h-14 w-14",
    lg: "h-36 w-36 sm:h-44 sm:w-44",
    xl: "h-48 w-48 md:h-56 md:w-56",
    full: "h-full w-full",
  };

  const handleTouch = () => {
    setIsBlushing(true);
    setTimeout(() => setIsBlushing(false), 2500);
  };

  return (
    <div
      onClick={handleTouch}
      onMouseEnter={() => setIsBlushing(true)}
      onMouseLeave={() => setIsBlushing(false)}
      onTouchStart={handleTouch}
      className={`relative cursor-pointer overflow-hidden rounded-full transition-all duration-300 ${sizeClasses[size]} ${className}`}
      title="Touch/Hover Deion's face to make him blush! 😊"
    >
      {/* Container ring with dynamic blush glow */}
      <motion.div
        animate={{
          scale: isBlushing ? 1.05 : 1,
          borderColor: isBlushing ? "#f43f5e" : "#ff5500",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={`relative h-full w-full overflow-hidden rounded-full border-2 p-0.5 transition-shadow ${
          isBlushing
            ? "border-rose-500 shadow-[0_0_35px_rgba(244,63,94,0.85)]"
            : "border-brand-orange shadow-[0_0_20px_rgba(255,85,0,0.5)]"
        }`}
      >
        {/* Base Image */}
        <Image
          src="/deion-sketch-logo.jpg"
          alt="Deion Bernard Face Sketch Logo"
          fill
          className={`rounded-full object-cover transition-all duration-300 ${
            isBlushing ? "contrast-125 brightness-105 saturate-125" : "contrast-125 brightness-95"
          }`}
          priority
        />

        {/* CUTE ANIME BLUSH LINES (POSITIONED PRECISELY ON CHEEKS INSIDE THE FACE) */}
        <AnimatePresence>
          {isBlushing && (
            <>
              {/* Rosy Glow Spot - Left Cheek (Inward on cheek) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.8, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.25 }}
                className="absolute top-[52%] left-[34%] h-5 w-7 rounded-full bg-rose-500/70 blur-xs pointer-events-none z-10"
              />

              {/* Pink Small Anime Blush Lines - Left Cheek */}
              <motion.div
                initial={{ opacity: 0, y: 2 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-[51%] left-[34%] z-20 flex gap-0.5 transform -rotate-12 pointer-events-none"
              >
                <div className="h-3 w-0.5 bg-rose-400 rounded-full shadow-[0_0_5px_#f43f5e]" />
                <div className="h-3.5 w-0.5 bg-pink-300 rounded-full shadow-[0_0_5px_#f43f5e]" />
                <div className="h-3 w-0.5 bg-rose-400 rounded-full shadow-[0_0_5px_#f43f5e]" />
              </motion.div>

              {/* Rosy Glow Spot - Right Cheek (Inward on cheek) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.8, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.25 }}
                className="absolute top-[52%] right-[34%] h-5 w-7 rounded-full bg-rose-500/70 blur-xs pointer-events-none z-10"
              />

              {/* Pink Small Anime Blush Lines - Right Cheek */}
              <motion.div
                initial={{ opacity: 0, y: 2 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-[51%] right-[34%] z-20 flex gap-0.5 transform rotate-12 pointer-events-none"
              >
                <div className="h-3 w-0.5 bg-rose-400 rounded-full shadow-[0_0_5px_#f43f5e]" />
                <div className="h-3.5 w-0.5 bg-pink-300 rounded-full shadow-[0_0_5px_#f43f5e]" />
                <div className="h-3 w-0.5 bg-rose-400 rounded-full shadow-[0_0_5px_#f43f5e]" />
              </motion.div>

              {/* Overall Rosy Glow Tint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-radial from-rose-500/40 via-pink-500/10 to-transparent pointer-events-none rounded-full"
              />

              {/* Floating Hearts & Sparkles */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.6 }}
                animate={{ opacity: 1, y: -15, scale: 1 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="absolute -top-1 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1 text-rose-400 drop-shadow-lg pointer-events-none"
              >
                <Heart className="h-4 w-4 fill-current text-rose-500 animate-bounce" />
                <Sparkles className="h-3.5 w-3.5 text-pink-300" />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
