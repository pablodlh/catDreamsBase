/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: '#262626',
        header: '#262626',
        primary: '#00ACD8',
        background2: '#202021',
      },
    },
  },
  plugins: [],
};
