"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device supports touch
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [data-cursor]");
      const cursorTextAttr = target.closest("[data-cursor-text]");

      if (cursorTextAttr) {
        const text = cursorTextAttr.getAttribute("data-cursor-text");
        setHoverText(text || "VIEW");
        setIsHovered(true);
      } else if (interactive) {
        setHoverText("");
        setIsHovered(true);
      } else {
        setIsHovered(false);
        setHoverText("");
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 h-3 w-3 rounded-full bg-brand-orange shadow-[0_0_10px_#FF5500]"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isHovered ? (hoverText ? 0 : 1.5) : 1,
          opacity: hoverText ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
      />

      {/* Ring */}
      <motion.div
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full border border-brand-orange/80 bg-brand-orange/10 backdrop-blur-[1px] ${
          hoverText ? "border-2 bg-brand-orange text-black font-bold text-xs shadow-[0_0_20px_rgba(255,85,0,0.6)]" : ""
        }`}
        animate={{
          x: position.x - (hoverText ? 36 : isHovered ? 24 : 16),
          y: position.y - (hoverText ? 36 : isHovered ? 24 : 16),
          width: hoverText ? 72 : isHovered ? 48 : 32,
          height: hoverText ? 72 : isHovered ? 48 : 32,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.2 }}
      >
        {hoverText && (
          <span className="tracking-widest uppercase text-[10px]">
            {hoverText}
          </span>
        )}
      </motion.div>
    </div>
  );
}
