/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        rose: '#B78496',
        mauve: '#9C8695',
        cream: '#FAF6F3',
        blush: '#F3E4E6',
        lavender: '#D8CFDD',
        ink: '#42373D',
        plum: '#8B5E70',
        border: '#E7D9DD',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        script: ['Allura', 'cursive'],
      },
    },
  },
  plugins: [],
}
