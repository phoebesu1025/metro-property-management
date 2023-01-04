
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Newsletter from "./Components/Newsletter/Newsletter";
import Home from "./Pages/Home/Home";
import RentalProcess from "./Pages/RentalProcess/RentalProcess";
import TenantServices from "./Pages/TenantServices/TenantServices";

import "./App.css";


import BuyHomeWhileRenting from "./Pages/BuyHomeWhileRenting/BuyHomeWhileRenting";
import MeetOurProfessionals from "./Pages/MeetOurProfessionals/MeetOurProfessionals";
import ExistingUser from "./Components/Pages/MyProfile/ExistingUser/ExistingUser";
import WelcomeBoard2 from "./Components/CommonComponents/WelcomeBoard2/WelcomeBoard2";
import NewUser from "./Components/Pages/MyProfile/NewUser/NewUser";
const App = () => {
  return (
    <BrowserRouter>
      {/* The rest of your app goes here */}
      <Header />

      {/* our routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rental-process" element={<RentalProcess />} />
        <Route path="/tenant-services" element={<TenantServices />} />
        <Route path="/buy-a-home-while-renting" element={<BuyHomeWhileRenting />}/>
        <Route
          path="/meet-our-professionals"
          element={<MeetOurProfessionals />}
        />
      </Routes>

      <Newsletter />
      <Footer />
    </BrowserRouter>

  );
};

export default App;
