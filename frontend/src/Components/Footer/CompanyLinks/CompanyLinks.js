import LinkListsFooter from "./LinkListsFooter";

const CompanyLinks = () => {
  return (
    <div className="grid w-full leading-[4rem] grid-cols-1 gap-y-[2rem]
    //500px xs:grid-cols-3 xs:w-full xs:mb-16 xs:gap-x-[1rem] 
    sm:justify-items-center 
    lg:gap-y-[21rem]  lg:mt-[1rem] lg:w-[2rem] lg:mb-0 lg:h-[0rem]">



      <div className="
      sm:ml-[-5rem]
      lg:ml-0">
        <LinkListsFooter
          heading={"Rentals"}
          lists={[
            "Rental Listings",
            "Rental Process",
            "Tenant Services",
            "Own a Home While Renting",
          ]}
        />
      </div>

      <div className="mt-[4rem]
      xs:mt-0">
        <LinkListsFooter
          heading={"Tailored Services"}
          lists={[
            "Renovation Project Management",
            "De-cluttering Services",
            "Healthy Home Standards",
          ]}
        />
      </div>

      <div className="mt-[3rem]
      xs:w-[15.1rem] xs:mt-0
      sm:ml-[5rem]
      lg:ml-0">
        <LinkListsFooter
          heading={"Property Management"}
          lists={[
            "Residential Property Management",
            "Commercial Property Management",
            "Finding Tenant Process",
            "Free Rental Appraisal",
            "Building Management",
            "Body Corporate Administration",
            "Change to Metro",
          ]}
        />
      </div>

      <div className="-mt-[5rem]
      xs:mt-[-10rem] 
      sm:ml-[-5rem]
      lg:ml-0 lg:mt-[-2rem]">
        <LinkListsFooter
          heading={"Investments"}
          lists={[
            "Investment Property Listing",
            "Buying Process",
            "Sell Tenanted Property",
            "Free Property Appraisal",
          ]}
        />

      </div >
      <div className="-mt-[11rem]  mr-[3rem]
      xs:mt-[-10rem]
        sm:mt-[2rem] ">
        <LinkListsFooter
          heading={"Meet Our Team"}
          lists={["Meet Property Manager", "Meet Finance Advisor"]}
        />
      </div></div>
  );
};

export default CompanyLinks;
