import React, { useState } from "react";

const ItemsMobile = ({ data, tab }) => {
  const [activeSubMenu, setActiveSubMenu] = useState();

  function changeActiveSubMenu(e) {
    console.log(e.currentTarget.value);
    setActiveSubMenu(e.currentTarget.value);
  }

  return (
    <div
      className={`
        absolute top-0 left-0 w-full h-full
        pt-24 z-50 bg-red1
      `}
    >
      <button className="px-12">{`<`}</button>
      <p className="px-12 py-4">{tab}</p>

      {data.array.map((list, index) => (
        <button
          key={index}
          value={list.heading}
          onClick={changeActiveSubMenu}
          className={` 
            text-left text-heading3
            xl:px-24 sm:px-12 px-6 py-6 
            cursor-pointer
            flex flex-col justify-between
            border-b-[1px]
            w-full
         
          `}
        >
          <p className="flex justify-between font-bold">
            {list.heading}
            <span className=""> + </span>
          </p>

          <div
            className={` ${
              activeSubMenu === list.heading ? "flex" : "hidden"
            } flex-col gap-y-4 w-full px-6 py-2`}
          >
            {data.array.map((list, index) =>
              (list.heading === "Keep track of your records") &
              (activeSubMenu === "Keep track of your records") ? (
                <div>
                  <p className="">
                    Create an account to keep track of your favorites and rental
                    process.
                  </p>
                  <p className="font-bold">Join My Diary</p>
                  <p className="">Already a Metro customer?</p>
                  <p className="font-bold">Sign into Tenant Portal</p>
                </div>
              ) : activeSubMenu === list.heading && list.links ? (
                list.links.map((link, index) => <p key={index}>{link}</p>)
              ) : (
                activeSubMenu === list.heading && <p>{list.text}</p>
              )
            )}
          </div>
        </button>
      ))}
    </div>
  );
};

export default ItemsMobile;
