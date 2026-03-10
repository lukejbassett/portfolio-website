import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        DEFAULT: "64rem",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        code: ["Google Sans Code", "monospace"],
      },
      fontSize: {
        body: ["1.125rem", { lineHeight: "1.5rem" }],
      },
      colors: {
        accent: "#00f59f",
        bg: {
          light: "#28313d",
          dark: "#EDFFEC",
        },
        text: {
          light: "#EDFFEC",
          dark: "#0A001B",
        },
      },
    },
  },
} satisfies Config;
