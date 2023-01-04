import React from "react";
import MainBanner from "../../Components/CommonComponents/MainBanner/MainBanner";

const BannerRentalProcess = () => {
  return (
    <div>
      <MainBanner
        data={{
          imgSrc: {
            mobile: "rental-process-banner-mobile.png",
            tablet: "rental-process-banner-tablet.png",
            desktop: "rental-process-banner-desktop.png",
          },
          imgAlt: "Rental Process Banner",
          text: "Easy rental process Even in lock down",
        }}
      />
    </div>
  );
};

export default BannerRentalProcess;
