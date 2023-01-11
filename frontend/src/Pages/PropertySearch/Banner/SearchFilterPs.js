import axios from "axios";
import React, { useEffect, useState } from "react";
import CheckboxInput from "./CheckboxInput";
import DoubleDropdownPropertySearch from "./DoubleDropdownPropertySearch";
import DropdownPropertySearch from "./DropdownPropertySearch";
import RentSaleButtons from "./RentSaleButtons/RentSaleButtons";
import SearchButton from "./RentSaleButtons/SearchButton";
import TextInput from "./TextInput";

const SearchFilterPs = ({ setCustomError, setProperties }) => {
  const [region, setRegion] = useState("All Regions");
  const [suburb, setSuburb] = useState("All Suburbs");
  const [lowPrice, setLowPrice] = useState("Any");
  const [highPrice, setHighPrice] = useState("Any");
  const [bedroom, setBedroom] = useState("Any");
  const [bathroom, setBathroom] = useState("Any");
  const [propertyType, setPropertyType] = useState("");
  const [carPark, setCarPark] = useState("Any");
  const [tenants, setTenants] = useState("Any");
  const [petFriendly, setPetFriendly] = useState(false);
  const [furnished, setFurnished] = useState(false);
  const [availability, setAvailability] = useState(false);

  // const [URL, setURL] = useState(
  //   "http://localhost:5000/property-search?email:{$exists:true}"
  // );

  //  $and: [{ price: { $gte: 400 } }, { price: { $lte: 500 } }],
  useEffect(() => {
    console.log(petFriendly);
    let data = {
      region: region,
      suburb: suburb,
      bedroom: bedroom,
      bathroom: bathroom,
      carPark: carPark,
      tenants: tenants,
      price: lowPrice + highPrice,
      petFriendly: petFriendly,
      availability: availability,
      furnished: furnished,
    };

    region === "All Regions" && delete data.region;
    suburb === "All Suburbs" && delete data.suburb;
    bedroom === "Any" && delete data.bedroom;
    bathroom === "Any" && delete data.bathroom;
    carPark === "Any" && delete data.carPark;
    tenants === "Any" && delete data.tenants;
    !petFriendly && delete data.petFriendly;
    !furnished && delete data.furnished;
    !availability && delete data.availability;

    if ((lowPrice === "Any") & (highPrice === "Any")) {
      delete data.price;
    } else if (lowPrice === "Any") {
      data.price = { $lte: highPrice };
    } else if (highPrice === "Any") {
      data.price = { $gte: lowPrice };
    } else {
      delete data.price;
      data["$and"] = [
        { price: { $gte: lowPrice } },
        { price: { $lte: highPrice } },
      ];
    }

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
        setCustomError("");
      })
      .catch((error) => {
        setCustomError(error.response.data);
        setProperties("");
        console.log(error);
      });
  }, [
    availability,
    bathroom,
    bedroom,
    carPark,
    furnished,
    highPrice,
    lowPrice,
    petFriendly,
    propertyType,
    region,
    setCustomError,
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
            dropdowns={["All Regions", "Auckland", "Hamilton", "Wellington"]}
            updateDropdown={setRegion}
            dropdownValue={region}
          />

          <DropdownPropertySearch
            length={
              "3xl:basis-[18%] xl:basis-[23%] lg:basis-[30%] sm:basis-[45%] basis-[100%]"
            }
            placeholderText={"All Suburbs"}
            filterName={"Suburbs"}
            dropdowns={[
              "All Suburbs",
              "Manukau",
              "Northcote",
              "Albany",
              "Papakura",
            ]}
            updateDropdown={setSuburb}
            dropdownValue={suburb}
          />

          <DoubleDropdownPropertySearch
            length={
              "3xl:basis-[18%] xl:basis-[18%] lg:basis-[60%] basis-[100%]"
            }
            placeholderText={"Any"}
            filterName={"Price"}
            dropdowns={["Any", "300", "400", "500", "600", "700", "800", "900"]}
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
            dropdowns={["Any", "1", "2", "3", "4"]}
            updateDropdown={setBedroom}
            dropdownValue={bedroom}
          />

          <DropdownPropertySearch
            length={
              "3xl:basis-[9%] xl:basis-[18%] lg:basis-[20%] sm:basis-[45%] basis-[100%]"
            }
            placeholderText={"Any"}
            filterName={"Bathrooms"}
            dropdowns={["Any", "1", "2", "3"]}
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
            dropdowns={["Any", "1", "2", "3"]}
            updateDropdown={setCarPark}
            dropdownValue={carPark}
          />

          <DropdownPropertySearch
            length={
              "3xl:basis-[9%] xl:basis-[18%] lg:basis-[20%] sm:basis-[45%] basis-[100%]"
            }
            placeholderText={"Any"}
            filterName={"No. Of Tenants"}
            dropdowns={["Any", "1", "2", "3"]}
            updateDropdown={setTenants}
            dropdownValue={tenants}
          />

          <CheckboxInput
            petFriendly={petFriendly}
            setPetFriendly={setPetFriendly}
            availability={availability}
            setFurnished={setFurnished}
            furnished={furnished}
            setAvailability={setAvailability}
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
