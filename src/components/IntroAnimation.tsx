"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FaceLogo from "@/components/FaceLogo";

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [step, setStep] = useState<"hello" | "bonjour" | "vanakkam" | "dark" | "sketch" | "name" | "done">("hello");

  useEffect(() => {
    // Check if intro has already been viewed in this session
    const hasSeenIntro = typeof window !== "undefined" && sessionStorage.getItem("deion_intro_seen");
    if (hasSeenIntro) {
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setStep("bonjour"), 900);
    const t2 = setTimeout(() => setStep("vanakkam"), 1800);
    const t3 = setTimeout(() => setStep("dark"), 2700);
    const t4 = setTimeout(() => setStep("sketch"), 3200);
    const t5 = setTimeout(() => setStep("name"), 4400);
    const t6 = setTimeout(() => {
      setStep("done");
      sessionStorage.setItem("deion_intro_seen", "true");
      onComplete();
    }, 6200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, [onComplete]);

  const handleSkip = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("deion_intro_seen", "true");
    }
    setStep("done");
    onComplete();
  };

  if (step === "done") return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-orange text-white selection:bg-black selection:text-white overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial from-white/20 via-transparent to-transparent pointer-events-none blur-3xl opacity-40 animate-pulse-slow" />

      {/* Skip Intro Button */}
      <button
        onClick={handleSkip}
        className="absolute top-8 right-8 z-50 flex items-center gap-2 rounded-full border border-white/40 bg-black/20 px-4 py-2 text-xs font-mono tracking-widest text-white backdrop-blur-md transition-all hover:bg-white hover:text-brand-orange hover:font-bold shadow-lg"
      >
        <span>SKIP INTRO</span>
        <span>→</span>
      </button>

      <AnimatePresence mode="wait">
        {step === "hello" && (
          <motion.div
            key="hello"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-widest text-white drop-shadow-md">
              HELLO
            </h1>
            <p className="mt-4 font-mono text-xs text-white/90 tracking-widest uppercase font-bold">
              English
            </p>
          </motion.div>
        )}

        {step === "bonjour" && (
          <motion.div
            key="bonjour"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-widest text-white drop-shadow-md">
              BONJOUR
            </h1>
            <p className="mt-4 font-mono text-xs text-white/90 tracking-widest uppercase font-bold">
              Français
            </p>
          </motion.div>
        )}

        {step === "vanakkam" && (
          <motion.div
            key="vanakkam"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-widest text-white drop-shadow-md">
              வணக்கம்
            </h1>
            <p className="mt-4 font-mono text-xs text-white/90 tracking-widest uppercase font-bold">
              Tamil • தமிழ்
            </p>
          </motion.div>
        )}

        {step === "dark" && (
          <motion.div
            key="dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="h-full w-full bg-brand-orange"
          />
        )}

        {(step === "sketch" || step === "name") && (
          <motion.div
            key="sketch-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center p-6 text-center max-w-xl"
          >
            {/* Blushing Face Logo */}
            <div className="relative mb-8 h-48 w-48 md:h-56 md:w-56 overflow-hidden rounded-full p-2">
              <motion.div
                initial={{ rotate: -90, scale: 0.8, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative h-full w-full rounded-full border-4 border-white shadow-[0_0_40px_rgba(255,255,255,0.6)]"
              >
                <FaceLogo size="full" disabled={true} />
              </motion.div>
            </div>

            {step === "name" && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="space-y-3"
              >
                <h2 className="font-display text-4xl md:text-6xl font-black tracking-wider text-white">
                  DEION BERNARD
                </h2>
                <div className="h-1 w-24 bg-white mx-auto shadow-md" />
                <p className="font-mono text-sm md:text-base text-white font-bold tracking-wide">
                  Computer Science Graduate
                </p>
                <p className="font-mono text-xs md:text-sm text-white/90 tracking-widest uppercase font-semibold">
                  Developer • AI Enthusiast • Creator
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
