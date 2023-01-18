import React from "react";

const ButtonSocial = ({ name }) => {
  return (
    <button
      className={`social-login flex justify-start 
      border-2  border-[#666666] rounded-md
      pl-6 pr-12 py-3 w-full
      ${name}`}
    >
      <img
        className={` h-5 w-5`}
        src={`../images/pages/login-signup/${name}.png`}
        alt={name}
      />
      <p
        className={` text-paragraph capitalize ml-5`}
      >{`Continue with ${name}`}</p>
    </button>
  );
};

export default ButtonSocial;
