import React from "react";
import FormContainer from "./Form/FormContainer";
import ImageDiv from "./Image/ImageDiv";

const Signup = () => {
  return (
    <div className="sing-up flex justify-center 2xl:px-24 gap-x-[10%] sm:px-12 px-6 py-20">
      <FormContainer />
      <ImageDiv />
    </div>
  );
};

export default Signup;
