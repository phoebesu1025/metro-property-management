import React from 'react'

const Utilities = () => {
    return (
        <div className='lg:px-[10rem] mb-[3rem]'>
            <h1 className='text-bookMeBtnBg text-[1rem] font-semibold mb-2'>Proof of Identity</h1>

            <p className='text-footerSubGrey2 text-[0.625rem] mb-3'>Important: You must upload one form of ID. This is for verifications purposes only.<span className='text-red1 font-bold'>*</span> <br />
            </p>


            <div className='flex flex-col justify-end w-[37rem]'>
                <div className='flex justify-between '>

                    <div><input type="checkbox" className='text-[0.625rem]  border-bookMeBtnBg  text-bookMeBtnBg border-opacity-30 ' />
                        <label className='my-auto ml-2 bookMeBtnBg text-[0.625rem]'>Broadband </label></div>

                    <div>  <input type="checkbox" className='text-[0.625rem]  border-bookMeBtnBg  text-bookMeBtnBg border-opacity-30  ' />
                        <label className='my-auto ml-2 bookMeBtnBg text-[0.625rem]'>Pay TV</label></div>

                    <div> <input type="checkbox" className='text-[0.625rem]  border-bookMeBtnBg  text-bookMeBtnBg  border-opacity-30 ' />
                        <label className='my-auto ml-2 bookMeBtnBg text-[0.625rem]'>Electricity</label></div>

                    <div> <input type="checkbox" className='text-[0.625rem]  border-bookMeBtnBg  text-bookMeBtnBg  border-opacity-30 ' />
                        <label className='my-auto ml-2 bookMeBtnBg text-[0.625rem]'>LPG</label></div>

                    <div> <input type="checkbox" className='text-[0.625rem]  border-bookMeBtnBg  text-bookMeBtnBg  border-opacity-30 ' />
                        <label className='my-auto ml-2 bookMeBtnBg text-[0.625rem]'>Removals</label></div>

                    <div> <input type="checkbox" className='text-[0.625rem]  border-bookMeBtnBg  text-bookMeBtnBg  border-opacity-30 ' />
                        <label className='my-auto ml-2 bookMeBtnBg text-[0.625rem]'>Natural Gas</label></div>
                </div>
            </div>
        </div>
    )
}

export default Utilities