"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Sparkles,
  ArrowLeft,
  Copy,
  Check,
  RotateCcw,
  Play,
  Terminal,
  Zap,
  Layers,
  HelpCircle
} from "lucide-react";
import Sticker from "@/components/comic/Sticker";
import ActionBurst from "@/components/comic/ActionBurst";

interface AiLogicLabExperimentProps {
  onBack: () => void;
}

const TEMPLATE_PROMPTS = [
  {
    id: "hero-bio",
    label: "🦸 HERO BACKSTORY GENERATOR",
    prompt: "Generate a dramatic comic book origin story for a tech hero named 'Quantum Deion' with coding superpower and armor.",
    type: "creative",
  },
  {
    id: "code-refactor",
    label: "⚡ ZERO-SHOT CODE REFACTOR",
    prompt: "Refactor a high-frequency Web Audio FFT analyzer in TypeScript for zero memory allocations and 60fps rendering.",
    type: "logic",
  },
  {
    id: "comic-dialogue",
    label: "🗯️ COMIC DIALOGUE POLISHER",
    prompt: "Transform standard technical resume bullet points into energetic silver-age comic book speech bubbles!",
    type: "structured",
  },
];

export default function AiLogicLabExperiment({ onBack }: AiLogicLabExperimentProps) {
  const [activeTab, setActiveTab] = useState<"prompt" | "logic" | "structured">("prompt");
  const [userPrompt, setUserPrompt] = useState(TEMPLATE_PROMPTS[0].prompt);
  const [temperature, setTemperature] = useState(0.7);
  const [isProcessing, setIsProcessing] = useState(false);
  const [reactionText, setReactionText] = useState("BRAIN POWER!");
  const [resultOutput, setResultOutput] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleRunExperiment = () => {
    setIsProcessing(true);
    setResultOutput(null);

    const reactionSteps = ["THINKING...", "PROCESSING!", "BRAIN POWER!"];
    let step = 0;
    const interval = setInterval(() => {
      setReactionText(reactionSteps[step % reactionSteps.length]);
      step++;
    }, 400);

    setTimeout(() => {
      clearInterval(interval);
      setIsProcessing(false);
      setReactionText("RESULT!");

      if (activeTab === "prompt") {
        setResultOutput(
          `[COMIC AI GENERATOR OUTPUT — TEMP: ${temperature}]\n\n` +
          `🦸 CHARACTER: Quantum Deion\n` +
          `⚡ ORIGIN STORY: Born in the digital realm of Patrician College labs, Deion unlocked the secrets of TypeScript algorithms and Web Audio frequency synthesis!\n\n` +
          `🗯️ SPEECH BUBBLE: "By the power of clean code and zero-shot reasoning, no bug shall withstand my comic logic!"\n\n` +
          `✦ SPECIAL ABILITY: 60FPS Reactive UI Rendering & Halftone Vector Manipulation`
        );
      } else if (activeTab === "logic") {
        setResultOutput(
          `[LOGIC LAB EVALUATION COMPLETE]\n\n` +
          `✓ ALGORITHM: FFT Audio Spectrum & Zero-Allocation Buffer\n` +
          `✓ TIME COMPLEXITY: O(N log N)\n` +
          `✓ MEMORY USAGE: 0kb allocations / frame\n\n` +
          `> LOGIC VERIFICATION PASSED 100%. READY FOR PRODUCTION DEPLOYMENT.`
        );
      } else {
        setResultOutput(
          JSON.stringify(
            {
              experiment: "Zero-Shot Structured Comic Schema",
              heroName: "Deion Bernard",
              role: "Full-Stack AI & Frontend Engineer",
              skills: ["Next.js", "TypeScript", "Tailwind CSS", "Web Audio API", "Pillow Python"],
              activeProjects: 4,
              status: "READY_FOR_TEAMUP",
            },
            null,
            2
          )
        );
      }
    }, 1500);
  };

  const handleCopy = () => {
    if (!resultOutput) return;
    navigator.clipboard.writeText(resultOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setUserPrompt(TEMPLATE_PROMPTS[0].prompt);
    setResultOutput(null);
    setReactionText("BRAIN POWER!");
  };

  return (
    <div className="space-y-6 font-sans">
      {/* HEADER BAR */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-4 border-black pb-4 bg-comic-violet p-4 rounded-xl shadow-comic-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-2 rounded-lg border-2 border-black bg-white px-4 py-2 font-mono text-xs font-black uppercase text-black shadow-comic-sm hover:bg-comic-red hover:text-white transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>← BACK TO CREATIVE SPACE</span>
          </button>
          <div>
            <Sticker text="AI EXPERIMENT" variant="yellow" rotate={-1} />
            <h2 className="font-comic text-3xl sm:text-4xl text-black leading-none mt-1">
              AI PROMPT & LOGIC LAB
            </h2>
          </div>
        </div>

        <ActionBurst text={reactionText} color="yellow" size="sm" rotate={-6} />
      </div>

      {/* LAB NAVIGATION TABS */}
      <div className="flex flex-wrap gap-3 font-mono text-xs font-black">
        <button
          onClick={() => { setActiveTab("prompt"); handleReset(); }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border-3 border-black shadow-comic transition-all ${
            activeTab === "prompt" ? "bg-comic-yellow text-black scale-105" : "bg-white hover:bg-comic-paper"
          }`}
        >
          <Cpu className="h-4 w-4" /> PROMPT LAB
        </button>
        <button
          onClick={() => { setActiveTab("logic"); handleReset(); }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border-3 border-black shadow-comic transition-all ${
            activeTab === "logic" ? "bg-comic-yellow text-black scale-105" : "bg-white hover:bg-comic-paper"
          }`}
        >
          <Zap className="h-4 w-4" /> LOGIC LAB
        </button>
        <button
          onClick={() => { setActiveTab("structured"); handleReset(); }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border-3 border-black shadow-comic transition-all ${
            activeTab === "structured" ? "bg-comic-yellow text-black scale-105" : "bg-white hover:bg-comic-paper"
          }`}
        >
          <Layers className="h-4 w-4" /> STRUCTURED OUTPUT LAB
        </button>
      </div>

      {/* MAIN LAB GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT PROMPT INPUT CONTROLS */}
        <div className="lg:col-span-6 bg-white border-4 border-black p-6 rounded-2xl shadow-comic-lg space-y-4 font-mono text-xs">
          <div>
            <span className="font-black uppercase text-black block mb-2">QUICK TEMPLATES:</span>
            <div className="grid grid-cols-1 gap-2">
              {TEMPLATE_PROMPTS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setUserPrompt(t.prompt)}
                  className="p-2.5 rounded-lg border-2 border-black bg-comic-paper text-left font-bold hover:bg-comic-yellow transition-all"
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <span className="font-black uppercase text-black block">ENTER EXPERIMENTAL PROMPT:</span>
            <textarea
              rows={5}
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
              className="w-full rounded-xl border-2 border-black p-3 font-mono text-xs text-black bg-comic-cream shadow-inner focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter custom prompt instructions..."
            />
          </div>

          <div className="flex justify-between items-center bg-comic-cream p-3 rounded-lg border-2 border-black">
            <span className="font-black uppercase text-black">LLM TEMPERATURE: {temperature}</span>
            <input
              type="range"
              min="0.1"
              max="1.0"
              step="0.1"
              value={temperature}
              onChange={(e) => setTemperature(parseFloat(e.target.value))}
              className="w-36 accent-comic-red cursor-pointer"
            />
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={handleRunExperiment}
              disabled={isProcessing}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl border-3 border-black bg-comic-yellow px-6 py-3 font-comic text-xl text-black shadow-comic hover:bg-white active:translate-x-1 active:translate-y-1 active:shadow-comic-pressed transition-all disabled:opacity-50"
            >
              <Play className="h-5 w-5 fill-current" />
              <span>{isProcessing ? "PROCESSING..." : "RUN EXPERIMENT"}</span>
            </button>

            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 rounded-xl border-2 border-black bg-white px-4 py-3 font-mono text-xs font-black uppercase text-black shadow-comic-sm hover:bg-comic-paper"
            >
              <RotateCcw className="h-4 w-4" /> RESET
            </button>
          </div>
        </div>

        {/* RIGHT RESULT DISPLAY */}
        <div className="lg:col-span-6 bg-comic-dark border-4 border-black p-6 rounded-2xl shadow-comic-lg space-y-4 text-white font-mono text-xs relative overflow-hidden min-h-[400px]">
          <div className="flex items-center justify-between border-b-2 border-comic-red pb-3">
            <div className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-comic-yellow" />
              <span className="font-comic text-xl text-white">EXPERIMENT OUTPUT</span>
            </div>

            {resultOutput && (
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded border border-white bg-black px-3 py-1 text-[11px] font-black uppercase text-comic-yellow shadow-comic-sm hover:bg-comic-red hover:text-white transition-all"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? "COPIED!" : "COPY RESULT"}</span>
              </button>
            )}
          </div>

          {isProcessing ? (
            <div className="flex flex-col items-center justify-center h-64 space-y-4 text-comic-yellow">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Cpu className="h-12 w-12 text-comic-red" />
              </motion.div>
              <span className="font-comic text-2xl tracking-wider text-shadow-red animate-pulse">
                ⚡ EXECUTING COMIC AI LOGIC...
              </span>
            </div>
          ) : resultOutput ? (
            <motion.pre
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl bg-black border-2 border-black/80 font-mono text-xs leading-relaxed text-green-400 whitespace-pre-wrap overflow-x-auto shadow-inner"
            >
              {resultOutput}
            </motion.pre>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-center text-gray-400 space-y-2">
              <Sparkles className="h-10 w-10 text-comic-yellow opacity-40" />
              <p className="font-mono text-xs">Press &quot;RUN EXPERIMENT&quot; to test AI prompt logic chains!</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
