/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
 
    content: [
      
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
   
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  
  theme: {
    extend: {

    },
    colors: {
      emerald: colors.emerald,
      'forestgreen': '#0a342f',
    },
  },
  plugins: [],
}

