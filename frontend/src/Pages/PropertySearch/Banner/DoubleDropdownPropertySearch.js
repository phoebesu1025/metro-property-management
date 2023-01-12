import { useEffect, useRef, useState } from "react";

const DoubleDropdownPropertySearch = ({
  filterName,
  dropdowns,
  placeholderText,
  length,
  updateLowPrice,
  updateHighPrice,
  dropdownLowPrice,
  dropdownHighPrice,
  setProperty,
}) => {
  const [showDropdownLeft, setShowDropdownLeft] = useState(false);

  const [showDropdownRight, setShowDropdownRight] = useState(false);

  function outsideClickHandler() {
    setShowDropdownRight(false);
    setShowDropdownLeft(false);
  }

  const ref = useRef();
  useOnClickOutside(ref, outsideClickHandler);

  function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }

          handler(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      // Add ref and handler to effect dependencies
      // It's worth noting that because passed in handler is a new ...
      // ... function on every render that will cause this effect ...
      // ... callback/cleanup to run every render. It's not a big deal ...
      // ... but to optimize you can wrap handler in useCallback before ...
      // ... passing it into this hook.
      [ref, handler]
    );
  }

  // Left
  function getInputLeft(e) {
    updateLowPrice(e.currentTarget.innerText);
    setShowDropdownLeft(!showDropdownLeft);
    setProperty("");
  }

  function handleShowDropdownLeft() {
    setShowDropdownLeft(!showDropdownLeft);
  }

  // Right
  function getInputRight(e) {
    updateHighPrice(e.currentTarget.innerText);
    setShowDropdownRight(!showDropdownRight);
    setProperty("");
  }

  function handleShowDropdownRight() {
    setShowDropdownRight(!showDropdownRight);
  }

  return (
    <div
      ref={ref}
      className={`property-manager-category gap-y-2 relative flex   ${length}`}
    >
      <label className=" text-s absolute left-0 -top-6 uppercase text-[#303030] ">
        {filterName}
      </label>
      <div className="relative basis-[45%]">
        <input
          className={`  rounded-sm  w-full border-0 font-bold text-black `}
          disabled={"disabled"}
          value={dropdownLowPrice}
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
          value={dropdownHighPrice}
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
