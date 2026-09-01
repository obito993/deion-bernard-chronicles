"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== prevPath) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setPrevPath(pathname);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [pathname, prevPath]);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="page-transition-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md pointer-events-none"
          >
            {/* Thin sweeping orange line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute top-1/2 left-0 right-0 h-0.5 bg-brand-orange shadow-[0_0_15px_#FF5500] origin-left"
            />

            {/* Brief logo pulse */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 h-16 w-16 overflow-hidden rounded-full border-2 border-brand-orange shadow-[0_0_20px_#FF5500]"
            >
              <Image
                src="/deion-sketch-logo.jpg"
                alt="Deion Logo"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
