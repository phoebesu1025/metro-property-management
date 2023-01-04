import MeetUsBanner from "./../../Components/Pages/MeetUs/Banner/MeetUsBanner";
import PropertyManagers from "../../Components/CommonComponents/PropertyManagers/PropertyManager";
import RedBanner from "../../Components/CommonComponents/RedBanner/RedBanner1/RedBanner1"

import Faq from "../../Components/CommonComponents/FAQ/Main/Faq"

const MeetOurProfessionals = () => {
  return (
    <div className="meet-our-professional-page">
      <MeetUsBanner />
      <PropertyManagers />
      <RedBanner />
      <Faq />
    </div>
  );
};

export default MeetOurProfessionals;
