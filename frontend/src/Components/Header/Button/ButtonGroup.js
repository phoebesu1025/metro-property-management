import Diary from "./Diary";
import Login from "./Login";

const ButtonGroup = () => {
  return (
    <div className="header-buttons -mr-10">
      {/* <Login /> */}  {/*I'll keep it just in case, they might add login function?*/}
      <Diary />
    </div>
  );
};

export default ButtonGroup;
