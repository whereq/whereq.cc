export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkmode: 'class', // Enable dark mode support
  theme: {
    extend: {
      colors: {
        // Bootswatch Superhero colors
        primary: { 
            DEFAULT: '#777777', // Superhero's primary dark blue 
            dark: '#DF691A', // Superhero's primary orange
        },
        secondary: '#2C3E50', // Superhero's secondary dark blue
        secondary: '#4E5D6C', // Darker gray
        background: '#2C3E50', // Dark background
        text: '#ECF0F1', // Light text
        accent: '#5BC0DE', // Light blue for accents
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'], // Use Open Sans as the default font
      },
    },
  },
  plugins: [],
};