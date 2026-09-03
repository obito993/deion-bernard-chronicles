"use client";

import React from "react";
import { motion } from "framer-motion";

interface ComicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "yellow" | "red" | "violet" | "cream" | "dark" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  burstText?: string;
}

export default function ComicButton({
  children,
  onClick,
  variant = "yellow",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  burstText,
}: ComicButtonProps) {
  const bgClasses = {
    yellow: "bg-comic-yellow text-black hover:bg-[#ffe169]",
    red: "bg-comic-red text-white hover:bg-[#ff8585]",
    violet: "bg-comic-violet text-black hover:bg-[#d6c7ff]",
    cream: "bg-comic-cream text-black hover:bg-white",
    dark: "bg-comic-dark text-white hover:bg-black",
    white: "bg-white text-black hover:bg-comic-cream",
  }[variant];

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs font-bold",
    md: "px-5 py-2.5 text-sm font-black tracking-wide",
    lg: "px-7 py-3.5 text-base sm:text-lg font-black tracking-wider uppercase",
  }[size];

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ translateY: -2 }}
      whileTap={{ translateX: 3, translateY: 3 }}
      className={`group relative inline-flex items-center justify-center rounded-lg border-3 border-black font-sans uppercase shadow-comic transition-all duration-150 active:shadow-comic-pressed active:translate-x-1 active:translate-y-1 ${bgClasses} ${sizeClasses} ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
    >
      {burstText && (
        <span className="absolute -top-3 -right-3 rounded-full border-2 border-black bg-comic-red px-2 py-0.5 font-comic text-[10px] text-white shadow-comic-sm rotate-12 group-hover:scale-110 transition-transform">
          {burstText}
        </span>
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
