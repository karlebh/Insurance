module.exports = {
  purge: [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
  "./src/**/**/*.{vue,js,ts,jsx,tsx}",
  ],
  content: [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
      colors: {
            //   indigo: 'red',
            //   violet: {
            //     dark: 'hsl(256, 26%, 20%)',
            //   }
            //   'teal': {
            //     100: 'teal',
            //     200: 'red',
            //     300: 'blue',
            //   }
          }
        },
      },

      plugins: [],
    }