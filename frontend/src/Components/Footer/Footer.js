import CompanyDetails from "./CompanyDetails/CompanyDetails";
import CompanyLinks from "./CompanyLinks/CompanyLinks";
import Copyright from "./Copyright/Copyright";

const Footer = () => {
  return (
    <div className="footer bg-footerBlackBg   text-footerGrey 
    px-[4rem] py-[2rem]
    lg:px-[7rem] lg:pb-[4rem]
    

    ">
      <div className="flex flex-col
       
      lg:flex-row-reverse lg:w-full ">
        <CompanyLinks />
        <CompanyDetails />
      </div>

      <div className="
      order-8 ">
        <Copyright />
      </div>

    </div>
  );
};

export default Footer;
