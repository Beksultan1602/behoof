/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1366px',
        xl: '1440px',
      },
    },
    colors: {
      'main-red': '#FF4D4D',
      'white': '#fff',
      'black': '#0F1113',
      'gray': '#F2F5F9',
      'categories-text': '#7E8794'
    },
    extend: {},
  },
  plugins: [],
}

