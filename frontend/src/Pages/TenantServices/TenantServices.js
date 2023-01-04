import FeatureRentalProperties from "../Common/FeatureProperties";
import BannerTenantServices from "./BannerTenantServices";
import ReversibleTenantServicesBottom from "./ReversibleTenantServicesBottom";
import ReversibleTenantServicesTop from "./ReversibleTenantServicesTop";

const TenantServices = () => {
  return (
    <div className="tenant-services-page">
      <BannerTenantServices />
      <ReversibleTenantServicesTop />
      {/* Phoebe Finding a perfect match for your needs */}
      <ReversibleTenantServicesBottom />
      {/* Phoebe Testimonials */}
      {/* Phoebe  Meet our investment property managers */}
      <FeatureRentalProperties type="Rentals" />
      {/* Phoebe  red banner */}
      {/* Phoebe  Frequently asked  questions on rental process */}
    </div>
  );
};

export default TenantServices;
