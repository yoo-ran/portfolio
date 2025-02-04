/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{html,js}',
  ],
  theme: {
    fontFamily: {
      head: 'Mulish, sans-serif',
      body: 'Metrophobic, sans-serif',
      accent: 'Permanent Marker, cursive',
    },
    extend: {
      keyframes: {
        moveLogo: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      colors: {
        white: '#f7fcfe',
        pale: '#fff',
        lightBlue: '#d5e9f0',
        blue: '#9dcadc',
        red: '#dcaf9e',
        black: '#404554',
        gray: '#8d92a1',
        lightGray: '#c6c6c6',
      },
    },
    screens: {
      sm: '640px',
      md: '820px',
      lg: '1024px',
      xl: '1632px',
      '2xl': '2591px',
      '3xl': '3072px',
    },
  },
  plugins: [],
};
