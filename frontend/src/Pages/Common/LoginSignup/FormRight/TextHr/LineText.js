const LineText = ({ text }) => {
  return (
    <div className={` w-full items-center text-[#424343B2] flex gap-x-2`}>
      <hr className={`border-t-[1px]  border-[#424343B2] w-full `} />
      <p className={`italic text-paragraph min-w-fit `}>{text}</p>
      <hr className={`border-t-[1px]  border-[#424343B2] w-full  `} />
    </div>
  );
};

export default LineText;
