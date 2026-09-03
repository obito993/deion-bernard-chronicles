"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useHeroAudio } from "@/context/HeroAudioContext";
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react";

export default function ComicMusicControl() {
  const pathname = usePathname();
  const { isPlaying, isMuted, volume, togglePlay, toggleMute, setVolumeLevel } = useHeroAudio();
  const [showVolume, setShowVolume] = useState(false);

  // Render ONLY on the homepage bottom-left corner
  if (pathname !== "/") return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 select-none font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="relative rounded-2xl border-3 border-black bg-comic-cream p-3 shadow-[5px_5px_0px_#000000] flex flex-col gap-2 min-w-[210px]"
        style={{ background: "#FFFDF5" }}
      >
        {/* COMIC LABEL & SOUNDWAVE EQUALIZER */}
        <div className="flex items-center justify-between border-b-2 border-black pb-2">
          <div className="flex items-center gap-1.5">
            <Music className="h-4 w-4 text-comic-red animate-bounce" />
            <span className="font-comic text-lg text-black leading-none">
              HERO THEME
            </span>
          </div>

          {/* ANIMATED EQUALIZER BARS WHEN PLAYING */}
          {isPlaying && (
            <div className="flex items-end gap-1 h-3.5">
              <motion.span
                animate={{ height: ["30%", "100%", "40%"] }}
                transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 bg-comic-red rounded-full"
              />
              <motion.span
                animate={{ height: ["70%", "20%", "90%"] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                className="w-1 bg-comic-yellow rounded-full border border-black"
              />
              <motion.span
                animate={{ height: ["40%", "90%", "30%"] }}
                transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="w-1 bg-comic-violet rounded-full"
              />
            </div>
          )}
        </div>

        {/* BUTTON CONTROLS */}
        <div className="flex items-center gap-2">
          {/* PLAY / PAUSE BUTTON */}
          <button
            onClick={togglePlay}
            className="flex-1 flex items-center justify-center gap-2 rounded-xl border-2 border-black bg-comic-yellow px-3 py-1.5 font-comic text-base text-black shadow-[3px_3px_0px_#000] hover:bg-white active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] transition-all"
          >
            {isPlaying ? (
              <>
                <Pause className="h-4 w-4 fill-black" />
                <span>PAUSE</span>
              </>
            ) : (
              <>
                <Play className="h-4 w-4 fill-black" />
                <span>PLAY</span>
              </>
            )}
          </button>

          {/* MUTE / UNMUTE BUTTON */}
          <button
            onClick={toggleMute}
            className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-black bg-white text-black shadow-[3px_3px_0px_#000] hover:bg-comic-violet active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] transition-all"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="h-4 w-4 text-comic-red" />
            ) : (
              <Volume2 className="h-4 w-4 text-black" />
            )}
          </button>
        </div>

        {/* OPTIONAL VOLUME SLIDER */}
        <div className="flex items-center gap-2 pt-1 border-t border-black/20">
          <span className="font-mono text-[10px] font-black text-gray-700 uppercase">VOL:</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={(e) => setVolumeLevel(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-comic-red"
          />
        </div>
      </motion.div>
    </div>
  );
}
