import { Fragment } from "react";
import DataCompany from "./DataCompany";
import LogoCompanyFooter from "./LogoCompanyFooter";
import Social from "./Social/Social";
import TextCompanyFooter from "./TextCompanyFooter";

const CompanyDetails = () => {
  return (
    <div className=" 
      ">
      <div className="order-7 mt-28 
        xs:flex xs:justify-between  
        
        2xl:justify-between 2xl:flex-col 2xl:mt-[2rem] 2xl:full 2xl:mb-0">
        <div className=" 
        ">
          <LogoCompanyFooter />
          <TextCompanyFooter />
        </div>

        <div className="info">
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
        </div>


      </div>
      <div className="order-last
    
       xs:mt-[-5rem]
        2xl:order-none">

        <Social />
      </div>
    </div>
  );
};

export default CompanyDetails;
