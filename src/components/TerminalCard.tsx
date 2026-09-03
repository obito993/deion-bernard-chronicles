"use client";

import React, { useState } from "react";
import { Copy, Check, Play, Terminal } from "lucide-react";
import { terminalFacts } from "@/data/terminalFacts";
import ComicButton from "@/components/comic/ComicButton";
import Sticker from "@/components/comic/Sticker";

export default function TerminalCard() {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const commandText = "npx deion";

  const handleCopy = () => {
    navigator.clipboard.writeText(commandText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setCurrentFactIndex((prev) => (prev + 1) % terminalFacts.length);
      setIsRunning(false);
    }, 400);
  };

  return (
    <div className="relative w-full max-w-2xl rounded-2xl border-4 border-black bg-comic-dark text-comic-cream p-6 shadow-comic-xl font-mono">
      {/* TERMINAL HEADER BAR */}
      <div className="flex items-center justify-between border-b-3 border-black bg-black p-3 -mx-6 -mt-6 rounded-t-xl">
        <div className="flex items-center gap-2">
          <span className="h-3.5 w-3.5 rounded-full border border-black bg-comic-red" />
          <span className="h-3.5 w-3.5 rounded-full border border-black bg-comic-yellow" />
          <span className="h-3.5 w-3.5 rounded-full border border-black bg-comic-violet" />
          <span className="ml-2 flex items-center gap-1.5 font-sans font-black text-xs text-white uppercase tracking-widest">
            <Terminal className="h-4 w-4 text-comic-yellow" />
            DEION.EXE • CLI TERMINAL
          </span>
        </div>
        <Sticker text="NPX COMMAND" variant="yellow" rotate={-2} />
      </div>

      {/* TERMINAL CONTENT */}
      <div className="mt-4 space-y-4 text-xs sm:text-sm">
        {/* Command Line */}
        <div className="flex items-center justify-between rounded-lg border-2 border-black bg-black p-3 text-comic-cream shadow-comic-sm">
          <div className="flex items-center gap-2">
            <span className="text-comic-yellow font-bold">$</span>
            <span className="font-bold text-white text-base tracking-wide">{commandText}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 rounded border-2 border-black bg-comic-yellow px-2.5 py-1 text-[11px] font-black text-black shadow-comic-sm hover:bg-white active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-green-700" />
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>COPY</span>
                </>
              )}
            </button>

            <ComicButton onClick={handleRun} variant="red" size="sm">
              <Play className="h-3.5 w-3.5 fill-current" />
              <span>{isRunning ? "RUNNING..." : "RUN"}</span>
            </ComicButton>
          </div>
        </div>

        {/* Fact Terminal Output */}
        <div className="rounded-lg border-2 border-black bg-black/80 p-4 font-mono text-comic-cream shadow-comic-sm min-h-[90px] flex items-center">
          {isRunning ? (
            <p className="animate-pulse text-comic-yellow font-bold">
              [SYSTEM]: Fetching random fact from Deion&apos;s dossier...
            </p>
          ) : (
            <p className="text-white font-bold leading-relaxed">
              {terminalFacts[currentFactIndex]}
            </p>
          )}
        </div>

        {/* Action instruction */}
        <div className="flex justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-widest pt-1">
          <span>RUN COMMAND TO CYCLES FACTS</span>
          <span>FACT #{currentFactIndex + 1} OF {terminalFacts.length}</span>
        </div>
      </div>
    </div>
  );
}
