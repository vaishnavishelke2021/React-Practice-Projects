/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans for class names in these file extensions
  ],
  theme: {
    extend: {
      colors: {
        dark: "#111C1C",
        light: "#EAF5F6",
        primary: "#256C74",
        lightBlue: "#79D7E2",
        darkBlue: "#1BBED0",
      },
      fontFamily: {
        Catamaran: '"Catamaran", sans-serif;',
      },
    },
  },
  plugins: [],
};
