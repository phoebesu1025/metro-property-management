import React from "react";
import FeatureProperties from "../Common/FeatureProperties";
import BannerRentalProcess from "./BannerRentalProcess";
import ReversibleRentalProcess from "./ReversibleRentalProcess";
import SuccessfulTenancy from "./SuccessfulTenancy/SuccessfulTenancy";

const RentalProcess = () => {
  return (
    <div className="rental-process-page">
      <BannerRentalProcess />
      <SuccessfulTenancy />
      {/* Phoebe Testimonials */}
      {/* Phoebe Finding a perfect match for your needs */}
      <ReversibleRentalProcess />
      {/* Phoebe  Meet our investment property managers */}
      {/* Phoebe  red banner */}
      {/* Phoebe  Frequently asked  questions on rental process */}
      <FeatureProperties type="Rentals" />
    </div>
  );
};

export default RentalProcess;
