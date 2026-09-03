"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";

// Easily editable timestamp (in seconds) for when trumpets enter the hero theme MP3
export const HERO_THEME_TRUMPET_TIME = 8.0;

// All background soundtrack tracks
export const SOUNDTRACK_TRACKS = [
  { id: "hero-theme", label: "HERO THEME", src: "/audio/hero-theme.mp3", emoji: "🦸" },
  { id: "avengers-theme", label: "AVENGERS THEME", src: "/audio/avengers-theme.mp3", emoji: "⚡" },
];

interface HeroAudioContextType {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  currentTime: number;
  duration: number;
  showTrumpetBanner: boolean;
  currentTrackIndex: number;
  currentTrack: typeof SOUNDTRACK_TRACKS[number];
  playAudio: () => void;
  pauseAudio: () => void;
  togglePlay: () => void;
  toggleMute: () => void;
  setVolumeLevel: (val: number) => void;
  dismissTrumpetBanner: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  switchToTrack: (index: number) => void;
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
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const trumpetTriggeredRef = useRef(false);
  const wasPlayingRef = useRef(false);

  useEffect(() => {
    // Create single global audio instance pointing to hero theme (default)
    const audio = new Audio(SOUNDTRACK_TRACKS[0].src);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    const handleTimeUpdate = () => {
      if (!audio) return;
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);

      // Trumpet Hero Banner only for the hero theme (track 0)
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
        setIsPlaying(false);
        const handleUserInteraction = () => {
          if (audioRef.current && audioRef.current.paused) {
            audioRef.current
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => setIsPlaying(false));
          }
          window.removeEventListener("pointerdown", handleUserInteraction);
          window.removeEventListener("keydown", handleUserInteraction);
        };
        window.addEventListener("pointerdown", handleUserInteraction, { once: true });
        window.addEventListener("keydown", handleUserInteraction, { once: true });
      }
    };

    tryAutoplay();

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const switchToTrack = (index: number) => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    const wasPlaying = !audio.paused;

    // Pause + change src + reset
    audio.pause();
    const track = SOUNDTRACK_TRACKS[index];
    audio.src = track.src;
    audio.currentTime = 0;
    audio.loop = true;

    // Reset trumpet banner tracking for hero theme
    trumpetTriggeredRef.current = false;
    setShowTrumpetBanner(false);
    setCurrentTime(0);
    setDuration(0);

    setCurrentTrackIndex(index);

    if (wasPlaying) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      setIsPlaying(false);
    }
  };

  const nextTrack = () => {
    const next = (currentTrackIndex + 1) % SOUNDTRACK_TRACKS.length;
    switchToTrack(next);
  };

  const prevTrack = () => {
    const prev = (currentTrackIndex - 1 + SOUNDTRACK_TRACKS.length) % SOUNDTRACK_TRACKS.length;
    switchToTrack(prev);
  };

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
        currentTrackIndex,
        currentTrack: SOUNDTRACK_TRACKS[currentTrackIndex],
        playAudio,
        pauseAudio,
        togglePlay,
        toggleMute,
        setVolumeLevel,
        dismissTrumpetBanner,
        nextTrack,
        prevTrack,
        switchToTrack,
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
