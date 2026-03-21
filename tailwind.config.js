/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'script': ['Dancing Script', 'cursive'],
      },
      colors: {
        'primary-red': '#9c252d',
        'deep-forest-green': '#013220',
        'panna': '#f0d890',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 10px -2px rgba(0, 0, 0, 0.03)',
        'hover': '0 20px 40px -4px rgba(0, 0, 0, 0.1), 0 10px 20px -4px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
