import React from 'react'
import NumberCount from '../Common/NumberCount'

const CoApplicants = () => {
    return (
        <div className='lg:px-[10rem]'>
            <h1 className='text-bookMeBtnBg text-[1rem] font-semibold mb-2'>Co-Applicants</h1>


            <div className='flex gap-8'>

                <div className=''>
                    <p className='text-bookMeBtnBg text-[0.729rem] mb-3 w-[17.18rem]'>Total number of tenants over 18 years old<span className='text-red1 font-bold'>*</span></p>
                    <NumberCount />
                </div>




                <div className=' mb-3'>
                    <p className='text-bookMeBtnBg text-[0.729rem] mb-3 w-[17.18rem]'>Do any of your occupants smoke?<span className='text-red1 font-bold'>*</span></p>
                    <div className='flex justify-start gap-14 '>
                        <div>
                            <input type="radio" name="smoke" className='text-[0.625rem]  border-bookMeBtnBg  text-bookMeBtnBg border-opacity-30 ' /> <label className="my-auto  bookMeBtnBg text-[0.625rem]">Yes</label>
                        </div>
                        <div>
                            <input type="radio" name="smoke" className='text-[0.625rem]  border-bookMeBtnBg  text-bookMeBtnBg border-opacity-30 ' /> <label className="my-auto  bookMeBtnBg text-[0.625rem]">No</label>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default CoApplicants