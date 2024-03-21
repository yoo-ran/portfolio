/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#f7fcfe',
      'pale': '#fff',
      'lightBlue': '#d5e9f0',
      'blue': '#9dcadc',
      'red': '#dcaf9e',
      'black': '#404554',
      'gray': '#8d92a1'
    },
    fontFamily: {
      'head': 'Mulish, sans-serif',
      'body':"Metrophobic, sans-serif",
    },
    extend: {
      keyframes: {
        morpheus: {
          //top-left top-right bottom-right bottom-left / left-top right-top right-bottom left-bottom
          "0%": { borderRadius: '30% 60% 60% 30% / 30% 30% 60% 60%;' },
          '20%': { borderRadius: '60% 40% 40% 60% / 60% 25% 75% 40%;' },
          '40%': { borderRadius: '50% 30% 65% 35% / 80% 45% 55% 50%;' },
          '60%': { borderRadius: '30% 50% 70% 30% / 20% 30% 80% 70%;' },
          '80%': { borderRadius: '40% 40% 40% 60% / 70% 40% 45% 60%;' },
          '100%': { borderRadius: '30% 60% 60% 30% / 30% 30% 60% 60%;' }
        },
        height: {
          '192': '48rem',
        }
      }
    }
  },
  plugins: [],
}

