/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#12302e",
          light: "#2e5a54",
        },
        teal: {
          DEFAULT: "#5bbcb0",
          dark: "#0e6a62",
          muted: "#5a8a84",
          pale: "#7aaaa4",
        },
        ember: {
          DEFAULT: "#e07030",
          dark: "#d86020",
          light: "#f4a040",
          muted: "#8a6040",
          pale: "#c07040",
        },
        sand: {
          DEFAULT: "#9ab8b4",
          light: "#4a7a74",
        },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.55s cubic-bezier(.22,1,.36,1) both",
        "spin-slow": "spin 0.85s linear infinite",
      },
    },
  },
  plugins: [],
}