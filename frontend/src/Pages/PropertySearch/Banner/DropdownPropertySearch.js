import { useEffect, useRef, useState } from "react";

const DropdownPropertySearch = ({
  filterName,
  dropdowns,
  placeholderText,
  length,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const ref = useRef();
  useOnClickOutside(ref, () => setShowDropdown(false));

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

  function getInput(e) {
    setInputValue(e.currentTarget.innerText);
    setShowDropdown(!showDropdown);
  }

  function handleShowDropdown() {
    setShowDropdown(!showDropdown);
  }

  return (
    <div
      ref={ref}
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
      rounded-md z-50
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
