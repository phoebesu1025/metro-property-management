/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // for edging I used
      // px-[1.7rem]
      // sm:px-[3rem]
      // lg:mx-[4rem]/ "lg:px-[7rem] (somehow, it doesn't work after I set xs size)""
      //will change to 6rem
      "2xs": "320px", //Mobile
      xs: "500px",
      sm: "620px",
      md: "768px", //tablet
      lg: "920px",
      xl: "1028px",
      "2xl": "1281px",
      "3xl": "1440px", //desktop
    },
    extend: {
      height: {
        100: "30rem",
        128: "27rem",
      },
      backgroundImage: {
        'myProfileBg': "linear-gradient(93.06deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 64.34%), url('../public/images/myProfile/pic.png')",

        'tenancyApplication': "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 180.34%), url('../public/images/tenancyApplication/bg.png')",

        'marbleBg': "url('../public/images/tenancyApplication/marbleBg.png')"

      }
    },
    colors: {
      red1: "#E4353C",
      red2: "#DA2B32",
      red3: "#CB1B22",

      white: "#FFFFFF",
      black: "#000000",
      black1: "#1A1A1A",
      pink: "#FFBFC1",

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
      successfulInvestorBg: "#F9F4F4",
      successfulInvestorHd: "#4E4E4E",
      successfulInvestorTx: "#444343",

      FaqHeading: "#686868",
      FaqText: "#3F4D64",

      bookMeBtnBg: "#303030",
      buttonBorderGrey1: "#494646",
      popUpTxt1: "#787878",
      popUpStar: "#CC1543",
      popUpInput: "#949495"


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
  plugins: [require("flowbite/plugin")],
};
