import React from "react";
import Address from "./Address";
import DescriptionProperty from "./Description/DescriptionProperty";
import DetailsProperty from "./DetailsProperty";
import IconHeart from "./IconHeart";
import Location from "./Location";
import Slider from "./SliderProperty/Slider";

const Property = ({ item }) => {
  return (
    <div className="flex flex-col relative gap-y-2 pb-4 mx-6 ">
      <IconHeart />
      <Slider imgSrc={item.images} />
      <Location text={item.specialText} />
      <Address address={item.fullAddress} />
      <DetailsProperty details={item} />
      <DescriptionProperty description={item} />
    </div>
  );
};

export default Property;
