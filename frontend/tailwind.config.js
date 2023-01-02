/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xs": "320px",
      xs: "500px",
      sm: "620px",
      md: "768px",
      lg: "920px",
      xl: "1028px",
      "2xl": "1281px",
      "3xl": "1440px",
    },
    extend: {
      height: {
        100: "30rem",
        128: "27rem",
      },
    },
    colors: {
      red1: "#E4353C",
      white: "#FFFFFF",
      black: "#1A1A1A",
      pink: "#FFBFC1",
      red2: "#DA2B32",
      buttonGrey: "#666666",
      footerWhitebBg: "#F7F7F7",
      footerSubBlack: "#292A2E",
      footerSubGrey: "#737070",
      footerSubGrey2: "#424343",
      footerInput: "rgba(0,0, 0, 0.3)",
      footerBlackBg: "#333333",
      footerWhite: "#D9D9D9",
      footerGrey: "#ACABAB",
      propertyManagerBg: "#F9F4F4",
      successfulTenancyClr: "#f7f5e9",
    },
    fontSize: {
      heading1: ["3.5rem"],
      heading2: ["2.35rem"],
      heading3: ["1.175rem"],
      paragraph: ["0.825rem", { lineHeight: "1.3rem" }],
      s: ["0.8rem"],
    },
    fontFamily: {
      roboto: "roboto, sans-serif",
    },
  },
  plugins: [],
});
