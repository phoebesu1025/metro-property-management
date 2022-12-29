import { Fragment } from "react";
import DataCompany from "./DataCompany";
import LogoCompanyFooter from "./LogoCompanyFooter";
import Social from "./Social/Social";
import TextCompanyFooter from "./TextCompanyFooter";

const CompanyDetails = () => {
  return (
    <div className="w-[40%]">
      <LogoCompanyFooter />
      <TextCompanyFooter />
      <DataCompany
        details={
          <Fragment>
            Metro NZ Property <br />
            Management Ltd <br />
            Level 33, ANZ Centre <br />
            23-29 Albert St <br />
            Auckland 1010, New Zealand
          </Fragment>
        }
        imgSrc="./images/flocationIcon.png"
        imgAlt={"marker logo"}
      />
      <DataCompany
        details={"info@metronz.co.nz"}
        imgSrc="./images/fEmail.png"
        imgAlt={"mail-box logo"}
      />
      <DataCompany
        details={"  +64 9 391 4642 | +64 21 642 119"}
        imgSrc="./images/fPhoneIcon.png"
        imgAlt={"phone logo"}
      />

      <Social />
    </div>
  );
};

export default CompanyDetails;
