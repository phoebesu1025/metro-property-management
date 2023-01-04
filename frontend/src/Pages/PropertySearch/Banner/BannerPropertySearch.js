import React from "react";
import MainBanner from "../../../Components/CommonComponents/MainBanner/MainBanner";

const BannerPropertySearch = () => {
  return (
    <div className="property-search-banner relative">
      <MainBanner
        data={{
          imgSrc: {
            mobile: "property-search-banner-desktop.png",
            tablet: "property-search-banner-desktop.png",
            desktop: "property-search-banner-desktop.png",
          },
          imgAlt: "Property-Search",
          text: "Property Search",
        }}
      />

      <div className="property-search-filter"></div>
    </div>
  );
};

export default BannerPropertySearch;
