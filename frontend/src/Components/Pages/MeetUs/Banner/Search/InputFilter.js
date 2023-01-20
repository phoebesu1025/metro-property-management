import React from 'react'

const InputFilter = ({ onChange }) => {
    return (
        <div className="name-search flex flex-col gap-y-2 2xl:basis-[25%] sm:basis-[45%] basis-[100%]">
            <label>Search by Property manager Name</label>
            <input
                placeholder="Enter the name"
                type={"text"}
                onChange={onChange} />
        </div>
    )
}

export default InputFilter