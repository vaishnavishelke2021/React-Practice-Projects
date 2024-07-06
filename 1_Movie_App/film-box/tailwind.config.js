/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#161616",
        secondary: "#f6f6f6", 
        orange: "#E65C19",
      },
    },
  },
  plugins: [],
};
