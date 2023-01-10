import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Context
import LoggedUserContext from "./Context/LoggedUserContext";

// Pages or Components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Newsletter from "./Components/Newsletter/Newsletter";
import Home from "./Pages/Home/Home";
import RentalProcess from "./Pages/RentalProcess/RentalProcess";
import TenantServices from "./Pages/TenantServices/TenantServices";
import BuyHomeWhileRenting from "./Pages/BuyHomeWhileRenting/BuyHomeWhileRenting";
import MeetOurProfessionals from "./Pages/MeetOurProfessionals/MeetOurProfessionals";
import PropertySearch from "./Pages/PropertySearch/PropertySearch";
import ExistingUser from "./Pages/MyProfile/ExistingUser/ExistingUser";
import WelcomeBoard2 from "./Components/CommonComponents/WelcomeBoard2/WelcomeBoard2";
import NewUser from "./Pages/MyProfile/NewUser/NewUser";
import TAYourDetail from "./Pages/TenancyApplication/TAYourDetails";
import TACoApplicants from "./Pages/TenancyApplication/TACoApplicants";
import TAReferences from "./Pages/TenancyApplication/TAReferences";
import TAReviews from "./Pages/TenancyApplication/TAReviews";
import TAComplete from "./Pages/TenancyApplication/TAComplete";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import WelcomeBoard1 from "./Pages/WelcomBoard/WelcomeBoard1";
import UserNavbar from "./Components/UserNav/UserNavbar";

// Css
import "./App.css";
// import axios from "axios";

const App = () => {
  const loggedUser = useState(null);

  return (
    <BrowserRouter>
      {/* User context/state  */}
      <LoggedUserContext.Provider value={loggedUser}>
        {/* The rest of your app goes here */}
        <Header />
        <UserNavbar />
        {/* our routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rental-process" element={<RentalProcess />} />
          <Route path="/tenant-services" element={<TenantServices />} />
          <Route
            path="/buy-a-home-while-renting"
            element={<BuyHomeWhileRenting />}
          />
          <Route
            path="/meet-our-professionals"
            element={<MeetOurProfessionals />}
          />

          <Route path="/property-search" element={<PropertySearch />} />

          <Route path="/new-user" element={<NewUser />} />
          <Route path="/existing-user" element={<ExistingUser />} />
          <Route path="/welcome-board-1" element={<WelcomeBoard1 />} />
          <Route path="/welcome-board-2" element={<WelcomeBoard2 />} />

          <Route exact path="login" element={<Login />} />
          <Route path="register" element={<Signup />} />

          {/* Tenancy Application Site */}

          <Route
            path="/tenancy-application-your-detail"
            element={<TAYourDetail />}
          />
          <Route
            path="/tenancy-application-co-applicants"
            element={<TACoApplicants />}
          />
          <Route
            path="/tenancy-application-references"
            element={<TAReferences />}
          />
          <Route path="/tenancy-application-reviews" element={<TAReviews />} />
          <Route
            path="/tenancy-application-complete"
            element={<TAComplete />}
          />
          {/* Tenancy Application Site */}
        </Routes>
        <Newsletter />
        <Footer />
      </LoggedUserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
