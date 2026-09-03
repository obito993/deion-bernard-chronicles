"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ComicFloatingDock from "@/components/navigation/comic-floating-dock";

/**
 * Renders the FloatingDock only AFTER the intro animation has been seen.
 * Checks sessionStorage for "deion_comic_intro_seen" — the same key
 * set by IntroAnimation.tsx when the intro completes or is skipped.
 */
export default function DockAfterIntro() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // If intro was already seen in this session, show dock immediately
    if (sessionStorage.getItem("deion_comic_intro_seen")) {
      setShow(true);
      return;
    }

    // Otherwise poll until the intro sets the flag
    const interval = setInterval(() => {
      if (sessionStorage.getItem("deion_comic_intro_seen")) {
        setShow(true);
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ComicFloatingDock />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
