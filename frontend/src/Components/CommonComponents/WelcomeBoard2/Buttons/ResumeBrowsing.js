import { useNavigate } from "react-router-dom";

const BookMeeting = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/")}
      className="text-white bg-red1 min-w-[1rem] h-[2.95rem] px-[3rem] text-[0.9rem] rounded font-semibold"
    >
      Resume Browsing
    </button>
  );
};

export default BookMeeting;
