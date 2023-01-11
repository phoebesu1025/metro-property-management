import BannerPropertySearch from "./Banner/BannerPropertySearch";
import PropertyListing from "./PropertyListing/PropertyListing";

const PropertySearch = () => {
  return (
    <div className="property-search">
      <BannerPropertySearch />

      <PropertyListing />
    </div>
  );
};

export default PropertySearch;
