/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myWhite: "#fcfcfc",
        grey: "#9F9F9F"
      },
    },
  },
  plugins: [],
};
