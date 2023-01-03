import React from "react";

const DataCompany = ({ details, imgSrc, imgAlt }) => {
  return (
    <div className=" flex my-3 leading-5 mt-6
    xs:w-[13rem]
    
    lg:mb-2 lg:mt-6  ">

      <img src={imgSrc} className="mr-3 h-4 w-3 mt-1" alt={`${imgAlt}`} />
      <p className=" text-[0.75rem]
      ">
        {details}
      </p>

    </div>
  );
};

export default DataCompany;
