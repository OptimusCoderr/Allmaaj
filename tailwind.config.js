/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#FF0000',
          silver: '#C0C0C0',
          orange: '#FFA500',
          yellow: '#FFFF00',
          black: '#000000',
        }
      }
    },
  },
  plugins: [],
};