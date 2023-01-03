import React, { useState } from "react";

const ItemsMobile = ({ data, tab, backToNavList }) => {
  const [activeSubMenu, setActiveSubMenu] = useState();

  function changeActiveSubMenu(e) {
    console.log(e.currentTarget.value);
    if (activeSubMenu === e.currentTarget.value) {
      setActiveSubMenu("");
    } else {
      setActiveSubMenu(e.currentTarget.value);
    }
  }

  return (
    <div
      className={`
        absolute top-0 left-0 w-full h-full
       z-50 bg-red1
      `}
    >
      <button onClick={backToNavList} className="px-12 py-12">
        <img
          className="h-5 "
          src={`./images/CommonComponents/Header/Left-arrow.png`}
          alt="Left Arrow"
        />
      </button>
      <p className="xl:px-24 sm:px-12 px-6 py-4 text-[1.5rem] font-bold">
        {tab}
      </p>

      {data.array.map((list, index) => (
        <div>
          <button
            key={index}
            value={list.heading}
            onClick={changeActiveSubMenu}
            className={` 
            text-left text-heading3
             py-8
            cursor-pointer 
            flex flex-col justify-between
            border-b-[1px]
            w-full
          `}
          >
            <p className="flex justify-between text-heading3 xl:px-24 sm:px-12 px-6">
              {list.heading}
              <span className=""> + </span>
            </p>
          </button>

          <div
            className={` ${
              activeSubMenu === list.heading ? "flex" : "hidden"
            } flex-col  w-full `}
          >
            {data.array.map((list, index) =>
              (list.heading === "Keep track of your records") &
              (activeSubMenu === "Keep track of your records") ? (
                <div>
                  <p className="bg-white text-red1 xl:px-36 sm:px-20 px-16 py-8 border-b-2 border-red1">
                    Create an account to keep track of your favorites and rental
                    process.
                  </p>
                  <p className="font-bold bg-white text-red1 xl:px-36 sm:px-20 px-16 py-8 border-b-2 border-red1">
                    Join My Diary
                  </p>
                  <p className="bg-white text-red1 xl:px-36 sm:px-20 px-16 py-8 border-b-2 border-red1">
                    Already a Metro customer?
                  </p>
                  <p className="font-bold bg-white text-red1 xl:px-36 sm:px-20 px-16 py-8 border-b-2 border-red1">
                    Sign into Tenant Portal
                  </p>
                </div>
              ) : activeSubMenu === list.heading && list.links ? (
                list.links.map((link, index) => (
                  <p
                    className="bg-white text-red1 xl:px-36 sm:px-20 px-16 py-8 border-b-2 border-red1 "
                    key={index}
                  >
                    {link}
                  </p>
                ))
              ) : (
                activeSubMenu === list.heading && (
                  <p className="bg-white text-red1 xl:px-36 sm:px-20 px-16 py-8 border-b-2 border-red1">
                    {list.text}
                  </p>
                )
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsMobile;
