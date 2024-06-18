/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lemon: "rgb(255, 253, 235)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontWeight: {
        "roboto-regular": 400,
        "roboto-medium": 500,
        "roboto-bold": 700,
        "roboto-black": 900,
      },
    },
  },
  plugins: [],
};
