import React from "react";
import FeatureProperties from "../Common/FeatureProperties";
import BannerRentalProcess from "./BannerRentalProcess";
import ReversibleRentalProcess from "./ReversibleRentalProcess";
import SuccessfulTenancy from "./SuccessfulTenancy/SuccessfulTenancy";
import SuccessfulInvestors from "../../Components/CommonComponents/SuccessfulInvestors/Main/SuccessfulInvestors"
import Needs from "../../Components/CommonComponents/Needs/Needs"
import PropertyManagers from "../../Components/CommonComponents/PropertyManagers/PropertyManager";
import RedBanner from "../../Components/CommonComponents/RedBanner/RedBanner1/RedBanner1"
import Faq from "../../Components/CommonComponents/FAQ/Main/Faq"

const RentalProcess = () => {
  return (
    <div className="rental-process-page">
      <BannerRentalProcess />
      <SuccessfulTenancy />
      <SuccessfulInvestors />
      <Needs />
      <ReversibleRentalProcess />
      <PropertyManagers />
      <FeatureProperties type="Rentals" />
      <RedBanner />
      <Faq />

    </div>
  );
};

export default RentalProcess;
