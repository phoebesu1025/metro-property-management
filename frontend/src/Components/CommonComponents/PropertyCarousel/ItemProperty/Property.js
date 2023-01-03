import React from "react";
import Address from "./Address";
import DescriptionProperty from "./Description/DescriptionProperty";
import DetailsProperty from "./DetailsProperty";
import IconHeart from "./IconHeart";
import Location from "./Location";
import Slider from "./SliderProperty/Slider";

const Property = () => {
  return (
    <div className="flex flex-col relative xl:px-12 px-6 gap-y-2">
      <IconHeart />
      <Slider />
      <Location />
      <Address />
      <DetailsProperty />
      <DescriptionProperty />
    </div>
  );
};

export default Property;
