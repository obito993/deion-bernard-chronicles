"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile screen
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.dataset.cursor === "interactive"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onClick = (e: MouseEvent) => {
      const newClick = { id: Date.now(), x: e.clientX, y: e.clientY };
      setClicks((prev) => [...prev.slice(-3), newClick]);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Primary Comic Dot Cursor */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border-2 border-black bg-comic-yellow shadow-comic-sm"
        animate={{
          x: position.x - (isHovered ? 14 : 7),
          y: position.y - (isHovered ? 14 : 7),
          scale: isHovered ? 1.4 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.1 }}
        style={{ width: 14, height: 14 }}
      >
        {isHovered && (
          <span className="absolute -top-4 -right-4 font-comic text-[10px] text-comic-red font-black">
            ✦
          </span>
        )}
      </motion.div>

      {/* CLICK BURST SFX ON MOUSE CLICK */}
      <AnimatePresence>
        {clicks.map((c) => (
          <motion.div
            key={c.id}
            initial={{ scale: 0, opacity: 1, rotate: -10 }}
            animate={{ scale: 1.2, opacity: 0, rotate: 10 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ left: c.x - 20, top: c.y - 20 }}
            className="pointer-events-none fixed z-50 font-comic text-lg font-black text-comic-red text-shadow-comic"
          >
            CLICK!
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}
