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

  // Error Handling
  const [customError, setCustomError] = useState();

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
        localStorage.setItem("localLoginUser", response.data.email);
        navigate("/my-dairy/existing-user");
        window.scroll(0, 0)
      })
      .catch((error) => {
        setCustomError(error.response.data);
        console.log(error);
      });
  }

  return (
    <form
      onSubmit={handleLogin}
      className="login-form w-full flex flex-col gap-y-5"
    >
      <TextInputField
        required="required"
        name="email"
        getInput={setInputEmail}
        type="email"
      />
      <TextInputField
        required="required"
        name="password"
        getInput={setPasswordField}
        type="password"
      />
      <TextValidate text="Caps Lock is on" />
      <FormButton text="Log In" />
      {customError && <p className="text-red1 font-semibold">{customError}</p>}
    </form>
  );
};

export default LoginForm;
