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
          blue: '#0F172A', // Deep slate/navy for a corporate feel
          lightBlue: '#1E293B', // Slightly lighter for secondary elements
          red: '#E11D48', // Crisp, modern red for accents/CTAs
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