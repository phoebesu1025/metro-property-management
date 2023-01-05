import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Property from "./../PropertyCarousel/ItemProperty/Property";

const CarouselContainer = () => {
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
    <div className="">
      <Carousel
        className="pb-20"
        renderButtonGroupOutside={true}
        responsive={responsive}
      >
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
