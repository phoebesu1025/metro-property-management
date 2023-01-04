import SignUpText from "./LinkToSignUp/SignUpText";
import LoginForm from "./LoginForm/LoginForm";
import LoginHeadingText from "./LoginHeading/LoginHeadingText";
import RequiredText from "./Required/RequiredText";
import ButtonSocial from "./SocialLogin/ButtonSocial";
import LineText from "./TextHr/LineText";

const LoginMain = () => {
  return (
    <div
      className={`login-form   xl:basis-[45%]  basis-[100%] 
       flex flex-col gap-y-5 items-center
       2xl:px-20 xl:px-8 md:px-[20%] sm:px-[10%] px-[5%]
       `}
    >
      <LoginHeadingText />
      <ButtonSocial name="google" />
      <ButtonSocial name="apple" />
      <ButtonSocial name="facebook" />
      <LineText />
      <RequiredText />
      <LoginForm />
      <SignUpText />
    </div>
  );
};

export default LoginMain;
