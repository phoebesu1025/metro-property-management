import PropertyManagersPopUp1 from "./PopUp/PropertyManagersPopUp1";
import PropertyManagersPopUp2 from "./PopUp/PropertyManagersPopUp2";
import PropertyManagersPopUp3 from "./PopUp/PropertyManagersPopUp3";
import PropertyManagersPopUp4 from "./PopUp/PropertyManagersPopUp4";
import PropertyManagersPopUp5 from "./PopUp/PropertyManagersPopUp5";
import PropertyManagersPopUp6 from "./PopUp/PropertyManagersPopUp6";
import PropertyManagersPopUp7 from "./PopUp/PropertyManagersPopUp7";
import { useState, useEffect } from "react";
import DropdownInputFilter from "./DropdownInputFilter";
import BookMeeting from "./../../../../CommonComponents/PropertyManagers/ManagerCardSection/Buttons/BookMeeting";

const PropertyManagerSearch = () => {
  const [showData, setShowData] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [inputCategories, setInputCategories] = useState("");
  const [inputLocation, setInputLocation] = useState("");
  const [openPopUp1, setOpenPopUp1] = useState(false);
  const [openPopUp2, setOpenPopUp2] = useState(false);
  const [openPopUp3, setOpenPopUp3] = useState(false);
  const [openPopUp4, setOpenPopUp4] = useState(false);
  const [openPopUp5, setOpenPopUp5] = useState(false);
  const [openPopUp6, setOpenPopUp6] = useState(false);
  const [openPopUp7, setOpenPopUp7] = useState(false);

  let URL = "http://localhost:5000/propertyManagers?";

  let requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };

  useEffect(() => {
    if (inputCategories) {
      if (inputCategories !== "All") {
        if (URL.at(-1) === "?") {
          URL = URL + `category=${inputCategories}`
        } else {
          URL = URL + `&category=${inputCategories}`
        }
      }
    }

    if (inputLocation) {
      if (inputLocation !== "All") {
        if (URL.at(-1) === "?") {
          URL = URL + `location=${inputLocation}`
        } else {
          URL = URL + `&location=${inputLocation}`
        }
      }
    }

    fetch(URL, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setShowData(result)
      })
      .catch(error => console.log('error', error));
  }, [inputCategories, inputLocation]);

  return (
    <>

      <div>
        {openPopUp1 && <PropertyManagersPopUp1 closePopUp={setOpenPopUp1} />}
        {openPopUp2 && <PropertyManagersPopUp2 closePopUp={setOpenPopUp2} />}
        {openPopUp3 && <PropertyManagersPopUp3 closePopUp={setOpenPopUp3} />}
        {openPopUp4 && <PropertyManagersPopUp4 closePopUp={setOpenPopUp4} />}
        {openPopUp5 && <PropertyManagersPopUp5 closePopUp={setOpenPopUp5} />}
        {openPopUp6 && <PropertyManagersPopUp6 closePopUp={setOpenPopUp6} />}
        {openPopUp7 && <PropertyManagersPopUp7 closePopUp={setOpenPopUp7} />}
      </div>

      <div
        className={`relative 2xl:px-24 sm:px-12 px-6
      w-full xl:top-[-5rem] 85 sm:top-[-5rem]  xs:top-[-5rem] 2xs:top-[-5rem] top-[-5rem] drop-shadow-2xl
      `}
      >
        <div
          className={`flex sm:flex-row flex-wrap gap-2 flex-col justify-between py-8 px-12
        rounded-xl bg-white`}
        >
          {/*   Search by name */}
          <div className="name-search flex flex-col gap-y-2 2xl:basis-[25%] sm:basis-[45%] basis-[100%]">
            <label>Search by Property manager Name</label>
            <input
              placeholder="Enter the name"
              type={"text"}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* //////////// */}

          <DropdownInputFilter
            filterName={"Filter by category"}
            dropdowns={[
              "Residential Property Manager",
              "Commercial Property Manager",
              "Finance Advisor",
              "All",
            ]}
            selectDropdown={setInputCategories}
            dropdownValue={inputCategories}
          />

          <DropdownInputFilter
            filterName={"Filter by location"}
            dropdowns={["Auckland Central", "Albany", "Hamilton", "All"]}
            selectDropdown={setInputLocation}
            dropdownValue={inputLocation}
          />

          {/* button */}

          <div className="flex justify-end items-end 2xl:basis-[10%] sm:basis-[45%] basis-[100%]">
            <button
              className="property-manger-search-btn flex justify-center gap-2 bg-red1 text-white  px-8 py-2 rounded-md "
              onClick={() => showData}
            >
              <img src="./images/propertyManagers/search.png" alt="search" /> <p>Search</p>
            </button>
          </div>
        </div>
      </div>
      {/* ///////////////////////////////////////////////////////////////////// */}
      <div
        className=" py-[rem] 2xl:px-24 sm:px-12 px-6
        "
      >
        <div className="  ">
          <div className="flex justify-center">
            <div
              id="slider"
              className=" grid grid-cols-1 gap-y-5
            xs:grid-cols-2 gap-x-11 lg:grid-cols-3 2xl:grid-cols-4 "
            >
              {Array.from(showData)
                .filter((val) => {
                  if (
                    val.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((ManagerArrayList) => {
                  return (
                    <div
                      className="w-[17.56rem] h-[15rem]  bg-white rounded-md shadow-lg px-7"
                      key={ManagerArrayList._id}
                    >
                      <div className="top-section flex justify-between py-6">
                        <div className="my-auto">
                          <img
                            src={ManagerArrayList.imgSrc}
                            alt={ManagerArrayList.imgAlt}
                          />
                        </div>

                        <div className="flex flex-col text-[0.6rem] font-semibold text-end">
                          <div>{`${ManagerArrayList.successfulClient} Successful Clients`}</div>
                          <div>{ManagerArrayList.email}</div>
                          <div>{ManagerArrayList.phone}</div>
                        </div>
                      </div>

                      <div>
                        <h1 className="font-bold text-[0.9rem] -mt-[0.3rem] ">
                          {ManagerArrayList.name}
                        </h1>
                        <p className=" w-[13.5rem] mx-auto text-[0.6rem] leading-4 mb-5">
                          {ManagerArrayList.detail} <br />
                          {`Available to meet on ${ManagerArrayList.availableDate}`}
                        </p>
                      </div>

                      <div className='flex justify-between w-[13.5rem]'>
                        <button className='text-footerSubGrey2 bg-none w-[6.5rem] px-[0.3rem] text-[0.57rem] rounded-md font-semibold border-footerSubGrey2 border-solid border-x-2 border-y-2'
                          onClick={() => {
                            if (ManagerArrayList.id == "1") {
                              return setOpenPopUp1("true")
                            } else if (ManagerArrayList.id == "2") {
                              return setOpenPopUp2("true")
                            } else if (ManagerArrayList.id == "3") {
                              return setOpenPopUp3("true")
                            } else if (ManagerArrayList.id == "4") {
                              return setOpenPopUp4("true")
                            } else if (ManagerArrayList.id == "5") {
                              return setOpenPopUp5("true")
                            } else if (ManagerArrayList.id == "6") {
                              return setOpenPopUp6("true")
                            } else if (ManagerArrayList.id == "7") {
                              return setOpenPopUp7("true")
                            }
                          }}>
                          Send Message
                        </button>
                        <BookMeeting />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyManagerSearch;