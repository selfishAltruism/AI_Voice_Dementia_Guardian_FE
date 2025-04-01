import type { Config } from "tailwindcss";
import { addDynamicIconSelectors } from "@iconify/tailwind";
// const { addDynamicIconSelectors } = require("@iconify/tailwind");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      main: "#002f4b",
      sub: "#64004b",
      black: "#000000",
      white: "#ffffff",
      gray: "rgba(0, 0, 0, 0.7)",
      litegray: "rgba(0, 0, 0, 0.07)",
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
  plugins: [addDynamicIconSelectors()],
} satisfies Config;
