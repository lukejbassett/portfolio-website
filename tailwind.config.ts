import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        code: ["Google Sans Code", "monospace"],
      },
      colors: {
        grey: "#4D4C4D",
        accent: "#00f59f",
      },
    },
  },
} satisfies Config;
