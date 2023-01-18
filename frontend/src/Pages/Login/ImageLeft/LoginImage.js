import axios from "axios";
import { useEffect, useState } from "react";
import LoginPropertyManager from "./LoginPropertyManager";

const LoginImage = () => {
  const [stevePropertyManager, setStevePropertyManager] = useState();

  useEffect(() => {
    let data = JSON.stringify({
      name: "Steve Johnson",
    });

    let config = {
      method: "post",
      url: "http://localhost:5000/login/stevePM",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        setStevePropertyManager(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={`login-img basis-[45%] xl:block hidden relative `}>
      {stevePropertyManager ? (
        <LoginPropertyManager ManagerArrayList={stevePropertyManager} />
      ) : null}

      <img
        className="2xl:w-[70%] xl:w-[90%]  mx-auto 2xl:mt-36 xl:mt-32"
        src="../images/pages/login-signup/login.png"
        alt="login"
      />

      <div
        className={`maintenance bg-white px-6 py-3  text-s
      flex gap-x-4 w-[80%] justify-center items-center 
      rounded-lg shadow-lg absolute right-0 2xl:bottom-[10%] xl:bottom-[15%]`}
      >
        <div className="maintenance-setting">
          <img src="../images/pages/login-signup/setting-tool.png" alt="tool" />
        </div>
        <div className="maintenance-schedule">
          <p>Upcoming plumbing maintenance request on </p>
          <p>April 12, 2023 10 am - 12 am</p>
        </div>
      </div>
    </div>
  );
};

export default LoginImage;
