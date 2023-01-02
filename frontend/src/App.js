import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Newsletter from "./Components/Newsletter/Newsletter";
import DataTest from "./Components/db/DataTest.js";
import RedBanner from "./Components/CommonComponents/RedBanner/RedBanner";
import Needs from "./Components/CommonComponents/Needs/Needs";
import LatetestNews from "./Components/CommonComponents/LatestNews/LatestNews";
import PropertyManager from "./Components/CommonComponents/PropertyManagers/PropertyManager";
import SuccessfulTenancy from "./Components/SuccessfulTenancy/SuccessfulTenancy";
import HomeBanner from "./Components/Pages/Home/Banner/HomeBanner";
const App = () => {
  return (
    <div>
      <Header />
      <HomeBanner />
      <div className="pt-16">
        <p>hi</p>
        <p>hi</p>
        <RedBanner />
        <DataTest />
        <PropertyManager />
        <Needs />
        <LatetestNews />
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
        <p>hi</p>
      </div>
      <SuccessfulTenancy />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
