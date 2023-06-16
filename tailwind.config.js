/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        erpGreen: '#00AC00',
        erpRed: '#B00000',
        erpYellow: '#E6BF00',
        erpGray: '#BABABA',
        erpBackground: '#EEEEEE',
        erpWhite: '#FFFFFF',
        erpBlack: '#0a0a0a',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      container: {
        center: true,
      }
    },
  },
  plugins: [],
}
