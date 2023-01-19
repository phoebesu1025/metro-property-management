import { Link } from "react-router-dom";
const ItemUserNavbar = ({ item, activeUserItem, getActiveTab, link }) => {
  function handleActiveUserItem(e) {
    getActiveTab(e.currentTarget.value);
  }
  return (
    <Link to={link}><button
      onClick={handleActiveUserItem}
      value={item}
      className={`${activeUserItem === item ? "font-bold bg-black" : "font-normal"
        } py-4 px-8 `}
    >
      {item}
    </button></Link>
  );
};

export default ItemUserNavbar;
