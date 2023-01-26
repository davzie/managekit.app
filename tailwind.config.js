/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mkyellow: '#dea106',
        mkyellowhover: '#ab7e02',
        mkorange: '#DD7438',
        mkgreen: '#5BAF91',
        mkgreenhover: '#3e9276',
        mkpurple: '#625A9E',
        mkblue: '#496BAE',
        mkbluehover: '#365696',
        mkblack: '#101C30',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
