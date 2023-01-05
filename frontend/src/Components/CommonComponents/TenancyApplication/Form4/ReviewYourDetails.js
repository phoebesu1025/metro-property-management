import React from 'react'
import YourDetailsArray1 from './Array/YourDetailsArray1'
import YourDetailsArray2 from './Array/YourDetailsArray2'
import YourDetailsArray3 from './Array/YourDetailsArray3'

const ReviewYourDetails = () => {

    return (
        <div className='mb-[3rem]'>
            <div className='flex items-center mb-3'>
                <h1 className='font-semibold'>Your Details</h1>
                <p className='font-semibold text-red1 text-[0.725rem] underline ml-2'>Edit Details</p>
            </div>

            <div className='mb-5'>
                {YourDetailsArray1.map((element, index) => {
                    return (
                        <div className='flex text-[0.833rem] leading-[1.5rem]'>
                            <div className='w-[10.375rem] text-bookMeBtnBg'>{element.title}</div>
                            <div className='w-[10.375rem] font-semibold'>{element.data} </div>
                        </div>
                    )
                })}
            </div>

            <div className='mb-5'>
                {YourDetailsArray2.map((element, index) => {
                    return (
                        <div className='flex text-[0.833rem] leading-[1.5rem]'>
                            <div className='w-[10.375rem] text-bookMeBtnBg'>{element.title}</div>
                            <div className='w-[10.375rem] font-semibold'>{element.data} </div>
                        </div>
                    )
                })}
            </div>

            <div>
                {YourDetailsArray3.map((element, index) => {
                    return (
                        <div className='flex text-[0.833rem] leading-[1.5rem]'>
                            <div className='w-[10.375rem] text-bookMeBtnBg'>{element.title}</div>
                            <div className='w-[10.375rem] font-semibold'>{element.data} </div>
                        </div>
                    )
                })}
            </div>














        </div>
    )
}

export default ReviewYourDetails