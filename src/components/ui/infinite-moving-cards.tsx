"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Sticker from "@/components/comic/Sticker";
import { ArrowUpRight } from "lucide-react";

export interface InfiniteContentCard {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
  category?: string;
  description?: string;
  href?: string;
  badge?: string;
  color?: "red" | "yellow" | "violet" | "cream" | "dark";
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: InfiniteContentCard[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setStart(false);
      return;
    }

    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => {
          const bgColors = {
            red: "bg-comic-red text-white",
            yellow: "bg-comic-yellow text-black",
            violet: "bg-comic-violet text-black",
            cream: "bg-comic-cream text-black",
            dark: "bg-comic-dark text-white",
          }[item.color || "yellow"];

          const CardWrapper = item.href ? Link : "div";

          return (
            <li
              key={`${item.id}-${idx}`}
              className="relative w-[300px] sm:w-[380px] max-w-full shrink-0 rounded-xl border-4 border-black p-5 shadow-comic-lg transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-comic-xl group select-none"
            >
              <CardWrapper href={item.href || "#"} className="flex flex-col justify-between h-full space-y-3">
                
                {/* CARD HEADER BADGE */}
                <div className="flex items-center justify-between border-b-2 border-black pb-2">
                  <span className="font-mono text-[10px] font-black uppercase tracking-widest text-black bg-white px-2 py-0.5 border border-black shadow-comic-sm">
                    {item.category || "COMIC ISSUE"}
                  </span>
                  {item.badge && <Sticker text={item.badge} variant="red" rotate={2} />}
                </div>

                {/* CARD IMAGE */}
                {item.image && (
                  <div className="relative h-44 w-full rounded-lg border-3 border-black bg-black overflow-hidden shadow-comic-sm">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-halftone opacity-15 pointer-events-none" />
                  </div>
                )}

                {/* CARD CONTENT */}
                <div className="space-y-1">
                  <h4 className="font-comic text-3xl text-black leading-tight group-hover:text-comic-red transition-colors">
                    {item.title}
                  </h4>
                  {item.subtitle && (
                    <p className="font-mono text-xs font-bold text-gray-700">{item.subtitle}</p>
                  )}
                  {item.description && (
                    <p className="font-mono text-xs font-semibold text-gray-800 line-clamp-2 mt-1">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* CARD FOOTER */}
                <div className="pt-2 flex items-center justify-between border-t-2 border-black font-mono text-xs font-black text-black">
                  <span>INSPECT CHAPTER</span>
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-comic-red" />
                </div>

              </CardWrapper>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
