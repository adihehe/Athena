/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        keyframes: {
      'fade-in': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    },
    animation: {
      'fade-in': 'fade-in 0.5s ease-in-out',
    },
      colors: {
        primary: {
          DEFAULT: '#3949AB',
          dark: '#303F9F',
          light: '#5C6BC0'
        },
        navy: {
          900: '#0f172a'  // Dark blue color for the sidebar
        }
      }
    },
  },
  plugins: [],
}