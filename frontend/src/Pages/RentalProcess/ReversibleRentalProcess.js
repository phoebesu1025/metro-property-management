import Reversible from "../../Components/CommonComponents/ReversibleContainer/Reversible";

const ReversibleRentalProcess = () => {
  return (
    <div>
      <Reversible
        heading={`Easy rental process even in lock down - Explore our virtual home tours`}
        text={`Our properties are above the norm and we select them based on their 
        cleanliness and appeal. We assist you with the tenancy application, finding 
        the right property, the move and any issues that may arise during your tenancy.
        All our properties are 100% compliant.`}
        subText={`We have properties all over New Zealand.`}
        imgSrc={`./images/CommonComponents/Reversible/Home/easy-rental.png`}
        imgAlt={`men using a laptop`}
        hideImageOnMobile={true}
        buttons={[{ text: "Contact Us", bg: "bg-[#636262]" }]}
      />

      <Reversible
        flexDirection={`lg:flex-row-reverse`}
        heading={`100% tenant satisfaction.`}
        text={`Our properties are above the norm and we select them based on their 
        cleanliness and appeal. We assist you with the tenancy application, finding 
        the right property, the move and any issues that may arise during your tenancy.
        All our properties are 100% compliant.`}
        subText={`We have properties all over New Zealand.`}
        imgSrc={`./images/CommonComponents/Reversible/Home/pm-solution.png`}
        imgAlt={`people with a dog`}
        hideImageOnMobile={true}
        buttons={[{ text: "Our Tenant Services", bg: "bg-red1" }]}
      />

      <Reversible
        heading={`Stress free rental during lock down! Use our My Diary Portal 
        to keep track of your records`}
        text={`Our property range is comprehensive we can definitely find a perfect 
        match for your needs. We do everything that makes the process of changing 
        properties and moving easy, whether you are looking for a property in 
        New Zealand or elsewhere.`}
        imgSrc={`./images/CommonComponents/Reversible/Home/keep-track.png`}
        imgAlt={`a family `}
        hideImageOnMobile={true}
        buttons={[{ text: "Join My Diary", bg: "bg-red1" }]}
      />

      <Reversible
        flexDirection={`lg:flex-row-reverse`}
        heading={`Every one of our properties is outstanding`}
        text={`Our properties are above the norm and we select them based on their 
        cleanliness and appeal. We assist you with the tenancy application, 
        finding the right property, the move and any issues that may arise 
        during your tenancy.`}
        imgSrc={`./images/CommonComponents/Reversible/Home/pm-solution.png`}
        imgAlt={`a family `}
        hideImageOnMobile={true}
        buttons={[
          { text: "Contact Us", bg: "bg-[#636262]" },
          { text: "View Rental Properties", bg: "bg-red1" },
        ]}
      />
    </div>
  );
};

export default ReversibleRentalProcess;
