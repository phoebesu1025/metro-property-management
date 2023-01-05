import React from "react";

const TextValidate = ({ text, imgSrc }) => {
  return (
    <div
      className={`flex justify-start items-center 
        gap-x-2 -mt-2 
        ${imgSrc && "animate-[wiggle_.5s_ease-in-5]"}
        `}
    >
      <img
        className="h-3 w-3  "
        src={`./images/pages/login-signup/${
          imgSrc ? "tick-circle-green" : "red-circle-cross"
        }.png`}
        alt=""
      />
      <p className="text-paragraph  text-[#424343B2]  ">{text}</p>
    </div>
  );
};

export default TextValidate;
