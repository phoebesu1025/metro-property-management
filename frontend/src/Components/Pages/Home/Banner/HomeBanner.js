import { useState } from "react";
import MainBanner from "../../../CommonComponents/MainBanner/MainBanner";
import DesktopSearchFilter from "./SearchFilter/Desktop/DesktopSearchFilter";
import MobileSearchFilter from "./SearchFilter/Mobile/MobileSearchFilter";

const HomeBanner = () => {
  const [activeTab, setActiveTab] = useState("Rentals");
  const data = [
    {
      label: "Rentals",
      value: "rentals",
      field: {
        inputPlaceholder: "Type any suburb, region, or state",
        category: "Rental category",
        categories: ["Residential", "Commercial"],
        button: "Find Rentals Property",
      },
      imgSrc: {
        mobile: "home-rental-banner-mobile.png",
        tablet: "home-rental-banner-tablet.png",
        desktop: "home-rental-banner-desktop.png",
      },
      imgAlt: "Home banner",
      text: "Join the thousands of happy tenants who’ve rented with us in the past",
    },
    {
      label: "Investments",
      value: "investments",
      field: {
        inputPlaceholder: "Type any suburb, region, or state",
        category: "Investment category",
        categories: ["Residential", "Commercial"],
        button: "Find Investment Property",
      },
      imgSrc: {
        mobile: "home-investment-banner-mobile.png",
        tablet: "home-investment-banner-tablet.png",
        desktop: "home-investment-banner-desktop.png",
      },
      imgAlt: "Home banner",
      text: "Make the smart move of investment",
    },

    {
      label: "Sell Tenanted Property",
      value: "sell tenanted property",
      desc: "fdsfdsfdsf",
      field: {
        inputPlaceholder: "Type property address",
        button: "Get Free Property Appraisal",
      },
      imgSrc: {
        mobile: "home-stp-banner-mobile.png",
        tablet: "home-stp-banner-tablet.png",
        desktop: "home-stp-banner-desktop.png",
      },
      imgAlt: "Home banner",
      text: "Your total rental property management solution",
    },

    {
      label: "Property Management",
      value: "property management",
      desc: "fdsfdsfdsf",
      field: {
        inputPlaceholder: "Type your property address",
        category: "Property category",
        categories: ["Individual", "building"],
        button: "Get Free Rental Appraisal",
      },
      imgSrc: {
        mobile: "home-pm-banner-mobile.png",
        tablet: "home-pm-banner-tablet.png",
        desktop: "home-pm-banner-desktop.png",
      },
      imgAlt: "Home banner",
      text: "We're quickest and easiest eay to manage your property",
    },

    {
      label: "Find Us",
      value: "find us",
      field: {
        inputPlaceholder: "Type any keyword",
        category: "Our Team",
        categories: ["Property manager", "Finance Advisor"],
        button: "Meet Out Team",
      },
      imgSrc: {
        mobile: "home-findus-banner-mobile.png",
        tablet: "home-findus-banner-tablet.png",
        desktop: "home-findus-banner-desktop.png",
      },
      imgAlt: "Home banner",
      text: "Educated professionals with integrity, working for you",
    },
  ];

  function changeToActive(e) {
    setActiveTab(e.currentTarget.getAttribute("value"));
  }
  return (
    <div className={`home-banner relative`}>
      {data.map(
        (banner, index) =>
          activeTab === banner.label && <MainBanner key={index} data={banner} />
      )}

      <DesktopSearchFilter
        changeToActive={changeToActive}
        data={data}
        activeTab={activeTab}
      />
      <MobileSearchFilter
        changeToActive={changeToActive}
        data={data}
        activeTab={activeTab}
      />
    </div>
  );
};

export default HomeBanner;
