import React from 'react'

const ProcessBar5 = () => {
    return (
        <div className='flex justify-center my-7'>
            {/* first step */}
            <div className='flex mr-5'>
                <div><img src="./images/tenancyApplication/tick.png" alt="tick" /></div>

                <div className='text-[0.7rem] font-semibold my-auto px-4'>Your Details</div>

                <div className='my-auto'>
                    <img src="./images/tenancyApplication/arrow.png" alt="arrow" />
                </div>
            </div>
            {/*second step*/}
            <div className='flex mr-5'>
                <div><img src="./images/tenancyApplication/tick.png" alt="tick" /></div>

                <div className='text-[0.7rem] font-semibold my-auto px-4'>Co-Applicants</div>

                <div className='my-auto'>
                    <img src="./images/tenancyApplication/arrow.png" alt="arrow" />
                </div>
            </div>
            {/*third step */}
            <div className='flex mr-5'>
                <div><img src="./images/tenancyApplication/tick.png" alt="tick" /></div>

                <div className='text-[0.7rem] font-semibold my-auto px-4 '>References</div>

                <div className='my-auto'>
                    <img src="./images/tenancyApplication/arrow.png" alt="arrow" />
                </div>
            </div>
            {/*fourth step*/}
            <div className='flex'>
                <div><img src="./images/tenancyApplication/tick.png" alt="tick" /></div>

                <div className='text-[0.7rem] font-semibold my-auto px-4'>Review & Submit</div>


            </div>
        </div>
    )

}

export default ProcessBar5