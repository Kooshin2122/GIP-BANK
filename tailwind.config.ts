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
      screens: {
        md: "1500px",
        "1-md": "1385px",
        sm: "1080px",
        "1-sm": "890px",
      },

      colors: {
        primary: "#F05A28",
        secondary: "#23407D",
        primarytp: "#FAF6F4",
        grey: "#555555",
      },
      container: {
        center: true,
      },

      keyframes: {
        wiggle: {
          "0%": { marginTop: "-10px" },
          "50%": { margin: "0px" },
        },

        navbar: {
          "0%": { marginRight: "-100px" },
          "50%": { margin: "0px" },
        },
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
        navbar: "navbar 200ms ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
