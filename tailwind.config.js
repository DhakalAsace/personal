/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          500: '#ec4899',
        },
        purple: {
          600: '#9333ea',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}