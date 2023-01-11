const CheckboxInput = ({
  petFriendly,
  setPetFriendly,
  length,
  setAvailability,
  setFurnished,
  availability,
  furnished,
}) => {
  return (
    <div className={`relative flex justify-between gap-x-[1%] ${length} `}>
      <p className="text-s absolute left-0 -top-6 uppercase text-[#303030]">
        Search
      </p>

      <div className="check-box text-s bg-white flex justify-center items-center rounded-sm gap-x-2 px-2 ">
        <label className="  text-[#303030] ">Furnished</label>
        <input
          onChange={() => setFurnished(!furnished)}
          checked={furnished}
          className=""
          type={"checkbox"}
        />
      </div>

      <div className="check-box text-s bg-white flex justify-center items-center rounded-sm gap-x-2 px-2 ">
        <label className="  text-[#303030] ">Pet Friendly</label>
        <input
          onChange={() => setPetFriendly(!petFriendly)}
          checked={petFriendly}
          className=""
          type={"checkbox"}
        />
      </div>

      <div className="check-box text-s bg-white flex justify-center items-center rounded-sm gap-x-2 px-2 ">
        <label className="  text-[#303030] ">Available Now</label>
        <input
          onChange={() => setAvailability(!availability)}
          checked={availability}
          className=""
          type={"checkbox"}
        />
      </div>
    </div>
  );
};

export default CheckboxInput;
