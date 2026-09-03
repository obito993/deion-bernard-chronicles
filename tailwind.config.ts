import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        comic: {
          cream: "#FFFDF5",
          ink: "#000000",
          red: "#FF6B6B",
          yellow: "#FFD93D",
          violet: "#C4B5FD",
          white: "#FFFFFF",
          orange: "#FF8C42",
          paper: "#F7F4EA",
          dark: "#121212",
        },
      },
      boxShadow: {
        "comic-sm": "3px 3px 0px #000000",
        "comic": "6px 6px 0px #000000",
        "comic-lg": "9px 9px 0px #000000",
        "comic-xl": "12px 12px 0px #000000",
        "comic-pressed": "2px 2px 0px #000000",
        "comic-red": "6px 6px 0px #FF6B6B",
        "comic-yellow": "6px 6px 0px #FFD93D",
      },
      fontFamily: {
        sans: ["var(--font-space)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "sans-serif"],
        comic: ["var(--font-bangers)", "cursive", "sans-serif"],
        mono: ["Courier New", "Courier", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 3s infinite",
        "spin-slow": "spin 20s linear infinite",
        "wiggle": "wiggle 1s ease-in-out infinite",
        "pop-in": "popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        popIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
