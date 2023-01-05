import { useEffect, useState } from "react";
import FormButton from "../../../Common/LoginSignup/FormRight/Form/FormButton";
import TextInputField from "../../../Common/LoginSignup/FormRight/Form/TextInputField";
import TextValidate from "../../../Common/LoginSignup/FormRight/Form/TextValidate";
import PasswordValidation from "./Functions/PasswordValidation";
import axios from "axios";

const SignupForm = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [customError, setCustomError] = useState("");
  const [passValidate, setPassValidate] = useState({
    lengthIsMore: false,
    containNumber: false,
    containSpecialChar: false,
  });

  useEffect(() => {
    PasswordValidation(inputPassword, setPassValidate);
    console.log(customError);
  }, [inputPassword, customError]);

  function handleSignup(e) {
    e.preventDefault();
    let data = JSON.stringify({
      name: inputName,
      email: inputEmail,
      password: inputPassword,
    });

    let config = {
      name: "sign-up",
      method: "post",
      url: "http://localhost:5000/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        setCustomError(error.response.data);
        console.error("sds");
      });
  }

  return (
    <form
      onSubmit={handleSignup}
      className="sign-up-form w-full flex flex-col gap-y-5"
    >
      <TextInputField getInput={setInputName} type="name" />
      <TextInputField getInput={setInputEmail} type="email" />
      <TextInputField getInput={setInputPassword} type="password" />

      <TextValidate
        imgSrc={passValidate.lengthIsMore}
        text="At least 8 characters"
      />
      <TextValidate
        imgSrc={passValidate.containNumber}
        text="At least 1 number"
      />
      <TextValidate
        imgSrc={passValidate.containSpecialChar}
        text="At least 1 special char"
      />
      <FormButton text="Register" />
      {customError && <p>{customError}</p>}
    </form>
  );
};

export default SignupForm;
