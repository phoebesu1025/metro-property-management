import FeatureProperties from "../Common/FeatureProperties";
import PageBanner from "./PageBanner";
import ReversibleBuyHomeBottom from "./ReversibleBuyHomeBottom";
import ReversibleBuyHomeTop from "./ReversibleBuyHomeTop";
import SuccessfulInvestors from "../../Components/CommonComponents/SuccessfulInvestors/Main/SuccessfulInvestors"
import PropertyManagers from "../../Components/CommonComponents/PropertyManagers/PropertyManager";
import RedBanner from "../../Components/CommonComponents/RedBanner/RedBanner1/RedBanner1"
import Faq from "../../Components/CommonComponents/FAQ/Main/Faq"

const BuyHomeWhileRenting = () => {
  return (
    <div className="buy-a-home-while-renting-page">
      <PageBanner />
      <ReversibleBuyHomeTop />
      <SuccessfulInvestors />
      <ReversibleBuyHomeBottom />
      <PropertyManagers />
      <FeatureProperties type="Investment" />
      <RedBanner />
      <Faq />
    </div>
  );
};

export default BuyHomeWhileRenting;
