const LeftArrow = ({ handleLeftArrow }) => {
  return (
    <button
      onClick={handleLeftArrow}
      className="sm:block hidden arrow-left absolute left-0 top-0 bottom-0 my-auto"
    >
      <img
        src="./images/CommonComponents/Carousel/Slider/white-left-arrow.png"
        alt="arrow left"
      />
    </button>
  );
};

export default LeftArrow;
