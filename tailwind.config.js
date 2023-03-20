/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#00AC00',
        red: '#B00000',
        yellow: '#E6BF00',
        gray: '#BABABA',
        background: '#EEEEEE',
        white: '#FFFFFF',
        black: '#0f172a'
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
