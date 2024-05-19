/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      purple: '#7E56DA',
      darkPurple: '#2C0781',
      blue: '#87cefa',
      textBlue: '#2F65E1',
      'secondary': '#F8E4FF',
      'gray': '#F5F5F5',
      'textGray': '#5E5E5E',
      'textLightGray': '#8D8F9F',
    },
    extend: {},
  },
  plugins: [],
})