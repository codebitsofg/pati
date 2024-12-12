import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "theme-indigo": "#906ccd",
        "theme-indigo-dark": "#7859b6",
        "theme-indigo-light": "#39316a",
        "theme-grey": "#cdcdd2",
        "theme-grey-secondary": "#6d6d81",
      },
      boxShadow: {
        light: "0 1px 10px 10px rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        lobster: ["var(--font-lobster)"],
      },
    },
  },
  plugins: [],
};
export default config;
