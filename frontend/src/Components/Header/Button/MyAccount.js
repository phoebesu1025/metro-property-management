import { Link } from "react-router-dom";

const MyAccount = () => {
  return (
    <button className="btn-diary bg-black1 text-white rounded py-2 px-8">
      <Link to="/login">My Account </Link>
    </button>
  );
};

export default MyAccount;
