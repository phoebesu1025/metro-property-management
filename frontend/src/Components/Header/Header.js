import Arrow from "../images/redArrow.png";
import RentalsMenu from "../MegaMenu/RentalsMenu";
import AboutMenu from "../MegaMenu/AboutMenu";
import InvestmentSubMenu from "../MegaMenu/InvestementSubMenu";
import ContactMenu from "../MegaMenu/ContactMenu";
import PropertyManagementMenu from "../MegaMenu/PropertyManagementMenu";
import CompanyLogo from "./CompanyLogo";
import Nav from "./Navbar/Nav";
import ButtonGroup from "./Button/ButtonGroup";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-2 px-24">
      <CompanyLogo />
      <Nav />
      <ButtonGroup />
    </div>
  );
};

export default Header;
