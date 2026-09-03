"use client";

import React from "react";
import { FloatingDock, DockItem } from "@/components/ui/floating-dock";
import { Home, User, FileText, Mail, BookOpen, Film, Music, Sparkles, FolderGit2 } from "lucide-react";

export default function ComicFloatingDock() {
  const dockItems: DockItem[] = [
    // MAIN STORY GROUP
    {
      title: "HOME",
      caption: "PAGE 01 — THE COVER",
      icon: <Home className="h-full w-full" />,
      href: "/",
      group: "main",
    },
    {
      title: "ABOUT ME",
      caption: "PAGE 02 — ORIGIN STORY",
      icon: <User className="h-full w-full" />,
      href: "/about",
      group: "main",
    },
    {
      title: "RESUME",
      caption: "PAGE 03 — CHARACTER FILE",
      icon: <FileText className="h-full w-full" />,
      href: "/resume",
      group: "main",
    },
    {
      title: "PROJECTS",
      caption: "PAGE 04 — INVENTOR'S LAB",
      icon: <FolderGit2 className="h-full w-full" />,
      href: "/projects",
      group: "main",
    },
    {
      title: "CONTACT",
      caption: "PAGE 05 — TEAM-UP",
      icon: <Mail className="h-full w-full" />,
      href: "/contact",
      group: "main",
    },

    // BONUS PANELS GROUP
    {
      title: "BLOGS",
      caption: "CHAPTER 05 — THE JOURNAL",
      icon: <BookOpen className="h-full w-full" />,
      href: "/blogs",
      group: "bonus",
    },
    {
      title: "MOVIES",
      caption: "CHAPTER 06 — WATCHLIST",
      icon: <Film className="h-full w-full" />,
      href: "/movies",
      group: "bonus",
    },
    {
      title: "MUSIC",
      caption: "CHAPTER 07 — SOUNDTRACK",
      icon: <Music className="h-full w-full" />,
      href: "/music",
      group: "bonus",
    },
    {
      title: "CREATIVE SPACE",
      caption: "BONUS PANEL — ???",
      icon: <Sparkles className="h-full w-full" />,
      href: "/creative-space",
      group: "bonus",
    },
  ];

  return <FloatingDock items={dockItems} />;
}
