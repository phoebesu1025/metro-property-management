import React, { Fragment } from "react";
import Reversible from "../../Components/CommonComponents/ReversibleContainer/Reversible";

const ReversibleHomeBottom = () => {
  return (
    <div>
      <Reversible
        heading={
          <Fragment>
            <span className="text-red1">Rentals</span> Made Easy Even in Lock
            Down
          </Fragment>
        }
        text={`At Metro NZ Property Management you’ll find that the type of property on 
        offer is a notch above the norm. We pride ourselves on the superior property 
        value and their tidiness. Where a property needs work or improvement, we’re in 
        a good position to convince the owner that it’s worthwhile to invest and so you, 
        the tenant as well as the property owner will benefit.`}
        imgSrc={`./images/CommonComponents/Reversible/Home/easy-rental.png`}
        imgAlt={`men using a laptop`}
        hideImageOnMobile={true}
        buttons={[
          { text: "View Rental Listings", bg: "bg-[#636262]" },
          { text: "Understand Rental Process", bg: "bg-red1" },
        ]}
      />

      <Reversible
        flexDirection={`lg:flex-row-reverse`}
        heading={
          <Fragment>
            <span className="text-red1">Investments</span> Our strategies for
            better returns
          </Fragment>
        }
        text={`At Metro NZ Property Management you’ll find that the type of property 
        on offer is a notch above the norm. We pride ourselves on the superior property 
        value and their tidiness. Where a property needs work or improvement, we’re in 
        a good position to convince the owner.`}
        imgSrc={`./images/CommonComponents/Reversible/Home/better-invest.png`}
        imgAlt={`buildings`}
        hideImageOnMobile={true}
        buttons={[
          { text: "View Investment Listings", bg: "bg-[#636262]" },
          { text: "Understand Buying Process", bg: "bg-red1" },
        ]}
      />

      <Reversible
        heading={
          <Fragment>
            <span className="text-red1">Property Management </span>Your total
            rental property management solution
          </Fragment>
        }
        text={`At Metro NZ Property Management you’ll find that the type of property 
        on offer is a notch above the norm. We pride ourselves on the superior 
        property value and their tidiness. Where a property needs work or improvement, 
        we’re in a good position to convince.`}
        imgSrc={`./images/CommonComponents/Reversible/Home/pm-solution.png`}
        imgAlt={`people with a  god`}
        hideImageOnMobile={true}
        buttons={[
          { text: "Free Rental Appraisal", bg: "bg-[#636262]" },
          { text: "Finding Tenant Process", bg: "bg-red1" },
        ]}
      />

      <Reversible
        flexDirection={`lg:flex-row-reverse`}
        heading={
          <Fragment>
            <span className="text-red1">Building Management</span> We’re here to
            help you get your property managed right.
          </Fragment>
        }
        text={`At Metro NZ Property Management you’ll find that the type of property on 
        offer is a notch above the norm. We pride ourselves on the superior property 
        value and their tidiness. Where a property needs work or improvement, we’re 
        in a good position to convince the owner that it’s worthwhile to invest and 
        so you, the tenant as well as the property owner will benefit.`}
        imgSrc={`./images/CommonComponents/Reversible/Home/building-managements.png`}
        imgAlt={`High end buildings`}
        hideImageOnMobile={true}
        buttons={[
          { text: "Body Corporate Administration", bg: "bg-[#636262]" },
          { text: "Building Management", bg: "bg-red1" },
        ]}
      />

      <Reversible
        heading={
          <Fragment>
            <span className="text-red1">Selling Tenanted Properties </span> Let
            us be your go-to source for all your property needs
          </Fragment>
        }
        text={`At Metro NZ Property Management you’ll find that the type of property 
        on offer is a notch above the norm. We pride ourselves on the superior property 
        value and their tidiness.`}
        imgSrc={`./images/CommonComponents/Reversible/Home/selling.png`}
        imgAlt={`two people talking`}
        hideImageOnMobile={true}
        buttons={[
          { text: "Free Property Appraisal", bg: "bg-[#636262]" },
          { text: "Understand Selling Process", bg: "bg-red1" },
        ]}
      />
    </div>
  );
};

export default ReversibleHomeBottom;
