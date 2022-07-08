/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'green':'#1EA59A'
      },
      fontFamily : {
        'oswald':['Oswald', "sans-serif"],
        'Mulish' :["Mulish", "sans-serif"]
      }
    },
  },
  plugins: [],
}
