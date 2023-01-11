import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Property from "./../PropertyCarousel/ItemProperty/Property";
import PropertyArray from "./../PropertyCarousel/PropertyArray";

const CarouselContainer = () => {
  const Properties = PropertyArray;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
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
  return (
    <div className="mx-[5rem]">
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
  );
};

export default CarouselContainer;
