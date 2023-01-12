import { useState } from "react";
import BannerPropertySearch from "./Banner/BannerPropertySearch";
import Breadcrum from "./Breadcrum/Breadcrum";
import CustomMap from "./PropertyListing/MapView/CustomMap";
import PropertyListing from "./PropertyListing/PropertyListing";

const PropertySearch = () => {
  const [properties, setProperties] = useState();
  const [customError, setCustomError] = useState();
  const [viewType, setViewType] = useState("Grid-View");

  const [mapZoom, setMapZoom] = useState(5);
  const [mapCenter, setMapCenter] = useState({
    lat: -40.598935231429586,
    lng: 172.33237563615862,
  });

  return (
    <div className="property-search w-full">
      <BannerPropertySearch
        properties={properties}
        setProperties={setProperties}
        setCustomError={setCustomError}
        setMapZoom={setMapZoom}
        setMapCenter={setMapCenter}
      />

      <Breadcrum viewType={viewType} setViewType={setViewType} />

      {viewType === "Grid-View" && (
        <PropertyListing customError={customError} properties={properties} />
      )}

      {viewType === "Map-View" && (
        <CustomMap
          mapZoom={mapZoom}
          mapCenter={mapCenter}
          properties={properties}
          setMapZoom={setMapZoom}
          setMapCenter={setMapCenter}
        />
      )}
    </div>
  );
};

export default PropertySearch;
