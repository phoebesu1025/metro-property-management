import { useState } from "react";

const DropdownInputFilter = ({ filterName, dropdowns, selectDropdown, dropdownValue }) => {
  const [showDropdown, setShowDropdown] = useState(false);


  function getInput(e) {
    selectDropdown(e.currentTarget.innerText);
    setShowDropdown(!showDropdown);
    // console.log(e.currentTarget.innerText)
  }


  function handleShowDropdown() {
    setShowDropdown(!showDropdown);
  }

  return (
    <div className="property-manager-category gap-y-2 relative flex flex-col 2xl:basis-[28%] sm:basis-[45%] basis-[100%]">
      <label>{filterName}</label>
      <input
        disabled={"disabled"}
        value={dropdownValue}
        placeholder="Choose one"
        type={"text"}
      />
      <button
        onClick={handleShowDropdown}
        className="absolute right-4 bottom-4"
      >
        <img
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
      ${showDropdown ? "flex" : "hidden"}
       `}
      >
        {dropdowns.map((dropdown, index, value) => (
          <li
            key={index}
            onClick={getInput}
            value={value}
            className="px-6 py-4 border-b-2 last:border-b-0 "
          >
            {dropdown}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownInputFilter;
