/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      tablet: '960px',
      desktop: '1248px'
    },
    extend: {
      height: {
        '100': '30rem',
        '128': 'rem'
      }
    },
    colors: {
      red1: '#E4353C',
      white: '#FFFFFF',
      black: '#1A1A1A',
      pink: '#FFBFC1',
      red2: '#DA2B32',
      footerWhitebBg: '#F7F7F7',
      footerSubBlack: "#292A2E",
      footerSubGrey: '#737070',
      footerSubGrey2: '#424343',
      footerInput: 'rgba(0,0, 0, 0.3)',
      footerBlackBg: '#333333',
      footerWhite: '#D9D9D9',
      footerGrey: '#ACABAB'

    },
    fontSize: {
      'heading1': ['60px'],
      'heading2': ['40px'],
      'heading3': ['20px'],
      'paragraph': ['14px', { lineHeight: '22px' }],
      's': ['0.8rem']
    },
    fontFamily: {
      roboto: 'roboto, sans-serif'
    },
  },
  plugins: [],
}
