/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.jsx',
    'node_modules/flowbite-react/**/*.jsx'
  ],
  theme: {},
  plugins: [
    // eslint-disable-next-line global-require
    require('flowbite/plugin'),
  ],
}
