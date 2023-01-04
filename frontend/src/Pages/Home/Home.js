import HomeBanner from "../../Components/Pages/Home/Banner/HomeBanner";
import ReversibleHomeBottom from "./ReversibleHomeBottom";
import ReversibleHomeTop from "./ReversibleHomeTop";

const Home = () => {
  return (
    <div className="home-page">
      <HomeBanner />
      <ReversibleHomeTop />
      {/* Phoebe Red Banner with text and button */}
      <ReversibleHomeBottom /> ``
      {/* Phoebe Meet Our Property Manager */}
      {/* Phoebe latest News */}
    </div>
  );
};

export default Home;
