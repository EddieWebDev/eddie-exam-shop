/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'fruits': "url('../src/images/homeBgFruits.png')",
      },
      colors: {
        primary: {
          darkgreen: "#373D2F",
          green: "#7C846D",
          darkbeige: "#C9BDAB",
          beige: "#EDEBE4",
        },
      },
    },
  },
  plugins: [],
};
