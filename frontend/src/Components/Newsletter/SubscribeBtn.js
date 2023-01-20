import React from 'react'

const SubscribeBtn = ({ handleSubmit }) => {
    return (
        <button className=" bg-red2 text-white rounded-md w-[12.5rem] h-[2.95rem] px-10 py-3 shadow-lg" onSubmit={handleSubmit}>
            Subscribe
        </button>
    )
}

export default SubscribeBtn