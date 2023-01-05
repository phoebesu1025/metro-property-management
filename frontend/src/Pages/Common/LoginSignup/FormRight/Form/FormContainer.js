import TextInputField from "./TextInputField";
import FormButton from "./FormButton";
import TextValidate from "./TextValidate";

const FormContainer = () => {
  return (
    <form className="login-form w-full flex flex-col gap-y-5">
      <TextInputField type="email" />
      <TextInputField type="password" />
      <TextValidate text="Caps lock is on" />
      <FormButton />
    </form>
  );
};

export default FormContainer;
