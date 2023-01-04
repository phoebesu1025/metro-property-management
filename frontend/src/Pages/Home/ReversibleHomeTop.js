import Reversible from "../../Components/CommonComponents/ReversibleContainer/Reversible";

const ReversibleHomeTop = () => {
  return (
    <div>
      <Reversible
        title={`Who we are`}
        heading={`Unparalleled rental experience and property management services`}
        text={`What sets us apart is our “team” approach to our property management services 
        that creates an infectious positivity amongst our staff members. We like to think
        that this same energy also rubs off on our clients. That means when you work 
        with us, you are working with Auckland’s most positive property management team.
        All of us are property investors in New Zealand (Auckland, Hamilton and Whangarei)
        and throughout Europe.`}
        imgSrc={`./images/CommonComponents/Reversible/Home/team.png`}
        imgAlt={`team`}
      />

      <Reversible
        flexDirection={`lg:flex-row-reverse`}
        heading={`Let us be your go-to source for all your property needs`}
        text={`Our property range is comprehensive we can definitely find a perfect 
        match for your needs. We do everything that makes the process of changing 
        properties and moving easy, whether you are looking for a property in New Zealand 
        or elsewhere.`}
        imgSrc={`./images/CommonComponents/Reversible/Home/trust.png`}
        imgAlt={`two men shaking hand`}
      />
    </div>
  );
};

export default ReversibleHomeTop;
