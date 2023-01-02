import Diary from "./Diary";

const ButtonGroup = () => {
  return (
    <div className="header-buttons ml-auto sm:flex hidden">
      {/* <Login /> */}{" "}
      {/*I'll keep it just in case, they might add login function?*/}
      <Diary />
    </div>
  );
};

export default ButtonGroup;
