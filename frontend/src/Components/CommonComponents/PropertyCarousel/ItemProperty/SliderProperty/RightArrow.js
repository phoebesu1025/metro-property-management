const RightArrow = ({ handleRightArrow }) => {
  return (
    <button
      onClick={handleRightArrow}
      className="sm:block hidden arrow-right absolute right-0 top-0 bottom-0 my-auto"
    >
      <img
        src="../images/CommonComponents/Carousel/Slider/white-right-arrow.png"
        alt="arrow right"
      />
    </button>
  );
};

export default RightArrow;
