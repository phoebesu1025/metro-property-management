import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Newsletter from "./Components/Newsletter/Newsletter";
import DataTest from "./Components/db/DataTest.js"
import RedBanner from "./Components/CommonComponents/RedBanner/RedBanner";
import Needs from "./Components/CommonComponents/Needs/Needs";

const App = () => {
  return (
    <div>
      <Header />
      <div className="pt-16">

        <p>hi</p>
        <p>hi</p><RedBanner />
        <DataTest />
        <Needs />
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
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
