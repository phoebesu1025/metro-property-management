import CompanyLogo from "./CompanyLogo";
import Nav from "./Navbar/Desktop/Nav";
import ButtonGroup from "./Button/ButtonGroup";
import HamButton from "./Hamburger/HamButton";
import { useState } from "react";
import NavMobile from "./Navbar/Mobile/NavMobile";

const Header = () => {
  const [isActiveMobileNav, setIsActiveMobileNav] = useState(false);

  function handleMobileNavbar() {
    setIsActiveMobileNav(!isActiveMobileNav);
  }

  return (
    <div
      className={`flex justify-between items-center 
        py-4  2xl:px-24 xl:px-16 sm:px-12 px-6
         w-full bg-white
      `}
    >
      <CompanyLogo />
      <Nav />
      <ButtonGroup />

      {isActiveMobileNav && <NavMobile />}
      <HamButton handleMobileNavbar={handleMobileNavbar} />
    </div>
  );
};

export default Header;
