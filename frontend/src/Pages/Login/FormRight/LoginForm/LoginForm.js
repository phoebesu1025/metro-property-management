import ButtonLogin from "./ButtonLogin";
import TextCaps from "./TextCaps";
import TextInputField from "./TextInputField";

const LoginForm = () => {
  return (
    <form className="login-form w-full flex flex-col gap-y-5">
      <TextInputField type="email" />
      <TextInputField type="password" />
      <TextCaps />
      <ButtonLogin />
    </form>
  );
};

export default LoginForm;
