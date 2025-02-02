/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#AFF21D',
        nv_background: '#3F403E',
        background: '#232126'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 25.93%, rgba(0, 0, 0, 0.50) 34.79%, #000 89.89%)',
      },
      boxShadow: {
        'bottom': '0 4px 6px -1px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}

