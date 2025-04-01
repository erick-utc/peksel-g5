// import {heroui} from "@heroui/theme"
import {heroui} from "@heroui/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    addCommonColors: true,
    themes: {
      light: {
        background: '#1B4B39',
        foreground: '#ffffff'
      },
      dark: {
        background: '#1B4B39',
        foreground: '#ffffff'
      }
    }
  })],
}

module.exports = config;