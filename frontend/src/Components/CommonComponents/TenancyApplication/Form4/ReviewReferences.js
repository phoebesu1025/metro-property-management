import React from 'react'
import ReferencesArray1 from './Array/ReferencesArray1'
import ReferencesArray2 from './Array/ReferencesArray2'
import ReferencesArray3 from './Array/ReferencesArray3'

const ReviewReferences = () => {

    return (
        <div className='mb-[3rem]'>
            <div className='flex items-center mb-3'>
                <h1 className='font-semibold'>Your Details</h1>
                <p className='font-semibold text-red1 text-[0.725rem] underline ml-2'>Edit Details</p>
            </div>

            <div className='mb-5'>
                {ReferencesArray1.map((element, index) => {
                    return (
                        <div className='flex text-[0.833rem] leading-[1.5rem]'>
                            <div className='w-[10.375rem] text-bookMeBtnBg'>{element.title}</div>
                            <div className='w-[10.375rem] font-semibold'>{element.data} </div>
                        </div>
                    )
                })}
            </div>

            <div className='mb-5'>
                {ReferencesArray2.map((element, index) => {
                    return (
                        <div className='flex text-[0.833rem] leading-[1.5rem]'>
                            <div className='w-[10.375rem] text-bookMeBtnBg'>{element.title}</div>
                            <div className='w-[10.375rem] font-semibold'>{element.data} </div>
                        </div>
                    )
                })}
            </div>

            <div>
                {ReferencesArray3.map((element, index) => {
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

export default ReviewReferences