/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#FEFCF9',
          100: '#FAF7F2',
          200: '#F4EDE0',
          300: '#EDE0CA',
        },
        blush: {
          50:  '#FDF0F2',
          100: '#F9E0E4',
          200: '#F0C8CE',
          300: '#E5B0B8',
          400: '#D4849A',
          500: '#C0607A',
        },
        plum: {
          50:  '#F5F0FA',
          100: '#E8DFF0',
          200: '#D5C5E5',
          300: '#BAA5D5',
          400: '#9B80BC',
          500: '#7B5CA0',
          600: '#5C3A7E',
          700: '#4A2555',
          800: '#3A1D43',
          900: '#2A1530',
        },
        lavender: {
          50:  '#F5F2FA',
          100: '#EDE8F5',
          200: '#D8D0EC',
          300: '#C0B5E0',
          400: '#A89BBD',
          500: '#8B7DAB',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans:  ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
