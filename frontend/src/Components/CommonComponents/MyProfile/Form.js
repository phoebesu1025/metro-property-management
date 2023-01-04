import React from 'react'

const Form = () => {
    return (
        <form className='bg-white shadow-lg w-[28.9rem] px-[4rem] py-[3.5rem] rounded-lg'>
            <h1 className='text-[1.25rem] font-bold mb-5 '>Personal Information</h1>

            <label className='text-[0.875rem] text-footerSubGrey2'>First Name</label><br />

            <input className='w-[21rem] rounded-sm mb-5 ' type="text" /><br />

            <label className='text-[0.875rem] text-footerSubGrey2'>Last Name</label><br />
            <input className='w-[21rem] rounded-sm mb-5 ' type="text" /><br />

            <label className='text-[0.875rem] text-footerSubGrey2'>Email</label><br />
            <input className='w-[21rem] rounded-sm mb-5 ' type="text" /><br />

            <label className='text-[0.875rem] text-footerSubGrey2'>Phone Number</label><br />
            <input className='w-[21rem] rounded-sm  mb-5' type="text" />




        </form >

    )
}

export default Form