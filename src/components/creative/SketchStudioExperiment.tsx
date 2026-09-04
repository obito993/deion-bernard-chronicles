"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Eraser,
  RotateCcw,
  Download,
  Paintbrush,
  Sparkles,
  ArrowLeft,
  Square,
  Sparkles as ActionIcon,
  Circle,
  Undo2,
  Redo2,
  Flame
} from "lucide-react";
import Sticker from "@/components/comic/Sticker";
import ActionBurst from "@/components/comic/ActionBurst";

interface SketchStudioExperimentProps {
  onBack: () => void;
}

const COLOR_PALETTE = [
  "#000000", // Black Ink
  "#FF2A2A", // Comic Red
  "#FFD700", // Comic Yellow
  "#8A2BE2", // Comic Violet
  "#00D26A", // Comic Green
  "#0099FF", // Comic Blue
  "#FF7700", // Comic Orange
  "#FFFFFF", // White
];

// Superhero outline presets (drawn onto canvas as lineart guide)
const PRESET_OUTLINES = [
  { id: "spider", name: "🕷️ SPIDER EMBLEM", label: "Spider-Man Logo" },
  { id: "batman", name: "🦇 BAT EMBLEM", label: "Dark Knight Logo" },
  { id: "shield", name: "🛡️ HERO SHIELD", label: "Captain America Shield" },
  { id: "blank", name: "✨ BLANK CANVAS", label: "Freehand Sketch" },
];

