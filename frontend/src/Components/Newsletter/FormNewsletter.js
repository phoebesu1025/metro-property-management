const FormNewsletter = () => {
  return (
    <form className="
    mt-12
    lg:my-auto
    lg:">
      <p className="text-paragraph w-full text-footerSubGrey2 mb-2 ">
        Your Email Address
      </p>
      <div className="flex gap-10
      flex-col  items-end 
      
      xs:flex-row xs:justify-between">
        <input
          type="text"
          className="border-footerInput rounded-md border-solid border  
          w-full h-[2.95rem] px-4 py-3

          xs:w-[21rem] 
            "
        />
        <button className=" bg-red2 text-white rounded-md w-[12.5rem] h-[2.95rem] px-10 py-3 ">
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default FormNewsletter;
