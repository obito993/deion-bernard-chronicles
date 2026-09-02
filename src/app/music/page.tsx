"use client";

import React, { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VisualThumbnail from "@/components/VisualThumbnails";
import { musicData, SongItem } from "@/data/musicData";
import { Music, Disc, ExternalLink, Play, Pause, Volume2, VolumeX, Sparkles, Youtube, SkipForward, SkipBack } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicPage() {
  const [currentSong, setCurrentSong] = useState<SongItem>(musicData[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.8);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Handle Play/Pause toggle
  const handleTogglePlay = (song?: SongItem) => {
    const targetSong = song || currentSong;

    if (song && song.id !== currentSong.id) {
      setCurrentSong(song);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.src = song.audioUrl;
        audioRef.current.play().catch((err) => console.log("Audio play error:", err));
      }
    } else {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play().catch((err) => console.log("Audio play error:", err));
        setIsPlaying(true);
      }
    }
  };

  // Audio Time Update Listener
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration || 0;
      setProgress(current);
      setDuration(total);
    }
  };

  // Seek bar handler
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
      setProgress(seekTime);
    }
  };

  // Volume handler
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
      setIsMuted(newVol === 0);
    }
  };

  // Format time (MM:SS)
  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Next Track
  const handleNextTrack = () => {
    const currentIndex = musicData.findIndex((s) => s.id === currentSong.id);
    const nextSong = musicData[(currentIndex + 1) % musicData.length];
    handleTogglePlay(nextSong);
  };

  // Previous Track
  const handlePrevTrack = () => {
    const currentIndex = musicData.findIndex((s) => s.id === currentSong.id);
    const prevSong = musicData[(currentIndex - 1 + musicData.length) % musicData.length];
    handleTogglePlay(prevSong);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-orange selection:text-black pb-28">
      <Navbar />

      {/* HTML5 AUDIO ELEMENT */}
      <audio
        ref={audioRef}
        src={currentSong.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleNextTrack}
        preload="metadata"
      />

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
        {/* PAGE HEADER */}
        <section className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-4 py-1.5 font-mono text-xs font-bold text-brand-orange shadow-[0_0_20px_rgba(255,85,0,0.3)]">
            <Music className="h-4 w-4" />
            <span>INTERACTIVE AUDIO PLAYER & VOCAL SELECTIONS</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-black text-white">
            MY FAVORITE SONGS
          </h1>

          <p className="font-mono text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
            Click <strong className="text-brand-orange">&quot;LISTEN PREVIEW&quot;</strong> on any song to listen directly! As a Tenor &amp; Bass vocalist who won 2nd prize in Western Music competitions, these iconic tracks inspire Deion&apos;s vocal style.
          </p>
          <div className="h-0.5 w-24 bg-brand-orange mx-auto shadow-[0_0_10px_#FF5500]" />
        </section>

        {/* 2-COLUMN VERTICAL SONGS LIST */}
        <section className="space-y-12">
          {musicData.map((song, index) => {
            const isCurrentTrack = currentSong.id === song.id;
            const isCurrentPlaying = isCurrentTrack && isPlaying;
            const isHovered = activeHoverId === song.id;

            return (
              <motion.article
                key={song.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setActiveHoverId(song.id)}
                onMouseLeave={() => setActiveHoverId(null)}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-2xl border p-6 sm:p-8 transition-all duration-300 shadow-2xl ${
                  isCurrentPlaying
                    ? "border-brand-orange bg-gradient-to-br from-surface-card via-black to-brand-orange/20 shadow-[0_0_40px_rgba(255,85,0,0.4)]"
                    : isHovered
                    ? "border-brand-orange/60 bg-surface-card/90 shadow-[0_0_25px_rgba(255,85,0,0.2)]"
                    : "border-white/15 bg-surface-card"
                }`}
              >
                {/* LEFT COLUMN: PERFECTLY CROPPED ALBUM COVER THUMBNAIL WITH PLAY OVERLAY */}
                <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto min-h-[260px] w-full overflow-hidden rounded-xl bg-black border border-white/10 group">
                  {/* REAL ALBUM COVER IMAGE */}
                  <VisualThumbnail type={song.coverVisual} className="h-full w-full" />

                  {/* PLAY OVERLAY BUTTON */}
                  <div
                    onClick={() => handleTogglePlay(song)}
                    className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-opacity duration-300 opacity-90 group-hover:opacity-100"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`flex h-16 w-16 items-center justify-center rounded-full border-2 transition-all ${
                        isCurrentPlaying
                          ? "border-brand-orange bg-brand-orange text-black shadow-[0_0_30px_#FF5500]"
                          : "border-white bg-black/80 text-white hover:border-brand-orange hover:text-brand-orange"
                      }`}
                    >
                      {isCurrentPlaying ? (
                        <Pause className="h-8 w-8 fill-current" />
                      ) : (
                        <Play className="h-8 w-8 fill-current ml-1" />
                      )}
                    </motion.button>
                    <span className="mt-3 font-mono text-xs font-bold text-white tracking-widest uppercase bg-black/70 px-3 py-1 rounded-full border border-white/20">
                      {isCurrentPlaying ? "NOW PLAYING" : "PLAY PREVIEW"}
                    </span>
                  </div>
                </div>

                {/* RIGHT COLUMN: SONG DETAILS & CONTROLS */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-brand-orange tracking-widest">
                        {song.number} — TRACK SELECTION
                      </span>
                      <span className="font-mono text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                        RELEASE: {song.year}
                      </span>
                    </div>

                    <h2
                      className={`font-display text-2xl sm:text-4xl font-extrabold transition-colors ${
                        isCurrentPlaying ? "text-brand-orange" : "text-white"
                      }`}
                    >
                      {song.title}
                    </h2>

                    <p className="font-mono text-sm text-gray-200 font-bold">
                      ARTIST: <span className="text-white">{song.artist}</span>
                    </p>
                    <p className="font-mono text-xs text-gray-400">
                      ALBUM: {song.album}
                    </p>

                    {/* ANIMATED WAVEFORM VISUALIZER */}
                    <div className="flex items-center gap-1.5 h-7 pt-2">
                      {[30, 70, 45, 90, 60, 100, 40, 80, 55, 95, 50, 75, 35, 85, 65, 40, 90, 60].map((val, i) => (
                        <div
                          key={i}
                          className={`w-1 rounded-t transition-all duration-300 ${
                            isCurrentPlaying ? "bg-brand-orange animate-pulse" : "bg-gray-700"
                          }`}
                          style={{
                            height: isCurrentPlaying ? `${val}%` : "30%",
                            animationDelay: `${i * 0.08}s`,
                          }}
                        />
                      ))}
                      <span className="ml-2 font-mono text-[10px] text-brand-orange font-bold uppercase">
                        {isCurrentPlaying ? "PLAYING AUDIO PREVIEW" : "LISTEN READY"}
                      </span>
                    </div>
                  </div>

                  {/* PERSONAL NOTE */}
                  <div className="rounded-xl border border-white/10 bg-black/60 p-4 space-y-1.5">
                    <h4 className="font-mono text-xs font-bold text-brand-orange tracking-widest uppercase flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5" />
                      DEION&apos;S VOCAL &amp; PERSONAL NOTE
                    </h4>
                    <p className="font-mono text-xs text-gray-300 leading-relaxed italic">
                      &quot;{song.personalNote}&quot;
                    </p>
                  </div>

                  {/* LISTEN BUTTONS (PLAY PREVIEW, SPOTIFY, YOUTUBE) */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => handleTogglePlay(song)}
                      className={`flex items-center gap-2 rounded-full border px-6 py-2.5 font-mono text-xs font-bold transition-all shadow-lg ${
                        isCurrentPlaying
                          ? "bg-brand-orange text-black border-brand-orange shadow-[0_0_20px_#FF5500]"
                          : "bg-brand-orange/20 text-brand-orange border-brand-orange/50 hover:bg-brand-orange hover:text-black"
                      }`}
                    >
                      {isCurrentPlaying ? <Pause className="h-4 w-4 fill-current" /> : <Play className="h-4 w-4 fill-current ml-0.5" />}
                      <span>{isCurrentPlaying ? "PAUSE PREVIEW" : "LISTEN PREVIEW"}</span>
                    </button>

                    <a
                      href={song.spotifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 font-mono text-xs font-bold text-gray-200 hover:text-white hover:border-[#1DB954] hover:bg-[#1DB954]/20 transition-all"
                    >
                      <Volume2 className="h-4 w-4 text-[#1DB954]" />
                      <span>FULL SPOTIFY TRACK</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>

                    <a
                      href={song.youtubeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 font-mono text-xs font-bold text-gray-200 hover:text-white hover:border-red-500 hover:bg-red-500/20 transition-all"
                    >
                      <Youtube className="h-4 w-4 text-red-500" />
                      <span>YOUTUBE</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </section>
      </main>

      {/* ========================================================================= */}
      {/* FIXED BOTTOM FLOATING AUDIO PLAYER DOCK                                   */}
      {/* ========================================================================= */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/15 bg-black/95 px-4 py-3 backdrop-blur-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.9)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          {/* TRACK INFO */}
          <div className="flex items-center gap-3 w-1/4">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-brand-orange">
              <VisualThumbnail type={currentSong.coverVisual} className="h-full w-full" />
            </div>
            <div className="hidden sm:block truncate">
              <span className="font-mono text-[9px] text-brand-orange font-bold uppercase tracking-widest">
                {isPlaying ? "PLAYING NOW" : "PAUSED"}
              </span>
              <p className="font-display text-sm font-bold text-white truncate">{currentSong.title}</p>
              <p className="font-mono text-[11px] text-gray-400 truncate">{currentSong.artist}</p>
            </div>
          </div>

          {/* PLAYBACK CONTROLS & SEEK BAR */}
          <div className="flex flex-col items-center justify-center gap-1.5 w-2/4">
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrevTrack}
                className="text-gray-400 hover:text-white transition-colors"
                title="Previous Track"
              >
                <SkipBack className="h-5 w-5" />
              </button>

              <button
                onClick={() => handleTogglePlay()}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-orange text-black shadow-[0_0_20px_rgba(255,85,0,0.6)] hover:scale-105 transition-transform"
              >
                {isPlaying ? <Pause className="h-5 w-5 fill-current" /> : <Play className="h-5 w-5 fill-current ml-0.5" />}
              </button>

              <button
                onClick={handleNextTrack}
                className="text-gray-400 hover:text-white transition-colors"
                title="Next Track"
              >
                <SkipForward className="h-5 w-5" />
              </button>
            </div>

            {/* SEEK BAR */}
            <div className="flex items-center gap-2 w-full max-w-md">
              <span className="font-mono text-[10px] text-gray-400">{formatTime(progress)}</span>
              <input
                type="range"
                min="0"
                max={duration || 30}
                step="0.1"
                value={progress}
                onChange={handleSeek}
                className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-brand-orange"
              />
              <span className="font-mono text-[10px] text-gray-400">{formatTime(duration || 30)}</span>
            </div>
          </div>

          {/* VOLUME CONTROL */}
          <div className="flex items-center justify-end gap-3 w-1/4">
            <button
              onClick={() => {
                if (audioRef.current) {
                  audioRef.current.muted = !isMuted;
                  setIsMuted(!isMuted);
                }
              }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {isMuted ? <VolumeX className="h-5 w-5 text-red-500" /> : <Volume2 className="h-5 w-5 text-brand-orange" />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-20 h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-brand-orange hidden sm:block"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
