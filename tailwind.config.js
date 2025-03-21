/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./theme.config.tsx",
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--primary-rgb))",
          foreground: "rgb(var(--primary-foreground-rgb))",
        },
        border: {
          DEFAULT: "rgb(var(--border-rgb))",
        },
        danger: {
          DEFAULT: "rgb(var(--danger-rgb))",
          foreground: "rgb(var(--danger-foreground-rgb))",
        },
        outline: {
          DEFAULT: "rgba(var(--outline-rgb))",
          foreground: "rgb(var(--outline-foreground-rgb))",
        },
        background: {
          DEFAULT: "rgb(var(--background-rgb))",
          foreground: "rgb(var(--background-foreground-rgb))",
        },
        content1: {
          DEFAULT: "rgb(var(--content1-rgb))",
          foreground: "rgb(var(--content1-foreground-rgb))",
        },
        content2: {
          DEFAULT: "rgb(var(--content2-rgb))",
          foreground: "rgb(var(--content2-foreground-rgb))",
        },
        content3: {
          DEFAULT: "rgb(var(--content3-rgb))",
          foreground: "rgb(var(--content3-foreground-rgb))",
        },
        focus: {
          DEFAULT: "rgb(var(--focus-rgb))",
          foreground: "rgb(var(--focus-foreground-rgb))",
        },
      },
      animation: {
        blob: "blob 12s infinite",
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(125px, -120px) scale(1.2)",
          },
          "66%": {
            transform: "translate(-90px, 70px) scale(0.8)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
