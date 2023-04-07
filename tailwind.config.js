/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myWhite: "#FFFFFF",
        grey: "#757575"
      },
    },
    screen: {
      "2xl": "1920px",
      "3xl": "2560px"
    }
  },
  plugins: [],
};
