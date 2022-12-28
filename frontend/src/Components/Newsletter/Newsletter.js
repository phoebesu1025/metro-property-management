import FormNewsletter from "./FormNewsletter";
import TextNewsletter from "./TextNewsletter";

const Newsletter = () => {
  return (
    <div className="newsletter bg-footerWhitebBg flex py-12 px-24 gap-x-20">
      <TextNewsletter />
      <FormNewsletter />
    </div>
  );
};

export default Newsletter;
