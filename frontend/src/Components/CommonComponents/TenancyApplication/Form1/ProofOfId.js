import React from 'react'

const ProofOfId = () => {
    return (
        <div className='lg:px-[10rem] mb-[3rem]'>
            <h1 className='text-bookMeBtnBg text-[1rem] font-semibold mb-2'>Proof of Identity</h1>

            <p className='text-footerSubGrey2 text-[0.625rem] mb-3'>Important: You must upload one form of ID. This is for verifications purposes only.<span className='text-red1 font-bold'>*</span> <br />
            </p>

            <div className='mt-'>
                <button className='flex justify-between align-center px-[1.25rem] rounded-3xl border-buttonBorderGrey1 border-[0.052rem] w-[8.64rem] h-[2.448rem] 
                active:opacity-50'>
                    <p className='my-auto text-[0.729rem] font-semibold'>Add ID </p>
                    <img src="./images/tenancyApplication/plus.png" alt="plus" className='my-auto' />
                </button>
            </div>
        </div>


    )
}

export default ProofOfId