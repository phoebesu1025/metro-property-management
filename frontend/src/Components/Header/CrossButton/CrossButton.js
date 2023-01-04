import React from "react";

const CrossButton = ({ handleMobileNavbar }) => {
  return (
    <button
      onClick={handleMobileNavbar}
      className="hamburger-menu xl:hidden block sm:ml-10 xs:ml-8 ml-4 relative z-50 bg-white"
    >
      <img
        src="./images/CommonComponents/Header/Cross-icon.png"
        alt="hamburger menu Button"
      />
    </button>
  );
};

export default CrossButton;
