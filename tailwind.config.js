/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#2D2E2E",
        secondary: "#FBD40E",
        grey: "#F8FAFC",
      },
    },
  },
  plugins: [],
};
