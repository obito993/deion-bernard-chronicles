"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, Disc, ExternalLink, Volume2, VolumeX, Music } from "lucide-react";
import Sticker from "@/components/comic/Sticker";
import ActionBurst from "@/components/comic/ActionBurst";

export interface SongTrack {
  id: string;
  number: string;
  title: string;
  artist: string;
  album: string;
  personalNote: string;
  image: string;
  previewUrl: string; // Licensed/legal preview audio stream URL
  fullStreamUrl: string;
  color: "violet" | "yellow" | "red";
}

interface ComicMusicPlayerProps {
  tracks: SongTrack[];
  onPlaybackChange?: (isPlaying: boolean) => void;
}

export default function ComicMusicPlayer({ tracks, onPlaybackChange }: ComicMusicPlayerProps) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(30);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    const updateTime = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      if (onPlaybackChange) onPlaybackChange(false);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [onPlaybackChange]);

  const togglePlay = (index?: number) => {
    if (index !== undefined && index !== currentTrackIndex) {
      setCurrentTrackIndex(index);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.src = tracks[index].previewUrl;
        audioRef.current.play().catch(() => setIsPlaying(false));
      }
      if (onPlaybackChange) onPlaybackChange(true);
      return;
    }

    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
      if (onPlaybackChange) onPlaybackChange(false);
    } else {
      if (audioRef.current) {
        if (!audioRef.current.src || audioRef.current.src !== currentTrack.previewUrl) {
          audioRef.current.src = currentTrack.previewUrl;
        }
        audioRef.current.play().catch(() => setIsPlaying(false));
        setIsPlaying(true);
        if (onPlaybackChange) onPlaybackChange(true);
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setProgress(val);
    if (audioRef.current && audioRef.current.duration) {
      audioRef.current.currentTime = (val / 100) * audioRef.current.duration;
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-2xl border-4 border-black bg-comic-violet text-black p-6 sm:p-8 shadow-comic-xl font-sans select-none bg-paper">
      
      {/* Hidden HTML5 Audio Element */}
      <audio ref={audioRef} preload="none" />

      {/* PLAYER HEADER BAR */}
      <div className="flex flex-wrap items-center justify-between border-b-3 border-black pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className={`h-12 w-12 rounded-full border-2 border-black bg-black flex items-center justify-center text-comic-yellow ${isPlaying ? "animate-spin-slow" : ""}`}>
            <Disc className="h-7 w-7" />
          </div>
          <div>
            <span className="font-mono text-[10px] font-black uppercase text-black bg-comic-yellow px-2 py-0.5 border border-black shadow-comic-sm">
              RETRO COMIC RADIO
            </span>
            <h3 className="font-comic text-3xl text-black leading-none mt-1">
              {isPlaying ? "🎵 NOW PLAYING PREVIEW!" : "RETRO SOUNDTRACK PLAYER"}
            </h3>
          </div>
        </div>

        <Sticker text={currentTrack.number} variant="red" rotate={-2} />
      </div>

      {/* MAIN PLAYER GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* LEFT: SPINNING ALBUM COVER */}
        <div className="md:col-span-5 relative flex justify-center">
          <div className="relative h-64 w-64 rounded-2xl border-4 border-black bg-black overflow-hidden shadow-comic-lg">
            <Image
              src={currentTrack.image}
              alt={currentTrack.title}
              fill
              className={`object-cover transition-all ${isPlaying ? "scale-105" : ""}`}
            />
            {isPlaying && (
              <div className="absolute top-3 right-3">
                <ActionBurst text="MUSIC!" color="yellow" size="sm" rotate={12} />
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: TRACK CONTROLS & INFO */}
        <div className="md:col-span-7 space-y-4">
          
          <div className="border-b-2 border-black pb-2">
            <span className="font-mono text-xs font-black uppercase text-gray-700">
              ARTIST: {currentTrack.artist} • {currentTrack.album}
            </span>
            <h2 className="font-comic text-4xl text-black leading-none mt-1">
              {currentTrack.title}
            </h2>
          </div>

          {/* PERSONAL VOCAL NOTE */}
          <div className="bg-white/90 border-2 border-black p-3 rounded shadow-comic-sm">
            <span className="font-mono text-[10px] font-black uppercase text-comic-red block">
              VOCAL PRACTICE NOTE:
            </span>
            <p className="font-mono text-xs font-bold text-black leading-relaxed">
              {currentTrack.personalNote}
            </p>
          </div>

          {/* PROGRESS BAR */}
          <div className="space-y-1 pt-1">
            <div className="flex justify-between font-mono text-[10px] font-black text-black">
              <span>{isPlaying ? "PREVIEW PLAYBACK" : "PAUSED"}</span>
              <span>30S SAMPLE</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              className="w-full accent-comic-red cursor-pointer"
            />
          </div>

          {/* CONTROL BUTTONS */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-3">
              <button
                onClick={() => togglePlay()}
                className="flex items-center gap-2 rounded-lg border-3 border-black bg-comic-yellow px-5 py-2.5 font-comic text-xl text-black shadow-comic hover:bg-white active:translate-x-1 active:translate-y-1 active:shadow-comic-pressed transition-all"
              >
                {isPlaying ? <Pause className="h-5 w-5 fill-current" /> : <Play className="h-5 w-5 fill-current" />}
                <span>{isPlaying ? "PAUSE PREVIEW" : "▶ PLAY PREVIEW"}</span>
              </button>

              <button
                onClick={toggleMute}
                className="rounded-lg border-2 border-black bg-white p-2.5 shadow-comic-sm hover:bg-comic-paper"
              >
                {isMuted ? <VolumeX className="h-5 w-5 text-comic-red" /> : <Volume2 className="h-5 w-5 text-black" />}
              </button>
            </div>

            <a href={currentTrack.fullStreamUrl} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-1.5 rounded-lg border-2 border-black bg-black px-4 py-2 font-mono text-xs font-black uppercase text-white shadow-comic-sm hover:bg-comic-red transition-all">
                <span>LISTEN FULL SONG ↗</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </button>
            </a>
          </div>

        </div>

      </div>

      {/* TRACK SELECTION LIST */}
      <div className="mt-8 pt-6 border-t-3 border-black">
        <span className="font-mono text-xs font-black uppercase text-black block mb-3">
          SELECT SOUNDTRACK TRACK (#1 - #5):
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2">
          {tracks.map((track, idx) => (
            <button
              key={track.id}
              onClick={() => togglePlay(idx)}
              className={`p-2.5 rounded-lg border-2 border-black text-left font-mono text-xs font-black transition-all ${
                idx === currentTrackIndex
                  ? "bg-comic-yellow shadow-comic-sm scale-[1.02]"
                  : "bg-white hover:bg-comic-paper"
              }`}
            >
              <span className="text-[10px] text-comic-red block">{track.number}</span>
              <span className="truncate block">{track.title}</span>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
