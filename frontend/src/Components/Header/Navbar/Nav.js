import React from "react";
import About from "../../MegaMenu/AboutMenu";
import Contact from "../../MegaMenu/ContactMenu";
import InvestmentSubMenu from "../../MegaMenu/InvestementSubMenu";
import PropertyManagementMenu from "../../MegaMenu/PropertyManagementMenu";
import Rentals from "../../MegaMenu/RentalsMenu";
import Items from "./Items";

const Nav = () => {
  return (
    <ul className="flex header-navbar h-12">
      <Items itemComponent={<Rentals />} itemName="Rentals" />
      <Items itemComponent={<About />} itemName="About" />
      <Items itemComponent={<InvestmentSubMenu />} itemName="Investment" />
      <Items itemComponent={<Contact />} itemName="Contact" />
      <Items
        itemComponent={<PropertyManagementMenu />}
        itemName="Property Management"
      />
    </ul>
  );
};

export default Nav;
