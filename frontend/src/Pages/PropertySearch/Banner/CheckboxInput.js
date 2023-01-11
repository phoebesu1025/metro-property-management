const CheckboxInput = ({ length }) => {
  return (
    <div className={`relative flex justify-between gap-x-[1%] ${length} `}>
      <p className="text-s absolute left-0 -top-6 uppercase text-[#303030]">
        Search
      </p>

      <div className="check-box text-s bg-white flex justify-center items-center rounded-sm gap-x-2 px-2 ">
        <label className="  text-[#303030] ">Furnished</label>
        <input className="" type={"checkbox"} />
      </div>

      <div className="check-box text-s bg-white flex justify-center items-center rounded-sm gap-x-2 px-2 ">
        <label className="  text-[#303030] ">Pet Friendly</label>
        <input className="" type={"checkbox"} />
      </div>

      <div className="check-box text-s bg-white flex justify-center items-center rounded-sm gap-x-2 px-2 ">
        <label className="  text-[#303030] ">Available Now</label>
        <input className="" type={"checkbox"} />
      </div>
    </div>
  );
};

export default CheckboxInput;
