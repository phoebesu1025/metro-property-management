import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoggedUserContext from "../../../../Context/LoggedUserContext";
import FormButton from "../../../Common/LoginSignup/FormRight/Form/FormButton";
import TextInputField from "../../../Common/LoginSignup/FormRight/Form/TextInputField";
import TextValidate from "../../../Common/LoginSignup/FormRight/Form/TextValidate";

const LoginForm = () => {
  const [emailField, setInputEmail] = useState();
  const [passwordField, setPasswordField] = useState();

  // eslint-disable-next-line no-unused-vars
  const [_, setLoggedUser] = useContext(LoggedUserContext);

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    let data = JSON.stringify({
      email: emailField,
      password: passwordField,
    });

    let config = {
      method: "post",
      url: "http://localhost:5000/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        setLoggedUser(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  console.log(emailField, passwordField);

  return (
    <form
      onSubmit={handleLogin}
      className="login-form w-full flex flex-col gap-y-5"
    >
      <TextInputField name="email" getInput={setInputEmail} type="email" />
      <TextInputField
        name="password"
        getInput={setPasswordField}
        type="password"
      />
      <TextValidate text="Caps Lock is on" />
      <FormButton text="Log In" />
    </form>
  );
};

export default LoginForm;
