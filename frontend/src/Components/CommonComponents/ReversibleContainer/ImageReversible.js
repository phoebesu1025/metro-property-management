import React from "react";

const ImageReversible = ({
  hideImageOnMobile,
  flexDirection,
  imgSrc,
  imgAlt,
}) => {
  return (
    <div
      className={`image-content basis-1/2 h-80 
  flex justify-center items-baseline 
  lg:block ${hideImageOnMobile && "hidden"}
  `}
    >
      {/* Aligning the image to start/end depends on the image is on left/right */}
      <img
        className={`h-full w-auto 
    ${flexDirection ? "mr-auto" : "ml-auto"} 
    
    `}
        src={imgSrc}
        alt={imgAlt}
      />
    </div>
  );
};

export default ImageReversible;
