import HeadingText from "../../Common/LoginSignup/FormRight/Heading/HeadingText";

import LoginForm from "./LoginForm/LoginForm";

import ButtonSocial from "./../../Common/LoginSignup/FormRight/Social/ButtonSocial";
import LineText from "../../Common/LoginSignup/FormRight/TextHr/LineText";
import RequiredText from "../../Common/LoginSignup/FormRight/Required/RequiredText";
import SwitchLink from "../../Common/LoginSignup/FormRight/SwitchLink/SwitchLink";

const LoginMain = () => {
  return (
    <div
      className={`login-form   xl:basis-[45%]  basis-[100%] 
       flex flex-col gap-y-5 items-center
       2xl:px-20 xl:px-8 md:px-[20%] sm:px-[10%] px-[5%]
       `}
    >
      <HeadingText text="Log into My Diary" />
      <ButtonSocial name="google" />
      <ButtonSocial name="apple" />
      <ButtonSocial name="facebook" />
      <LineText text="or continue with account," />
      <RequiredText />
      <LoginForm />
      <SwitchLink text="Don’t you have an account?" buttonText={"Register"} />
    </div>
  );
};

export default LoginMain;
