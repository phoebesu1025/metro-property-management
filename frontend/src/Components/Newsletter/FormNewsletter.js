const FormNewsletter = () => {
  return (
    <form className="w-1/2">
      <p className="text-paragraph w-full text-footerSubGrey2 mb-2 ">
        Your Email Address
      </p>
      <div className="flex gap-x-20">
        <input
          type="text"
          className="w-4/6 px-4 py-3 border-solid border border-footerInput rounded-md"
        />
        <button className="w-2/6 px-10 py-3 bg-red2 text-white rounded-md">
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default FormNewsletter;
