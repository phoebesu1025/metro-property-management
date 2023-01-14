import { Link } from "react-router-dom";

const MyAccount = () => {
  return (
    <button className="btn-diary bg-buttonGrey text-white rounded py-2 px-8">
      <Link to="/login">My Account </Link>
    </button>
  );
};

export default MyAccount;
