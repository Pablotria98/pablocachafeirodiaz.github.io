import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // includes MDX for blog
  ],
  darkMode: "class", // enables manual dark mode via 'dark' class
  theme: {
    extend: {
      colors: {
        terminalGreen: "#00ff00", // optional terminal color
      },
      fontFamily: {
        mono: ["Courier New", "monospace"],
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // optional, improves inputs like the terminal UI
    require("@tailwindcss/typography"), // for blog markdown
  ],
};

export default config;
