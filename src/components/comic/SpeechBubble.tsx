"use client";

import React from "react";
import { motion } from "framer-motion";

interface SpeechBubbleProps {
  children: React.ReactNode;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "left" | "right";
  bgColor?: "white" | "yellow" | "cream";
  className?: string;
  speaker?: string;
  isThought?: boolean;
}

export default function SpeechBubble({
  children,
  position = "top-right",
  bgColor = "white",
  className = "",
  speaker,
  isThought = false,
}: SpeechBubbleProps) {
  const bgClass = {
    white: "bg-white text-black",
    yellow: "bg-comic-yellow text-black",
    cream: "bg-comic-cream text-black",
  }[bgColor];

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`relative inline-block ${className}`}
    >
      {speaker && (
        <span className="mb-1 block font-mono text-[10px] font-bold uppercase tracking-wider text-gray-700">
          {speaker}:
        </span>
      )}
      <div
        className={`relative rounded-2xl border-3 border-black px-4 py-2.5 shadow-comic text-xs sm:text-sm font-semibold ${bgClass} ${
          isThought ? "border-dashed" : ""
        }`}
      >
        {children}

        {/* Bubble Tail */}
        {!isThought ? (
          <svg
            className={`absolute h-4 w-4 fill-current ${
              bgColor === "yellow" ? "text-comic-yellow" : bgColor === "cream" ? "text-comic-cream" : "text-white"
            } ${
              position === "bottom-left"
                ? "-bottom-3 left-4 rotate-45"
                : position === "bottom-right"
                ? "-bottom-3 right-4 -rotate-45"
                : position === "top-left"
                ? "-top-3 left-4 -rotate-135"
                : "-top-3 right-4 rotate-135"
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M0 0 L10 20 L20 0 Z" stroke="#000" strokeWidth="3" />
          </svg>
        ) : (
          <div className="absolute -bottom-3 left-6 flex gap-1">
            <span className="h-2 w-2 rounded-full border-2 border-black bg-white" />
            <span className="h-1.5 w-1.5 rounded-full border border-black bg-white" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
