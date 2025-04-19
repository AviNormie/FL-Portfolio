// tailwind.config.js
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          cream: {
            50: '#F5F2E9', // Very light cream
            100: '#EAE2D0', // Light cream
            200: '#D8CCAF', // Medium cream
            300: '#C7B78E', // Dark cream
          },
        },
      },
    },
    plugins: [
      require('@tailwindcss/line-clamp'), // Optional: for text truncation
    ],
  }