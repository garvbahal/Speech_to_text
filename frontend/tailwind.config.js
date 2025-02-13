/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        BlueSpeech: "#5852CC",
        GreySpeech: "#484554",
      },
    },
  },
  plugins: [],
};
