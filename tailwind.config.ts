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
        background: "#050505",
        surface: {
          DEFAULT: "#0D0D0D",
          card: "#121212",
          border: "#222222",
          hover: "#1A1A1A",
        },
        brand: {
          orange: "#FF5500",
          "orange-bright": "#FF6B00",
          "orange-dark": "#C2410C",
          "orange-glow": "rgba(255, 85, 0, 0.25)",
        },
        movie: {
          red: "#E50914",
          "red-glow": "rgba(229, 9, 20, 0.3)",
        },
        muted: {
          DEFAULT: "#9CA3AF",
          dark: "#4B5563",
          light: "#D1D5DB",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        display: ["var(--font-display)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 12s linear infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
