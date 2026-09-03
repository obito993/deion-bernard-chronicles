import type { Metadata } from "next";
import { Space_Grotesk, Bangers } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import DockAfterIntro from "@/components/navigation/DockAfterIntro";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const bangers = Bangers({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bangers",
  display: "swap",
});

export const metadata: Metadata = {
  title: "THE DEION BERNARD CHRONICLES — Interactive Comic Portfolio",
  description:
    "Official interactive graphic novel portfolio of Deion Daniel Bernard. Computer Science Graduate, Full-Stack Developer, AI Enthusiast, and Vocalist.",
  keywords: [
    "Deion Bernard",
    "Comic Portfolio",
    "The Deion Bernard Chronicles",
    "Computer Science Graduate",
    "Developer Portfolio",
    "Interactive Graphic Novel",
  ],
  icons: {
    icon: "/media/spiderman-intro-stinger.jpg",
  },
};

import SpiderManPageIntro from "@/components/characters/SpiderManPageIntro";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${bangers.variable} scroll-smooth`}>
      <body className="bg-comic-cream text-comic-ink antialiased selection:bg-comic-yellow selection:text-comic-ink min-h-screen flex flex-col font-sans pb-24">
        <CustomCursor />
        <SpiderManPageIntro />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <DockAfterIntro />
        <Footer />
      </body>
    </html>
  );
}
