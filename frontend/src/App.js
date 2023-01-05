import { BrowserRouter, Route, Routes } from "react-router-dom";

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

import "./App.css";
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
        <Route path="/welcome-board-2" element={<WelcomeBoard2 />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Signup />} />
    




        {/* Chanelle's Pages */}

        <Route path="/tenancy-application-your-detail" element={<TAYourDetail />} />
        <Route path="/tenancy-application-co-applicants" element={<TACoApplicants />} />
        <Route path="/tenancy-application-references" element={<TAReferences />} />
        <Route path="/tenancy-application-reviews" element={<TAReviews />} />
        <Route path="/tenancy-application-complete" element={<TAComplete />} />
        <Route path="login" element={<Login />} />


        </Routes>




      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
