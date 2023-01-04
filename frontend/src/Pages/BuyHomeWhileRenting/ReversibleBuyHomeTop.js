import Reversible from "../../Components/CommonComponents/ReversibleContainer/Reversible";

const ReversibleBuyHomeTop = () => {
  return (
    <div>
      <Reversible
        title={`Smart investment`}
        heading={`Our strategies for better returns`}
        text={`Our property range is comprehensive we can definitely find a 
        perfect match for your needs. We do everything that makes the process 
        of changing properties and moving easy, whether you are looking for a 
        property in New Zealand or elsewhere.`}
        imgSrc={`./images/CommonComponents/Reversible/Home/strategy.png`}
        imgAlt={`Home building`}
        hideImageOnMobile={true}
      />
    </div>
  );
};

export default ReversibleBuyHomeTop;
