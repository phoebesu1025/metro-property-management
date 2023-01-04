import ButtonsReversible from "./ButtonsReversible";
import HeadingReversible from "./HeadingReversible";
import SubTextReversible from "./SubTextReversible";
import TextReversible from "./TextReversible";
import TitleReversible from "./TitleReversible";

const ContentReversible = ({ title, heading, text, subText, buttons }) => {
  return (
    <div className="text-content  basis-1/2 flex flex-col gap-y-4 ">
      {/* Showing title if the title prop is passed */}
      {title && <TitleReversible title={title} />}

      <HeadingReversible heading={heading} />
      <TextReversible text={text} />

      {/* Showing subtext if the subText prop is passed */}
      {subText && <SubTextReversible subText={subText} />}

      {/* Showing buttons if the button Array prop is passed */}
      {buttons && <ButtonsReversible buttons={buttons} />}
    </div>
  );
};

export default ContentReversible;
