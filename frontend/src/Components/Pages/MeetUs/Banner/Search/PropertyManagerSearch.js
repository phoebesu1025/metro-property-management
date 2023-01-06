import { useState, useEffect } from "react"
import DropdownInputFilter from "./DropdownInputFilter";
import axios from "axios"
import ButtonGroup from "../../../../Header/Button/ButtonGroup";
import PropertyManagerAll from "../../../../CommonComponents/PropertyManagers/PropertyManagerAll";

const PropertyManagerSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const [showData, setShowData] = useState('')



  useEffect(() => {
    fetch("http://localhost:5000/propertyManagers")
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setShowData(result)
      }
      )
      .catch(error => console.log('error', error));
  }, [])

  return (
    <>
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
            <input placeholder="Enter the name" type={"text"} onChange={(e) => setSearchTerm(e.target.value)} />
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
      <div className=' py-[rem] 
        '>
        <div className="  px-[1.7rem]
            xs:px-[3rem] 
            lg:px-[6rem] ">



          <div className='flex justify-center' >



            <div id='slider' className=' flex  flex-wrap justify-center gap-8
                    md:justify-start'>
              {Array.from(showData).filter((val) => {
                if (searchTerm === "") {
                  return val
                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val
                }
              }).map((ManagerArrayList) => {
                return (
                  <div className='w-[17.56rem] h-[15rem]  bg-white rounded-md shadow-lg px-7' key={ManagerArrayList._id}>
                    <div className='top-section flex justify-between py-6'>
                      <div className='my-auto'><img src={ManagerArrayList.imgSrc} alt={ManagerArrayList.imgAlt} /></div>

                      <div className='flex flex-col text-[0.6rem] font-semibold text-end'>
                        <div>{`${ManagerArrayList.successfulClient} Successful Clients`}</div>
                        <div>{ManagerArrayList.email}</div>
                        <div>{ManagerArrayList.phone}</div>
                      </div>
                    </div>



                    <div>
                      <h1 className='font-bold text-[0.9rem] -mt-[0.3rem] '>
                        {ManagerArrayList.name}
                      </h1>
                      <p className=' w-[13.5rem] mx-auto text-[0.6rem] leading-4 mb-5'>
                        {ManagerArrayList.detail} <br />
                        {`Available to meet on ${ManagerArrayList.availableDate}`}
                      </p>
                    </div>
                    <ButtonGroup />
                  </div>
                )
              })
              }
              {/*Might can divide into more components? */}
            </div>





          </div>

        </div>
      </div>
    </>
  );
};

export default PropertyManagerSearch;
