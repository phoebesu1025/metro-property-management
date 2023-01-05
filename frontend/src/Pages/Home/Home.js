import HomeBanner from "../../Components/Pages/Home/Banner/HomeBanner";
import ReversibleHomeBottom from "./ReversibleHomeBottom";
import ReversibleHomeTop from "./ReversibleHomeTop";
import RedBanner from "../../Components/CommonComponents/RedBanner/RedBanner1/RedBanner1";
import PropertyManagers from "../../Components/CommonComponents/PropertyManagers/PropertyManager";
import LatestNews from "../../Components/CommonComponents/LatestNews/LatestNews";
const Home = () => {
  return (
    <div className="home-page">
      <HomeBanner />
      <ReversibleHomeTop />
      <RedBanner />
      <ReversibleHomeBottom /> ``
      <PropertyManagers />
      <LatestNews />
    </div>
  );
};

export default Home;
