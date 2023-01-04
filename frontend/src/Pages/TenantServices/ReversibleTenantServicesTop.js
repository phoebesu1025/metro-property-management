import Reversible from "../../Components/CommonComponents/ReversibleContainer/Reversible";

const ReversibleTenantServicesTop = () => {
  return (
    <div>
      <Reversible
        title={`Working closely with tenants`}
        heading={`Tenants! We'll work with you to manage your tenancy to 
        your highest expectation.`}
        text={`Our property range is comprehensive we can definitely find a 
        perfect match for your needs. We do everything that makes the process 
        of changing properties and moving easy, whether you are looking for 
        a property in New Zealand or elsewhere.`}
        imgSrc={`./images/CommonComponents/Reversible/Home/tenant-expectations.png`}
        imgAlt={`Family`}
        hideImageOnMobile={true}
      />
    </div>
  );
};

export default ReversibleTenantServicesTop;
