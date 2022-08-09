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
    // eslint-disable-next-line global-require
    require('flowbite/plugin'),
  ],
}
