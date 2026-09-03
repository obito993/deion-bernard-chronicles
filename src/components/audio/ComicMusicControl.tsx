"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useHeroAudio, SOUNDTRACK_TRACKS } from "@/context/HeroAudioContext";
import { Play, Pause, Volume2, VolumeX, Music, SkipForward, SkipBack } from "lucide-react";

export default function ComicMusicControl() {
  const pathname = usePathname();
  const {
    isPlaying,
    isMuted,
    volume,
    togglePlay,
    toggleMute,
    setVolumeLevel,
    nextTrack,
    prevTrack,
    switchToTrack,
    currentTrackIndex,
    currentTrack,
  } = useHeroAudio();

  // Render ONLY on the homepage bottom-left corner
  if (pathname !== "/") return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 select-none font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="relative rounded-2xl border-3 border-black p-3 shadow-[5px_5px_0px_#000000] flex flex-col gap-2 min-w-[240px]"
        style={{ background: "#FFFDF5" }}
      >
        {/* COMIC LABEL & CURRENT TRACK NAME */}
        <div className="flex items-center justify-between border-b-2 border-black pb-2">
          <div className="flex items-center gap-1.5">
            <Music className="h-4 w-4 text-comic-red animate-bounce" />
            <div className="flex flex-col leading-none">
              <span className="font-mono text-[9px] font-black uppercase text-gray-500">NOW PLAYING</span>
              <span className="font-comic text-base text-black leading-tight">
                {currentTrack.emoji} {currentTrack.label}
              </span>
            </div>
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

        {/* TRACK INDICATOR DOTS — CLICK TO SWITCH */}
        <div className="flex items-center justify-center gap-3">
          {SOUNDTRACK_TRACKS.map((track, i) => (
            <button
              key={track.id}
              onClick={() => switchToTrack(i)}
              title={track.label}
              className="flex items-center gap-1 group"
            >
              <motion.span
                animate={{ scale: i === currentTrackIndex ? 1.4 : 1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className={`inline-block w-2.5 h-2.5 rounded-full border-2 border-black transition-colors ${
                  i === currentTrackIndex
                    ? "bg-comic-yellow"
                    : "bg-gray-300 group-hover:bg-comic-violet"
                }`}
              />
              <span className={`font-mono text-[8px] font-black uppercase hidden sm:block ${
                i === currentTrackIndex ? "text-black" : "text-gray-400"
              }`}>
                {track.label.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>

        {/* PREV / PLAY-PAUSE / NEXT / MUTE ROW */}
        <div className="flex items-center gap-2">
          {/* PREV TRACK */}
          <button
            onClick={prevTrack}
            className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-black bg-white text-black shadow-[3px_3px_0px_#000] hover:bg-comic-violet active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] transition-all"
            aria-label="Previous Track"
          >
            <SkipBack className="h-4 w-4" />
          </button>

          {/* PLAY / PAUSE */}
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

          {/* NEXT TRACK */}
          <button
            onClick={nextTrack}
            className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-black bg-white text-black shadow-[3px_3px_0px_#000] hover:bg-comic-violet active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] transition-all"
            aria-label="Next Track"
          >
            <SkipForward className="h-4 w-4" />
          </button>

          {/* MUTE / UNMUTE */}
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

        {/* VOLUME SLIDER */}
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