export default function SketchStudioExperiment({ onBack }: SketchStudioExperimentProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [color, setColor] = useState("#FF2A2A");
  const [brushSize, setBrushSize] = useState(8);
  const [tool, setTool] = useState<"brush" | "pencil" | "eraser" | "halftone" | "action">("brush");
  const [selectedPreset, setSelectedPreset] = useState("spider");
  const [isDrawing, setIsDrawing] = useState(false);
  const [reactionText, setReactionText] = useState("START DRAWING!");

  // History stack for Undo/Redo
  const [history, setHistory] = useState<ImageData[]>([]);
  const [historyStep, setHistoryStep] = useState(-1);

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set high DPI sizing
    canvas.width = 800;
    canvas.height = 550;

    // Fill white paper background
    ctx.fillStyle = "#FFFDF5";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw initial preset outline
    drawPresetOutline(ctx, "spider");

    // Save initial state to history
    saveState(ctx);
  }, []);

  const saveState = (ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setHistory((prev) => {
      const nextHistory = prev.slice(0, historyStep + 1);
      return [...nextHistory, imgData];
    });
    setHistoryStep((prev) => prev + 1);
  };

  const drawPresetOutline = (ctx: CanvasRenderingContext2D, presetId: string) => {
    ctx.strokeStyle = "#111111";
    ctx.lineWidth = 4;
    ctx.lineCap = "round";

    if (presetId === "spider") {
      // Spider Emblem Outline
      ctx.beginPath();
      // Body
      ctx.ellipse(400, 265, 30, 45, 0, 0, Math.PI * 2);
      ctx.ellipse(400, 205, 20, 25, 0, 0, Math.PI * 2);
      ctx.fillStyle = "#111111";
      ctx.fill();

      // Spider Legs
      ctx.beginPath();
      // Top Legs Left
      ctx.moveTo(390, 200); ctx.lineTo(320, 140); ctx.lineTo(290, 160);
      ctx.moveTo(390, 210); ctx.lineTo(310, 190); ctx.lineTo(270, 210);
      // Top Legs Right
      ctx.moveTo(410, 200); ctx.lineTo(480, 140); ctx.lineTo(510, 160);
      ctx.moveTo(410, 210); ctx.lineTo(490, 190); ctx.lineTo(530, 210);
      // Bottom Legs Left
      ctx.moveTo(390, 270); ctx.lineTo(320, 330); ctx.lineTo(300, 390);
      ctx.moveTo(390, 280); ctx.lineTo(340, 360); ctx.lineTo(330, 420);
      // Bottom Legs Right
      ctx.moveTo(410, 270); ctx.lineTo(480, 330); ctx.lineTo(500, 390);
      ctx.moveTo(410, 280); ctx.lineTo(460, 360); ctx.lineTo(470, 420);
      ctx.stroke();

      // Outer Comic Panel Box Guide
      ctx.strokeRect(60, 40, 680, 470);
    } else if (presetId === "batman") {
      // Bat Emblem Outline
      ctx.beginPath();
      ctx.moveTo(400, 180);
      ctx.lineTo(420, 210);
      ctx.lineTo(460, 190);
      ctx.lineTo(540, 220);
      ctx.lineTo(510, 280);
      ctx.lineTo(450, 290);
      ctx.lineTo(400, 340);
      ctx.lineTo(350, 290);
      ctx.lineTo(290, 280);
      ctx.lineTo(260, 220);
      ctx.lineTo(340, 190);
      ctx.lineTo(380, 210);
      ctx.closePath();
      ctx.stroke();

      // Ellipse ring
      ctx.beginPath();
      ctx.ellipse(400, 260, 180, 110, 0, 0, Math.PI * 2);
      ctx.stroke();
    } else if (presetId === "shield") {
      // Shield Circles
      const cx = 400, cy = 265;
      [170, 130, 90, 50].forEach((r) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      });
      // Center Star
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
        const x = cx + 42 * Math.cos(angle);
        const y = cy + 42 * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
    }
  };

  const handleSelectPreset = (presetId: string) => {
    setSelectedPreset(presetId);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#FFFDF5";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawPresetOutline(ctx, presetId);
    setReactionText("COLOUR IT!");
    saveState(ctx);
  };

  const getCanvasCoords = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    if ("touches" in e) {
      const touch = e.touches[0];
      return {
        x: (touch.clientX - rect.left) * scaleX,
        y: (touch.clientY - rect.top) * scaleY,
      };
    } else {
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      };
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { x, y } = getCanvasCoords(e);
    ctx.beginPath();
    ctx.moveTo(x, y);

    if (tool === "halftone") {
      drawHalftonePattern(ctx, x, y);
    } else if (tool === "action") {
      drawActionBurst(ctx, x, y);
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { x, y } = getCanvasCoords(e);

    if (tool === "eraser") {
      ctx.strokeStyle = "#FFFDF5";
      ctx.lineWidth = brushSize * 2;
      ctx.lineCap = "round";
      ctx.lineTo(x, y);
      ctx.stroke();
    } else if (tool === "brush") {
      ctx.strokeStyle = color;
      ctx.lineWidth = brushSize;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineTo(x, y);
      ctx.stroke();
    } else if (tool === "pencil") {
      ctx.strokeStyle = color;
      ctx.lineWidth = Math.max(1, brushSize / 2);
      ctx.lineCap = "butt";
      ctx.lineTo(x, y);
      ctx.stroke();
    } else if (tool === "halftone") {
      drawHalftonePattern(ctx, x, y);
    } else if (tool === "action") {
      drawActionBurst(ctx, x, y);
    }
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (ctx) saveState(ctx);
    }
  };

  const drawHalftonePattern = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    ctx.fillStyle = color;
    const dotSize = brushSize / 2;
    const spacing = brushSize * 1.5;
    for (let dx = -spacing; dx <= spacing; dx += dotSize * 2) {
      for (let dy = -spacing; dy <= spacing; dy += dotSize * 2) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, dotSize / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  };

  const drawActionBurst = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 4;
      const rInner = 10;
      const rOuter = 25 + Math.random() * 15;
      ctx.beginPath();
      ctx.moveTo(x + rInner * Math.cos(angle), y + rInner * Math.sin(angle));
      ctx.lineTo(x + rOuter * Math.cos(angle), y + rOuter * Math.sin(angle));
      ctx.stroke();
    }
  };

  const handleUndo = () => {
    if (historyStep > 0) {
      const prevStep = historyStep - 1;
      setHistoryStep(prevStep);
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.putImageData(history[prevStep], 0, 0);
      setReactionText("UNDO!");
    }
  };

  const handleRedo = () => {
    if (historyStep < history.length - 1) {
      const nextStep = historyStep + 1;
      setHistoryStep(nextStep);
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.putImageData(history[nextStep], 0, 0);
      setReactionText("REDO!");
    }
  };

  const handleReset = () => {
    handleSelectPreset(selectedPreset);
    setReactionText("RESET!");
  };

  const handleExport = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `deion-comic-sketch-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    setReactionText("SAVED!");
  };

  return (
    <div className="space-y-6">
      {/* HEADER & NAV BACK BUTTON */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-4 border-black pb-4 bg-comic-yellow p-4 rounded-xl shadow-comic-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-2 rounded-lg border-2 border-black bg-white px-4 py-2 font-mono text-xs font-black uppercase text-black shadow-comic-sm hover:bg-comic-red hover:text-white transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>← BACK TO CREATIVE SPACE</span>
          </button>
          <div>
            <Sticker text="DESIGN EXPERIMENT" variant="violet" rotate={-1} />
            <h2 className="font-comic text-3xl sm:text-4xl text-black leading-none mt-1">
              INTERACTIVE SKETCH STUDIO
            </h2>
          </div>
        </div>

        <ActionBurst text={reactionText} color="red" size="sm" rotate={6} />
      </div>

      {/* STUDIO TOOLBAR & PRESETS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT TOOL PANEL */}
        <div className="lg:col-span-3 space-y-4 bg-white border-3 border-black p-4 rounded-xl shadow-comic-md font-mono text-xs">
          <div>
            <span className="font-black uppercase text-black block mb-2">1. CHOOSE OUTLINE:</span>
            <div className="grid grid-cols-1 gap-2">
              {PRESET_OUTLINES.map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleSelectPreset(p.id)}
                  className={`p-2 rounded border-2 border-black text-left font-bold transition-all ${
                    selectedPreset === p.id ? "bg-comic-yellow shadow-comic-sm" : "bg-comic-paper hover:bg-gray-100"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t-2 border-black pt-3">
            <span className="font-black uppercase text-black block mb-2">2. SELECT TOOL:</span>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => { setTool("brush"); setReactionText("COLOUR IT!"); }}
                className={`p-2 rounded border-2 border-black flex items-center gap-1.5 font-bold ${
                  tool === "brush" ? "bg-comic-red text-white" : "bg-white"
                }`}
              >
                <Paintbrush className="h-4 w-4" /> Brush
              </button>
              <button
                onClick={() => { setTool("pencil"); setReactionText("ADD YOUR SKETCH!"); }}
                className={`p-2 rounded border-2 border-black flex items-center gap-1.5 font-bold ${
                  tool === "pencil" ? "bg-comic-red text-white" : "bg-white"
                }`}
              >
                <Square className="h-4 w-4" /> Pencil
              </button>
              <button
                onClick={() => { setTool("halftone"); setReactionText("HALFTONE!"); }}
                className={`p-2 rounded border-2 border-black flex items-center gap-1.5 font-bold ${
                  tool === "halftone" ? "bg-comic-red text-white" : "bg-white"
                }`}
              >
                <Circle className="h-4 w-4" /> Halftone
              </button>
              <button
                onClick={() => { setTool("eraser"); setReactionText("ERASE!"); }}
                className={`p-2 rounded border-2 border-black flex items-center gap-1.5 font-bold ${
                  tool === "eraser" ? "bg-comic-red text-white" : "bg-white"
                }`}
              >
                <Eraser className="h-4 w-4" /> Eraser
              </button>
            </div>
          </div>

          <div className="border-t-2 border-black pt-3">
            <span className="font-black uppercase text-black block mb-2">3. COLOR PALETTE:</span>
            <div className="flex flex-wrap gap-2">
              {COLOR_PALETTE.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`h-7 w-7 rounded-full border-2 border-black shadow-comic-sm transition-transform ${
                    color === c ? "scale-125 ring-2 ring-black" : "hover:scale-110"
                  }`}
                  style={{ backgroundColor: c }}
                />
              ))}
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="h-7 w-7 rounded border-2 border-black cursor-pointer bg-transparent"
                title="Custom Color"
              />
            </div>
          </div>

          <div className="border-t-2 border-black pt-3 space-y-1">
            <div className="flex justify-between font-black">
              <span>BRUSH SIZE:</span>
              <span>{brushSize}PX</span>
            </div>
            <input
              type="range"
              min="2"
              max="40"
              value={brushSize}
              onChange={(e) => setBrushSize(Number(e.target.value))}
              className="w-full accent-comic-red cursor-pointer"
            />
          </div>

          {/* ACTION BUTTONS */}
          <div className="border-t-2 border-black pt-3 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleUndo}
                disabled={historyStep <= 0}
                className="flex items-center justify-center gap-1 p-2 rounded border-2 border-black bg-white font-bold disabled:opacity-40 shadow-comic-sm hover:bg-comic-paper"
              >
                <Undo2 className="h-4 w-4" /> UNDO
              </button>
              <button
                onClick={handleRedo}
                disabled={historyStep >= history.length - 1}
                className="flex items-center justify-center gap-1 p-2 rounded border-2 border-black bg-white font-bold disabled:opacity-40 shadow-comic-sm hover:bg-comic-paper"
              >
                <Redo2 className="h-4 w-4" /> REDO
              </button>
            </div>

            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-1 p-2 rounded border-2 border-black bg-comic-violet text-black font-bold shadow-comic-sm hover:bg-white"
            >
              <RotateCcw className="h-4 w-4" /> RESET CANVAS
            </button>

            <button
              onClick={handleExport}
              className="w-full flex items-center justify-center gap-1 p-2 rounded border-2 border-black bg-comic-yellow text-black font-comic text-base shadow-comic hover:bg-white"
            >
              <Download className="h-4 w-4" /> SAVE ARTWORK (PNG)
            </button>
          </div>
        </div>

        {/* RIGHT CANVAS VIEWPORT */}
        <div className="lg:col-span-9 space-y-3">
          <div className="relative border-4 border-black rounded-2xl bg-white shadow-comic-xl overflow-hidden touch-none flex justify-center items-center p-2">
            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              className="max-w-full h-auto cursor-crosshair rounded-xl border border-black shadow-inner"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between font-mono text-xs font-bold text-gray-700 bg-white border-2 border-black p-3 rounded-lg shadow-comic-sm">
            <span>💡 TIP: TOUCH/DRAG TO COLOR inside comic character outlines!</span>
            <span className="text-comic-red uppercase">MODE: DIGITAL COMIC ARTIST WORKSPACE</span>
          </div>
        </div>

      </div>
    </div>
  );
}
