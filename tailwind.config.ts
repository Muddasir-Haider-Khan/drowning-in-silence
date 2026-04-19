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
        black: "#09090f",
        void: "#0e0e18",
        surface: "#14141f",
        elevated: "#1c1c2e",
        border: "#252538",
        gold: {
          DEFAULT: "#cba245",
          light: "#dfbe73",
          dark: "#b3882f",
          muted: "#cba24530",
        },
        dream: {
          DEFAULT: "#7c6ff0",
          light: "#a59ef5",
          dark: "#5a52cc",
          muted: "#7c6ff020",
        },
        text: {
          primary: "#f5f5f8",
          secondary: "#a0a0b8",
          muted: "#606078",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
        "radial-gold":
          "radial-gradient(ellipse at center, rgba(203,162,69,0.15) 0%, transparent 70%)",
        "radial-dream":
          "radial-gradient(ellipse at center, rgba(124,111,240,0.12) 0%, transparent 70%)",
        "hero-gradient":
          "linear-gradient(135deg, #09090f 0%, #0e0e18 40%, #14141f 100%)",
        "card-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%, rgba(255,255,255,0.02) 100%)",
      },
      boxShadow: {
        gold: "0 0 40px rgba(203,162,69,0.15), 0 0 80px rgba(203,162,69,0.05)",
        "gold-sm": "0 0 20px rgba(203,162,69,0.2)",
        dream: "0 0 40px rgba(124,111,240,0.15), 0 0 80px rgba(124,111,240,0.05)",
        card: "0 4px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.05) inset",
        "card-hover": "0 8px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(203,162,69,0.2)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        shimmer: "shimmer 2s infinite linear",
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 4s ease-in-out infinite",
        "scan-line": "scanLine 8s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
