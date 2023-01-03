import React from "react";

const MobileRentalProcess = ({ singleProcess }) => {
  return (
    <div
      className={` xl:hidden flex justify-around items-center    
      relative group py-8 xl:mx-0 mx-16
      border-l-2  border-[#d9d9d9]
      `}
    >
      <span
        className={` bg-[#d9d9d9]  group-hover:bg-red1 
        p-2 rounded-full absolute left-0 -ml-[.6rem]
        `}
      ></span>

      <div className=" flex flex-col justify-center items-center gap-y-4 bg-successfulTenancyClr xs:ml-20 ml-0 xs:basis-1/3 basis-1/2 ">
        <div className="p-4 bg-[#F7F5E9] rounded-full">
          <img
            className=" drop-shadow-sm rounded-full"
            src={`./images/pages/rental-process/${singleProcess.imgSrc}`}
            alt={singleProcess.imgAlt}
          />
        </div>
        <h2 className=" text-paragraph font-bold text-center">
          {singleProcess.heading}
        </h2>
      </div>

      <div className="xs:flex flex-col gap-y-4 hidden basis-2/3">
        <p className=" text-s text-center sm:w-[40%] w-[80%] mx-auto ">
          {singleProcess.text}
        </p>
      </div>
    </div>
  );
};

export default MobileRentalProcess;
