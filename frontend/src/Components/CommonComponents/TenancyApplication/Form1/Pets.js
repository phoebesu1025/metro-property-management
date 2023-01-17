import React from 'react'

const Pets = ({ popUpBtnPet }) => {
    return (
        <div className='lg:px-[10rem] mb-[3rem]'>
            <h1 className='text-bookMeBtnBg text-[1rem] font-semibold mb-2'>Pets</h1>



            <div className='w-[8.64rem] mb-3'>
                <p className='text-bookMeBtnBg text-[0.729rem] mb-3'>Do you have any pets?<span className='text-red1 font-bold'>*</span></p>
                <div className='flex justify-between '>
                    <div>
                        <input type="radio" name="smoke" className='text-[0.625rem]  border-bookMeBtnBg  text-bookMeBtnBg border-opacity-30 ' /> <label className="my-auto  bookMeBtnBg text-[0.625rem]">Yes</label>
                    </div>
                    <div>
                        <input type="radio" name="smoke" className='text-[0.625rem]  border-bookMeBtnBg  text-bookMeBtnBg border-opacity-30 ' /> <label className="my-auto  bookMeBtnBg text-[0.625rem]">No</label>
                    </div>
                </div>
            </div>

            <div className='mt-'>
                <button className='flex justify-between align-center px-[1.25rem] rounded-3xl border-buttonBorderGrey1 border-[0.052rem] w-[8.64rem] h-[2.448rem] 
                active:opacity-50' onClick={popUpBtnPet}>
                    <p className='my-auto text-[0.729rem] font-semibold'>Add Pet </p>
                    <img src="./images/tenancyApplication/plus.png" alt="plus" className='my-auto' />
                </button>
            </div>
        </div>
    )
}

export default Pets