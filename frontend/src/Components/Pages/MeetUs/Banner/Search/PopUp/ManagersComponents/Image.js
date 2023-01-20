import React from 'react'

const Image = ({ img }) => {
    return (
        <div className="my-auto hover:animate-pulse cursor-pointer">
            <img src={img.imgSrc} alt={img.imgAlt} />
        </div>)
}

export default Image