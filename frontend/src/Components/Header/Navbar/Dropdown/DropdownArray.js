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
        links: [
          { name: "Rental Listings", path: "property-search" },
          { name: "Rental Process", path: "rental-process" },
        ],
      },
      {
        heading: "Metro Rental Services",
        imgSrc: "./images/service.png",
        imgAlt: "looking",
        links: [
          { name: "Tenant Services", path: "tenant-services" },
          {
            name: "Own a home while renting",
            path: "buy-a-home-while-renting",
          },
          { name: "Healthy home standards", path: "healthy-home-standards" },
        ],
      },
      {
        heading: "Meet a property manager",
        imgSrc: "./images/people.png",
        imgAlt: "looking",
        links: [{ name: "Book an online meet", path: "book-an-online-meet" }],
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
          {
            name: "Investment Properties Listing",
            path: "book-an-online-meet",
          },
          { name: "Open Homes", path: "book-an-online-meet" },
          { name: "Buying Process", path: "book-an-online-meet" },
        ],
      },
      {
        heading: "Metro Services",
        imgSrc: "./images/service.png",
        imgAlt: "Services",
        links: [
          { name: "Sell tenanted properties", path: "healthy-home-standards" },
          { name: "Sell tenanted properties", path: "healthy-home-standards" },
          { name: "Healthy home standards", path: "healthy-home-standards" },
        ],
      },
      {
        heading: "Book and online meet",
        imgSrc: "./images/people.png",
        imgAlt: "People",
        links: [
          { name: "Metro Property Manager", path: "healthy-home-standards" },
          { name: "Finance Adviser", path: "healthy-home-standards" },
        ],
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
    name: "Management",
    array: [
      {
        heading: "Looking for Property Management",
        imgSrc: "./images/property.png",
        imgAlt: "property",
        links: [
          {
            name: "Residential Property Management",
            path: "healthy-home-standards",
          },
          {
            name: "Commercial Property Management",
            path: "healthy-home-standards",
          },
          { name: "Finding Tenant Process", path: "healthy-home-standards" },
          { name: "Free Rental Appraisal", path: "healthy-home-standards" },
          { name: "Change to Metro", path: "healthy-home-standards" },
        ],
      },
      {
        heading: "Looking for Building Management",
        imgSrc: "./images/looking.png",
        imgAlt: "looking",
        links: [
          { name: "Building Management", path: "healthy-home-standards" },
          {
            name: "Body Corporate Administration",
            path: "healthy-home-standards",
          },
          { name: "Change to Metro", path: "healthy-home-standards" },
        ],
      },
      {
        heading: "Looking to sell Tenanted Property",
        imgSrc: "./images/service.png",
        imgAlt: "service",
        links: [
          { name: "Free property appraisal", path: "healthy-home-standards" },
          {
            name: "Renovation Project Management",
            path: "healthy-home-standards",
          },
          { name: "Decluttering Service", path: "healthy-home-standards" },
        ],
      },
      {
        heading: "Book an online meet",
        imgSrc: "./images/people.png",
        imgAlt: "people",
        links: [
          {
            name: "Residential Property Manager",
            path: "healthy-home-standards",
          },
          {
            name: "Commercial Property Manager",
            path: "healthy-home-standards",
          },
        ],
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
    name: "About",
    array: [
      {
        heading: "About Us",
        imgSrc: "./images/property.png",
        imgAlt: "Property",
        links: [
          {
            name: "Our team",
            path: "meet-our-professionals",
          },
          {
            name: "Dispute Process",
            path: "healthy-home-standards",
          },
        ],
      },
      {
        heading: "Metro News",
        imgSrc: "./images/service.png",
        imgAlt: "Services",
        links: [
          {
            name: "News",
            path: "healthy-home-standards",
          },
          {
            name: "Gallery",
            path: "healthy-home-standards",
          },
        ],
      },
      {
        heading: "Join Us",
        imgSrc: "./images/people.png",
        imgAlt: "People",
        links: [
          {
            name: "We are hiring",
            path: "healthy-home-standards",
          },
        ],
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
