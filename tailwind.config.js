/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
      colors: {
        background: '#FDFDFD',
				boxes: '#ffffff',
        bg_sidebar: '#212B36',
        text_sidebar: '#919eab',
      },
    },
  },
  plugins: [],
};
