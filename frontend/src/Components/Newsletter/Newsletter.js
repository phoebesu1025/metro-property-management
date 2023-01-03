import FormNewsletter from "./FormNewsletter";
import TextNewsletter from "./TextNewsletter";

const Newsletter = () => {
  return (
    <div className="newsletter bg-footerWhitebBg flex py-8 
    flex-col
    
    px-[1.7rem]
    sm:px-[3rem] 
    lg:px-[7rem] lg:flex-row lg:gap-2">
      <TextNewsletter />
      <FormNewsletter />
    </div>
  );
};

export default Newsletter;
