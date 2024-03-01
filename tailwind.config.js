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
      'lightBlue': '#d5e9f0',
      'blue': '#9dcadc',
      'red': '#dcaf9e',
      'black': '#404554',
      'gray': '#8d92a1'
    },
    fontFamily: {
      'head': 'Mulish, sans-serif',
      'body':"Metrophobic, sans-serif",
    }
  },
  plugins: [],
}

