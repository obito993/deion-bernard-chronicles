"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mic, MicOff, RotateCcw, ArrowLeft, Volume2, Sparkles, AlertCircle, Activity } from "lucide-react";
import Sticker from "@/components/comic/Sticker";
import ActionBurst from "@/components/comic/ActionBurst";

interface AcousticPitchAnalyzerExperimentProps {
  onBack: () => void;
}

// Convert frequency Hz to musical note name (e.g. 440 Hz → A4)
function hzToNote(freq: number): { note: string; octave: number; cents: number } | null {
  if (freq < 20 || freq > 4000) return null;
  const noteStrings = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const midi = Math.round(69 + 12 * Math.log2(freq / 440));
  const noteIndex = (midi % 12 + 12) % 12;
  const octave = Math.floor(midi / 12) - 1;
  const exactMidi = 69 + 12 * Math.log2(freq / 440);
  const cents = Math.round((exactMidi - midi) * 100);
  return { note: noteStrings[noteIndex], octave, cents };
}

export default function AcousticPitchAnalyzerExperiment({ onBack }: AcousticPitchAnalyzerExperimentProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [detectedPitch, setDetectedPitch] = useState<number | null>(null);
  const [noteInfo, setNoteInfo] = useState<{ note: string; octave: number; cents: number } | null>(null);
  const [reactionText, setReactionText] = useState("SIGNAL READY!");

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // Clean up audio context on unmount
  useEffect(() => {
    return () => {
      stopAnalysis();
    };
  }, []);

  const startAnalysis = async () => {
    setPermissionDenied(false);
    setReactionText("REQUESTING MIC...");

    try {
      // EXPLICIT MICROPHONE PERMISSION REQUEST ONLY ON USER CLICK
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      audioCtxRef.current = audioCtx;

      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 2048;
      source.connect(analyser);
      analyserRef.current = analyser;

      setIsAnalyzing(true);
      setReactionText("LISTENING...");
      drawVisualizer();
    } catch (err) {
      console.error("Microphone access denied:", err);
      setPermissionDenied(true);
      setIsAnalyzing(false);
      setReactionText("ACCESS DENIED");
    }
  };

  const stopAnalysis = () => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    if (streamRef.current) streamRef.current.getTracks().forEach((t) => t.stop());
    if (audioCtxRef.current) audioCtxRef.current.close();

    streamRef.current = null;
    audioCtxRef.current = null;
    analyserRef.current = null;
    setIsAnalyzing(false);
    setDetectedPitch(null);
    setNoteInfo(null);
    setReactionText("SIGNAL STOPPED");
  };

  const drawVisualizer = () => {
    const canvas = canvasRef.current;
    const analyser = analyserRef.current;
    if (!canvas || !analyser) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 350;

    const bufferLength = analyser.frequencyBinCount;
    const freqData = new Uint8Array(bufferLength);
    const timeData = new Uint8Array(bufferLength);

    const render = () => {
      animFrameRef.current = requestAnimationFrame(render);

      analyser.getByteFrequencyData(freqData);
      analyser.getByteTimeDomainData(timeData);

      // Background halftone paper
      ctx.fillStyle = "#FFFDF5";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // FFT Frequency Bars
      const barWidth = (canvas.width / 64) * 1.2;
      let x = 0;
      let maxVal = 0;
      let maxIndex = 0;

      for (let i = 0; i < 64; i++) {
        const val = freqData[i * 4];
        if (val > maxVal) {
          maxVal = val;
          maxIndex = i * 4;
        }

        const barHeight = (val / 255) * (canvas.height - 60);

        // Alternating comic colors
        const colors = ["#FF2A2A", "#FFD700", "#8A2BE2", "#00D26A"];
        ctx.fillStyle = colors[i % colors.length];
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 2;

        ctx.fillRect(x, canvas.height - barHeight - 30, barWidth - 4, barHeight);
        ctx.strokeRect(x, canvas.height - barHeight - 30, barWidth - 4, barHeight);

        x += barWidth;
      }

      // Waveform Oscilloscope Line overlay
      ctx.beginPath();
      ctx.lineWidth = 4;
      ctx.strokeStyle = "#111111";
      const sliceWidth = canvas.width / bufferLength;
      let wx = 0;
      for (let i = 0; i < bufferLength; i++) {
        const v = timeData[i] / 128.0;
        const wy = (v * canvas.height) / 2;
        if (i === 0) ctx.moveTo(wx, wy);
        else ctx.lineTo(wx, wy);
        wx += sliceWidth;
      }
      ctx.stroke();

      // Pitch calculation from fundamental frequency
      if (maxVal > 80 && audioCtxRef.current) {
        const sampleRate = audioCtxRef.current.sampleRate;
        const approxFreq = Math.round((maxIndex * sampleRate) / analyser.fftSize);
        if (approxFreq > 40 && approxFreq < 2000) {
          setDetectedPitch(approxFreq);
          const note = hzToNote(approxFreq);
          if (note) {
            setNoteInfo(note);
            setReactionText(`PITCH DETECTED! (${note.note}${note.octave})`);
          }
        }
      }
    };

    render();
  };

  const handleReset = () => {
    stopAnalysis();
    setReactionText("SIGNAL RESET!");
  };

  return (
    <div className="space-y-6 font-sans">
      {/* HEADER BAR */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-4 border-black pb-4 bg-comic-red p-4 rounded-xl text-white shadow-comic-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={() => { stopAnalysis(); onBack(); }}
            className="flex items-center gap-2 rounded-lg border-2 border-black bg-white px-4 py-2 font-mono text-xs font-black uppercase text-black shadow-comic-sm hover:bg-comic-yellow transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>← BACK TO CREATIVE SPACE</span>
          </button>
          <div>
            <Sticker text="AUDIO EXPERIMENT" variant="yellow" rotate={-1} />
            <h2 className="font-comic text-3xl sm:text-4xl text-white leading-none mt-1">
              ACOUSTIC PITCH ANALYZER
            </h2>
          </div>
        </div>

        <ActionBurst text={reactionText} color="yellow" size="sm" rotate={6} />
      </div>

      {/* PERMISSION DENIED WARNING BANNER */}
      {permissionDenied && (
        <div className="bg-comic-red text-white p-4 rounded-xl border-4 border-black shadow-comic flex items-center gap-3 font-mono text-xs font-bold">
          <AlertCircle className="h-6 w-6 shrink-0 text-comic-yellow" />
          <div>
            <span className="block font-black text-sm uppercase">MICROPHONE PERMISSION DENIED</span>
            <span>Please allow microphone access in your browser settings to perform acoustic frequency & pitch analysis!</span>
          </div>
        </div>
      )}

      {/* MAIN ANALYZER DASHBOARD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT CONTROLS & NOTE METRICS */}
        <div className="lg:col-span-4 bg-white border-4 border-black p-6 rounded-2xl shadow-comic-lg space-y-6 font-mono text-xs">
          <div>
            <span className="font-black uppercase text-black block mb-2">MICROPHONE CONTROL:</span>
            {!isAnalyzing ? (
              <button
                onClick={startAnalysis}
                className="w-full flex items-center justify-center gap-2 rounded-xl border-3 border-black bg-comic-yellow px-6 py-4 font-comic text-2xl text-black shadow-comic hover:bg-white active:translate-x-1 active:translate-y-1 active:shadow-comic-pressed transition-all"
              >
                <Mic className="h-6 w-6 text-comic-red" />
                <span>START ANALYSIS</span>
              </button>
            ) : (
              <button
                onClick={stopAnalysis}
                className="w-full flex items-center justify-center gap-2 rounded-xl border-3 border-black bg-comic-red px-6 py-4 font-comic text-2xl text-white shadow-comic hover:bg-black active:translate-x-1 active:translate-y-1 active:shadow-comic-pressed transition-all"
              >
                <MicOff className="h-6 w-6 text-comic-yellow" />
                <span>STOP ANALYSIS</span>
              </button>
            )}
          </div>

          {/* DETECTED PITCH READOUT */}
          <div className="bg-comic-cream border-3 border-black p-4 rounded-xl space-y-2 text-center shadow-comic-sm">
            <span className="font-mono text-[10px] font-black uppercase text-comic-red block">
              REAL-TIME VOCAL PITCH READOUT
            </span>

            {noteInfo ? (
              <div className="space-y-1">
                <div className="font-comic text-6xl text-black leading-none">
                  {noteInfo.note}<span className="text-3xl text-comic-red">{noteInfo.octave}</span>
                </div>
                <div className="font-mono text-xs font-bold text-gray-700">
                  FREQUENCY: {detectedPitch} Hz
                </div>
              </div>
            ) : (
              <div className="py-4 text-gray-500 font-bold">
                {isAnalyzing ? "SING OR SPEAK INTO MIC..." : "PRESS 'START ANALYSIS' TO DETECT PITCH"}
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleReset}
              className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border-2 border-black bg-comic-violet font-bold shadow-comic-sm hover:bg-white transition-all"
            >
              <RotateCcw className="h-4 w-4" /> RESET
            </button>
          </div>
        </div>

        {/* RIGHT FFT CANVAS VISUALIZER */}
        <div className="lg:col-span-8 bg-white border-4 border-black p-4 rounded-2xl shadow-comic-lg space-y-3">
          <div className="flex items-center justify-between border-b-2 border-black pb-2 px-2">
            <div className="flex items-center gap-2 font-mono text-xs font-black">
              <Activity className="h-5 w-5 text-comic-red animate-pulse" />
              <span>LIVE FFT FREQUENCY SPECTRUM & WAVEFORM</span>
            </div>
            <span className="font-mono text-[10px] font-bold text-gray-500 uppercase">WEB AUDIO API</span>
          </div>

          <div className="relative rounded-xl border-3 border-black overflow-hidden bg-comic-paper">
            <canvas ref={canvasRef} className="w-full h-[350px] block" />
            {!isAnalyzing && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex flex-col items-center justify-center text-white space-y-3 p-4 text-center">
                <Volume2 className="h-12 w-12 text-comic-yellow animate-bounce" />
                <span className="font-comic text-3xl uppercase tracking-wider text-shadow-red">
                  READY FOR SOUND ANALYSIS
                </span>
                <p className="font-mono text-xs max-w-md text-yellow-100">
                  Click &quot;START ANALYSIS&quot; to allow microphone access and watch your voice draw live audio spectrums!
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
