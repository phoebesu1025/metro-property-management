import React from "react";

const RentalProcess = ({ singleProcess }) => {
  return (
    <div
      className={`xl:flex  flex-col hidden
      justify-center items-center    
      relative group xl:px-8 lg:px-6 mt-12 py-8 gap-y-4 
      border-t-2  border-[#d9d9d9]
      `}
    >
      <span
        className={` bg-[#d9d9d9]  group-hover:bg-red1 
        p-2 rounded-full absolute
         xl:top-0 xl:-mt-[0.580rem] xl:left-auto left-0 mt-0 `}
      ></span>

      <div className="p-4  rounded-full bg-successfulTenancyClr bg-[#F7F5E9]">
        <img
          className="group-hover:scale-125"
          src={`./images/pages/rental-process/${singleProcess.imgSrc}`}
          alt={singleProcess.imgAlt}
        />
      </div>

      <div className="flex flex-col gap-y-4">
        <h2 className=" text-paragraph font-bold text-center">
          {singleProcess.heading}
        </h2>

        <p className=" text-s text-center">{singleProcess.text}</p>
      </div>
    </div>
  );
};

export default RentalProcess;
