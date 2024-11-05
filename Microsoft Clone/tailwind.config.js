/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'max-lg': { 'max': '1084px' },  // Target screens smaller than 1024px
        'max-md': { 'max': '768px' },   // Target screens smaller than 768px
        'max-sm': { 'max': '640px' },   // Target screens smaller than 640px
        'max-ssm': { 'max': '560px' },   // Target screens smaller than 640px
      },
    },
  },
  plugins: [],
}
