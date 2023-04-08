/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Montserrat"'],
      },
      width: {
        px: '960px',
      },
    },
  },
  plugins: [],
};
