/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      mantis: {
        50: '#f6faf3',
        100: '#e9f5e3',
        200: '#d3eac8',
        300: '#afd89d',
        400: '#82bd69',
        500: '#61a146',
        600: '#4c8435',
        700: '#3d692c',
        800: '#345427',
        900: '#2b4522',
      },
      aqua: {
        50: '#effefd',
        100: '#c7fffd',
        200: '#8ffffb',
        300: '#3df9f8',
        400: '#1ae2e7',
        500: '#02c2ca',
        600: '#0099a3',
        700: '#047781',
        800: '#086067',
        900: '#0c4f55',
      },

      white: '#ffffff',
      black: '#000000',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#61a146',
          50: '#f6faf3',
          100: '#e9f5e3',
          200: '#d3eac8',
          300: '#afd89d',
          400: '#82bd69',
          500: '#61a146',
          600: '#4c8435',
          700: '#3d692c',
          800: '#345427',
          900: '#2b4522',
        },
      },
    },
  },
  plugins: [],
}
