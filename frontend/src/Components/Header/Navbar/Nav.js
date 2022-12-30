import DropdownArray from "./Dropdown/DropdownArray";
import Items from "./Items";

const Nav = () => {
  const dropdowns = DropdownArray;

  return (
    <ul className="flex header-navbar h-12 basis-4/6">
      {dropdowns.map((dropdown, index) => {
        return (
          <Items // itemComponent, itemName are from Items.js
            key={index}

            itemName={dropdown.name}

            // from DropdownArray
            // just simply the Navbar heading name?

            itemComponent={dropdown}
          //itemComponents from Items.js
          //redbox?
          />
        );
      })}
    </ul>
  );
};

export default Nav;
