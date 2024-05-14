/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Vazir"],
      },
      fontSize: {
        "2xs": "0.5rem",
      },
      padding: {
        "2/3": "66.66666%",
        "1/3": "33.33333%",
      },
    },
  },
  plugins: [],
};
