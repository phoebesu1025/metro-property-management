import React, { Fragment } from "react";
import Reversible from "../../Components/CommonComponents/ReversibleContainer/Reversible";

const ReversibleTenantServicesBottom = () => {
  return (
    <div>
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
        hideImageOnMobile={true}
      />

      <Reversible
        heading={`All our properties are 100% compliant`}
        text={`At Metro NZ Property Management you’ll find that the type of property 
      on offer is a notch above the norm. We pride ourselves on the superior property 
      value and their tidiness. Where a property needs work or improvement, we’re in 
      a good position to convince the owner that it’s worthwhile to invest and so you, 
      the tenant as well as the property owner will benefit.`}
        imgSrc={`./images/CommonComponents/Reversible/Home/meet.png`}
        imgAlt={`Two Professional`}
        hideImageOnMobile={true}
        buttons={[{ text: "Meet Our Professionals", bg: "bg-red1" }]}
      />
    </div>
  );
};

export default ReversibleTenantServicesBottom;
