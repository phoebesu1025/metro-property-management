import React from 'react'

const NextBtn = () => {
    return (
        <div className='w-full flex justify-end 
        lg: mb-10'>
            <button className='flex justify-between align-center px-[1.14rem] rounded-md bg-red1 text-white w-[8.27rem] h-[2.448rem] 
                active:opacity-50'>
                <p className='my-auto text-[0.938rem] font-semibold'>Next </p>
                <img src="./images/tenancyApplication/next.png" alt="plus" className='my-auto' />
            </button>
        </div>

    )
}

export default NextBtn