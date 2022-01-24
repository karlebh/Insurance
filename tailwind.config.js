module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
        extend: {
            fontFamily: {
                new: ['Barlow', 'Fraunces', 'Nunito'],
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