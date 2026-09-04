"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Copy, Check, Play, RotateCcw, ArrowLeft, Trash2 } from "lucide-react";
import Sticker from "@/components/comic/Sticker";
import ActionBurst from "@/components/comic/ActionBurst";

interface ComicCliExecutableExperimentProps {
  onBack: () => void;
}

const DEION_FACTS = [
  "Deion sings Tenor & Bass in the Patrician College choir (The Shamrocks ensemble)!",
  "Deion built an AI Seating Allocation system and an AI Music Learning platform (Virtuoso AI)!",
  "Deion speaks English (Native), Tamil (Known), and French (Conversational)!",
  "Deion maintains an 8.5/10 CGPA in Computer Science at Patrician College (2023 - 2026)!",
  "Deion designed a full custom Marvel & DC comic book portfolio engine powered by Next.js & Tailwind CSS!",
];

export default function ComicCliExecutableExperiment({ onBack }: ComicCliExecutableExperimentProps) {
  const [logs, setLogs] = useState<string[]>([
    "Welcome to DEION.EXE Interactive Terminal [v1.0.0]",
    "Type 'npx deion' or press RUN below to fetch a random comic fact!",
  ]);
  const [inputVal, setInputVal] = useState("npx deion");
  const [isExecuting, setIsExecuting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [reactionText, setReactionText] = useState("SYSTEM READY!");
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    setIsExecuting(true);
    setReactionText("EXECUTING...");

    setLogs((prev) => [...prev, `$ ${cmdStr}`]);

    if (trimmed === "clear" || trimmed === "npx deion --clear") {
      setLogs([]);
      setIsExecuting(false);
      setReactionText("CLEARED!");
      return;
    }

    setTimeout(() => {
      setLogs((prev) => [...prev, "> INITIALIZING DEION.EXE..."]);
    }, 200);

    setTimeout(() => {
      setLogs((prev) => [...prev, "> COMIC MODE: ON"]);
    }, 400);

    setTimeout(() => {
      const randomFact = DEION_FACTS[Math.floor(Math.random() * DEION_FACTS.length)];
      setLogs((prev) => [
        ...prev,
        "> FACT FOUND!",
        `\n┌─────────────────────────────────────────────────────────────┐`,
        `│  🦸 DEION BERNARD CHRONICLES — CHARACTER DOSSIER            │`,
        `├─────────────────────────────────────────────────────────────┤`,
        `│  "${randomFact}"`,
        `└─────────────────────────────────────────────────────────────┘\n`,
      ]);
      setIsExecuting(false);
      setReactionText("FACT FOUND!");
    }, 800);
  };

  const handleRun = () => {
    executeCommand(inputVal || "npx deion");
  };

  const handleCopyCmd = () => {
    navigator.clipboard.writeText("npx deion");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setLogs(["Terminal cleared. Ready for next command."]);
    setReactionText("CLEARED!");
  };

  return (
    <div className="space-y-6 font-sans">
      {/* HEADER BAR */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-4 border-black pb-4 bg-comic-cream p-4 rounded-xl shadow-comic-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-2 rounded-lg border-2 border-black bg-white px-4 py-2 font-mono text-xs font-black uppercase text-black shadow-comic-sm hover:bg-comic-red hover:text-white transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>← BACK TO CREATIVE SPACE</span>
          </button>
          <div>
            <Sticker text="CLI EXPERIMENT" variant="yellow" rotate={-1} />
            <h2 className="font-comic text-3xl sm:text-4xl text-black leading-none mt-1">
              COMIC CLI EXECUTABLE
            </h2>
          </div>
        </div>

        <ActionBurst text={reactionText} color="red" size="sm" rotate={-4} />
      </div>

      {/* TERMINAL CONTAINER */}
      <div className="max-w-4xl mx-auto rounded-2xl border-4 border-black bg-comic-dark text-white p-6 shadow-comic-xl font-mono text-xs space-y-4">
        
        {/* TERMINAL TOP TITLE BAR */}
        <div className="flex items-center justify-between border-b-2 border-comic-red pb-3">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500 border border-black" />
            <div className="h-3 w-3 rounded-full bg-yellow-500 border border-black" />
            <div className="h-3 w-3 rounded-full bg-green-500 border border-black" />
            <span className="ml-2 text-comic-yellow font-bold uppercase tracking-widest text-[11px]">
              DEION.EXE — NODE CLI EMULATOR
            </span>
          </div>

          <button
            onClick={handleCopyCmd}
            className="flex items-center gap-1 rounded border border-white bg-black px-3 py-1 text-[10px] font-black uppercase text-comic-yellow hover:bg-comic-red hover:text-white transition-all"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "COPIED!" : "COPY $ npx deion"}</span>
          </button>
        </div>

        {/* TERMINAL LOG OUTPUT WINDOW */}
        <div className="h-80 overflow-y-auto bg-black p-4 rounded-xl border-2 border-black/80 font-mono text-xs text-green-400 space-y-2 leading-relaxed shadow-inner">
          {logs.map((log, i) => (
            <div key={i} className="whitespace-pre-wrap">
              {log}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* PROMPT INPUT LINE */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRun();
          }}
          className="flex items-center gap-2 bg-black border-2 border-white/20 p-2 rounded-xl"
        >
          <span className="text-comic-yellow font-black">$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none"
            placeholder="Type 'npx deion'..."
          />
          <button
            type="submit"
            disabled={isExecuting}
            className="flex items-center gap-1.5 rounded-lg border border-black bg-comic-yellow px-4 py-1.5 font-comic text-base text-black hover:bg-white transition-all disabled:opacity-50"
          >
            <Play className="h-4 w-4 fill-current" />
            <span>RUN</span>
          </button>
        </form>

        {/* QUICK CONTROL BUTTONS */}
        <div className="flex flex-wrap gap-3 pt-2 border-t border-white/10">
          <button
            onClick={handleRun}
            disabled={isExecuting}
            className="flex items-center gap-2 rounded-lg border-2 border-white/20 bg-comic-red px-4 py-2 font-mono text-xs font-black text-white hover:bg-white hover:text-black transition-all"
          >
            <Play className="h-4 w-4" /> RUN $ npx deion
          </button>

          <button
            onClick={handleClear}
            className="flex items-center gap-2 rounded-lg border-2 border-white/20 bg-black px-4 py-2 font-mono text-xs font-black text-gray-300 hover:bg-comic-violet hover:text-black transition-all"
          >
            <Trash2 className="h-4 w-4" /> CLEAR TERMINAL
          </button>

          <button
            onClick={handleRun}
            className="flex items-center gap-2 rounded-lg border-2 border-white/20 bg-black px-4 py-2 font-mono text-xs font-black text-comic-yellow hover:bg-white hover:text-black transition-all"
          >
            <RotateCcw className="h-4 w-4" /> RERUN EXPERIMENT
          </button>
        </div>

      </div>
    </div>
  );
}
