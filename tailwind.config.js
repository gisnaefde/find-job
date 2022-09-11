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
        'orangeless' : '#FEEFEA',
        'biru': '#F6FAFA',
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
        f : "67px",
        g : "290px",
        h : "303px",
        i : "210px",
      },
      screens :{
        smartPhone : {'max' : '480px'},
        tablet : {'max' : '768px'},
        laptop : {'max' : '1279px'},
        desktop : {'min' : '1280'}
      }
    },
  },
  plugins: [],
}
