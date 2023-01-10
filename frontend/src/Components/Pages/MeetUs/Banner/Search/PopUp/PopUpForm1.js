import React from 'react'
import { useState } from 'react'

const PopUpForm1 = () => {
    return (
        <form className='mt-[1.5rem]'>
            <div className='flex justify-between mb-[1.5rem]'>
                <label className='text-footerSubGrey2 text-[0.875rem]'>Name <span className='text-popUpStar'>*</span><br />
                    <input required type='text' placeholder='Type your name' className='w-[24.063rem] rounded-md  opacity-70 mt-1 placeholder:text-buttonGrey placeholder:text-[0.75rem]' /></label>

            </div>

            <div className='flex justify-between mb-[1.5rem]'>
                <label className='text-footerSubGrey2 text-[0.875rem]'>Your Email <span className='text-popUpStar'>*</span><br />
                    <input required type='email' placeholder='Type your email' className='w-[11.375rem] rounded-md  opacity-70 mt-1 placeholder:text-buttonGrey placeholder:text-[0.75rem]' /></label>
                <label className='text-footerSubGrey2 text-[0.875rem]'>Phone number<br />
                    <input type="tel" pattern=".{8,}" placeholder='Type your phone number' className='w-[11.375rem] rounded-md opacity-70 mt-1 placeholder:text-buttonGrey placeholder:text-[0.75rem] ' /></label>
            </div>

            <div className='mb-[1.5rem]'>
                <h1 className='text-footerSubGrey2 text-[0.875rem]'>Preferred means to reach you<span className='text-popUpStar'>*</span></h1>
                <div className='flex items-center'>
                    <input type="checkbox" className=' opacity-70  placeholder:text-buttonGrey placeholder:text-[0.75rem]  ' /><label className='text-footerSubGrey2 text-[0.75rem] ml-2 mr-10' >Phone</label>

                    <input type="checkbox" className=' opacity-70  placeholder:text-buttonGrey placeholder:text-[0.75rem] ' /><label className='text-footerSubGrey2 text-[0.75rem]  ml-2'>Email</label>
                </div>
            </div>

            <div>
                <label className='text-footerSubGrey2 text-[0.875rem]'> Message <span className='text-popUpStar'>*</span><br />
                    <textarea className='w-[24.06rem] h-[6.438rem] rounded-md opacity-70 mt-1' required />
                </label>
            </div>

            <div className='flex mt-[1rem]'><button className='bg-red1 rounded-md  text-white text-[0.93rem] font-semibold w-[10.93rem] h-[2.93rem] mx-auto'>Send</button>
            </div>



        </form>
    )
}

export default PopUpForm1