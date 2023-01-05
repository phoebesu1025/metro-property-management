const ImageContainer = ({ imgSrc, imgAlt }) => {
  return (
    <div className={`login-img basis-[45%] xl:block hidden `}>
      <img className={`w-full`} src={imgSrc} alt={imgAlt} />
    </div>
  );
};

export default ImageContainer;
