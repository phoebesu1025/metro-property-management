import Diary from "./Diary";
import Login from "./Login";

const ButtonGroup = () => {
  return (
    <div className="header-buttons flex gap-x-4 group">
      <Login />
      <Diary />
    </div>
  );
};

export default ButtonGroup;
