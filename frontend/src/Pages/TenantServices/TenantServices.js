import FeatureRentalProperties from "../Common/FeatureProperties";
import BannerTenantServices from "./BannerTenantServices";
import ReversibleTenantServicesBottom from "./ReversibleTenantServicesBottom";
import ReversibleTenantServicesTop from "./ReversibleTenantServicesTop";
import Needs from "../../Components/CommonComponents/Needs/Needs"
import SuccessfulInvestors from "../../Components/CommonComponents/SuccessfulInvestors/Main/SuccessfulInvestors"
import PropertyManagers from "../../Components/CommonComponents/PropertyManagers/PropertyManager";
import RedBanner from "../../Components/CommonComponents/RedBanner/RedBanner1/RedBanner1"
import Faq from "../../Components/CommonComponents/FAQ/Main/Faq"

const TenantServices = () => {
  return (
    <div className="tenant-services-page">
      <BannerTenantServices />
      <ReversibleTenantServicesTop />
      <Needs />
      <ReversibleTenantServicesBottom />
      <SuccessfulInvestors />
      <PropertyManagers />
      <FeatureRentalProperties type="Rentals" />
      <RedBanner />
      <Faq />
    </div>
  );
};

export default TenantServices;
