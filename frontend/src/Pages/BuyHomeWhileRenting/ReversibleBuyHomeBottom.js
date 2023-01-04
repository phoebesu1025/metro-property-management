import Reversible from "../../Components/CommonComponents/ReversibleContainer/Reversible";

const ReversibleBuyHomeBottom = () => {
  return (
    <div>
      <Reversible
        heading={`How To Be a Property Investor`}
        text={`For a long time, making money through investment properties has been 
        a favourite for New Zealanders. But, many soon-to-be investors might not 
        know where to begin. Investment properties can improve your financial 
        situation over a long time frame through capital gains (property increasing 
          in value over time) or through rent paid by tenants, known as rental income. 
          Metro NZ has some of the best in Auckland that will be happy to help you with 
          your rental income tax and other costs!`}
        subText={`All our properties are 100% compliant.`}
        imgSrc={`./images/CommonComponents/Reversible/Home/happy-tenants.png`}
        imgAlt={`Tenants`}
        hideImageOnMobile={true}
        buttons={[{ text: "Investment Buying Process", bg: "bg-red1" }]}
      />

      <Reversible
        flexDirection={`lg:flex-row-reverse`}
        heading={`Earn up to 9.9% per annum`}
        text={`At Metro NZ Property Management, we manage the payments of tenants 
        to ensure that you are getting your rental income on time, every time. 
        Forget about those real estate agent fees, as property managers, we don’t 
        have any other costs for our services.`}
        imgSrc={`./images/CommonComponents/Reversible/Home/better-invest.png`}
        imgAlt={`Building`}
        hideImageOnMobile={true}
        buttons={[{ text: "Meet Our Finance Advisor", bg: "bg-red1" }]}
      />
    </div>
  );
};

export default ReversibleBuyHomeBottom;
