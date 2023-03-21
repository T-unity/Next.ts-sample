/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '24px',
      },
    },
    extend: {
      fontFamily: {
        logo: ['Gloria Hallelujah', 'cursive'],
      },
    },
  },
  variants: {
    extend: {
      // 下2行を追加
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },

  plugins: [],
}
