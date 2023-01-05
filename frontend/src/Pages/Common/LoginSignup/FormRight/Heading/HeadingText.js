const HeadingText = ({ text }) => {
  return (
    <h1
      className={` w-full text-heading2 font-semibold  text-center tracking-wide mb-3 `}
    >
      {text}
    </h1>
  );
};

export default HeadingText;
