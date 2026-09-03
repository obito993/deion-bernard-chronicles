"use client";

import React from "react";
import { motion } from "framer-motion";

interface StickerProps {
  text: string;
  variant?: "yellow" | "red" | "violet" | "cream" | "dark" | "white";
  rotate?: number;
  className?: string;
}

export default function Sticker({
  text,
  variant = "yellow",
  rotate = 4,
  className = "",
}: StickerProps) {
  const bgClasses = {
    yellow: "bg-comic-yellow text-black",
    red: "bg-comic-red text-white",
    violet: "bg-comic-violet text-black",
    cream: "bg-comic-cream text-black",
    dark: "bg-comic-dark text-white",
    white: "bg-white text-black",
  }[variant];

  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: rotate + 5 }}
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`inline-block border-3 border-black px-3 py-1 text-xs sm:text-sm font-black uppercase tracking-widest shadow-comic-sm font-sans rounded-md select-none ${bgClasses} ${className}`}
    >
      {text}
    </motion.div>
  );
}
