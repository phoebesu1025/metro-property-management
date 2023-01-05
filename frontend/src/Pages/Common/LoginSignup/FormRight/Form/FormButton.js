import React from "react";

const FormButton = ({ text }) => {
  return (
    <button
      className={` bg-red1 text-paragraph w-full py-3 font-semibold text-white rounded-md `}
    >
      {text}
    </button>
  );
};

export default FormButton;
