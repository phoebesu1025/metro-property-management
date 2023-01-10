import { useContext } from "react";
import LoggedUserContext from "../../../Context/LoggedUserContext";

const LogOut = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, setLoggedUser] = useContext(LoggedUserContext);

  function handleLogOut() {
    setLoggedUser(null);
    localStorage.setItem("localLoginUser", null);
  }

  return (
    <button
      onClick={handleLogOut}
      className="btn-diary bg-black1 text-white rounded py-2 px-8"
    >
      Log Out
    </button>
  );
};

export default LogOut;
