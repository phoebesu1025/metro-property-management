import React from 'react'

const CurrentLandlordRef = () => {
    return (
        <div>
            <div className='lg:px-[10rem] mb-[3rem]'>
                <h1 className='text-bookMeBtnBg text-[1rem] font-semibold mb-2'>Personal Details</h1>
                <p className='text-bookMeBtnBg text-[0.729rem] mb-3'>Please provide us with your current landlord’s details.<br /> The purpose of collecting this information is to conduct a reference check to determine your suitability as a tenant.</p>



                {/*----------------------------- longbar + radio -----------------------------*/}
                <div className='flex w-full flex-wrap gap-8 mb-3'>
                    <p className='text-footerSubGrey2 text-[0.625rem] basis-[36rem]'>Landlord/Agent Full Name
                        <span className='text-red1 font-bold'>*</span> <br />
                        <input type="text" className='w-full min-w-[17rem] rounded-md text-[0.73rem]  border-bookMeBtnBg  border-opacity-30 mt-1'></input>
                    </p>

                    <div className='flex justify-between'>
                        <div className='w-[7rem]'>
                            <p className='text-bookMeBtnBg text-[0.729rem] mb-3'>Do you smoke?<span className='text-red1 font-bold'>*</span></p>
                            <div className='flex justify-between '>
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
                {/*----------------------------- longbar + radio -----------------------------*/}

                {/* ------second line--- 3input------ */}
                <div className='flex flex-wrap gap-x-8 gap-y-[1.21rem] '>
                    <p className='text-footerSubGrey2 text-[0.625rem] '>Landlord/Agent Full Name <span className='text-red1 font-bold'>*</span> <br />
                        <input type="text" className='w-[17rem] rounded-md text-[0.73rem]  border-bookMeBtnBg  border-opacity-30 mt-1'></input>
                    </p>

                    <p className='text-footerSubGrey2 text-[0.625rem] '>Landlord/Agent Phone *<span className='text-red1 font-bold'>*</span> <br />
                        <input type="text" className='w-[17rem] rounded-md text-[0.73rem]  border-bookMeBtnBg  border-opacity-30 mt-1'></input>
                    </p>

                    <p className='text-footerSubGrey2 text-[0.625rem] '>Landlord/Agent Email * <span className='text-red1 font-bold'>*</span> <br />
                        <input type="text" className='w-[17rem] rounded-md text-[0.73rem]  border-bookMeBtnBg  border-opacity-30 mt-1'></input>
                    </p>
                </div>
            </div >
        </div>
    )
}

export default CurrentLandlordRef