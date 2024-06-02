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
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '1280px',
      // => @media (min-width: 960px) { ... }

      'lg': '2560px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}

