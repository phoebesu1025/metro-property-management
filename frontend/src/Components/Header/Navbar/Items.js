import Dropdown from "./Dropdown/Dropdown";
import ArrowButton from "./ArrowButton";

const Items = ({ itemName, itemComponent }) => {
  console.log(itemComponent);
  return (
    <li className="nav-item flex items-center hover:text-red2 group h-[3.4rem] px-4 pb-1">
      <div className="relative">
        <p className="my-auto"> {itemName} </p>
        <ArrowButton />
      </div>

      {<Dropdown dropdownDetailsArray={itemComponent} />}
    </li>
  );
};

export default Items;
