/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#212121",
        border: "#34FFC8",
        brown: "#383838",
      },
    },
  },
  plugins: [],
};
