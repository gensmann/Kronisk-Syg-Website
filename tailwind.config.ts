import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ocean: {
          950: "#04070f",
          900: "#070d1e",
          800: "#0b1430",
          700: "#10204a",
          600: "#152d63",
          500: "#1f3f80",
        },
        brass: {
          400: "#d9a25a",
          500: "#c1873d",
          600: "#a0682a",
        },
        amber: {
          warm: "#f0b06b",
          glow: "#ffd9a3",
        },
        accent: {
          cyan: "#5cd6e3",
          pink: "#ff7bb8",
          coral: "#ff8657",
        },
        parchment: "#f3e6c4",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
        script: ["'Italianno'", "cursive"],
      },
      boxShadow: {
        brass: "0 0 0 1px rgba(217,162,90,0.35), 0 8px 24px -8px rgba(0,0,0,0.6)",
        glow: "0 0 60px -10px rgba(255,217,163,0.45)",
      },
      backgroundImage: {
        "ocean-radial":
          "radial-gradient(ellipse at top, #152d63 0%, #070d1e 55%, #04070f 100%)",
        "brass-shine":
          "linear-gradient(135deg, #f3d18a 0%, #d9a25a 40%, #a0682a 70%, #f3d18a 100%)",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        drift: {
          "0%,100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        rise: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bubble: {
          "0%": { transform: "translateY(0) scale(0.8)", opacity: "0" },
          "20%": { opacity: "0.7" },
          "100%": { transform: "translateY(-120vh) scale(1.1)", opacity: "0" },
        },
      },
      animation: {
        floaty: "floaty 7s ease-in-out infinite",
        drift: "drift 11s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
        rise: "rise 0.9s ease-out both",
        bubble: "bubble 18s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
