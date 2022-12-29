const Dropdown = ({ dropdownDetailsArray }) => {
  return (
    <div className="hidden group-hover:block fixed bg-red2 left-0 top-[3.8rem] w-full py-14 px-24">
      <div className=" flex justify-between text-white  text-paragraph leading-10 ">
        {dropdownDetailsArray.array.map((dropdownDetails, index) =>
          dropdownDetails.heading === "Keep track of your records" ? (
            <div key={index}>
              <img src={dropdownDetails.imgSrc} alt={dropdownDetails.imgAlt} />
              <h1 className="font-bold mt-4">{dropdownDetails.heading}</h1>
              <p className="w-44 leading-5 my-2">
                Create an account to keep track of your favorites and rental
                process.
              </p>
              <p className="mb-10 font-bold">Join My Diary</p>
              <p className="leading-none">Already a Metro customer?</p>
              <p className="font-bold">Sign into Tenant Portal</p>
            </div>
          ) : (
            <div key={index}>
              <img src={dropdownDetails.imgSrc} alt={dropdownDetails.imgAlt} />
              <h1 className="font-bold mt-4 w-44 leading-7 mb-2">
                {dropdownDetails.heading}
              </h1>
              {dropdownDetails.text ? (
                <p className=" w-80 ">{dropdownDetails.text}</p>
              ) : (
                <ul>
                  {dropdownDetails.links.map((link, index) => (
                    <li key={index}>{link}</li>
                  ))}
                </ul>
              )}
            </div>
          )
        )}
      </div>
      {dropdownDetailsArray.contactText && (
        <div className="text-white mt-8 w-[45%]">
          {dropdownDetailsArray.contactText}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
