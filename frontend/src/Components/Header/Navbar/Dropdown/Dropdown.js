import { Link } from "react-router-dom";

const Dropdown = ({ dropdownDetailsArray }) => {
  // pass dropdownDetailsArray to Items as the redbox area
  // dropdownDetailsArray => Items.js/itemComponent => Nav.js/itemComponent={dropdown}
  //finally link to dropdown = DropdownArray ?

  return (
    <div className="hidden group-hover:block fixed bg-red3 left-0 top-[3.8rem] w-full py-14 px-24 z-30 cursor-auto ">
      <div className=" flex justify-between  text-white text-paragraph gap-x-4 leading-10 ">
        {/* Why do we need conditional rendering? */}
        {/* not sure how it works? when I try to see if i remove conditional rendering, pages will become blank page */}
        {dropdownDetailsArray.array.map((dropdownDetails, index) =>
          dropdownDetails.heading === "Keep track of your records" ? (
            <div
              className={`basis-1/4 ${dropdownDetails.name === "Property Management" && "basis-1/5"
                }`}
              key={index}
            >
              <img
                className=" h-6 "
                src={dropdownDetails.imgSrc}
                alt={dropdownDetails.imgAlt}
              />
              <h1 className="font-bold mt-4">{dropdownDetails.heading}</h1>
              <p className=" leading-5 my-2">
                Create an account to keep track of your favorites and rental
                process.
              </p>
              <Link className="mb-10 font-bold">Join My Diary</Link>
              <p className="leading-none">Already a Metro customer?</p>
              <Link className="font-bold">Sign into Tenant Portal</Link>
            </div>
          ) : (
            // list apart from heading: "Keep track of your records"
            <div
              className={`basis-1/4 ${dropdownDetails.name === "Property Management" && "basis-1/5"
                }`}
              key={index}
            >
              <img
                className=" h-6 "
                src={dropdownDetails.imgSrc}
                alt={dropdownDetails.imgAlt}
              />
              <h1 className="font-bold mt-4 leading-7 mb-2">
                {dropdownDetails.heading}
              </h1>

              {dropdownDetails.text ? (
                <p className="  ">{dropdownDetails.text}</p>
              ) : (
                <ul>
                  {/* DropdownArray.array.links */}
                  {dropdownDetails.links.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path}>{link.name}</Link>
                    </li>
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
