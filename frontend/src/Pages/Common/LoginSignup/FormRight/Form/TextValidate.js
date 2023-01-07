import React from "react";

const TextValidate = ({ text, imgSrc, reactUseRef }) => {
  return (
    <div
      ref={reactUseRef}
      className={`flex justify-start items-center 
        gap-x-2 -mt-2 text-[#424343B2]
        `}
    >
      <img
        className="h-3 w-3  "
        src={`./images/pages/login-signup/${
          imgSrc ? "tick-circle-green" : "red-circle-cross"
        }.png`}
        alt=""
      />
      <p className="text-paragraph">{text}</p>
    </div>
  );
};

export default TextValidate;
