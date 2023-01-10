import CompanyLogo from "./CompanyLogo";
import Nav from "./Navbar/Desktop/Nav";
import ButtonGroup from "./Button/ButtonGroup";
import HamButton from "./Hamburger/HamButton";
import { useContext, useEffect, useState } from "react";
import NavMobile from "./Navbar/Mobile/NavMobile";
import CrossButton from "./CrossButton/CrossButton";
import LoggedUserContext from "../../Context/LoggedUserContext";
import axios from "axios";

const Header = () => {
  const [isActiveMobileNav, setIsActiveMobileNav] = useState(false);

  function handleMobileNavbar() {
    setIsActiveMobileNav(!isActiveMobileNav);
  }

  // eslint-disable-next-line no-unused-vars
  const [_, setLoggedUser] = useContext(LoggedUserContext);

  const localUser = localStorage.getItem("localLoginUser");

  useEffect(() => {
    const data = JSON.stringify({
      email: localUser,
    });

    const config = {
      method: "post",
      url: "http://localhost:5000/auth/user",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        setLoggedUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localUser]);

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

      {isActiveMobileNav && (
        <NavMobile handleMobileNavbar={handleMobileNavbar} />
      )}

      {isActiveMobileNav ? (
        <CrossButton handleMobileNavbar={handleMobileNavbar} />
      ) : (
        <HamButton handleMobileNavbar={handleMobileNavbar} />
      )}
    </div>
  );
};

export default Header;
