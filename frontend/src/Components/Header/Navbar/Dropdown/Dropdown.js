const Dropdown = ({ dropdownDetailsArray }) => {
  // pass dropdownDetailsArray to Items as the redbox area
  // dropdownDetailsArray => Items.js/itemComponent => Nav.js/itemComponent={dropdown}
  //finally link to dropdown = DropdownArray ?

  return (
    <div className="hidden group-hover:block fixed bg-red2 left-0 top-[3.8rem] w-full py-14 px-24">
      <div className=" flex justify-between text-white  text-paragraph leading-10 ">

        {/* Why do we need conditional rendering? */}
        {/* not sure how it works? when I try to see if i remove conditional rendering, pages will become blank page */}
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
          ) :
            (
              // list apart from heading: "Keep track of your records"
              <div key={index}>
                <img src={dropdownDetails.imgSrc} alt={dropdownDetails.imgAlt} />
                <h1 className="font-bold mt-4 w-44 leading-7 mb-2">
                  {dropdownDetails.heading}
                </h1>

                {dropdownDetails.text ? (
                  <p className=" w-80 ">{dropdownDetails.text}</p>
                ) : (
                  <ul>
                    {/* DropdownArray.array.links */}
                    {dropdownDetails.links.map((link, index) => (
                      <li key={index}>{link}</li>
                    ))}
                  </ul>
                )}
              </div>
            )
        )}
      </div>

      {/* What's the conditional rendering here? */}
      {dropdownDetailsArray.contactText && (
        <div className="text-white mt-7 w-[45%]">
          {dropdownDetailsArray.contactText}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
