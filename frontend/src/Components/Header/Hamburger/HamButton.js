import React from "react";

const HamButton = ({ handleMobileNavbar }) => {
  return (
    <button
      onClick={handleMobileNavbar}
      className="hamburger-menu xl:hidden block sm:ml-10 xs:ml-8 ml-4 relative z-50"
    >
      <img
        src="./images/CommonComponents/Header/hamburger-menu.png"
        alt="hamburger menu Button"
      />
    </button>
  );
};

export default HamButton;
