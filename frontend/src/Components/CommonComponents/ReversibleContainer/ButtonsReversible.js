import React from "react";

const ButtonsReversible = ({ buttons }) => {
  return (
    <div className="reversible-btn-group flex justify-start gap-x-4">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={` ${button.bg} px-4 py-2 text-white text-paragraph rounded-md `}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};

export default ButtonsReversible;
