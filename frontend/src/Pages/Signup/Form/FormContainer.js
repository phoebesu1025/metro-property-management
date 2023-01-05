import React from "react";
import HeadingText from "../../Common/LoginSignup/FormRight/Heading/HeadingText";
import RequiredText from "../../Common/LoginSignup/FormRight/Required/RequiredText";
import ButtonSocial from "../../Common/LoginSignup/FormRight/Social/ButtonSocial";
import SwitchLink from "../../Common/LoginSignup/FormRight/SwitchLink/SwitchLink";
import LineText from "../../Common/LoginSignup/FormRight/TextHr/LineText";
import SignupForm from "./SignupForm/SignupForm";

const FormContainer = () => {
  return (
    <div
      className={`login-form   xl:basis-[45%]  basis-[100%] 
     flex flex-col gap-y-5 items-center
     2xl:px-20 xl:px-8 md:px-[20%] sm:px-[10%] px-[5%]
     `}
    >
      <HeadingText text="Lets get started" />
      <ButtonSocial name="google" />
      <ButtonSocial name="apple" />
      <ButtonSocial name="facebook" />
      <LineText text="or Join with account," />
      <RequiredText />
      <SignupForm />
      <SwitchLink text="Already have an account? " buttonText={"login"} />
    </div>
  );
};

export default FormContainer;
