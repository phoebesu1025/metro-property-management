import React, { Fragment } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Newsletter from "./Components/Newsletter/Newsletter";
import DataTest from "./Components/db/DataTest.js";
import RedBanner1 from "./Components/CommonComponents/RedBanner/RedBanner1/RedBanner1";
import Needs from "./Components/CommonComponents/Needs/Needs";
import LatetestNews from "./Components/CommonComponents/LatestNews/LatestNews";
import PropertyManager from "./Components/CommonComponents/PropertyManagers/PropertyManager";

import SuccessfulTenancy from "./Components/SuccessfulTenancy/SuccessfulTenancy";
import HomeBanner from "./Components/Pages/Home/Banner/HomeBanner";

import SuccessfulInvestors from "./Components/CommonComponents/SuccessfulInvestors/Main/SuccessfulInvestors";
import SuccessfulInvestorsV2 from "./Components/CommonComponents/SuccessfulInvestors/Main/SuccessfulInvestorsV2";

import "./App.css";

import Faq from "./Components/CommonComponents/FAQ/Main/Faq";
import RedBanner2 from "./Components/CommonComponents/RedBanner/RedBanner2/RedBanner2";
import RedBanner3 from "./Components/CommonComponents/RedBanner/RedBanner3/RedBanner3";
import RedBanner4 from "./Components/CommonComponents/RedBanner/RedBanner4/RedBanner4";
import CarouselContainer from "./Components/CommonComponents/PropertyCarousel/CarouselContainer";
import Reversible from "./Components/CommonComponents/ReversibleContainer/Reversible";

const App = () => {
  return (
    <div>
      <Header />
      <HomeBanner />
      <div className="pt-16">
        <p>hi</p>
        <p>hi</p>

        <DataTest />
        <RedBanner1 />
        <br />
        <RedBanner2 />
        <br />
        <RedBanner3 />
        <br />
        <RedBanner4 />
        <PropertyManager />
        <Needs />
        <LatetestNews />
        <SuccessfulInvestors />
        <SuccessfulInvestorsV2 />
        <Faq />
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
      </div>

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
            <p>
              At Metro NZ Property Management you’ll find that the type of
              property on offer is a notch above the norm. We pride ourselves on
              the superior property value and their tidiness. Where a property
              needs work or improvement, we’re in a good position to convince
              the owner that it’s worthwhile to invest and so you, the tenant as
              well as the property owner will benefit.
            </p>
            <p>
              Usually any remedial work gets done between tenancies so that you
              can be assured that when we hand over the keys to you, the
              property is in the very best condition.
            </p>
          </Fragment>
        }
        subText={`All our properties are 100% compliant.`}
        imgSrc={`./images/CommonComponents/Reversible/Home/happy-tenants.png`}
        imgAlt={`Tenants`}
      />

      <CarouselContainer />

      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
