import ArrowButton from "./ArrowButton";

const Items = ({ itemName, itemComponent }) => {
  return (
    <li className="nav-item flex items-center hover:text-red2 group h-full px-4">
      <div className="relative">
        <p className="my-auto"> {itemName} </p>
        <ArrowButton />
      </div>
      <div className="hidden group-hover:block fixed left-0 top-[3.5rem] w-full">
        {itemComponent}
      </div>
    </li>
  );
};

export default Items;
