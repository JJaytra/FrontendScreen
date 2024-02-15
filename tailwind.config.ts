import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#f9fafb",
        textbox: "#9cade9",
        sort: "#b7b7b7 ",
        card: "#fafafa",
        star: "#b789e5 ",
        term: "#cae8f3",
        reviews: "#abb4c3",
        darkCard: "#ECE9E9",
      },
    },
  },
  plugins: [],
};
export default config;
