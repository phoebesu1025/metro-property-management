import NavbarContentSF from "./NavbarContentSF";
import NavbarSF from "./NavbarSF";

const DesktopSearchFilter = ({ data, activeTab, changeToActive }) => {
  return (
    <div
      className={`
                  2xl:block absolute hidden
                  w-full top-[80%]
                  home-banner-search-filter 
                  2xl:px-24 sm:px-12 px-6
                  drop-shadow-2xl
                  rounded-3xl
        `}
    >
      <NavbarSF
        changeToActive={changeToActive}
        activeTab={activeTab}
        data={data}
      />

      <NavbarContentSF activeTab={activeTab} data={data} />
    </div>
  );
};

export default DesktopSearchFilter;
