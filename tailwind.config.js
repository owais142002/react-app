/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      textColor: {
        originalColor: "#004899",
      },
      backgroundColor: {
        originalColor: "#004899",
      },
      colors: {
        originalColor: "#004899",
      },
      fontFamily: {
        display: ["Poppins"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
