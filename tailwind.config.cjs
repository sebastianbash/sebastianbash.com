/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.jsx',
    'node_modules/flowbite-react/**/*.jsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        'jakarta': '"Plus Jakarta Sans", "sans-serif"'
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
