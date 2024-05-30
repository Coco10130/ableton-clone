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
        yellow: "#fbffa7",
        lightBlue: "#b1c5ff",
        lime: "#b6ffc0",
        red: "#ff764d",
        violet: "#d5b3ff",
        blue: "#0000ff"
      }
      
    },
  },
  plugins: [],
};
export default config;
