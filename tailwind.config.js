/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        resultText: "#d1d5db",
        circleGray: "#9ca3af",
        buttonBg: "#303b5a",
        summaryText: "#303b5a",
        reactionBg: "#fff0f0",
        memoryBg: "#fffaf0",
        verbalBg: "#f0fffb",
        visualBg: "#f1f2fe",
        reactionText: "#ff5757",
        memoryText: "#ffb01f",
        verbalText: "#00bd91",
        visualText: "#1125d4",
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
};
