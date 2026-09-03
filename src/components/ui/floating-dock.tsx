"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export interface DockItem {
  title: string;
  caption: string;
  icon: React.ReactNode;
  href: string;
  group: "main" | "bonus";
}

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: DockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const mainItems = items.filter((i) => i.group === "main");
  const bonusItems = items.filter((i) => i.group === "bonus");

  return (
    <div className={cn("fixed bottom-6 right-6 z-50 block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-16 right-0 w-64 rounded-xl border-4 border-black bg-comic-cream p-4 shadow-comic-xl space-y-3"
          >
            {/* MAIN STORY GROUP */}
            <div>
              <span className="font-mono text-[10px] font-black uppercase text-comic-red tracking-widest block mb-1">
                MAIN STORY
              </span>
              <div className="grid grid-cols-2 gap-2">
                {mainItems.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center gap-2 rounded-lg border-2 border-black p-2 font-sans text-xs font-black uppercase",
                        isActive ? "bg-comic-yellow shadow-comic-sm" : "bg-white hover:bg-comic-paper"
                      )}
                    >
                      <div className="h-4 w-4">{item.icon}</div>
                      <span className="truncate">{item.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="border-t-2 border-dashed border-black pt-2">
              <span className="font-mono text-[10px] font-black uppercase text-comic-violet tracking-widest block mb-1">
                BONUS PANELS
              </span>
              <div className="grid grid-cols-2 gap-2">
                {bonusItems.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center gap-2 rounded-lg border-2 border-black p-2 font-sans text-xs font-black uppercase",
                        isActive ? "bg-comic-violet shadow-comic-sm text-black" : "bg-white hover:bg-comic-paper"
                      )}
                    >
                      <div className="h-4 w-4">{item.icon}</div>
                      <span className="truncate">{item.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-xl border-4 border-black bg-comic-yellow px-4 py-2.5 shadow-comic-lg active:translate-x-1 active:translate-y-1 font-comic text-lg uppercase text-black"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        <span>MENU!</span>
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  const mainItems = items.filter((i) => i.group === "main");
  const bonusItems = items.filter((i) => i.group === "bonus");

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex h-20 items-center gap-3 rounded-2xl border-4 border-black bg-comic-cream px-5 shadow-comic-xl bg-paper",
        className
      )}
    >
      {/* MAIN STORY GROUP */}
      <div className="flex items-center gap-2">
        {mainItems.map((item) => (
          <IconContainer mouseX={mouseX} key={item.title} item={item} />
        ))}
      </div>

      {/* HAND-DRAWN COMIC SEPARATOR */}
      <div className="h-10 w-1 bg-black rounded-full mx-1 border border-black shadow-comic-sm" />

      {/* BONUS PANELS GROUP */}
      <div className="flex items-center gap-2">
        {bonusItems.map((item) => (
          <IconContainer mouseX={mouseX} key={item.title} item={item} />
        ))}
      </div>
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  item,
}: {
  mouseX: MotionValue;
  item: DockItem;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [44, 72, 44]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [44, 72, 44]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [22, 36, 22]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [22, 36, 22]);

  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  const widthIcon = useSpring(widthTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });
  const heightIcon = useSpring(heightTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={item.href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex aspect-square items-center justify-center rounded-xl border-3 border-black transition-all shadow-comic-sm",
          isActive
            ? "bg-comic-yellow -translate-y-1 shadow-comic border-4 font-black"
            : "bg-white hover:bg-comic-paper"
        )}
      >
        {/* YOU ARE HERE STICKER */}
        {isActive && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded border border-black bg-comic-red px-1.5 py-0.2 text-[8px] font-black text-white shadow-comic-sm uppercase whitespace-nowrap z-20">
            YOU ARE HERE
          </span>
        )}

        {/* COMIC CAPTION TOOLTIP */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-12 left-1/2 w-max rounded-lg border-2 border-black bg-comic-yellow px-3 py-1 font-mono text-xs font-black uppercase text-black shadow-comic-sm z-30 pointer-events-none"
            >
              {item.caption}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-black"
        >
          {item.icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}
