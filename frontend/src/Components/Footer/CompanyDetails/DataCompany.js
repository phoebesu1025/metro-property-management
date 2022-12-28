import React from "react";

const DataCompany = ({ details, imgSrc, imgAlt }) => {
  return (
    <div className="mt-8 flex mb-2">
      <img src={imgSrc} className="mr-3 h-4 w-3 mt-1" alt={`${imgAlt}`} />
      <p className="text-paragraph w-[50%]">{details}</p>
    </div>
  );
};

export default DataCompany;
