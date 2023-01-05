import TextRed from "../RedText/TextRed";

const TextInputField = ({ type, getInput }) => {
  function handleInputChange(e) {
    getInput(e.currentTarget.value);
  }
  return (
    <div className={`${type} w-full `}>
      <label className={` text-paragraph capitalize`}>
        {`${type} `}
        <TextRed text="*" />
      </label>
      <input
        onChange={handleInputChange}
        type={`${type === "name" ? "text" : type}`}
        className={` w-full mt-2 rounded-md `}
      />
    </div>
  );
};

export default TextInputField;
