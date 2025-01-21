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
      boxShadow: {
        'bottom': '0 4px 6px -1px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}

