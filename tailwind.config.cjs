/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        nav: "#8d7762",
        dark:"#2a2a2a",
        back:"#cdbeaf",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
     
    },
    screens: {
      'sm': {'min': '400px', 'max': '600px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '600px', 'max': '768px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '768px', 'max': '992px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '922px', 'max': '1200px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
