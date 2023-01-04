import React from "react";
import MainBanner from "../../../CommonComponents/MainBanner/MainBanner";
import PropertyManagerSearch from "./Search/PropertyManagerSearch";

const MeetUsBanner = () => {
  return (
    <div className="meet-us-banner relative  2xl:mb-20 lg:mb-36 sm:mb-40 xs:mb-60 mb-72">
      <MainBanner
        data={{
          imgSrc: {
            desktop: "meet-us-banner-desktop.png",
            tablet: "meet-us-banner-tablet.png",
            mobile: "meet-us-banner-mobile.png ",
          },
          imgAlt: "Meet US banner",
          text: `Stress Free Process During 
          Lock Down | We are online too`,
        }}
      />

      <PropertyManagerSearch />
    </div>
  );
};

export default MeetUsBanner;
