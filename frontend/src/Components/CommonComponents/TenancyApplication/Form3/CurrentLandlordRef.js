import React from 'react'

const CurrentLandlordRef = () => {
    return (
        <div>
            <div className='lg:px-[10rem] mb-[3rem]'>
                <h1 className='text-bookMeBtnBg text-[1rem] font-semibold mb-2'>Current Landlord Reference</h1>




                {/*----------------------------- longbar + radio -----------------------------*/}
                <div className='flex w-full flex-wrap gap-8 mb-3'>
                    <p className='text-footerSubGrey2 text-[0.625rem] basis-[36rem]'>Current Rental Address
                        <span className='text-red1 font-bold'>*</span> <br />
                        <input type="text" className='w-full min-w-[17rem] rounded-md text-[0.73rem]  border-bookMeBtnBg  border-opacity-30 mt-1'></input>
                    </p>

                    <div className='flex justify-between'>
                        <div className='w-[7rem]'>
                            <p className='text-bookMeBtnBg text-[0.729rem] mb-3'>Is this a NZ address?<span className='text-red1 font-bold'>*</span></p>
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

                <div className='flex gap-x-2 items-center mt-3'>
                    <p className='text-footerSubGrey2 text-[0.625rem] '>I do not have a current landlord</p>
                    <input type="radio" className='text-[0.625rem]  border-bookMeBtnBg  text-bookMeBtnBg border-opacity-30 ' />
                </div>
            </div >
        </div>
    )
}

export default CurrentLandlordRef