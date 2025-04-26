/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          900: '#800020',
          800: '#8E1537',
          700: '#9C2A4E',
          600: '#AA3F65',
          500: '#B8547C',
        },
        wine: {
          900: '#722F37',
          800: '#88404D',
          700: '#9E5163',
          600: '#B46279',
          500: '#CA738F',
        },
        pink: {
          900: '#FF69B4',
          800: '#FF7BBD',
          700: '#FF8DC6',
          600: '#FF9FCF',
          500: '#FFB1D8',
        }
      },
      fontFamily: {
        'primary': ['Playfair Display', 'serif'],
        'secondary': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}