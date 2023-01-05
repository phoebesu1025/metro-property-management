import React from 'react'

const BackBtn = () => {
    return (
        <div className='w-full flex justify-start 
        lg: mb-10'>
            <button className='flex justify-between align-center px-[1.14rem] rounded-md border-buttonGrey border-[0.05rem] text-buttonGrey w-[8.27rem] h-[2.448rem] 
                active:opacity-50'>
                <img src="./images/tenancyApplication/back.png" alt="plus" className='my-auto' />
                <p className='my-auto text-[0.938rem] font-semibold'>Back </p>

            </button>
        </div>
    )
}

export default BackBtn