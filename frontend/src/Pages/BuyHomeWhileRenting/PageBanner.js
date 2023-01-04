import React from "react";
import MainBanner from "../../Components/CommonComponents/MainBanner/MainBanner";

const PageBanner = () => {
  return (
    <MainBanner
      data={{
        imgSrc: {
          mobile: "buyahome-banner-mobile.png",
          tablet: "buyahome-banner-tablet.png",
          desktop: "buyahome-banner-desktop.png",
        },
        imgAlt: "Buy a home Banner",
        text: "Invest In Properties While Renting",
      }}
    />
  );
};

export default PageBanner;
