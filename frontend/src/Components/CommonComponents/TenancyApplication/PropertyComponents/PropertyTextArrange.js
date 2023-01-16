import React from "react";
import Address from "../../PropertyCarousel/ItemProperty/Address";
import DescriptionProperty from "../../PropertyCarousel/ItemProperty/Description/DescriptionProperty";
import DetailsProperty from "../../PropertyCarousel/ItemProperty/DetailsProperty";
import IconHeart from "../../PropertyCarousel/ItemProperty/IconHeart";
import Location from "../../PropertyCarousel/ItemProperty/Location";
import Slider from "../../PropertyCarousel/ItemProperty/SliderProperty/Slider"
const Property = ({ item }) => {
    return (
        <div className="flex flex-col relative gap-y-2  mx-[0.9rem] mt-[1rem]">


            <h1 className="text-[0.938rem] font-semibold">You are applying for:</h1>
            <div className="text-[0.8rem]"><Address address={item.fullAddress} /></div>
            <h2 className="text-[0.8rem] font-semibold mt-[-0.5rem]">Available Now</h2>
            <div className="font-semibold"><DetailsProperty details={item} /></div>
            <Slider imgSrc={item.images} />
            <div className="text-[0.5rem] "><DescriptionProperty description={item} /></div>
        </div>
    );
};

export default Property;
