import React from 'react'

const Name = ({ middleDetail }) => {
    return (
        <div>
            <h1 className="font-bold text-[0.9rem] mb-3  ">
                {middleDetail.name}
            </h1>
            <p className=" w-[13.5rem]  text-[0.6rem] leading-4 mb-7 text-buttonGrey">
                {middleDetail.detail} <br />
                <span className="font-bold text-black">{`Available to meet on ${middleDetail.availableDate}`}</span>
            </p>
        </div>
    )
}

export default Name