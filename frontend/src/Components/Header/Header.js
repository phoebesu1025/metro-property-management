import CompanyLogo from "./CompanyLogo";
import Nav from "./Navbar/Nav";
import ButtonGroup from "./Button/ButtonGroup";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-2 px-24 fixed w-full bg-white ">
      <CompanyLogo />
      <Nav />
      <ButtonGroup />
    </div>
  );
};

export default Header;
