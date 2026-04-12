import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grass: {
          DEFAULT: "#4ade80",
          dark: "#16a34a",
          light: "#86efac",
        },
        stone: {
          dark: "#1c1c1c",
          DEFAULT: "#2d2d2d",
          light: "#3d3d3d",
        },
        dirt: "#7c5c3a",
        emerald: {
          glow: "#34d399",
        },
        obsidian: "#0f0f0f",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(74,222,128,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(74,222,128,0.3)",
        "glow-lg": "0 0 40px rgba(74,222,128,0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
