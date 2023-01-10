const LoginPropertyManager = ({ ManagerArrayList }) => {
  return (
    <div
      className={`w-[15.56rem] h-[15rem] 
       bg-white rounded-md  absolute left-0 top-16
       shadow-lg px-7`}
      key={ManagerArrayList._id}
    >
      <div className="top-section flex justify-between py-6">
        <div className="my-auto">
          <img src={ManagerArrayList.imgSrc} alt={ManagerArrayList.imgAlt} />
        </div>

        <div className="flex flex-col text-[0.6rem] font-semibold text-end">
          <div>{`${ManagerArrayList.successfulClient} Successful Clients`}</div>
          <div>{ManagerArrayList.email}</div>
          <div>{ManagerArrayList.phone}</div>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-[0.9rem] -mt-[0.3rem] ">
          {ManagerArrayList.name}
        </h1>
        <p className=" w-[13.5rem] mx-auto text-[0.6rem] leading-4 mb-5">
          {ManagerArrayList.detail} <br />
          {`Available to meet on ${ManagerArrayList.availableDate}`}
        </p>
      </div>

      <div className="flex gap-x-4 justify-between w-full">
        <button
          className={`text-white bg-[#666666] w-[6.5rem] px-[0.3rem] 
          text-[0.57rem] rounded-md font-semibold 
          `}
        >
          Send Message
        </button>
        <button
          className={`text-white bg-red1 w-[6.5rem] px-[0.3rem] 
          text-[0.57rem] rounded-md font-semibold  py-1
           `}
        >
          Book Online Meet
        </button>
      </div>
    </div>
  );
};

export default LoginPropertyManager;
