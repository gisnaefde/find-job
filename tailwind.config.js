/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'green':'#1EA59A',
        'greenless' : '#B7E2DF',
        'abu':'#7D8186',
        'orange': '#FE753E',
        'biru': '#F6FAFA'
      },
      fontFamily : {
        'oswald':['Oswald', "sans-serif"],
        'Mulish' :["Mulish", "sans-serif"]
      },
      spacing : {
        a : "827px",
        b : "626px",
        c : "491px",
        d : "123px",
        e : "190px",
        f : "67px"
      }
    },
  },
  plugins: [],
}
