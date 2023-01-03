import DropdownInputFilter from "./DropdownInputFilter";

const PropertyManagerSearch = () => {
  return (
    <div
      className={`absolute 2xl:px-24 sm:px-12 px-6
      w-full xl:top-[85%] sm:top-[80%]  2xs:top-[70%] top-[88%] drop-shadow-2xl
      `}
    >
      <div
        className={`flex sm:flex-row flex-wrap gap-2 flex-col justify-between py-8 px-12
        rounded-xl bg-white`}
      >
        <div className="name-search flex flex-col gap-y-2 2xl:basis-[25%] sm:basis-[45%] basis-[100%]">
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

        <div className="flex justify-end items-end 2xl:basis-[10%] sm:basis-[45%] basis-[100%]">
          <button className="property-manger-search-btn bg-red1 text-white  px-10 py-2 rounded-md ">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyManagerSearch;
