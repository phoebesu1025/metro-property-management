import Form from "../../../../Components/CommonComponents/MyProfile/Form";
import HeadingText from "./Heading/HeadingText";
import RequiredText from "./Required/RequiredText";
import ButtonSocial from "./Social/ButtonSocial";
import SwitchLink from "./SwitchLink/SwitchLink";
import LineText from "./TextHr/LineText";

const MainContainer = () => {
  return (
    <div
      className={`login-form   xl:basis-[45%]  basis-[100%] 
       flex flex-col gap-y-5 items-center
       2xl:px-20 xl:px-8 md:px-[20%] sm:px-[10%] px-[5%]
       `}
    >
      <HeadingText />
      <ButtonSocial name="google" />
      <ButtonSocial name="apple" />
      <ButtonSocial name="facebook" />
      <LineText />
      <RequiredText />
      <Form />
      <SwitchLink />
    </div>
  );
};

export default MainContainer;
