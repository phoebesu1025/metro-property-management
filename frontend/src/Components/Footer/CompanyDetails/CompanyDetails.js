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
        imgSrc="./images/flocationIcon.png"
        imgAlt={"marker logo"}
        details={
          <Fragment>
            Metro NZ Property <br />
            Management Ltd <br />
            Level 33, ANZ Centre <br />
            23-29 Albert St <br />
            Auckland 1010, New Zealand
          </Fragment>
        }
      />
      <DataCompany
        imgSrc="./images/fEmail.png"
        imgAlt={"mail-box logo"}
        details={"info@metronz.co.nz"}
      />
      <DataCompany
        imgSrc="./images/fPhoneIcon.png"
        imgAlt={"phone logo"}
        details={"  +64 9 391 4642 | +64 21 642 119"}
      />

      <Social />
    </div>
  );
};

export default CompanyDetails;
