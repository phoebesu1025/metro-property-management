import React from "react";

const Dot = ({ handleDots, activeSlide, slideNumber }) => {
  return (
    <button onClick={handleDots} value={slideNumber} className="got">
      <img
        src={`./images/CommonComponents/Carousel/Slider/${
          activeSlide === slideNumber ? "white-dot" : "Transparent-dot"
        }.png`}
        alt="dot"
      />
    </button>
  );
};

export default Dot;
