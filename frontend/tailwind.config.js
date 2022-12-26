/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      tablet: '960px',
      desktop: '1248px'
    },
    colors: {
      red1: '#E4353C',
      white: '#FFFFFF',
      black: '#1A1A1A',
      pink: '#FFBFC1',
      red2: '#DA2B32'
    },
    fontSize: {
      'heading1': ['60px'],
      'heading2': ['40px'],
      'heading3': ['20px'],
      'paragraph': ['14px', { lineHeight: '22px' }]
    },
    fontFamily: {
      roboto: 'roboto, sans-serif'
    },
  },
  plugins: [],
}
