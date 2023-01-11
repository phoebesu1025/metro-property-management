import React from "react";
import MainBanner from "../../../Components/CommonComponents/MainBanner/MainBanner";
import SearchFilterPs from "./SearchFilterPs";

const BannerPropertySearch = ({ setProperties, setCustomError }) => {
  return (
    <div className="property-search-banner relative 3xl:mb-36 2xl:mb-60  mb-0">
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

      <SearchFilterPs
        setCustomError={setCustomError}
        setProperties={setProperties}
      />
    </div>
  );
};

export default BannerPropertySearch;
