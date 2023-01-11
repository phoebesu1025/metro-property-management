import React from "react";

const SearchButton = ({ length }) => {
  return (
    <div className={`flex justify-end items-end ${length}`}>
      <button className="property-manger-search-btn w-full bg-red1 text-white  px-10 py-2 rounded-md ">
        Search Listing
      </button>
    </div>
  );
};

export default SearchButton;
