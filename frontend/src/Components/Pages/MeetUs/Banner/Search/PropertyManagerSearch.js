import React from "react";
import DropdownInputFilter from "./DropdownInputFilter";

const PropertyManagerSearch = () => {
  return (
    <div
      className={`xl:absolute relative 2xl:px-24 sm:px-12 px-6
      w-full top-[85%] drop-shadow-2xl
      `}
    >
      <div
        className={`flex xl:flex-row flex-wrap gap-2 flex-col justify-between py-8 px-12
        rounded-3xl bg-white`}
      >
        <div className="name-search flex flex-col gap-y-2">
          <label>Search by Property manager Name</label>
          <input placeholder="Enter the name" type={"text"} />
        </div>

        <DropdownInputFilter
          filterName={"Filter by category"}
          dropdowns={[
            "Residential Property Manager",
            "Commercial Property Manager",
            "Finance Advisor",
          ]}
        />

        <DropdownInputFilter
          filterName={"Filter by location"}
          dropdowns={["Auckland Central", "Albany", "Hamilton"]}
        />

        <div className="flex justify-center items-end">
          <button className="property-manger-search-btn bg-red1 text-white  px-10 py-2 rounded-md ">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyManagerSearch;
