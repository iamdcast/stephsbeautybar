/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-barlow)"],
        serif: ["var(--font-bodoni)"],
        magtis: ["var(--font-magtis)"],
      },
      colors: {
        primary: "#FFFEEE",
        secondary: "#F10E0E",
        secondaryFocus: "#600606",
      },
      screens: {
        sm: "0px",
        md: "750px",
        lg: "1200px",
      },
    },
  },

  daisyui: {},

  plugins: [require("daisyui")],
};
