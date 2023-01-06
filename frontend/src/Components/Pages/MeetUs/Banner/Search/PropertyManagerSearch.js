import { useState, useEffect } from "react"
import DropdownInputFilter from "./DropdownInputFilter";
import axios from "axios"
import ButtonGroup from "../../../../Header/Button/ButtonGroup";
import PropertyManagerAll from "../../../../CommonComponents/PropertyManagers/PropertyManagerAll";

const PropertyManagerSearch = () => {
  const [searchResult, setSearchResult] = useState([])
  const [key, setKey] = useState("")

  useEffect(() => {
    const search = async () => {
      try {
        if (!key.trim()) {
          setSearchResult([])
          return
        }
        const res = await axios.get("http://localhost:5000/propertyManagers", { params: { key: key, limit: 5 } })
        setSearchResult(res)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    search()
  }, [key])

  return (
    <>
      <div
        className={`absolute 2xl:px-24 sm:px-12 px-6
      w-full xl:top-[30%] 85 sm:top-[20%]  xs:top-[20%] 2xs:top-[10%] top-[10%] drop-shadow-2xl
      `}
      >

        <div
          className={`flex sm:flex-row flex-wrap gap-2 flex-col justify-between py-8 px-12
        rounded-xl bg-white`}
        >

          {/*   Search by name */}
          <div className="name-search flex flex-col gap-y-2 2xl:basis-[25%] sm:basis-[45%] basis-[100%]">
            <label>Search by Property manager Name</label>
            <input placeholder="Enter the name" type={"text"} value={key} onChange={(e) => setKey(e.target.value)} />
          </div>
          {/* //////////// */}

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


          {/* button */}

          <div className="flex justify-end items-end 2xl:basis-[10%] sm:basis-[45%] basis-[100%]">
            <button className="property-manger-search-btn bg-red1 text-white  px-10 py-2 rounded-md ">
              Search
            </button>
          </div>
        </div>

      </div>
      {/* ///////////////////////////////////////////////////////////////////// */}
      <PropertyManagerAll />
    </>
  );
};

export default PropertyManagerSearch;
