/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1D4ED8', // Blue color for bg-primary
          dark: '#1E40AF', // Optional darker shade for hover or other states
        },
      },
    },
  },
  plugins: [],
}