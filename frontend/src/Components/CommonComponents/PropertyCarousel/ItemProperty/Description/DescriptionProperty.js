import React from "react";
import ItemDescription from "./ItemDescription";

const DescriptionProperty = () => {
  return (
    <div className="property-description flex justify-start gap-x-4">
      <ItemDescription
        imgSrc="Icon _ Beds"
        itemName="Beds"
        itemDescription="4"
      />

      <ItemDescription
        imgSrc="Icon _ Baths"
        itemName="Bathrooms"
        itemDescription="1"
      />
      <ItemDescription
        imgSrc="Icon _ Garage Park"
        itemName="Parking"
        itemDescription="2"
      />
      <ItemDescription
        imgSrc="Icon _ Pet Friendly"
        itemName="Pet Friendly"
        itemDescription="Pet Friendly"
      />
    </div>
  );
};

export default DescriptionProperty;
