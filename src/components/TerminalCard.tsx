"use client";

import React, { useState } from "react";
import { Copy, Check, Terminal as TerminalIcon, RefreshCw } from "lucide-react";
import { terminalFacts, DeionFact } from "@/data/terminalFacts";
import { motion, AnimatePresence } from "framer-motion";

export default function TerminalCard() {
  const [copied, setCopied] = useState(false);
  const [factIndex, setFactIndex] = useState(0);
  const [history, setHistory] = useState<DeionFact[]>([terminalFacts[0]]);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx deion");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunNext = () => {
    const nextIdx = (factIndex + 1) % terminalFacts.length;
    setFactIndex(nextIdx);
    setHistory((prev) => [...prev.slice(-4), terminalFacts[nextIdx]]);
  };

  const currentFact = terminalFacts[factIndex];

  return (
    <div className="w-full max-w-2xl rounded-xl border border-white/15 bg-black/90 p-1 shadow-2xl backdrop-blur-xl">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between rounded-t-lg bg-surface-card px-4 py-2.5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-2 font-mono text-xs text-gray-400 font-medium flex items-center gap-1.5">
            <TerminalIcon className="h-3.5 w-3.5 text-brand-orange" />
            bash — npx deion
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleRunNext}
            className="flex items-center gap-1 rounded bg-white/5 px-2.5 py-1 font-mono text-[11px] text-gray-300 transition-all hover:bg-white/10 hover:text-white"
            title="Run command again"
          >
            <RefreshCw className="h-3 w-3 text-brand-orange" />
            <span>RUN AGAIN</span>
          </button>

          <button
            onClick={handleCopy}
            className="relative flex items-center gap-1.5 rounded border border-brand-orange/40 bg-brand-orange/10 px-3 py-1 font-mono text-[11px] font-bold text-brand-orange transition-all hover:bg-brand-orange hover:text-black shadow-[0_0_10px_rgba(255,85,0,0.2)]"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-green-400" />
                <span className="text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>COPY COMMAND</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-gray-200 space-y-4 overflow-x-auto min-h-[220px]">
        {/* Command Line */}
        <div className="flex items-center gap-2 text-brand-orange font-bold">
          <span className="text-green-400">deion@portfolio:~$</span>
          <span className="text-white">npx deion</span>
          <span className="inline-block h-4 w-2 bg-brand-orange animate-pulse" />
        </div>

        {/* ASCII Header Banner */}
        <div className="text-brand-orange text-[11px] sm:text-xs leading-tight font-bold select-none py-1">
          {`╭──────────────────────────────────────────────────╮
│                 DEION BERNARD                    │
│   Computer Science Graduate • Developer • AI     │
╰──────────────────────────────────────────────────╯`}
        </div>

        {/* Dynamic Fact Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={factIndex}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="rounded-lg border border-brand-orange/30 bg-surface-card/80 p-3 sm:p-4 space-y-2"
          >
            <div className="flex items-center gap-2 text-brand-orange font-semibold text-xs tracking-wider">
              <span>{currentFact.icon}</span>
              <span>✦ [{currentFact.category.toUpperCase()}]</span>
              <span className="text-gray-300">— {currentFact.title}</span>
            </div>
            <p className="text-gray-300 pl-6 leading-relaxed font-sans text-sm">
              {currentFact.detail}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="pt-2 text-[11px] text-gray-400 flex items-center justify-between border-t border-white/5">
          <span>Run <code className="text-brand-orange font-bold">npx deion</code> again for another fact ({factIndex + 1}/{terminalFacts.length})</span>
          <span className="hidden sm:inline text-gray-400">npm v1.0.0</span>
        </div>
      </div>
    </div>
  );
}
