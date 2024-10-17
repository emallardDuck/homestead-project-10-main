import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: "#681d49",
      },
      fontFamily: {
        "geist-sans": "var(--font-geist-sans)",
        "dm-serif-display": "var(--font-dm-serif-display)",
        inter: "var(--font-inter)",
      },
    },
  },
  plugins: [],
};
export default config;
