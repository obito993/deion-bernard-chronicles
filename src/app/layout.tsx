import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Deion Bernard — Personal Portfolio World",
  description:
    "Official portfolio of Deion Daniel Bernard. Computer Science Graduate, Full-Stack Developer, AI Enthusiast, and Tenor Vocalist. Tamil • French • English.",
  keywords: [
    "Deion Bernard",
    "Developer Portfolio",
    "Computer Science Graduate",
    "AI Enthusiast",
    "Next.js Developer",
    "Chennai Developer",
  ],
  icons: {
    icon: "/deion-sketch-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-black text-white antialiased selection:bg-brand-orange selection:text-black">
        <CustomCursor />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
