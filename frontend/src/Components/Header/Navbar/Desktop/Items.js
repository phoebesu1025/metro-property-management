import Dropdown from "./../Dropdown/Dropdown";
import ArrowButton from "./../ArrowButton";

const Items = ({ itemName, itemComponent }) => {
  return (
    <li className="nav-item flex items-center cursor-pointer hover:text-red3 group h-[3.4rem] px-4 pb-1">
      <div className="relative">
        <p className="my-auto"> {itemName} </p>
        {/* Rentals, Invest, PM, About, Contact (pass from Nav-DropdownArray)*/}
        <ArrowButton />
      </div>

      {<Dropdown dropdownDetailsArray={itemComponent} />}
      {/*redbox */}
      {/*from Dropdown.js */}
    </li>
  );
};

export default Items;
