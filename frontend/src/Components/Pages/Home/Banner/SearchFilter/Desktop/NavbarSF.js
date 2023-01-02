import React from "react";

const NavbarSF = ({ data, activeTab, changeToActive }) => {
  return (
    <ul className={` grid grid-cols-5 `}>
      {data.map((list, index) => (
        <li
          key={index}
          value={list.label}
          onClick={changeToActive}
          className={` 
        text-center text-heading3
        py-6 cursor-pointer
        rounded-t-2xl

        ${
          activeTab === list.label
            ? " bg-white text-black font-bold"
            : " bg-black text-white"
        }
     `}
        >
          {list.label}
        </li>
      ))}
    </ul>
  );
};

export default NavbarSF;
