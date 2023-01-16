import React from "react";

import "react-multi-carousel/lib/styles.css";
import PropertyTextArrange from "./PropertyTextArrange"
import PropertyArray from "../../PropertyCarousel/PropertyArray";

const PropertyComponents = () => {
    const Properties = PropertyArray[0];
    console.log(Properties)
    return (
        <div className=" w-[16rem] h-[22rem] bg-white rounded-lg absolute top-[18%] right-[5%]">


            <PropertyTextArrange item={Properties} />


        </div>
    );
};

export default PropertyComponents;
