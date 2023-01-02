import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Newsletter from "./Components/Newsletter/Newsletter";
import DataTest from "./Components/db/DataTest.js"
import RedBanner from "./Components/CommonComponents/RedBanner/RedBanner";
import Needs from "./Components/CommonComponents/Needs/Needs";
import LatetestNews from "./Components/CommonComponents/LatestNews/LatestNews"
import PropertyManager from "./Components/CommonComponents/PropertyManagers/PropertyManager";
import SuccessfulInvestors from "./Components/CommonComponents/SuccessfulInvestors/Main/SuccessfulInvestors";
import SuccessfulInvestorsV2 from "./Components/CommonComponents/SuccessfulInvestors/Main/SuccessfulInvestorsV2";
const App = () => {
  return (
    <div>
      <Header />
      <div className="pt-16">

        <p>hi</p>
        <p>hi</p>
        <RedBanner />
        <DataTest />
        <PropertyManager />
        <Needs />
        <LatetestNews />
        <SuccessfulInvestors />
        <SuccessfulInvestorsV2 />
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
