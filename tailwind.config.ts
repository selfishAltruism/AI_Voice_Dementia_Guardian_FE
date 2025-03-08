import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      core: "#31ac21",
      litecore: "#7cfc6b",
      coreBg: "#31ac2118",
      black: "#000000",
      white: "#ffffff",
      gray: "rgba(0, 0, 0, 0.7)",
    },
    extend: {
      animation: {
        gradient: "gradientBG 1.5s ease infinite",
      },
      keyframes: {
        gradientBG: {
          "0%": { backgroundPosition: "200% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
