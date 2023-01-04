import ContentReversible from "./ContentReversible";
import ImageReversible from "./ImageReversible";

const Reversible = ({
  flexDirection,
  title,
  heading,
  text,
  subText,
  buttons,
  imgSrc,
  imgAlt,
  hideImageOnMobile,
}) => {
  return (
    <div
      className={`
    flex ${flexDirection ? flexDirection : "lg:flex-row"} flex-col
    lg:gap-x-6 gap-x-0 lg:gap-y-0 gap-y-6
    2xl:px-24 xl:px-16 sm:px-12 px-6 
    py-10
    `}
    >
      <ContentReversible
        title={title}
        heading={heading}
        text={text}
        subText={subText}
        buttons={buttons}
      />
      <ImageReversible
        hideImageOnMobile={hideImageOnMobile}
        flexDirection={flexDirection}
        imgSrc={imgSrc}
        imgAlt={imgAlt}
      />
    </div>
  );
};

export default Reversible;
