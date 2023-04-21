/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  variants: {
    display: ['group-hover'],
  },
  theme: {
    extend: {
      spacing: {
        '48p': '48%',
      },
      fontFamily: {
        main: "'Manrope', sans-serif",
      },
      fontSize: {
        xxs: '0.8rem',
        xxxs: '0.6rem',
      },
      colors: {
        primary: '#0BAB7C',
        'primary-hover': '#0B996E',
        black: {
          1: '#13131A',
          2: '#1C1C24',
          3: '#21212B',
        },
        natural: {
          1: '#696974',
          2: '#92929D',
          3: '#E2E2EA',
          4: '#F1F1F5',
          5: '#F5F5F8',
          6: '#FAFAFB',
        },
      },
      screens: {
        xs: { max: '400px' },
      },
    },
  },
  plugins: [],
};
