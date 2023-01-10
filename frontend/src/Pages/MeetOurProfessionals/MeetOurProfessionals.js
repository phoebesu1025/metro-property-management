import MeetUsBanner from "./../../Components/Pages/MeetUs/Banner/MeetUsBanner";
//import PropertyManagersAll from "../../Components/CommonComponents/PropertyManagers/PropertyManagerAll";
import RedBanner from "../../Components/CommonComponents/RedBanner/RedBanner1/RedBanner1";

import Faq from "../../Components/CommonComponents/FAQ/Main/Faq";

const MeetOurProfessionals = () => {
  return (
    <div className="meet-our-professional-page">
      <MeetUsBanner />
      {/* <PropertyManagersAll /> */}
      <RedBanner />
      <Faq />
    </div>
  );
};

export default MeetOurProfessionals;
