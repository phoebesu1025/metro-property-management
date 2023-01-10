import { useState } from "react";
import TextRed from "../RedText/TextRed";

const TextInputField = ({ type, getInput, name, required }) => {
  function handleInputChange(e) {
    getInput(e.currentTarget.value);
  }

  const [showPassword, setShowPassword] = useState("password");

  function handleShowPassword(e) {
    e.preventDefault();
    if (showPassword === "password") {
      setShowPassword("text");
    } else if (showPassword === "text") {
      setShowPassword("password");
    } else {
      setShowPassword(type);
    }
  }
  return (
    <div className={`${name} w-full `}>
      <label className={` text-paragraph capitalize`}>
        {`${name} `}
        <TextRed text="*" />
      </label>
      <div className="relative mt-2">
        <input
          required={required}
          onChange={handleInputChange}
          type={`${type === "password" ? showPassword : type}`}
          className={` w-full  rounded-md `}
        />
        {/* Show hide/show password button if input type is password */}
        {type === "password" && (
          <button onClick={handleShowPassword}>
            <img
              className="absolute right-4 bottom-0 top-0 my-auto"
              src="./images/pages/login-signup/eye-line.png"
              alt="password"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default TextInputField;
