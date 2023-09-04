/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F8A400",
        secondary: "#F0F0F0",
        primaryLowContrast: "rgba(250, 164, 0, 0.25)",
        primaryMidContrast: "rgba(248, 164, 0, 0.59)",
        blackMidContrast: "rgba(0, 0, 0, 0.45)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
<<<<<<< HEAD
=======

      screens: {
        'xs': '350px'
       
        },

      
>>>>>>> d6f783e9426564cb5853ddcbf9356f3ba9c18869
    },
  },
  plugins: [],
};
