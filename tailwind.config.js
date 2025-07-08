/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
// tailwind.config.js
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts}'],
    // tailwind.config.js
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'Kantumruy Pro', 'sans-serif'], // this overrides Tailwind's default
                moul: ['Roboto', 'Moul', 'sans-serif']
            },
        },
    },
    plugins: [],
}
