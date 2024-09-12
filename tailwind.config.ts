import type { Config } from "tailwindcss";

const config: Config = {
  variants: {
    extend: {
      pointerEvents: ["group-hover"],
    },
  },
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#0e1016",
      },
      linearGradients: {
        "bg-top": ["180deg", "#0e1016 0%", "transparent 50%"],
        "bg-bottom": ["0deg", "#0e1016 0%", "transparent 100%"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
