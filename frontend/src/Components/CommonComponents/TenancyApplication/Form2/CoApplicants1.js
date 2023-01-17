import React from 'react'

const CoApplicants1 = () => {
    return (
        <>
            <div className='lg:px-[10rem] mb-[1rem]'>
                <h1 className='text-bookMeBtnBg text-[0.9rem] font-semibold mb-2'>Co-Applicant #1</h1>
                <div className='flex flex-wrap gap-x-8 gap-y-[1.21rem] '>
                    <p className='text-footerSubGrey2 text-[0.625rem] '>First Name <span className='text-red1 font-bold'>*</span> <br />
                        <input type="text" className='w-[17rem] rounded-md text-[0.73rem]  border-bookMeBtnBg  border-opacity-30 mt-1'></input>
                    </p>

                    <p className='text-footerSubGrey2 text-[0.625rem] '>Last Name <span className='text-red1 font-bold'>*</span> <br />
                        <input type="text" className='w-[17rem] rounded-md text-[0.73rem]  border-bookMeBtnBg  border-opacity-30 mt-1'></input>
                    </p>

                    <p className='text-footerSubGrey2 text-[0.625rem] '>Preferred Name <span className='text-red1 font-bold'>*</span> <br />
                        <input type="text" className='w-[17rem] rounded-md text-[0.73rem]  border-bookMeBtnBg  border-opacity-30 mt-1'></input>
                    </p>

                    <p className='text-footerSubGrey2 text-[0.625rem] '>Email Address<span className='text-red1 font-bold'>*</span> <br />
                        <input type="text" className='w-[17rem] rounded-md text-[0.73rem]  border-bookMeBtnBg  border-opacity-30 mt-1'></input>
                    </p>

                    <p className='text-footerSubGrey2 text-[0.625rem] '>Contact Number <span className='text-red1 font-bold'>*</span> <br />
                        <input type="text" className='w-[17rem] rounded-md text-[0.73rem]  border-bookMeBtnBg  border-opacity-30  mt-1'></input>
                    </p>

                    {/*------------------- checkbox section' */}
                    <div className='flex flex-col justify-end w-[17rem]'><p className='text-bookMeBtnBg text-[0.729rem] mb-3 '>Pronouns</p>
                        <div className='flex justify-between '>

                            <div><input type="checkbox" className='text-[0.625rem]  border-bookMeBtnBg  text-bookMeBtnBg border-opacity-30 ' />
                                <label className='my-auto ml-2 bookMeBtnBg text-[0.625rem]'>She/Her</label></div>

                            <div>  <input type="checkbox" className='text-[0.625rem]  border-bookMeBtnBg  text-bookMeBtnBg border-opacity-30  ' />
                                <label className='my-auto ml-2 bookMeBtnBg text-[0.625rem]'>He/Him</label></div>

                            <div> <input type="checkbox" className='text-[0.625rem]  border-bookMeBtnBg  text-bookMeBtnBg  border-opacity-30 ' />
                                <label className='my-auto ml-2 bookMeBtnBg text-[0.625rem]'>TheyThem</label></div>
                        </div>
                    </div>
                    {/*------------------- checkbox section' */}


                </div>
                < div className=' mt-3' >
                    <p className='text-bookMeBtnBg text-[0.729rem] mb-1 w-[17.18rem]'>Do any of your occupants smoke?<span className='text-red1 font-bold'>*</span></p>
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

        </>
    )
}

export default CoApplicants1