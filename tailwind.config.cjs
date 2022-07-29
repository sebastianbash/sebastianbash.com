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
        'sans': ["Inter", "SF\\ Pro\\ Display", "-apple-system", "BlinkMacSystemFont", "Segoe\\ UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open\\ Sans", "Helvetica\\ Neue", "sans-serif"]
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('flowbite/plugin'),
  ],
}
