import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DescriptionProperty from "../../../../Components/CommonComponents/PropertyCarousel/ItemProperty/Description/DescriptionProperty";
import Slider from "../../../../Components/CommonComponents/PropertyCarousel/ItemProperty/SliderProperty/Slider";
//import PropertyArray from "../../../../Components/CommonComponents/PropertyCarousel/PropertyArray";

const MapPropertyCarousel = ({ setMapCenter, setMapZoom, PropertyArray }) => {
  const Properties = PropertyArray;
  const [showCarousel, setShowCarousel] = useState(true);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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

  function handlePropertyShow(property) {
    // const code = e.currentTarget.getAttribute("text");
    // console.log(code.Lat);
    setMapCenter(property.geoCode);
    setMapZoom(15);
  }

  function handleMapCarousel() {
    //console.log(styles);
    setShowCarousel(!showCarousel);
  }

  return (
    <div className="px-4  bg-[#30303033]">
      <button onClick={handleMapCarousel} className="w-full py-2 ">
        ^
      </button>
      <div className={`${showCarousel ? "block" : "hidden"}`}>
        <Carousel
          className={`   py-2  gap-x-4 `}
          renderButtonGroupOutside={true}
          responsive={responsive}
        >
          {Properties.map((property, index) => (
            <div
              text={property.geoCode}
              key={index}
              className="flex flex-col bg-white p-2 gap-4 border-4 border-white mx-4 rounded-lg "
              onClick={() => handlePropertyShow(property)}
            >
              <Slider imgSrc={property.images} />
              <div className="flex justify-between ">
                <DescriptionProperty description={property} />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MapPropertyCarousel;
