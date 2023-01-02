import MobileTabsSF from "./MobileTabsSF";

const MobileSearchFilter = ({ data, activeTab, changeToActive }) => {
  return (
    <div
      className={`
                  2xl:hidden block
                  w-full
                  home-banner-search-filter-mobile 
                  drop-shadow-2xl
                  
        `}
    >
      <MobileTabsSF
        changeToActive={changeToActive}
        activeTab={activeTab}
        data={data}
      />
    </div>
  );
};

export default MobileSearchFilter;
