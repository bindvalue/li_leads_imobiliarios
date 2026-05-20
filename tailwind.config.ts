import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob1: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(60px, -80px) scale(1.1)" },
          "50%": { transform: "translate(120px, 40px) scale(0.9)" },
          "75%": { transform: "translate(-40px, 100px) scale(1.2)" },
        },
        blob2: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(-70px, 90px) scale(1.2)" },
          "50%": { transform: "translate(80px, -60px) scale(1)" },
          "75%": { transform: "translate(-100px, -40px) scale(0.8)" },
        },
      },
      animation: {
        blob1: "blob1 20s ease-in-out infinite",
        blob2: "blob2 25s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;