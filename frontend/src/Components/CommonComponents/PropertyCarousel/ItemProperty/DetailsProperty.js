import React from "react";

const DetailsProperty = ({ details }) => {
  return (
    <div className="property-details flex justify-between ">
      <p className="price">{`$${details.price}/w`}</p>
      <p className="code">{details.code}</p>
    </div>
  );
};

export default DetailsProperty;
