import React from "react";
import TextRed from "../RedText/TextRed";

const RequiredText = () => {
  return (
    <p
      className={`italic text-paragraph text-[#424343B2] mt-5 mx-auto w-full `}
    >
      (All fields marked with <TextRed text={"*"} /> are required)
    </p>
  );
};

export default RequiredText;
