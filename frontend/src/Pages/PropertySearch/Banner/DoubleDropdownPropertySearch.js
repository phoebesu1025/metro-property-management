import { useState } from "react";

const DoubleDropdownPropertySearch = ({
  filterName,
  dropdowns,
  placeholderText,
  length,
}) => {
  const [showDropdownLeft, setShowDropdownLeft] = useState(false);
  const [inputValueLeft, setInputValueLeft] = useState("");
  const [showDropdownRight, setShowDropdownRight] = useState(false);
  const [inputValueRight, setInputValueRight] = useState("");

  // Left
  function getInputLeft(e) {
    setInputValueLeft(e.currentTarget.innerText);
    setShowDropdownLeft(!showDropdownLeft);
  }

  function handleShowDropdownLeft() {
    setShowDropdownLeft(!showDropdownLeft);
  }

  // Right
  function getInputRight(e) {
    setInputValueRight(e.currentTarget.innerText);
    setShowDropdownRight(!showDropdownRight);
  }

  function handleShowDropdownRight() {
    setShowDropdownRight(!showDropdownRight);
  }

  return (
    <div
      className={`property-manager-category gap-y-2 relative flex   ${length}`}
    >
      <label className=" text-s absolute left-0 -top-6 uppercase text-[#303030] ">
        {filterName}
      </label>
      <div className="relative basis-[45%]">
        <input
          className={`  rounded-sm  w-full border-0 font-bold text-black `}
          disabled={"disabled"}
          value={inputValueLeft}
          placeholder={placeholderText}
          type={"text"}
        />
        <button
          onClick={handleShowDropdownLeft}
          className="absolute  w-10 right-0 bottom-0 h-full"
        >
          <img
            className="mx-auto"
            src={`./images/CommonComponents/Banner/dropdown-icon.png`}
            alt="dropdown-icon"
          />
        </button>
        <ul
          className={`dropdown absolute  top-[97%]
      flex-col
      bg-white w-full
      drop-shadow-2xl
      rounded-md  z-10
      ${showDropdownLeft ? "flex" : "hidden"}
       `}
        >
          {dropdowns.map((dropdown, index) => (
            <li
              key={index}
              onClick={getInputLeft}
              className="px-6 py-1 border-b-2 last:border-b-0 "
            >
              {dropdown}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center font-bold basis-[10%]">
        -
      </div>
      {/* DropDown 2 */}
      <div className="relative basis-[45%]">
        <input
          className={` rounded-sm w-full border-0 font-bold text-black `}
          disabled={"disabled"}
          value={inputValueRight}
          placeholder={placeholderText}
          type={"text"}
        />
        <button
          onClick={handleShowDropdownRight}
          className="absolute  w-10 right-0 bottom-0 h-full"
        >
          <img
            className="mx-auto"
            src={`./images/CommonComponents/Banner/dropdown-icon.png`}
            alt="dropdown-icon"
          />
        </button>
        <ul
          className={`dropdown absolute  top-[97%]
      flex-col
      bg-white w-full
      drop-shadow-2xl
      rounded-md
      z-10
      ${showDropdownRight ? "flex" : "hidden"}
       `}
        >
          {dropdowns.map((dropdown, index) => (
            <li
              key={index}
              onClick={getInputRight}
              className=" px-6 py-1 border-b-2 last:border-b-0 "
            >
              {dropdown}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoubleDropdownPropertySearch;
