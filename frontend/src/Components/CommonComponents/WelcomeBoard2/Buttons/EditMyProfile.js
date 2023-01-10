import React from "react";
import { useNavigate } from "react-router-dom";

const SendMessage = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/new-user")}
      className="text-white bg-buttonGrey min-w-[1rem] px-[3rem] text-[0.9rem] rounded-md font-semibold"
    >
      Edit My Profile
    </button>
  );
};

export default SendMessage;
