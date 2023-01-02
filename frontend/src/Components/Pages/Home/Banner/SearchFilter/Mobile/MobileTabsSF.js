import React from "react";

const MobileTabsSF = ({ data, activeTab, changeToActive }) => {
  return (
    <ul className={`  `}>
      {data.map((list, index) => (
        <li
          key={index}
          value={list.label}
          onClick={changeToActive}
          className={` 
            text-left text-heading3
            xl:px-24 sm:px-12 px-6 py-6 
            cursor-pointer
            flex flex-col justify-between
            border-b-[1px]
            ${
              activeTab === list.label
                ? " bg-white text-black font-bold"
                : " bg-black text-white"
            }
          `}
        >
          <p className="flex justify-between">
            {list.label}
            <span className=""> + </span>
          </p>

          <div
            className={` ${
              activeTab === list.label ? "flex" : "hidden"
            }  w-full bg-white rounded-b-3xl`}
          >
            {data.map(
              (list, index) =>
                activeTab === list.label && (
                  <div
                    className="flex flex-col w-full gap-y-6 py-6 justify-between"
                    key={index}
                  >
                    <div className="flex justify-between gap-x-8">
                      <input
                        className="basis-2/3 border-2 p-4 rounded-md text-heading3 "
                        type={"text"}
                        placeholder={list.field.inputPlaceholder}
                      />
                      <button
                        className={`basis-1/3 bg-red1
                  text-white font-bold text-heading3
                  rounded-md px-2
                  `}
                      >
                        {list.field.button}
                      </button>
                    </div>
                    {list.field.category && (
                      <div className="flex flex-col justify-around  basis-1/4 gap-y-2 tracking-wide">
                        <div className="flex justify-center items-center">
                          {list.field.categories.map((inputField, index) => (
                            <label
                              for={inputField}
                              key={index}
                              className="basis-1/2 flex justify-start items-center"
                            >
                              <input
                                type="radio"
                                value={inputField}
                                name={"category"}
                                className="accent-red1 w-4 h-4"
                              />
                              <span className="ml-2 text-s">{inputField}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MobileTabsSF;
