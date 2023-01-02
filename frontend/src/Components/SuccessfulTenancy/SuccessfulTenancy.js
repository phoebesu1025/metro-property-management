import RentalProcess from "./RentalProcess";

const SuccessfulTenancy = () => {
  const SuccessfulTenancy = [
    {
      heading: "Drop in to have a look",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut`,
      imgSrc: "havealook.png",
      imgAlt: "family with home",
    },
    {
      heading: "Complete the tenancy application",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut`,
      imgSrc: "tenancyapplication.png",
      imgAlt: "family with home",
    },
    {
      heading: "We’ll do some homework",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut`,
      imgSrc: "homework.png",
      imgAlt: "family with home",
    },
    {
      heading: "Sign the tenancy agreement",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut`,
      imgSrc: "tenancyagreement.png",
      imgAlt: "family with home",
    },
    {
      heading: "Here is the best thing! You get to work with us",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut`,
      imgSrc: "workwithus.png",
      imgAlt: "family with home",
    },
  ];

  return (
    <div className="successful-tenancy px-24 py-20">
      <h3 className=" text-heading3 leading-8">How it works,</h3>
      <h1 className=" text-heading2 leading-[3.5rem] font-semibold w-[25%]">
        Steps to a successful tenancy
      </h1>

      <div className="flex">
        {SuccessfulTenancy.map((singleProcess, index) => (
          <RentalProcess key={index} singleProcess={singleProcess} />
        ))}
      </div>
    </div>
  );
};

export default SuccessfulTenancy;
