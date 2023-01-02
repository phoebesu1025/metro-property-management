import React from "react";

const RentalProcess = ({ singleProcess }) => {
  return (
    <div className="flex flex-col justify-center items-center relative px-20 mt-12 py-8 gap-y-4 border-t-2  border-[#d9d9d9] ">
      <span className=" bg-[#d9d9d9] p-2 rounded-full absolute  top-0 -mt-[0.580rem] "></span>
      <div className="p-4 rounded-full bg-successfulTenancyClr">
        <img
          src={`./images/pages/rental-process/${singleProcess.imgSrc}`}
          alt={singleProcess.imgAlt}
        />
      </div>
      <h2 className=" text-paragraph font-bold text-center">
        {singleProcess.heading}
      </h2>
      <p className=" text-s text-center">{singleProcess.text}</p>
    </div>
  );
};

export default RentalProcess;
