import React from "react";

const NavbarContentSF = ({ data, activeTab }) => {
  return (
    <div className="flex w-full  bg-white px-12 rounded-b-3xl">
      {data.map(
        (list, index) =>
          activeTab === list.label && (
            <div
              className="flex w-full gap-x-12 py-12 justify-between"
              key={index}
            >
              <input
                className="basis-2/4 border-2 p-4 rounded-md text-heading3 "
                type={"text"}
                placeholder={list.field.inputPlaceholder}
              />
              {list.field.category && (
                <div className="flex flex-col justify-around  basis-1/4 gap-y-2 tracking-wide">
                  <h4 className=" text-paragraph ">{list.field.category}</h4>
                  <div className="flex justify-center items-center">
                    {list.field.categories.map((inputField, index) => (
                      <label
                        htmlFor={inputField}
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

              <button
                className={`basis-1/4 bg-red1
                 text-white font-bold text-heading3
                 rounded-md px-2
                `}
              >
                {list.field.button}
              </button>
            </div>
          )
      )}
    </div>
  );
};

export default NavbarContentSF;
