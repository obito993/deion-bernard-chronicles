"use client";

import React from "react";

interface CaptionBoxProps {
  children: React.ReactNode;
  chapterNumber?: string;
  className?: string;
  bgColor?: "yellow" | "cream" | "violet" | "red";
}

export default function CaptionBox({
  children,
  chapterNumber,
  className = "",
  bgColor = "yellow",
}: CaptionBoxProps) {
  const bgClass = {
    yellow: "bg-comic-yellow text-black",
    cream: "bg-comic-cream text-black",
    violet: "bg-comic-violet text-black",
    red: "bg-comic-red text-white",
  }[bgColor];

  return (
    <div
      className={`relative inline-block rounded-none border-3 border-black p-3 shadow-comic font-mono text-xs sm:text-sm font-bold uppercase tracking-wide ${bgClass} ${className}`}
    >
      {chapterNumber && (
        <span className="mb-1 block text-[10px] font-black tracking-widest text-black/70 border-b border-black/30 pb-0.5">
          {chapterNumber}
        </span>
      )}
      {children}
    </div>
  );
}
