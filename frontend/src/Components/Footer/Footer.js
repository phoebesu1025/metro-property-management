import CompanyDetails from "./CompanyDetails/CompanyDetails";
import CompanyLinks from "./CompanyLinks/CompanyLinks";
import Copyright from "./Copyright/Copyright";

const Footer = () => {
  return (
    <div className="footer bg-footerBlackBg py-12 px-24 text-footerGrey ">
      <div className="flex gap-x-10">
        <CompanyDetails />
        <CompanyLinks />
      </div>

      <Copyright />
    </div>
  );
};

export default Footer;
