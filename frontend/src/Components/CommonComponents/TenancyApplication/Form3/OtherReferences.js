import React from 'react'

const OtherReferences = () => {
    return (
        <div className='lg:px-[10rem] '>
            <h1 className='text-bookMeBtnBg text-[1rem] font-semibold mb-2'>Other Reference</h1>

            <div className='flex flex-wrap gap-x-5 gap-y-[1.21rem] mb-3 '>
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
        </div>
    )
}

export default OtherReferences