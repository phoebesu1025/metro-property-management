import LinkListsFooter from "./LinkListsFooter";

const CompanyLinks = () => {
  return (
    <div className="grid grid-cols-3 gap-x-8  w-[60%] leading-10">
      <LinkListsFooter
        heading={"Rentals"}
        lists={[
          "Rental Listings",
          "Rental Process",
          "Tenant Services",
          "Own a Home While Renting",
        ]}
      />
      <LinkListsFooter
        heading={"Tailored Services"}
        lists={[
          "Renovation Project Management",
          "De-cluttering Services",
          "Healthy Home Standards",
        ]}
      />

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

      <LinkListsFooter
        heading={"Investments"}
        lists={[
          "Investment Property Listing",
          "Buying Process",
          "Sell Tenanted Property",
          "Free Property Appraisal",
        ]}
      />
      <LinkListsFooter
        heading={"Meet Our Team"}
        lists={["Meet Property Manager", "Meet Finance Advisor"]}
      />
    </div>
  );
};

export default CompanyLinks;
