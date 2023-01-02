import React from "react";
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

import Faq from "./Components/CommonComponents/FAQ/Main/Faq"
import RedBanner2 from "./Components/CommonComponents/RedBanner/RedBanner2/RedBanner2";
import RedBanner3 from "./Components/CommonComponents/RedBanner/RedBanner3/RedBanner3";
import RedBanner4 from "./Components/CommonComponents/RedBanner/RedBanner4/RedBanner4";

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

      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
