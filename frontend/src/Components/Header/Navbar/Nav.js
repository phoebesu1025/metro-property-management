import DropdownArray from "./Dropdown/DropdownArray";
import Items from "./Items";

const Nav = () => {
  const dropdowns = DropdownArray;

  return (
    <ul className="flex header-navbar h-12 basis-4/6">
      {dropdowns.map((dropdown, index) => {
        return (
          <Items
            key={index}
            itemComponent={dropdown}
            itemName={dropdown.name}
          />
        );
      })}
    </ul>
  );
};

export default Nav;
