import React from "react";

const ItemDescription = ({ imgSrc, itemName, itemDescription }) => {
  return (
    <div className={`flex items-center ${itemName}`}>
      <img
        className="h-8 w-8"
        src={`./images/CommonComponents/Carousel/${imgSrc}.png`}
        alt={itemName}
      />
      <p className="ml-2"> {itemDescription} </p>
    </div>
  );
};

export default ItemDescription;
