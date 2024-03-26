/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors:{
        'dark': '#0B0C10',
        'dark-gray': '#1F2833',
        'gray': '#C5C6C7',
        'lagoon': '#66FCF1',
        'gray-lagoon': '#45A29E'
      },
      boxShadow:{
        'card': '0 1px 1px 1px rgb(0 0 0 / 0.3)',
      }
    },
  },
  plugins: [
      require('flowbite/plugin')
  ],
}