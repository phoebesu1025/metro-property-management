import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropdownArray from "../Dropdown/DropdownArray";
import ItemsMobile from "./ItemsMobile";

const NavMobile = ({ handleMobileNavbar }) => {
  const dropdowns = DropdownArray;
  const [activeTab, setActiveTab] = useState();

  const [showSubMenu, setShowDropdown] = useState(false);

  const navigate = useNavigate();

  function changeToActiveTab(e) {
    setActiveTab(e.currentTarget.value);
    setShowDropdown(true);
  }

  function backToNavList() {
    setShowDropdown(false);
  }

  function handleMyAccount() {
    navigate("/login");
    handleMobileNavbar();
  }

  return (
    <div
      className={`absolute bg-red1 
        h-[95%] w-full left-0 top-[5rem]
        pt-24  text-white z-40 xl:hidden
      `}
    >
      {dropdowns.map((navList, index) => (
        <button
          value={navList.name}
          onClick={changeToActiveTab}
          key={index}
          className="flex justify-between items-center  py-8 border-b-2 w-full"
        >
          <p className="sm:pl-12 pl-6 text-heading3 ">{navList.name}</p>
          <img
            className="h-5 sm:pr-12 pr-6"
            src={`./images/CommonComponents/Header/Right-arrow.png`}
            alt="Right Arrow"
          />
        </button>
      ))}

      {showSubMenu &&
        dropdowns.map(
          (subMenu, index) =>
            activeTab === subMenu.name && (
              <ItemsMobile
                handleMobileNavbar={handleMobileNavbar}
                key={index}
                backToNavList={backToNavList}
                tab={activeTab}
                data={subMenu}
              />
            )
        )}

      <button
        onClick={handleMyAccount}
        className="sm:hidden flex absolute text-heading3 font-bold sm:left-12 left-6 bottom-[20%] px-8 rounded-md py-4 bg-black"
      >
        My Account
      </button>
    </div>
  );
};

export default NavMobile;
