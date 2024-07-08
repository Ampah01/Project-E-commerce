/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, white, #0F513A)',
      },
      backgroundColor: {
        'custom-color': '#0F513A',
      },
      screens: {
        'md': '768px', // Example breakpoint for medium screens
      },
    },
  },
  variants: {},
  plugins: [],
};