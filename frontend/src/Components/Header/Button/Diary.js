import { Link } from "react-router-dom";

const Diary = () => {
  return (
    <button className="btn-diary bg-red2 text-white rounded py-2 px-8">
      <Link to="/login">My Diary</Link>
    </button>
  );
};

export default Diary;
