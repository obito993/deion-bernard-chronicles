"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { BookOpen, Film, Music, Sparkles } from "lucide-react";

interface DockItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  bg: string;
  iconColor: string;
}

const dockItems: DockItem[] = [
  {
    label: "BLOGS",
    href: "/blogs",
    icon: <BookOpen className="h-6 w-6" />,
    bg: "bg-black",
    iconColor: "text-[#FF5500]",
  },
  {
    label: "MOVIES",
    href: "/movies",
    icon: <Film className="h-6 w-6" />,
    bg: "bg-[#E50914]",
    iconColor: "text-white",
  },
  {
    label: "SONGS",
    href: "/music",
    icon: <Music className="h-6 w-6" />,
    bg: "bg-black",
    iconColor: "text-[#FF5500]",
  },
  {
    label: "CREATIVE SPACE",
    href: "/about#interests",
    icon: <Sparkles className="h-6 w-6" />,
    bg: "bg-black",
    iconColor: "text-amber-400",
  },
];

function DockIcon({
  item,
  mouseX,
}: {
  item: DockItem;
  mouseX: MotionValue<number>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? null;
    if (!bounds) return 9999;
    return val - (bounds.left + bounds.width / 2);
  });

  const scale = useTransform(distance, [-130, 0, 130], [1, 1.85, 1]);
  const yLift = useTransform(distance, [-130, 0, 130], [0, -18, 0]);

  const springScale = useSpring(scale, { mass: 0.1, stiffness: 380, damping: 18 });
  const springY = useSpring(yLift, { mass: 0.1, stiffness: 380, damping: 18 });

  return (
    <motion.div
      ref={ref}
      style={{ scale: springScale, y: springY }}
      className="relative flex flex-col items-center origin-bottom"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl border border-white/20 bg-black/90 px-3 py-1.5 font-mono text-[11px] font-bold text-white shadow-xl backdrop-blur-md z-50"
        >
          {item.label}
          {/* small arrow */}
          <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 h-2.5 w-2.5 rotate-45 rounded-[2px] border-r border-b border-white/20 bg-black/90" />
        </motion.div>
      )}

      {/* Icon button */}
      <Link
        href={item.href}
        className={`flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-white/25 shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-shadow hover:shadow-[0_8px_30px_rgba(255,85,0,0.6)] ${item.bg} ${item.iconColor}`}
      >
        {item.icon}
      </Link>
    </motion.div>
  );
}

export default function MacDock() {
  // Explicitly typed as MotionValue<number>
  const mouseX = useMotionValue<number>(Infinity);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.6 }}
      className="fixed bottom-6 left-0 right-0 flex justify-center z-50 pointer-events-none"
    >
      <div className="w-max">
        {/* Dock shelf */}
        <motion.div
          onMouseMove={(e) => mouseX.set(e.clientX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          className="pointer-events-auto flex items-end gap-3 rounded-3xl border border-white/25 bg-[#FF5500] px-6 py-3 shadow-[0_0_55px_rgba(255,85,0,0.8),_0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl"
        >
          {dockItems.map((item) => (
            <DockIcon key={item.href} item={item} mouseX={mouseX} />
          ))}
        </motion.div>

        {/* macOS-style dock reflection line */}
        <div className="mx-auto mt-1.5 h-px w-3/4 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>
    </motion.div>
  );
}
