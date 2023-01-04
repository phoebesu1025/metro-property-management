import React from "react";
import TextRed from "../RedText/TextRed";

const SignUpText = () => {
  return (
    <p
      className={`italic text-paragraph text-[#424343B2]  text-right mx-auto w-full `}
    >
      Don’t you have an account?{" "}
      <TextRed customClass="underline font-bold " text="Register" />
    </p>
  );
};

export default SignUpText;
