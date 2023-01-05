import TextRed from "../../../Common/LoginSignup/FormRight/RedText/TextRed";

const TextInputField = ({ type }) => {
  return (
    <div className={`${type} w-full `}>
      <label className={` text-paragraph capitalize`}>
        {`${type} `}
        <TextRed text="*" />
      </label>
      <input type={`${type}`} className={` w-full mt-2 rounded-md `} />
    </div>
  );
};

export default TextInputField;
