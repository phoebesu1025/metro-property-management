const RentSaleButtons = ({ length }) => {
  return (
    <div className={`ps-buttons flex ${length} `}>
      <button className="bg-[#303030] basis-1/2 text-white lg:h-auto h-full lg:py-2 py-4 rounded-sm">
        For Rent
      </button>
      <button className="bg-white basis-1/2 text-[#303030] lg:h-auto   h-full lg:py-2 py-4 rounded-sm">
        For Sale
      </button>
    </div>
  );
};

export default RentSaleButtons;
