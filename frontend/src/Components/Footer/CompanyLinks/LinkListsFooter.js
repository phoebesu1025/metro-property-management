import React from "react";

const LinkListsFooter = ({ heading, lists }) => {
  return (
    <div
      /*I think this part need some comment🤔 */
      className={`link-list-footer h-20  mt-2 
      
      ${(heading === "Investments" || heading === "Meet Our Team") &&
        "2xl:mt-[-4rem] mt-[16rem] h-10 md:mt-[20rem] "
        } 
        
        
        `}
    >
      <h1 className=" text-footerWhite text-[1rem] font-bold
      xs:">{heading}</h1>
      <ul className="text-[0.85rem] leading-7 mb-10 ">
        {lists.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </div>
  );
};

export default LinkListsFooter;
