const ItemUserNavbar = ({ item, activeUserItem, getActiveTab }) => {
  function handleActiveUserItem(e) {
    getActiveTab(e.currentTarget.value);
  }
  return (
    <button
      onClick={handleActiveUserItem}
      value={item}
      className={`${
        activeUserItem === item ? "font-bold bg-black" : "font-normal"
      } py-4 px-8 `}
    >
      {item}
    </button>
  );
};

export default ItemUserNavbar;
