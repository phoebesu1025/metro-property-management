import React, { useState } from "react";
import DropdownArray from "../Dropdown/DropdownArray";
import ItemsMobile from "./ItemsMobile";

const NavMobile = () => {
  const dropdowns = DropdownArray;
  const [activeTab, setActiveTab] = useState();
  function changeToActiveTab(e) {
    console.log(e.currentTarget.value);
    setActiveTab(e.currentTarget.value);
  }
  return (
    <div
      className={`absolute bg-red1 
        h-full w-full left-0 top-0
        pt-24 text-white z-40 xl:hidden
      `}
    >
      <button className="px-12">X</button>

      {dropdowns.map((navList, index) => (
        <button
          value={navList.name}
          onClick={changeToActiveTab}
          key={index}
          className="flex justify-between px-12 py-4 border-b-2 w-full"
        >
          <p>{navList.name}</p>
          <span>{`>`}</span>
        </button>
      ))}

      {dropdowns.map(
        (subMenu, index) =>
          activeTab === subMenu.name && (
            <ItemsMobile key={index} tab={activeTab} data={subMenu} />
          )
      )}
    </div>
  );
};

export default NavMobile;
