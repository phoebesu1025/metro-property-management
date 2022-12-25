/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      red1: 'E4353C',
      white: 'FFFFF',
      black: '1A1A1A',
      pink: 'FFBFC1',
      red2: 'DA2B32',
    },
  },
  plugins: [],
}
