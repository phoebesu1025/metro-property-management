import React from "react";

const MainBanner = ({ data }) => {
  return (
    <div
      className={`
        relative z-[-1]
      `}
    >
      {/* Mobile banner Image */}
      <img
        className={`sm:hidden w-full`}
        src={`./images/CommonComponents/Banner/${data.imgSrc.mobile}`}
        alt={data.imgAlt}
      />
      {/* Tablet banner Image */}
      <img
        className={`xl:hidden  sm:block hidden w-full`}
        src={`./images/CommonComponents/Banner/${data.imgSrc.tablet}`}
        alt={data.imgAlt}
      />
      {/* Desktop banner Image */}
      <img
        className={` xl:block hidden w-full `}
        src={`./images/CommonComponents/Banner/${data.imgSrc.desktop}`}
        alt={data.imgAlt}
      />
      <h2
        className={` 
          xs:text-heading1 text-heading2 xs:leading-[4.5rem] leading-10  text-white font-bold 
          absolute 
          2xl:top-1/3 top-[25%]
          2xl:px-24 sm:px-12 px-6
          3xl:w-[70rem] w-full 
          ${
            data.text === "Property Search" &&
            "left-0 right-0 text-center font-normal 2xl:top-[20%]  mx-auto "
          }
      `}
      >
        {data.text}
      </h2>
    </div>
  );
};

export default MainBanner;
