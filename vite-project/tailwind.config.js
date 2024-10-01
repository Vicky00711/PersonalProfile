/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right,#09203F , #537895)', // Define your custom gradient  → 
        'custom-gradient2':'linear-gradient(to right,#bdc3c7 , #2c3e50)'  
      },

    },
  },
  plugins: [],
}

