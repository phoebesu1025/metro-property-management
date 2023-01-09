import React from "react";
import { Link, useNavigate } from "react-router-dom";

const WelcomeBoard1 = () => {
  const navigate = useNavigate();

  return (
    <div className="metro-signup-welcome-1 py-20 xl:px-[20%]  sm:px-[15%] px-[4%] flex flex-col items-center gap-y-10 ">
      <h3 className=" text-heading2 leading-10 font-bold ">
        Welcome to Metro’s My Diary!
      </h3>
      <p className="text-center 2xl:px-60 xl:px-32 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris
      </p>

      <Link to="/" className=" text-red1 font-bold underline -mt-8 ">
        Skip onboarding
      </Link>

      <img
        className="w-fit"
        src="./images/pages/login-signup/Rectangle.png"
        alt="Rectangle"
      />

      <button
        onClick={() => navigate("/welcome-board-2")}
        className="bg-red1 text-white rounded-sm px-6 py-3"
      >
        Next
      </button>
    </div>
  );
};

export default WelcomeBoard1;
