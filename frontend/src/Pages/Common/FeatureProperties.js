import React from "react";
import { Link } from "react-router-dom";
import CarouselContainer from "../../Components/CommonComponents/PropertyCarousel/CarouselContainer";

const FeatureProperties = ({ type }) => {
  return (
    <div className="feature-rental-properties py-20 xl:px-24 sm:px-12 px-6 ">
      <div className="flex justify-between items-center  mb-10">
        <h1 className="frp-heading xs:text-heading2 text-[1.5rem] font-bold">
          {`Featured ${type} Properties`}
        </h1>
        <Link className=" xs:flex hidden text-red1 font-bold underline ">
          View All Rentals
        </Link>
      </div>

      <CarouselContainer />

      <Link className=" xs:hidden mt-20 block text-center font-bold underline  text-red1">
        View All Rentals
      </Link>
    </div>
  );
};

export default FeatureProperties;
