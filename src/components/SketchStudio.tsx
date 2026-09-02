"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Pencil,
  Eraser,
  Upload,
  RotateCcw,
  Download,
  Paintbrush,
  Sparkles,
  Sliders,
  Image as ImageIcon,
  Check,
  Zap,
  Eye,
} from "lucide-react";

export default function SketchStudio() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Drawing state
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState<"pencil" | "brush" | "glow" | "eraser">("pencil");
  const [color, setColor] = useState<string>("#FF5500");
  const [brushSize, setBrushSize] = useState<number>(4);
  const [opacity, setOpacity] = useState<number>(1);
  const [activeFilter, setActiveFilter] = useState<"none" | "sketch" | "invert" | "vintage">("none");

  // Background image state
  const [bgImageSrc, setBgImageSrc] = useState<string | null>("/deion-sketch-logo.jpg");
  const [bgImageObj, setBgImageObj] = useState<HTMLImageElement | null>(null);

  // Feedback notifications
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Preset palettes
  const colorPalette = [
    { name: "Brand Orange", hex: "#FF5500" },
    { name: "Rose Pink", hex: "#f43f5e" },
    { name: "Neon Cyan", hex: "#06b6d4" },
    { name: "Electric Green", hex: "#22c55e" },
    { name: "Amber Gold", hex: "#f59e0b" },
    { name: "Pure White", hex: "#FFFFFF" },
    { name: "Deep Charcoal", hex: "#1f2937" },
  ];

  // Preset images
  const presets = [
    { name: "Deion Face Sketch", src: "/deion-sketch-logo.jpg" },
    { name: "Spider-Man Poster", src: "/media/spiderman.jpg" },
    { name: "Blank Canvas", src: null },
  ];

  // Load image object whenever bgImageSrc changes
  useEffect(() => {
    if (!bgImageSrc) {
      setBgImageObj(null);
      return;
    }
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = bgImageSrc;
    img.onload = () => setBgImageObj(img);
  }, [bgImageSrc]);

  // Redraw canvas background & content
  const redrawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // We do NOT clear the context lines drawn by user when re-rendering,
    // but when initialized or preset changed, we draw canvas.
  }, []);

  // Initialize canvas size
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const width = container.clientWidth || 800;
    const height = Math.min(window.innerHeight * 0.6, 550);

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, width, height);

      // Draw initial background image if available
      if (bgImageObj) {
        drawBgImage(ctx, bgImageObj, width, height);
      }
    }
  }, [bgImageObj]);

  const drawBgImage = (
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    width: number,
    height: number
  ) => {
    const hRatio = width / img.width;
    const vRatio = height / img.height;
    const ratio = Math.min(hRatio, vRatio);
    const centerShiftX = (width - img.width * ratio) / 2;
    const centerShiftY = (height - img.height * ratio) / 2;

    ctx.save();
    ctx.globalAlpha = 0.85;

    // Apply Filter Effects
    if (activeFilter === "sketch") {
      ctx.filter = "grayscale(100%) contrast(160%) brightness(110%)";
    } else if (activeFilter === "invert") {
      ctx.filter = "invert(100%)";
    } else if (activeFilter === "vintage") {
      ctx.filter = "sepia(80%) hue-rotate(-30deg)";
    } else {
      ctx.filter = "none";
    }

    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShiftX,
      centerShiftY,
      img.width * ratio,
      img.height * ratio
    );
    ctx.restore();
  };

  // Clear Canvas
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (bgImageObj) {
      drawBgImage(ctx, bgImageObj, canvas.width, canvas.height);
    }
  };

  // Drawing event handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.beginPath();
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    let clientX = 0;
    let clientY = 0;

    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (tool === "eraser") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.arc(x, y, brushSize / 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = opacity;
      ctx.strokeStyle = color;

      if (tool === "glow") {
        ctx.shadowBlur = 15;
        ctx.shadowColor = color;
      } else {
        ctx.shadowBlur = 0;
      }

      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
  };

  // Custom Image Upload handler
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setBgImageSrc(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  // Download drawn artwork
  const downloadArtwork = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const imageURI = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = `deion-creative-sketch-${Date.now()}.png`;
    link.href = imageURI;
    link.click();

    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="w-full space-y-8 rounded-3xl border border-white/15 bg-gradient-to-b from-surface-card via-black to-surface-card p-6 sm:p-8 shadow-2xl">
      {/* TOOLBAR HEADER */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-3 py-1 font-mono text-xs font-bold text-brand-orange">
            <Sparkles className="h-3.5 w-3.5" />
            <span>INTERACTIVE SKETCH & DRAWING STUDIO</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white mt-2">
            CREATIVE CANVAS &amp; SKETCH OVERLAY
          </h2>
          <p className="font-mono text-xs text-gray-300">
            Upload any image or pick a preset, then sketch, draw glows, adjust brush parameters, and download your artwork!
          </p>
        </div>

        {/* UPLOAD & ACTION BUTTONS */}
        <div className="flex flex-wrap items-center gap-3">
          <label className="flex items-center gap-2 cursor-pointer rounded-full border border-brand-orange/50 bg-brand-orange/20 px-5 py-2.5 font-mono text-xs font-bold text-brand-orange hover:bg-brand-orange hover:text-black transition-all shadow-[0_0_15px_rgba(255,85,0,0.3)]">
            <Upload className="h-4 w-4" />
            <span>UPLOAD IMAGE</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>

          <button
            onClick={clearCanvas}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-gray-300 hover:text-white hover:border-red-500 hover:bg-red-500/20 transition-all"
          >
            <RotateCcw className="h-4 w-4 text-red-400" />
            <span>RESET CANVAS</span>
          </button>

          <button
            onClick={downloadArtwork}
            className="flex items-center gap-2 rounded-full bg-brand-orange px-6 py-2.5 font-mono text-xs font-bold text-black hover:bg-white transition-all shadow-[0_0_20px_rgba(255,85,0,0.5)]"
          >
            {savedSuccess ? <Check className="h-4 w-4 text-black" /> : <Download className="h-4 w-4" />}
            <span>{savedSuccess ? "SAVED!" : "DOWNLOAD SKETCH"}</span>
          </button>
        </div>
      </div>

      {/* CONTROL PANEL ROW */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-black/60 p-4 rounded-2xl border border-white/10">
        {/* TOOLS SELECTION */}
        <div className="md:col-span-4 space-y-2">
          <span className="font-mono text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            DRAWING TOOL
          </span>
          <div className="grid grid-cols-4 gap-2">
            <button
              onClick={() => setTool("pencil")}
              className={`flex flex-col items-center justify-center p-2.5 rounded-xl border font-mono text-xs font-bold transition-all ${
                tool === "pencil"
                  ? "border-brand-orange bg-brand-orange/20 text-brand-orange shadow-[0_0_15px_#FF5500]"
                  : "border-white/10 bg-white/5 text-gray-400 hover:text-white"
              }`}
            >
              <Pencil className="h-4 w-4 mb-1" />
              <span>SKETCH</span>
            </button>

            <button
              onClick={() => setTool("brush")}
              className={`flex flex-col items-center justify-center p-2.5 rounded-xl border font-mono text-xs font-bold transition-all ${
                tool === "brush"
                  ? "border-brand-orange bg-brand-orange/20 text-brand-orange shadow-[0_0_15px_#FF5500]"
                  : "border-white/10 bg-white/5 text-gray-400 hover:text-white"
              }`}
            >
              <Paintbrush className="h-4 w-4 mb-1" />
              <span>BRUSH</span>
            </button>

            <button
              onClick={() => setTool("glow")}
              className={`flex flex-col items-center justify-center p-2.5 rounded-xl border font-mono text-xs font-bold transition-all ${
                tool === "glow"
                  ? "border-brand-orange bg-brand-orange/20 text-brand-orange shadow-[0_0_15px_#FF5500]"
                  : "border-white/10 bg-white/5 text-gray-400 hover:text-white"
              }`}
            >
              <Zap className="h-4 w-4 mb-1" />
              <span>NEON</span>
            </button>

            <button
              onClick={() => setTool("eraser")}
              className={`flex flex-col items-center justify-center p-2.5 rounded-xl border font-mono text-xs font-bold transition-all ${
                tool === "eraser"
                  ? "border-red-500 bg-red-500/20 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.5)]"
                  : "border-white/10 bg-white/5 text-gray-400 hover:text-white"
              }`}
            >
              <Eraser className="h-4 w-4 mb-1" />
              <span>ERASER</span>
            </button>
          </div>
        </div>

        {/* COLOR PALETTE */}
        <div className="md:col-span-5 space-y-2">
          <span className="font-mono text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            COLOR PALETTE &amp; PICKER
          </span>
          <div className="flex items-center gap-2">
            {colorPalette.map((c) => (
              <button
                key={c.hex}
                onClick={() => setColor(c.hex)}
                style={{ backgroundColor: c.hex }}
                className={`h-8 w-8 rounded-full border-2 transition-transform ${
                  color === c.hex
                    ? "scale-125 border-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                    : "border-transparent hover:scale-110"
                }`}
                title={c.name}
              />
            ))}
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="h-8 w-8 cursor-pointer rounded-full border-0 bg-transparent"
              title="Custom Color Picker"
            />
          </div>
        </div>

        {/* BRUSH SLIDERS */}
        <div className="md:col-span-3 space-y-2">
          <div className="flex items-center justify-between font-mono text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            <span>BRUSH SIZE: {brushSize}PX</span>
          </div>
          <input
            type="range"
            min="1"
            max="40"
            value={brushSize}
            onChange={(e) => setBrushSize(Number(e.target.value))}
            className="w-full accent-brand-orange cursor-pointer"
          />
        </div>
      </div>

      {/* PRESETS & FILTER ROW */}
      <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="text-gray-400 font-bold uppercase">PRESETS:</span>
          {presets.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setBgImageSrc(p.src)}
              className={`rounded-lg px-3 py-1.5 border transition-all ${
                bgImageSrc === p.src
                  ? "border-brand-orange bg-brand-orange/20 text-brand-orange font-bold"
                  : "border-white/10 bg-white/5 text-gray-300 hover:text-white"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gray-400 font-bold uppercase">FILTER:</span>
          {(["none", "sketch", "invert", "vintage"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`rounded-lg px-3 py-1.5 border uppercase transition-all ${
                activeFilter === f
                  ? "border-brand-orange bg-brand-orange/20 text-brand-orange font-bold"
                  : "border-white/10 bg-white/5 text-gray-300 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* CANVAS CONTAINER */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-2xl border-2 border-white/20 bg-black flex items-center justify-center p-1 shadow-inner cursor-crosshair"
      >
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onMouseMove={draw}
          onTouchStart={startDrawing}
          onTouchEnd={stopDrawing}
          onTouchMove={draw}
          className="rounded-xl touch-none bg-black"
        />

        <div className="pointer-events-none absolute bottom-3 right-4 font-mono text-[10px] text-gray-500 bg-black/60 px-2.5 py-1 rounded border border-white/10">
          DEION SKETCH STUDIO • DRAW OR OVERLAY ANY IMAGE
        </div>
      </div>
    </div>
  );
}
