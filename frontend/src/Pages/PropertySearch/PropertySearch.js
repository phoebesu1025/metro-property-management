import { useState } from "react";
import BannerPropertySearch from "./Banner/BannerPropertySearch";
import PropertyListing from "./PropertyListing/PropertyListing";

const PropertySearch = () => {
  const [properties, setProperties] = useState();
  const [customError, setCustomError] = useState();

  return (
    <div className="property-search">
      <BannerPropertySearch
        properties={properties}
        setProperties={setProperties}
        setCustomError={setCustomError}
      />

      <PropertyListing customError={customError} properties={properties} />
    </div>
  );
};

export default PropertySearch;
