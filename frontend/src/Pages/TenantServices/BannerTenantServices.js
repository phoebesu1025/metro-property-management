import MainBanner from "../../Components/CommonComponents/MainBanner/MainBanner";

const BannerTenantServices = () => {
  return (
    <MainBanner
      data={{
        imgSrc: {
          mobile: "tenant-services-banner-mobile.png",
          tablet: "tenant-services-banner-tablet.png",
          desktop: "tenant-services-banner-desktop.png",
        },
        imgAlt: "tenant Services Banner",
        text: "Happy Tenants Our Mission",
      }}
    />
  );
};

export default BannerTenantServices;
