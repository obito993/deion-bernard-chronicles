"use client";

import React from "react";
import { motion } from "framer-motion";
import SpeechBubble from "@/components/comic/SpeechBubble";
import { ThumbsUp } from "lucide-react";

export default function ContactHeroCharacter({ submitted }: { submitted?: boolean }) {
  return (
    <div className="relative inline-block my-4">
      <motion.div
        animate={submitted ? { scale: [1, 1.2, 1] } : {}}
        className="relative flex flex-col items-center select-none"
      >
        {submitted && (
          <div className="mb-2">
            <SpeechBubble position="bottom-left" bgColor="yellow" speaker="TEAM-UP HERO">
              THUMBS UP! MESSAGE SENT!
            </SpeechBubble>
          </div>
        )}

        <div className="flex items-center gap-2 rounded-xl border-3 border-black bg-comic-red px-4 py-2 text-white shadow-comic-lg">
          <ThumbsUp className="h-6 w-6 text-comic-yellow" />
          <span className="font-comic text-xl">TEAM-UP HERO</span>
        </div>
      </motion.div>
    </div>
  );
}
