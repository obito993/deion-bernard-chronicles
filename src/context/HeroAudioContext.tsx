"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";

// Easily editable timestamp (in seconds) for when trumpets enter the hero theme MP3
export const HERO_THEME_TRUMPET_TIME = 8.0;

interface HeroAudioContextType {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  currentTime: number;
  duration: number;
  showTrumpetBanner: boolean;
  playAudio: () => void;
  pauseAudio: () => void;
  togglePlay: () => void;
  toggleMute: () => void;
  setVolumeLevel: (val: number) => void;
  dismissTrumpetBanner: () => void;
}

const HeroAudioContext = createContext<HeroAudioContextType | null>(null);

export function HeroAudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showTrumpetBanner, setShowTrumpetBanner] = useState(false);
  const trumpetTriggeredRef = useRef(false);

  useEffect(() => {
    // Create single global audio instance pointing to existing MP3
    const audio = new Audio("/audio/hero-theme.mp3");
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    const handleTimeUpdate = () => {
      if (!audio) return;
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);

      // Check for Trumpet Hero moment
      if (
        audio.currentTime >= HERO_THEME_TRUMPET_TIME &&
        audio.currentTime < HERO_THEME_TRUMPET_TIME + 4 &&
        !trumpetTriggeredRef.current
      ) {
        trumpetTriggeredRef.current = true;
        setShowTrumpetBanner(true);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    // Attempt browser autoplay on initial load
    const tryAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        // Autoplay blocked by browser policy - allow user to click play manually
        setIsPlaying(false);
      }
    };

    tryAutoplay();

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      // Audio stops at current time, preserving position for resume
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const nextMuted = !isMuted;
      audioRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const setVolumeLevel = (val: number) => {
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
      if (val === 0) {
        setIsMuted(true);
        audioRef.current.muted = true;
      } else if (isMuted) {
        setIsMuted(false);
        audioRef.current.muted = false;
      }
    }
  };

  const dismissTrumpetBanner = () => {
    setShowTrumpetBanner(false);
  };

  return (
    <HeroAudioContext.Provider
      value={{
        isPlaying,
        isMuted,
        volume,
        currentTime,
        duration,
        showTrumpetBanner,
        playAudio,
        pauseAudio,
        togglePlay,
        toggleMute,
        setVolumeLevel,
        dismissTrumpetBanner,
      }}
    >
      {children}
    </HeroAudioContext.Provider>
  );
}

export function useHeroAudio() {
  const context = useContext(HeroAudioContext);
  if (!context) {
    throw new Error("useHeroAudio must be used within a HeroAudioProvider");
  }
  return context;
}
