import axios from "axios";
import React, { useEffect, useState } from "react";
import CheckboxInput from "./CheckboxInput";
import DoubleDropdownPropertySearch from "./DoubleDropdownPropertySearch";
import DropdownPropertySearch from "./DropdownPropertySearch";
import RentSaleButtons from "./RentSaleButtons/RentSaleButtons";
import SearchButton from "./RentSaleButtons/SearchButton";
import TextInput from "./TextInput";

const SearchFilterPs = ({ properties, setProperties }) => {
  const [region, setRegion] = useState("All Regions");
  const [suburb, setSuburb] = useState("All Suburbs");
  const [lowPrice, setLowPrice] = useState("");
  const [highPrice, setHighPrice] = useState("");
  const [bedroom, setBedroom] = useState("Any");
  const [bathroom, setBathroom] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [carPark, setCarPark] = useState("");
  const [tenants, setTenants] = useState("");

  // const [URL, setURL] = useState(
  //   "http://localhost:5000/property-search?email:{$exists:true}"
  // );

  useEffect(() => {
    let data = {
      region: region,
      suburb: suburb,
      bedroom: bedroom,
    };

    region === "All Regions" && delete data.region;
    suburb === "All Suburbs" && delete data.suburb;
    bedroom === "Any" && delete data.bedroom;

    let config = {
      method: "post",
      url: "http://localhost:5000/property-search",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        setProperties(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [
    bathroom,
    bedroom,
    carPark,
    highPrice,
    lowPrice,
    propertyType,
    region,
    setProperties,
    suburb,
    tenants,
  ]);

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
            dropdowns={["All Regions", "Auckland", "Papakura", "Manukau"]}
            updateDropdown={setRegion}
            dropdownValue={region}
          />

          <DropdownPropertySearch
            length={
              "3xl:basis-[18%] xl:basis-[23%] lg:basis-[30%] sm:basis-[45%] basis-[100%]"
            }
            placeholderText={"All Suburbs"}
            filterName={"Suburbs"}
            dropdowns={["All Suburbs", "Takanini", "Manurewa", "Wey Mouth"]}
            updateDropdown={setSuburb}
            dropdownValue={suburb}
          />

          <DoubleDropdownPropertySearch
            length={
              "3xl:basis-[18%] xl:basis-[18%] lg:basis-[60%] basis-[100%]"
            }
            placeholderText={"Any"}
            filterName={"Price"}
            dropdowns={["1", "2", "3"]}
            updateLowPrice={setLowPrice}
            updateHighPrice={setHighPrice}
            dropdownLowPrice={lowPrice}
            dropdownHighPrice={highPrice}
          />

          <DropdownPropertySearch
            length={
              "3xl:basis-[9%] xl:basis-[18%] lg:basis-[30%] sm:basis-[45%] basis-[100%]"
            }
            placeholderText={"Any"}
            filterName={"Bedrooms"}
            dropdowns={["1", "2", "3", "4"]}
            updateDropdown={setBedroom}
            dropdownValue={bedroom}
          />

          <DropdownPropertySearch
            length={
              "3xl:basis-[9%] xl:basis-[18%] lg:basis-[20%] sm:basis-[45%] basis-[100%]"
            }
            placeholderText={"Any"}
            filterName={"Bathrooms"}
            dropdowns={["1", "2", "3"]}
            updateDropdown={setBathroom}
            dropdownValue={bathroom}
          />

          {/* Flex 2nd */}

          <DropdownPropertySearch
            length={
              "3xl:basis-[9%] xl:basis-[18%] lg:basis-[30%] sm:basis-[45%] basis-[100%]"
            }
            placeholderText={"Any"}
            filterName={"Property Type"}
            dropdowns={["Auckland", "Papakura", "Manukau"]}
            updateDropdown={setPropertyType}
            dropdownValue={propertyType}
          />

          <DropdownPropertySearch
            length={
              "3xl:basis-[9%] xl:basis-[18%] lg:basis-[20%] sm:basis-[45%] basis-[100%]"
            }
            placeholderText={"Any "}
            filterName={"No. Of Car Park"}
            dropdowns={["1", "2", "3"]}
            updateDropdown={setCarPark}
            dropdownValue={carPark}
          />

          <DropdownPropertySearch
            length={
              "3xl:basis-[9%] xl:basis-[18%] lg:basis-[20%] sm:basis-[45%] basis-[100%]"
            }
            placeholderText={"Any"}
            filterName={"No. Of Tenants"}
            dropdowns={["1", "2", "3"]}
            updateDropdown={setTenants}
            dropdownValue={tenants}
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
