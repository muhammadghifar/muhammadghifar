/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6B6BD7',
        'secondary': '#A0A0DA',
        'dark': '#181818'
      },
      keyframes: {
        'text-slide': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        'text-slide': 'text-slide 5s linear infinite',
      }
    },
  },
  plugins: [],
}

