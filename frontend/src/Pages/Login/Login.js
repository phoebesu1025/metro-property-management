import LoginMain from "./FormRight/LoginMain";
import LoginImage from "./ImageLeft/LoginImage";

const Login = () => {
  return (
    <div className="login flex justify-center 2xl:px-24 gap-x-[10%] sm:px-12 px-6 py-20">
      <LoginImage />
      <LoginMain />
    </div>
  );
};

export default Login;
