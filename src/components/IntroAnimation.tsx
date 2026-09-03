"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ActionBurst from "@/components/comic/ActionBurst";
import CaptionBox from "@/components/comic/CaptionBox";
import SpeechBubble from "@/components/comic/SpeechBubble";

interface IntroAnimationProps {
  onComplete: () => void;
}

type Step = "empty" | "hello" | "bonjour" | "vanakkam" | "merge" | "sketch" | "name" | "flip" | "done";

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [step, setStep] = useState<Step>("empty");

  useEffect(() => {
    // Check session storage
    const hasSeenIntro = typeof window !== "undefined" && sessionStorage.getItem("deion_comic_intro_seen");
    if (hasSeenIntro) {
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setStep("hello"), 1500);       // Panel 01: HELLO
    const t2 = setTimeout(() => setStep("bonjour"), 4200);     // Panel 02: BONJOUR
    const t3 = setTimeout(() => setStep("vanakkam"), 6800);    // Panel 03: வணக்கம்
    const t4 = setTimeout(() => setStep("merge"), 9800);       // Merge panels
    const t5 = setTimeout(() => setStep("sketch"), 11200);    // Hero sketch reveal
    const t6 = setTimeout(() => setStep("name"), 13500);      // DEION BERNARD / ISSUE #001
    const t7 = setTimeout(() => setStep("flip"), 15500);      // Page flip transition
    const t8 = setTimeout(() => {
      setStep("done");
      sessionStorage.setItem("deion_comic_intro_seen", "true");
      onComplete();
    }, 16500);

    return () => {
      [t1, t2, t3, t4, t5, t6, t7, t8].forEach(clearTimeout);
    };
  }, [onComplete]);

  const handleSkip = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("deion_comic_intro_seen", "true");
    }
    setStep("done");
    onComplete();
  };

  if (step === "done") return null;

  return (
    <AnimatePresence>
      <motion.div
        key="comic-intro-overlay"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-comic-cream text-black overflow-hidden font-sans select-none"
      >
        {/* Halftone Background Pattern */}
        <div className="absolute inset-0 bg-halftone opacity-15 pointer-events-none" />

        {/* Outer Ink Border Drawing Animation */}
        <motion.div
          initial={{ scaleX: 0, scaleY: 0 }}
          animate={{ scaleX: 1, scaleY: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-4 sm:inset-8 border-4 border-black pointer-events-none shadow-comic-lg rounded-2xl bg-comic-cream/50"
        />

        {/* SKIP INTRO BUTTON */}
        <button
          onClick={handleSkip}
          className="absolute top-6 right-6 z-50 flex items-center gap-2 rounded-lg border-3 border-black bg-comic-yellow px-4 py-2 text-xs font-black uppercase tracking-widest text-black shadow-comic transition-all hover:bg-comic-red hover:text-white active:translate-x-1 active:translate-y-1 active:shadow-comic-pressed"
        >
          <span>SKIP INTRO</span>
          <span>→</span>
        </button>

        {/* SEQUENCE PANELS */}
        <div className="relative z-10 w-full max-w-4xl px-4 text-center flex flex-col items-center justify-center">
          
          {/* STEP 0: EMPTY COMIC PAGE */}
          {step === "empty" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <CaptionBox chapterNumber="ISSUE #000 • THE STORY BEGINS" bgColor="yellow">
                &quot;EVERY STORY STARTS WITH A SINGLE PANEL...&quot;
              </CaptionBox>
              <p className="font-mono text-xs text-gray-500 uppercase tracking-widest animate-pulse font-bold">
                [ DRAWING THE COMIC WORLD... ]
              </p>
            </motion.div>
          )}

          {/* STEP 1: PANEL 01 — HELLO */}
          {step === "hello" && (
            <motion.div
              key="panel-hello"
              initial={{ scale: 0.4, rotate: -15, opacity: 0 }}
              animate={{ scale: 1, rotate: -2, opacity: 1 }}
              exit={{ scale: 1.1, rotate: 10, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full max-w-xl rounded-2xl border-4 border-black bg-comic-white p-8 sm:p-12 shadow-comic-xl bg-speed-lines"
            >
              <div className="absolute -top-6 -left-6">
                <ActionBurst text="WHOOSH!" color="yellow" size="md" rotate={-12} />
              </div>
              <div className="absolute -top-5 right-6">
                <SpeechBubble position="bottom-left" bgColor="yellow" speaker="COMIC HERO">
                  HELLO!
                </SpeechBubble>
              </div>

              <div className="my-6">
                <h1 className="font-comic text-7xl sm:text-9xl text-comic-red text-shadow-comic-lg tracking-wider uppercase">
                  HELLO
                </h1>
                <p className="font-mono text-xs font-black text-black tracking-widest uppercase mt-2">
                  PAGE 01 — THE BEGINNING
                </p>
              </div>

              <div className="mt-4 inline-block border-2 border-black bg-comic-yellow px-4 py-1 font-mono text-xs font-black uppercase shadow-comic-sm">
                SPEAKER: DEION BERNARD
              </div>
            </motion.div>
          )}

          {/* STEP 2: PANEL 02 — BONJOUR */}
          {step === "bonjour" && (
            <motion.div
              key="panel-bonjour"
              initial={{ x: 300, rotate: 15, opacity: 0 }}
              animate={{ x: 0, rotate: 2, opacity: 1 }}
              exit={{ x: -300, rotate: -15, opacity: 0 }}
              transition={{ type: "spring", stiffness: 250, damping: 22 }}
              className="relative w-full max-w-xl rounded-2xl border-4 border-black bg-comic-violet p-8 sm:p-12 shadow-comic-xl"
            >
              <div className="absolute -top-6 -right-6">
                <ActionBurst text="POW!" color="red" size="md" rotate={10} />
              </div>

              <div className="my-6">
                <h1 className="font-comic text-7xl sm:text-9xl text-black text-shadow-yellow tracking-wider uppercase">
                  BONJOUR
                </h1>
                <p className="font-mono text-xs font-black text-black tracking-widest uppercase mt-2">
                  PAGE 02 — A NEW CHAPTER (Français)
                </p>
              </div>

              <div className="mt-4 inline-block border-2 border-black bg-white px-4 py-1 font-mono text-xs font-black uppercase shadow-comic-sm">
                EXPANDING THE HORIZON
              </div>
            </motion.div>
          )}

          {/* STEP 3: PANEL 03 — வணக்கம் */}
          {step === "vanakkam" && (
            <motion.div
              key="panel-vanakkam"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, rotate: -1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full max-w-xl rounded-2xl border-4 border-black bg-comic-yellow p-8 sm:p-12 shadow-comic-xl"
            >
              <div className="absolute -top-7 left-10">
                <ActionBurst text="KABOOM!" color="red" size="md" rotate={-8} />
              </div>

              <div className="my-6">
                {/* Tamil Text rendered accurately */}
                <h1 className="font-sans text-6xl sm:text-8xl font-black text-black text-shadow-red tracking-wide">
                  வணக்கம்
                </h1>
                <p className="font-mono text-xs font-black text-black tracking-widest uppercase mt-3">
                  PAGE 03 — MY ROOTS (Tamil • தமிழ்)
                </p>
              </div>

              <div className="mt-4 inline-block border-2 border-black bg-comic-red px-4 py-1 font-mono text-xs font-black text-white uppercase shadow-comic-sm">
                CULTURE &amp; HERITAGE
              </div>
            </motion.div>
          )}

          {/* STEP 4: MERGING PANELS */}
          {step === "merge" && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <CaptionBox chapterNumber="ISSUE #000" bgColor="violet">
                PANELS ASSEMBLING INTO A SINGLE PAGE...
              </CaptionBox>
              <div className="flex justify-center gap-2">
                <span className="h-4 w-12 border-2 border-black bg-comic-red shadow-comic-sm animate-pulse" />
                <span className="h-4 w-12 border-2 border-black bg-comic-yellow shadow-comic-sm animate-pulse" />
                <span className="h-4 w-12 border-2 border-black bg-comic-violet shadow-comic-sm animate-pulse" />
              </div>
            </motion.div>
          )}

          {/* STEP 5 & 6: HERO CHARACTER REVEAL */}
          {(step === "sketch" || step === "name") && (
            <motion.div
              key="panel-sketch"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex flex-col items-center justify-center p-6 text-center max-w-xl"
            >
              {/* COMIC HERO REVEAL */}
              <div className="relative mb-6 h-56 w-56 sm:h-64 sm:w-64 rounded-full border-4 border-black bg-black p-1 shadow-comic-xl overflow-hidden">
                <motion.div
                  initial={{ scale: 0.7, rotate: -20, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="relative h-full w-full rounded-full overflow-hidden"
                >
                  <Image
                    src="/media/deion-intro-circle.jpg"
                    alt="Deion Bernard — Comic Character"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </motion.div>
                <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none rounded-full" />
              </div>

              {step === "name" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-3"
                >
                  <div className="inline-block border-2 border-black bg-comic-red px-3 py-1 font-mono text-xs font-black uppercase text-white shadow-comic-sm">
                    ISSUE #001
                  </div>
                  <h2 className="font-comic text-5xl sm:text-7xl font-black tracking-wider text-black text-shadow-yellow">
                    DEION BERNARD
                  </h2>
                  <p className="font-mono text-sm sm:text-base font-black text-black uppercase tracking-wide">
                    &quot;MEET THE MAIN CHARACTER.&quot;
                  </p>
                  <p className="font-mono text-xs font-bold text-gray-700 uppercase tracking-widest">
                    COMPUTER SCIENCE GRADUATE • DEVELOPER • CREATOR
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* STEP 7: PAGE FLIP TRANSITION */}
          {step === "flip" && (
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 90, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="fixed inset-0 bg-comic-yellow flex items-center justify-center border-4 border-black"
            >
              <h1 className="font-comic text-6xl text-black">OPENING STINGER...</h1>
            </motion.div>
          )}

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
