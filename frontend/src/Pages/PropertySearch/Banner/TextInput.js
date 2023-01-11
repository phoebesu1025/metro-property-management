import React from "react";

const TextInput = ({ length }) => {
  return (
    <div className={`name-search relative ${length}`}>
      <label className="text-s absolute left-0 -top-6 uppercase text-[#303030] ">
        Keywords
      </label>
      <input
        className="rounded-sm w-full border-0 font-bold text-black "
        placeholder="Enter the name"
        type={"text"}
      />
    </div>
  );
};

export default TextInput;
