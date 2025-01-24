/** @type {import('tailwindcss').Config} */
/** export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
} */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      primary: {
        50: '#f0f9ff',
        500: '#3b82f6',
        600: '#2563eb',
        main: '#3B82F6'
      },
      clipPath: {
        'polygon': 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
      }
    }},
  },
  plugins: [],
}
