import { useState } from "react";

const DropdownPropertySearch = ({
  filterName,
  dropdowns,
  placeholderText,
  length,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function getInput(e) {
    setInputValue(e.currentTarget.innerText);
    setShowDropdown(!showDropdown);
  }

  function handleShowDropdown() {
    setShowDropdown(!showDropdown);
  }

  return (
    <div
      className={`property-manager-category gap-y-2 relative flex flex-col ${length} `}
    >
      <label className=" text-s absolute left-0 -top-6 uppercase text-[#303030] ">
        {filterName}
      </label>
      <input
        className={` rounded-sm w-full  border-0 font-bold text-black `}
        disabled={"disabled"}
        value={inputValue}
        placeholder={placeholderText}
        type={"text"}
      />
      <button
        onClick={handleShowDropdown}
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
      rounded-md z-10
      ${showDropdown ? "flex" : "hidden"}
       `}
      >
        {dropdowns.map((dropdown, index) => (
          <li
            key={index}
            onClick={getInput}
            value={"Residential Property Manager"}
            className="px-6 py-2 border-b-2 last:border-b-0 "
          >
            {dropdown}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownPropertySearch;
