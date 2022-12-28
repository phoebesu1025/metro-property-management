import React from "react";

const ItemSocial = ({ link, imgSrc, imgAlt }) => {
  return (
    <a href={link}>
      <img src={imgSrc} alt={imgAlt} />
    </a>
  );
};

export default ItemSocial;
