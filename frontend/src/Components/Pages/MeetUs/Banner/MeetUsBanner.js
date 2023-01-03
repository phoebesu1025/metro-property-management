import React from "react";
import MainBanner from "../../../CommonComponents/MainBanner/MainBanner";
import PropertyManagerSearch from "./Search/PropertyManagerSearch";

const MeetUsBanner = () => {
  return (
    <div className="meet-us-banner relative mt-40">
      <MainBanner
        data={{
          imgSrc: {
            desktop: "meet-us-banner-desktop.png",
            tablet: "meet-us-banner-desktop.png",
            mobile: "meet-us-banner-desktop.png ",
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
