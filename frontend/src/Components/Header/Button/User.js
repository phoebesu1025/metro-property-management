import { useContext } from "react";
import LoggedUserContext from "../../../Context/LoggedUserContext";

const User = () => {
  // eslint-disable-next-line no-unused-vars
  const [LoggedUser, _] = useContext(LoggedUserContext);

  return (
    <button className="btn-diary bg-black1 text-white rounded-full w-auto ">
      <p className="w-10 uppercase">
        {LoggedUser.name ? LoggedUser.name.charAt(0) : "u"}
      </p>
    </button>
  );
};

export default User;
