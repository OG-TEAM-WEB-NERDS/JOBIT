/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        main: "'Manrope', sans-serif",
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
        lg: { max: '1800px' },
        md: { max: '990px' },
        sm: { max: '600px' },
        xs: { max: '400px' },
        minmd: '1700px',
        minlg: '2100px',
      },
    },
  },
  plugins: [],
};
