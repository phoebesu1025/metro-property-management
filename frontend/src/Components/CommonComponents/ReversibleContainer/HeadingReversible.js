import React from "react";

const HeadingReversible = ({ heading }) => {
  return (
    <h1 className="reversible-heading text-heading2 leading-[2.75rem] font-bold">
      {heading}
    </h1>
  );
};

export default HeadingReversible;
