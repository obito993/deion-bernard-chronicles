"use client";

import React from "react";
import { motion } from "framer-motion";

interface ComicPanelProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: "cream" | "white" | "yellow" | "red" | "violet" | "paper" | "dark";
  tilt?: "none" | "left" | "right" | "slight-left" | "slight-right";
  shadowSize?: "sm" | "md" | "lg" | "xl";
  borderWidth?: "normal" | "thick";
  hasHalftone?: boolean;
  badgeText?: string;
  badgeBg?: string;
  onClick?: () => void;
}

export default function ComicPanel({
  children,
  className = "",
  bgColor = "white",
  tilt = "none",
  shadowSize = "md",
  borderWidth = "thick",
  hasHalftone = false,
  badgeText,
  badgeBg = "bg-comic-yellow",
  onClick,
}: ComicPanelProps) {
  const bgClasses = {
    cream: "bg-comic-cream",
    white: "bg-comic-white",
    yellow: "bg-comic-yellow",
    red: "bg-comic-red text-white",
    violet: "bg-comic-violet",
    paper: "bg-comic-paper",
    dark: "bg-comic-dark text-white",
  }[bgColor];

  const tiltClasses = {
    none: "rotate-0",
    left: "-rotate-2",
    right: "rotate-2",
    "slight-left": "-rotate-1",
    "slight-right": "rotate-1",
  }[tilt];

  const shadowClasses = {
    sm: "shadow-comic-sm",
    md: "shadow-comic",
    lg: "shadow-comic-lg",
    xl: "shadow-comic-xl",
  }[shadowSize];

  const borderClass = borderWidth === "thick" ? "border-4 border-black" : "border-3 border-black";

  return (
    <motion.div
      whileHover={onClick ? { scale: 1.01, translateY: -2 } : {}}
      whileTap={onClick ? { scale: 0.99, translateX: 2, translateY: 2 } : {}}
      onClick={onClick}
      className={`relative rounded-xl ${bgClasses} ${borderClass} ${shadowClasses} ${tiltClasses} transition-all duration-200 ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
    >
      {hasHalftone && (
        <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none rounded-xl" />
      )}

      {badgeText && (
        <div
          className={`absolute -top-3 left-4 z-10 border-2 border-black ${badgeBg} px-3 py-0.5 text-xs font-black uppercase tracking-wider shadow-comic-sm font-mono`}
        >
          {badgeText}
        </div>
      )}

      <div className="relative z-0 h-full">{children}</div>
    </motion.div>
  );
}
