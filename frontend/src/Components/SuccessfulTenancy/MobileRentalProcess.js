import React from "react";

const MobileRentalProcess = ({ singleProcess }) => {
  return (
    <div
      className={` xl:hidden flex justify-start items-center    
      relative group py-8 
      border-l-2  border-[#d9d9d9]
      `}
    >
      <span
        className={` bg-[#d9d9d9]  group-hover:bg-red1 
        p-2 rounded-full absolute left-0 -ml-[.6rem]
        `}
      ></span>

      <div className="p-4 rounded-full bg-successfulTenancyClr ml-10">
        <img
          src={`./images/pages/rental-process/${singleProcess.imgSrc}`}
          alt={singleProcess.imgAlt}
        />
      </div>

      <div className="flex flex-col gap-y-4">
        <h2 className=" text-paragraph font-bold text-center">
          {singleProcess.heading}
        </h2>

        <p className=" text-s text-center w-[50%] mx-auto ">
          {singleProcess.text}
        </p>
      </div>
    </div>
  );
};

export default MobileRentalProcess;
