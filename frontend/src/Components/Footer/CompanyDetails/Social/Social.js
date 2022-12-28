import ItemSocial from "./ItemSocial";

const Social = () => {
  const socials = [
    {
      link: "https://www.facebook.com/MetroNZ",
      imgAlt: "facebook Logo",
      imgSrc: "./images/facebookIcon.png",
    },
    {
      link: "https://www.linkedin.com/company/metro-nz-property-management-ltd/",
      imgAlt: "LinkedIn Logo",
      imgSrc: "./images/linkedinIcon.png",
    },
    {
      link: "https://twitter.com/metronz_",
      imgAlt: "Twitter logo",
      imgSrc: "./images/twitterIcon.png",
    },
    {
      link: "https://www.instagram.com/metronzproperty/",
      imgAlt: "Instagram logo",
      imgSrc: "./images/insIcon.png",
    },
  ];

  return (
    <div className="flex justify-between w-52 mt-6">
      {socials.map((social, index) => {
        return (
          <ItemSocial
            key={index}
            link={social.link}
            imgAlt={social.imgAlt}
            imgSrc={social.imgSrc}
          />
        );
      })}
    </div>
  );
};

export default Social;
