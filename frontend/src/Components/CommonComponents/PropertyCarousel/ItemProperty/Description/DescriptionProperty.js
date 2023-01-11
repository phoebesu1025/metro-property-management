import React from "react";
import ItemDescription from "./ItemDescription";

const DescriptionProperty = ({ description }) => {
  return (
    <div className="property-description flex justify-start gap-x-4 ">
      <ItemDescription
        imgSrc="Icon _ Beds"
        itemName="Beds"
        itemDescription={description.bedroom}
      />

      <ItemDescription
        imgSrc="Icon _ Baths"
        itemName="Bathrooms"
        itemDescription={description.bathroom}
      />
      <ItemDescription
        imgSrc="Icon _ Garage Park"
        itemName="Parking"
        itemDescription={description.parking}
      />
      {description.petFriendly && (
        <ItemDescription
          imgSrc="Icon _ Pet Friendly"
          itemName="Pet Friendly"
          itemDescription="Pet Friendly"
        />
      )}
    </div>
  );
};

export default DescriptionProperty;
