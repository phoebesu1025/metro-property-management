import React from "react";

const Breadcrum = ({ setViewType, viewType }) => {
  function handleViewType() {
    console.log("dfsdf");
    viewType === "Grid-View"
      ? setViewType("Map-View")
      : setViewType("Grid-View");
  }

  return (
    <div className="property-search-breadcrum  flex justify-end mt-52 px-24 ">
      <button
        onClick={handleViewType}
        className=" text-heading3 font-bold text-red1 rounded-lg py-3 px-6 border-2 border-red2 "
      >
        {viewType === "Grid-View" ? "Map-View" : "Grid-View"}
      </button>
    </div>
  );
};

export default Breadcrum;
