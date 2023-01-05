import FormButton from "../../../Common/LoginSignup/FormRight/Form/FormButton";
import TextInputField from "../../../Common/LoginSignup/FormRight/Form/TextInputField";
import TextValidate from "../../../Common/LoginSignup/FormRight/Form/TextValidate";

const LoginForm = () => {
  return (
    <form className="login-form w-full flex flex-col gap-y-5">
      <TextInputField type="email" />
      <TextInputField type="password" />
      <TextValidate text="Caps Lock is on" />
      <FormButton text="Log In" />
    </form>
  );
};

export default LoginForm;
