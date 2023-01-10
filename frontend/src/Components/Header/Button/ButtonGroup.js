import { useContext } from "react";

import LoggedUserContext from "../../../Context/LoggedUserContext";
import Contact from "./Contact";
import LogOut from "./LogOut";
import MyAccount from "./MyAccount";
import User from "./User";

const ButtonGroup = () => {
  // eslint-disable-next-line no-unused-vars
  const [LoggedUser, _] = useContext(LoggedUserContext);

  return (
    <div className="header-buttons  gap-x-2 ml-auto sm:flex hidden">
      {/* <Login /> */}{" "}
      {/*I'll keep it just in case, they might add login function?*/}
      <Contact />
      {LoggedUser ? <LogOut /> : <MyAccount />}
      {LoggedUser ? <User /> : null}
    </div>
  );
};

export default ButtonGroup;
