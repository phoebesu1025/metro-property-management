import React from 'react'

const AddPLReferenceInput = () => {
    return (
        <div>
            <div className='flex flex-wrap gap-x-8 gap-y-[1.21rem] lg:px-[10rem] mt-3 '>
                <p className='text-footerSubGrey2 text-[0.625rem] '>Landlord/Agent Full Name <span className='text-red1 font-bold'>*</span> <br />
                    <input type="text" className='w-[17rem] rounded-md text-[0.73rem]  border-bookMeBtnBg  border-opacity-30 mt-1'></input>
                </p>

                <p className='text-footerSubGrey2 text-[0.625rem] '>Landlord/Agent Phone <span className='text-red1 font-bold'>*</span> <br />
                    <input type="text" className='w-[17rem] rounded-md text-[0.73rem]  border-bookMeBtnBg  border-opacity-30 mt-1'></input>
                </p>

                <p className='text-footerSubGrey2 text-[0.625rem] '>Landlord/Agent Email<span className='text-red1 font-bold'>*</span> <br />
                    <input type="text" className='w-[17rem] rounded-md text-[0.73rem]  border-bookMeBtnBg  border-opacity-30 mt-1'></input>
                </p>
            </div>
        </div >
    )
}

export default AddPLReferenceInput