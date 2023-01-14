import CompanyDetails from "./CompanyDetails/CompanyDetails";
import CompanyLinks from "./CompanyLinks/CompanyLinks";
import Copyright from "./Copyright/Copyright";

const Footer = () => {
  return (
    <div className="footer bg-footerBlackBg   text-footerGrey 
    px-[4rem] py-[2rem]
    2xl:px-[7rem] 2xl:pb-[4rem]
    

    ">
      <div className="flex flex-col
       
      2xl:flex-row-reverse 2xl:w-full ">
        <CompanyLinks />
        <CompanyDetails />
      </div>

      <div className="
      order-8 2xl:mt-[-1rem]">
        <Copyright />
      </div>

    </div>
  );
};

export default Footer;
