// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0000FF', // Primary blue
          red: '#FF0000', // Primary red
          amber: '#D0A44F', // Secondary amber
          white: '#FFFFFF',
          offWhite: '#F8FAFC', // For subtle section backgrounds
        }
      },
      fontFamily: {
        // A clean sans-serif is crucial for the minimalist look
        sans: ['Inter', 'system-ui', 'sans-serif'], 
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)', // Cleaner, softer shadows for cards
      }
    },
  },
  plugins: [],
}