/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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