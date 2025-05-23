/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EBF8FF',
          100: '#D1EFFE',
          200: '#A7D8F0',
          300: '#7CC0E3',
          400: '#5296D3',
          500: '#3366CC',
          600: '#2355B8',
          700: '#1A3E8C',
          800: '#142C67',
          900: '#0C1B45',
        },
        secondary: {
          50: '#F2F0FF',
          100: '#E4E0FF',
          200: '#C7C0FA',
          300: '#A89BF2',
          400: '#8C75E8',
          500: '#6F4ED0',
          600: '#5A3DB1',
          700: '#472D92',
          800: '#342073',
          900: '#211554',
        },
        accent: {
          50: '#FFF8E6',
          100: '#FFF1CC',
          200: '#FFE299',
          300: '#FFD266',
          400: '#FFC133',
          500: '#FFAF00',
          600: '#DB9000',
          700: '#B77200',
          800: '#935400',
          900: '#703C00',
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};