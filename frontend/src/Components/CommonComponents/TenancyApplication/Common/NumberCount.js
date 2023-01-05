import React from 'react'

const NumberCount = () => {
    return (
        <div className='flex  mb-[3rem] justify-between w-[6.438rem]'>
            <button className='rounded-full w-[1.96rem] h-[1.96rem] border-buttonGrey border-[0.05rem] text-buttonGrey text-[0.62rem] active:opacity-50'><img src='./images/tenancyApplication/minus.png' alt="minus" className='mx-auto' /> </button>




            <div className='my-auto text-[0.729rem]'>0</div>




            <button className='rounded-full w-[1.96rem] h-[1.96rem] border-buttonGrey border-[0.05rem] text-buttonGrey text-[0.62rem] active:opacity-50'><img src='./images/tenancyApplication/plus.png' alt="minus" className='mx-auto' /> </button>




        </div>
    )
}

export default NumberCount