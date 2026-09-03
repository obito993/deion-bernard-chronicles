"use client";

import React from "react";
import { motion } from "framer-motion";

interface ActionBurstProps {
  text: string;
  color?: "red" | "yellow" | "violet" | "orange";
  size?: "sm" | "md" | "lg";
  rotate?: number;
  className?: string;
}

export default function ActionBurst({
  text,
  color = "yellow",
  size = "md",
  rotate = -6,
  className = "",
}: ActionBurstProps) {
  const bgClass = {
    red: "bg-comic-red text-white",
    yellow: "bg-comic-yellow text-black",
    violet: "bg-comic-violet text-black",
    orange: "bg-comic-orange text-black",
  }[color];

  const sizeClasses = {
    sm: "px-3 py-1 text-sm font-comic",
    md: "px-5 py-2 text-xl sm:text-2xl font-comic tracking-wider",
    lg: "px-8 py-3 text-3xl sm:text-5xl font-comic tracking-widest",
  }[size];

  return (
    <motion.div
      initial={{ scale: 0, rotate: rotate - 20 }}
      animate={{ scale: 1, rotate: rotate }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={`relative inline-block ${className}`}
    >
      <div
        className={`relative z-10 border-3 border-black shadow-comic uppercase ${bgClass} ${sizeClasses}`}
        style={{
          clipPath:
            "polygon(0% 20%, 15% 0%, 35% 15%, 50% 0%, 65% 15%, 85% 0%, 100% 20%, 85% 40%, 100% 60%, 85% 80%, 100% 100%, 75% 85%, 50% 100%, 30% 85%, 0% 100%, 15% 75%, 0% 50%, 15% 35%)",
        }}
      >
        <span className="drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]">{text}</span>
      </div>
    </motion.div>
  );
}
