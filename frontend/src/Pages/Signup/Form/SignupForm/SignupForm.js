import { useEffect, useRef, useState } from "react";
import FormButton from "../../../Common/LoginSignup/FormRight/Form/FormButton";
import TextInputField from "../../../Common/LoginSignup/FormRight/Form/TextInputField";
import TextValidate from "../../../Common/LoginSignup/FormRight/Form/TextValidate";
import PasswordValidation from "./Functions/PasswordValidation";
import axios from "axios";

const SignupForm = () => {
  // Variables to store input fields value
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  // UseRefs for password text validation
  const moreLength = useRef(); //At least 8 characters
  const haveNumber = useRef(); //At least 1 number
  const haveSpecChar = useRef(); //At least 1 special char

  // Error Variable
  const [customError, setCustomError] = useState("");

  // Variable to check password accessibility
  const [passValidate, setPassValidate] = useState({
    lengthIsMore: false, //At least 8 characters
    containNumber: false, //At least 1 number
    containSpecialChar: false, //At least 1 special char
  });

  useEffect(() => {
    // Password validity and change image from red cross -> green tick
    PasswordValidation(inputPassword, setPassValidate);
  }, [inputPassword, customError]);

  // password Verification and changing text to red if password criteria is invalid
  function handlePassVerification(givenVerification, textField) {
    if (!givenVerification) {
      textField.current.children[1].classList.add("text-red1");
      textField.current.children[1].classList.add("font-bold");
      textField.current.children[1].classList.add(
        "animate-[bounce_0.5s_ease-in-out_infinite]"
      );
      // Removing the class after 1250 milliseconds
      setTimeout(() => {
        textField.current.children[1].classList.remove("text-red1");
        textField.current.children[1].classList.remove("font-bold");
        textField.current.children[1].classList.remove(
          "animate-[bounce_0.5s_ease-in-out_infinite]"
        );
      }, 1250);
      throw new Error("please check your password");
    }
  }

  // Api Call to create user
  function handleSignup(e) {
    e.preventDefault();
    let data = JSON.stringify({
      name: inputName,
      email: inputEmail,
      password: inputPassword,
    });

    handlePassVerification(passValidate.lengthIsMore, moreLength);
    handlePassVerification(passValidate.containNumber, haveNumber);
    handlePassVerification(passValidate.containSpecialChar, haveSpecChar);

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
        console.error(error.response.data);
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
        reactUseRef={moreLength}
        imgSrc={passValidate.lengthIsMore}
        text="At least 8 characters"
      />
      <TextValidate
        reactUseRef={haveNumber}
        imgSrc={passValidate.containNumber}
        text="At least 1 number"
      />
      <TextValidate
        reactUseRef={haveSpecChar}
        imgSrc={passValidate.containSpecialChar}
        text="At least 1 special char"
      />
      <FormButton text="Register" />
      {customError && <p>{customError}</p>}
    </form>
  );
};

export default SignupForm;
