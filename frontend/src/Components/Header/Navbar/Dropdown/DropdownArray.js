import { Fragment } from "react";

const DropdownArray = [
  // Rental
  {
    name: "Rentals",
    array: [
      {
        heading: "Looking to rent",
        imgSrc: "./images/looking.png",
        imgAlt: "looking",
        links: ["Rental Listings", "Rental Process"],
      },
      {
        heading: "Metro Rental Services",
        imgSrc: "./images/service.png",
        imgAlt: "looking",
        links: [
          "Tenant Services",
          "Own a home while renting",
          "Healthy home standards",
        ],
      },
      {
        heading: "Meet a property manager",
        imgSrc: "./images/people.png",
        imgAlt: "looking",
        links: ["Book an online meet"],
      },
      {
        heading: "Keep track of your records",
        imgSrc: "./images/record.png",
        imgAlt: "Record",
      },
    ],
  },
  // Investments
  {
    name: "Investments",
    array: [
      {
        heading: "Looking to invest",
        imgSrc: "./images/looking.png",
        imgAlt: "looking",
        links: [
          "Investment Properties Listing",
          "Open Homes",
          "Buying Process",
        ],
      },
      {
        heading: "Metro Services",
        imgSrc: "./images/service.png",
        imgAlt: "Services",
        links: [
          "Sell tenanted properties",
          "Property Management Services",
          "Healthy home standards",
        ],
      },
      {
        heading: "Book and online meet",
        imgSrc: "./images/people.png",
        imgAlt: "People",
        links: ["Metro Property Manager", "Finance Adviser"],
      },
      {
        heading: "Keep track of your records",
        imgSrc: "./images/record.png",
        imgAlt: "Record",
      },
    ],
  },
  // Property Management
  {
    name: "Property Management",
    array: [
      {
        heading: "Looking for Property Management",
        imgSrc: "./images/property.png",
        imgAlt: "property",
        links: [
          "Residential Property Management",
          "Commercial Property Management",
          "Finding Tenant Process",
          "Free Rental Appraisal",
          "Change to Metro",
        ],
      },
      {
        heading: "Looking for Building Management",
        imgSrc: "./images/looking.png",
        imgAlt: "looking",
        links: [
          "Building Management",
          "Body Corporate Administration",
          "Change to Metro",
        ],
      },
      {
        heading: "Looking to sell Tenanted Property",
        imgSrc: "./images/service.png",
        imgAlt: "service",
        links: [
          "Free property appraisal",
          "Renovation Project Management",
          "Decluttering Service",
          "Healthy home standards",
        ],
      },
      {
        heading: "Book an online meet",
        imgSrc: "./images/people.png",
        imgAlt: "people",
        links: ["Residential Property Manager", "Commercial Property Manager"],
      },
      {
        heading: "Keep track of your records",
        imgSrc: "./images/record.png",
        imgAlt: "Record",
      },
    ],
  },
  //About US
  {
    name: "About Us",
    array: [
      {
        heading: "About Us",
        imgSrc: "./images/property.png",
        imgAlt: "Property",
        links: ["Our team", "Dispute Process"],
      },
      {
        heading: "Metro News",
        imgSrc: "./images/service.png",
        imgAlt: "Services",
        links: ["News", "Gallery"],
      },
      {
        heading: "Join Us",
        imgSrc: "./images/people.png",
        imgAlt: "People",
        links: ["We are hiring"],
      },
      {
        heading: "Property Management Albany",
        imgSrc: "./images/people.png",
        imgAlt: "People",
        text: `Looking for Property Management in Albany? Metro
        NZ is a leading property management compnay in Auckland. Phone 
        us on 09 391 4642 or contact us via email at ifo@metronz.co.nz`,
      },
    ],
  },
  // Contact
  {
    name: "Contact",
    contactText: `We’d be happy to assist you with any questions you may have as a landlord, 
    tenant, investor, potential renter or someone who just wants more information! 
    You’re in safe hands with us. Contact our professional and 
    experienced team of property managers today.`,
    array: [
      {
        heading: "Location",
        imgSrc: "./images/location.png",
        imgAlt: "location",
        text: (
          <Fragment>
            Metro NZ Property <br />
            Management Ltd <br />
            Level 33, ANZ Centre <br />
            23-29 Albert St <br />
            Auckland 1010, New Zealand
          </Fragment>
        ),
      },
      {
        heading: "Mail",
        imgSrc: "./images/email.png",
        imgAlt: "email",
        text: "info@metronz.co.nz",
      },
      {
        heading: "Phone",
        imgSrc: "./images/phone.png",
        imgAlt: "phone",
        text: "+64 9 391 4642",
      },
      {
        heading: "Our Albany Team",
        imgSrc: "./images/people.png",
        imgAlt: "People",
        text: `Looking for Property Management in Albany? 
        Metro Nz is a leading property management company in Auckland. 
        Phoebe us on 09 391 4642 or contact us via email at info@metronz.co.nz`,
      },
    ],
  },
];

export default DropdownArray;
