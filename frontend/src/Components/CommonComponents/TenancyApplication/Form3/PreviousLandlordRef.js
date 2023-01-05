import React from 'react'

const PreviousLandlordRef = () => {
    return (
        <div className='lg:px-[10rem] mb-[3rem]'>
            <h1 className='text-bookMeBtnBg text-[1rem] font-semibold mb-2'>Previous Landlord Reference</h1>
            <p className='text-bookMeBtnBg text-[0.729rem] mb-3'>
                Please provide us with your previous landlord’s details.<br />
                The purpose of collecting this information is to conduct a reference check to determine your suitability as a tenant.</p>
            <div className='flex flex-wrap gap-x-8 gap-y-[1.21rem] mb-3 '>
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

            <div className='mt-'>
                <button className='flex justify-around align-center px-[0.5rem] rounded-3xl border-buttonBorderGrey1 border-[0.052rem] w-[9.58rem] h-[1.92rem] 
                active:opacity-50'>
                    <p className='my-auto text-[0.729rem] font-semibold'>Add another landlord</p>
                    <img src="./images/tenancyApplication/plus.png" alt="plus" className='my-auto' />
                </button>
            </div>

        </div>
    )
}

export default PreviousLandlordRef