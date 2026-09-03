"use client";

import React, { useState } from "react";
import Sticker from "@/components/comic/Sticker";
import ActionBurst from "@/components/comic/ActionBurst";
import MusicHeroCharacter from "@/components/characters/music-hero-character";
import ComicMusicPlayer, { SongTrack } from "@/components/music/comic-music-player";
import { InfiniteMovingCards, InfiniteContentCard } from "@/components/ui/infinite-moving-cards";
import { musicData } from "@/data/musicData";

export default function MusicPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Official iTunes high-quality sample preview streams for each track
  const songTracks: SongTrack[] = [
    {
      ...musicData[0],
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/11/23/69/112369f6-6645-e9ec-8019-e06e3efb160d/mzaf_14601922769880394709.plus.aac.p.m4a",
      fullStreamUrl: musicData[0].searchUrl,
    },
    {
      ...musicData[1],
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c7/ee/8b/c7ee8b9f-d163-f583-1d95-0e480255a28b/mzaf_16782687670938493222.plus.aac.p.m4a",
      fullStreamUrl: musicData[1].searchUrl,
    },
    {
      ...musicData[2],
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f8/c5/6b/f8c56ba6-b52a-4cce-3234-f225da838e7d/mzaf_3847569261753735800.plus.aac.p.m4a",
      fullStreamUrl: musicData[2].searchUrl,
    },
    {
      ...musicData[3],
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/12/cd/f8/12cdf81c-f174-cd45-9a56-9b2388df9e63/mzaf_2642298639219088626.plus.aac.p.m4a",
      fullStreamUrl: musicData[3].searchUrl,
    },
    {
      ...musicData[4],
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/12/d8/f6/12d8f6c8-007d-b8d9-5026-192dbdafb5ea/mzaf_5588629988674423957.plus.aac.p.m4a",
      fullStreamUrl: musicData[4].searchUrl,
    },
  ];

  // Transform music into InfiniteContentCard items
  const musicCards: InfiniteContentCard[] = musicData.map((m) => ({
    id: m.id,
    title: m.title,
    subtitle: `${m.artist} • ${m.album}`,
    image: m.image,
    category: m.number,
    description: m.personalNote,
    href: "#music-player",
    badge: "SOUNDTRACK",
    color: m.color,
  }));

  return (
    <div className="min-h-screen bg-comic-cream text-black pb-24 font-sans relative overflow-hidden">
      {/* Soundwave background pattern overlay */}
      <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />

      {/* HEADER BAR */}
      <section className="relative border-b-4 border-black bg-comic-violet py-8 px-4 shadow-comic-sm">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Sticker text="CHAPTER 06" variant="yellow" rotate={-2} />
              <span className="font-mono text-xs font-black uppercase tracking-widest text-black">
                RETRO MUSIC ISSUE
              </span>
            </div>
            <h1 className="font-comic text-6xl sm:text-8xl font-black tracking-wider text-black text-shadow-yellow uppercase mt-1">
              MY SOUNDTRACK
            </h1>
            <p className="font-mono text-xs sm:text-sm font-bold text-black border-l-4 border-black pl-3 mt-1">
              &quot;The songs that live in my head. Classic vocal harmonies and timeless ballads.&quot;
            </p>
          </div>
          <div className="flex items-center gap-4">
            <MusicHeroCharacter isPlaying={isPlaying} />
            <ActionBurst text="MUSIC ISSUE!" color="yellow" size="md" rotate={6} />
          </div>
        </div>
      </section>

      {/* INFINITE MOVING MUSIC CARDS SECTION */}
      <section className="py-12 border-b-4 border-black bg-comic-violet space-y-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Sticker text="RETRO SOUNDTRACK STRIP" variant="yellow" rotate={-1} />
          <span className="font-mono text-xs font-black text-black uppercase">
            AUTOMATICALLY MOVING MUSIC STRIP (RIGHT → SLOW)
          </span>
        </div>

        <InfiniteMovingCards items={musicCards} direction="right" speed="slow" />
      </section>

      {/* RETRO MUSIC PLAYER CONTAINER */}
      <div id="music-player" className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 space-y-12">
        <ComicMusicPlayer tracks={songTracks} onPlaybackChange={(playing) => setIsPlaying(playing)} />
      </div>
    </div>
  );
}
