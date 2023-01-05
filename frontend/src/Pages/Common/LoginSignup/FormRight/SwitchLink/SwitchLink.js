import { Link } from "react-router-dom";
import TextRed from "../RedText/TextRed";

const SwitchLink = ({ text, buttonText }) => {
  return (
    <Link
      to={`/${buttonText}`}
      className={`italic text-paragraph capitalize text-[#424343B2]  text-right mx-auto w-full `}
    >
      {text}
      <TextRed customClass="underline font-bold " text={buttonText} />
    </Link>
  );
};

export default SwitchLink;
