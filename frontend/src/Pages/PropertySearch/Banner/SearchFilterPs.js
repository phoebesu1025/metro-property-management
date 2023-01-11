import React from "react";
import CheckboxInput from "./CheckboxInput";
import DoubleDropdownPropertySearch from "./DoubleDropdownPropertySearch";
import DropdownPropertySearch from "./DropdownPropertySearch";
import RentSaleButtons from "./RentSaleButtons/RentSaleButtons";
import SearchButton from "./RentSaleButtons/SearchButton";
import TextInput from "./TextInput";

const SearchFilterPs = () => {
  return (
    <div
      className={` property-search-filter relative 2xl:absolute 2xl:px-24 sm:px-12 px-6 py-12
      w-full xl:top-[60%] sm:top-[80%]  2xs:top-[70%] top-[88%] drop-shadow-2xl
      
      `}
    >
      <div className="rounded-md bg-gray-300 px-6 pt-2 pb-10">
        <div
          className={`flex sm:flex-row flex-wrap gap-y-10 gap-x-[1%] flex-col justify-between   pt-12
         `}
        >
          <RentSaleButtons
            length={
              "3xl:basis-[18%] xl:basis-[23%]  lg:basis-[30%] basis-[100%]"
            }
          />

          <DropdownPropertySearch
            length={
              "3xl:basis-[18%] xl:basis-[23%] lg:basis-[30%] sm:basis-[45%] basis-[100%]"
            }
            placeholderText={"All Regions"}
            filterName={"Region"}
            dropdowns={["Auckland", "Papakura", "Manukau"]}
          />

          <DropdownPropertySearch
            length={
              "3xl:basis-[18%] xl:basis-[23%] lg:basis-[30%] sm:basis-[45%] basis-[100%]"
            }
            placeholderText={"All Suburbs"}
            filterName={"Suburbs"}
            dropdowns={["Takanini", "Manurewa", "Wey Mouth"]}
          />

          <DoubleDropdownPropertySearch
            length={
              "3xl:basis-[18%] xl:basis-[18%] lg:basis-[60%] basis-[100%]"
            }
            placeholderText={"Any"}
            filterName={"Price"}
            dropdowns={["1", "2", "3"]}
          />

          <DropdownPropertySearch
            length={
              "3xl:basis-[9%] xl:basis-[18%] lg:basis-[30%] sm:basis-[45%] basis-[100%]"
            }
            placeholderText={"Any"}
            filterName={"Bedrooms"}
            dropdowns={["1", "2", "3"]}
          />

          <DropdownPropertySearch
            length={
              "3xl:basis-[9%] xl:basis-[18%] lg:basis-[20%] sm:basis-[45%] basis-[100%]"
            }
            placeholderText={"Any"}
            filterName={"Bathrooms"}
            dropdowns={["1", "2", "3"]}
          />

          {/* Flex 2nd */}

          <DropdownPropertySearch
            length={
              "3xl:basis-[9%] xl:basis-[18%] lg:basis-[30%] sm:basis-[45%] basis-[100%]"
            }
            placeholderText={"Any"}
            filterName={"Property Type"}
            dropdowns={["Auckland", "Papakura", "Manukau"]}
          />

          <DropdownPropertySearch
            length={
              "3xl:basis-[9%] xl:basis-[18%] lg:basis-[20%] sm:basis-[45%] basis-[100%]"
            }
            placeholderText={"Any "}
            filterName={"No. Of Car Park"}
            dropdowns={["1", "2", "3"]}
          />

          <DropdownPropertySearch
            length={
              "3xl:basis-[9%] xl:basis-[18%] lg:basis-[20%] sm:basis-[45%] basis-[100%]"
            }
            placeholderText={"Any"}
            filterName={"No. Of Tenants"}
            dropdowns={["1", "2", "3"]}
          />

          <CheckboxInput
            length={
              "3xl:basis-[30%]  lg:basis-[45%] sm:basis-[45%] basis-[100%]"
            }
          />

          <TextInput
            length={
              "3xl:basis-[18%] lg:basis-[30%] sm:basis-[45%] basis-[100%]"
            }
          />

          <SearchButton
            length={
              "3xl:basis-[18%] lg:basis-[20%] sm:basis-[45%] basis-[100%]"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFilterPs;

/* 
 ----  Text Input  ----

    <div className="name-search flex flex-col gap-y-2 2xl:basis-[25%] sm:basis-[45%] basis-[100%]">
          <label>Search by Property manager Name</label>
          <input placeholder="Enter the name" type={"text"} />
        </div>








*/
