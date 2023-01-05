import React from 'react'

const ProcessBar = () => {
    return (
        <div className='flex justify-center my-7'>
            {/* first step */}
            <div className='flex mr-5'>
                <div className='bg-bookMeBtnBg w-6 h-6 rounded-full text-white text-center bg-opacity-full'>1</div>

                <div className='text-[0.7rem] font-semibold my-auto px-4'>Your Details</div>

                <div className='my-auto'>
                    <img src="./images/tenancyApplication/arrow.png" alt="arrow" />
                </div>
            </div>

            <div className='flex mr-5'>
                <div className='bg-bookMeBtnBg w-6 h-6 rounded-full text-white text-center bg-opacity-30'>2</div>

                <div className='text-[0.7rem] font-semibold my-auto px-4 opacity-30'>Co-Applicants</div>

                <div className='my-auto'>
                    <img src="./images/tenancyApplication/arrow.png" alt="arrow" />
                </div>
            </div>

            <div className='flex mr-5'>
                <div className='bg-bookMeBtnBg w-6 h-6 rounded-full text-white text-center bg-opacity-30'>3</div>

                <div className='text-[0.7rem] font-semibold my-auto px-4 opacity-30'>References</div>

                <div className='my-auto'>
                    <img src="./images/tenancyApplication/arrow.png" alt="arrow" />
                </div>
            </div>

            <div className='flex'>
                <div className='bg-bookMeBtnBg w-6 h-6 rounded-full text-white text-center bg-opacity-30'>4</div>

                <div className='text-[0.7rem] font-semibold my-auto px-4 opacity-30'>Review & Submit</div>


            </div>
        </div>
    )
}

export default ProcessBar