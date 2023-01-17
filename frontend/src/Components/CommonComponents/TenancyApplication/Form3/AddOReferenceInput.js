import React from 'react'

const AddOReferenceInput = () => {
    return (
        <div className='flex flex-wrap gap-x-5 gap-y-[1.21rem] mb-3 mx-[10rem] '>
            <p className='text-footerSubGrey2 text-[0.625rem] '>Full name <span className='text-red1 font-bold'>*</span> <br />
                <input type="text" className='w-[12.8rem] rounded-md text-[0.73rem]  border-bookMeBtnBg  border-opacity-30 mt-1'></input>
            </p>

            <p className='text-footerSubGrey2 text-[0.625rem] '> Phone <span className='text-red1 font-bold'>*</span> <br />
                <input type="text" className='w-[12.8rem] rounded-md text-[0.73rem]  border-bookMeBtnBg  border-opacity-30 mt-1'></input>
            </p>

            <p className='text-footerSubGrey2 text-[0.625rem] '> Email<span className='text-red1 font-bold'>*</span> <br />
                <input type="text" className='w-[12.8rem] rounded-md text-[0.73rem]  border-bookMeBtnBg  border-opacity-30 mt-1'></input>
            </p>

            <p className='text-footerSubGrey2 text-[0.625rem] '> Relationship<span className='text-red1 font-bold'>*</span> <br />
                <input type="text" className='w-[12.8rem] rounded-md text-[0.73rem]  border-bookMeBtnBg  border-opacity-30 mt-1'></input>
            </p>
        </div>
    )
}

export default AddOReferenceInput