import FeatureProperties from "../Common/FeatureProperties";
import PageBanner from "./PageBanner";
import ReversibleBuyHomeBottom from "./ReversibleBuyHomeBottom";
import ReversibleBuyHomeTop from "./ReversibleBuyHomeTop";

const BuyHomeWhileRenting = () => {
  return (
    <div className="buy-a-home-while-renting-page">
      <PageBanner />
      <ReversibleBuyHomeTop />
      {/* Phoebe Testimonials */}
      <ReversibleBuyHomeBottom />
      {/* Phoebe  Meet our investment property managers */}
      <FeatureProperties type="Investment" />
      {/* Phoebe  red banner */}
      {/* Phoebe  Frequently asked  questions on rental process */}
    </div>
  );
};

export default BuyHomeWhileRenting;
