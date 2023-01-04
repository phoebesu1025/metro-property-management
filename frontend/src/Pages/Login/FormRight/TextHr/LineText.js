const LineText = () => {
  return (
    <div className={` w-full items-center text-[#424343B2] flex gap-x-2`}>
      <hr className={`border-t-[1px]  border-[#424343B2] w-full `} />
      <p className={`italic text-paragraph min-w-fit `}>
        or continue with account,
      </p>
      <hr className={`border-t-[1px]  border-[#424343B2] w-full  `} />
    </div>
  );
};

export default LineText;
