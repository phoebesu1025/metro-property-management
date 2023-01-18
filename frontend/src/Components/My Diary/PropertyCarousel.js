import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Property from "./../CommonComponents/PropertyCarousel/ItemProperty/Property";
import PropertyArray from "./../CommonComponents/PropertyCarousel/PropertyArray";

const PropertyCarousel = () => {
    const Properties = PropertyArray;
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 500, min: 0 },
            items: 1,
        },
    };
    return (
        <>
            <div className="">
                <Carousel
                    className="pb-20"
                    renderButtonGroupOutside={true}
                    responsive={responsive}
                >
                    {Properties.map((property, index) => (
                        <Property item={property} key={index} />
                    ))}
                </Carousel>
            </div>
        </>
    )
}

export default PropertyCarousel