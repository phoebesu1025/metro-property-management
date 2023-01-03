import React, { Fragment } from "react";
import Reversible from "../CommonComponents/ReversibleContainer/Reversible";

const AllReversible = () => {
  return (
    <div>
      <Reversible
        title={`Who we are`}
        heading={`Unparalleled rental experience and property management services`}
        text={`What sets us apart is our “team” approach to our property management services 
        that creates an infectious positivity amongst our staff members. We like to think
        that this same energy also rubs off on our clients. That means when you work 
        with us, you are working with Auckland’s most positive property management team.
        All of us are property investors in New Zealand (Auckland, Hamilton and Whangarei)
        and throughout Europe.`}
        imgSrc={`./images/CommonComponents/Reversible/Home/team.png`}
        imgAlt={`team`}
      />

      <Reversible
        flexDirection={`lg:flex-row-reverse`}
        heading={`Let us be your go-to source for all your property needs`}
        text={`Our property range is comprehensive we can definitely find a perfect 
        match for your needs. We do everything that makes the process of changing 
        properties and moving easy, whether you are looking for a property in New Zealand 
        or elsewhere.`}
        imgSrc={`./images/CommonComponents/Reversible/Home/trust.png`}
        imgAlt={`two men shaking hand`}
      />

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
        heading={`All our properties are 100% compliant`}
        text={`At Metro NZ Property Management you’ll find that the type of property 
        on offer is a notch above the norm. We pride ourselves on the superior property 
        value and their tidiness. Where a property needs work or improvement, we’re in 
        a good position to convince the owner that it’s worthwhile to invest and so you, 
        the tenant as well as the property owner will benefit.`}
        imgSrc={`./images/CommonComponents/Reversible/Home/better-invest.png`}
        imgAlt={`Building`}
        hideImageOnMobile={true}
        buttons={[{ text: "Meet Our Professionals", bg: "bg-red1" }]}
      />

      <Reversible
        flexDirection={`lg:flex-row-reverse`}
        heading={`Happy Tenants - Our Mission`}
        text={
          <Fragment>
            At Metro NZ Property Management you’ll find that the type of
            property on offer is a notch above the norm. We pride ourselves on
            the superior property value and their tidiness. Where a property
            needs work or improvement, we’re in a good position to convince the
            owner that it’s worthwhile to invest and so you, the tenant as well
            as the property owner will benefit.
            <br />
            Usually any remedial work gets done between tenancies so that you
            can be assured that when we hand over the keys to you, the property
            is in the very best condition.
          </Fragment>
        }
        subText={`All our properties are 100% compliant.`}
        imgSrc={`./images/CommonComponents/Reversible/Home/happy-tenants.png`}
        imgAlt={`Tenants`}
      />
    </div>
  );
};

export default AllReversible;
