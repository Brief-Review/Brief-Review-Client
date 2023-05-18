/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#468C95",
        secondary: "#DE6F2F",
      },
      fontFamily: {
        monserrat: "Montserrat",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
