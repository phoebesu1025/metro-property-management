import React from "react";
import MainBanner from "../../../Components/CommonComponents/MainBanner/MainBanner";
import SearchFilterPs from "./SearchFilterPs";

const BannerPropertySearch = () => {
  return (
    <div className="property-search-banner relative mb-44 ">
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

      <SearchFilterPs />
    </div>
  );
};

export default BannerPropertySearch;
