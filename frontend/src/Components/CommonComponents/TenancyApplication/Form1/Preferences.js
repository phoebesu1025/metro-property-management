import React from 'react'

const Preferences = () => {
    const yearSelect = document.getElementById("year");
    const monthSelect = document.getElementById("month");
    const daySelect = document.getElementById("day");

    const months = ['January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August', 'September', 'October',
        'November', 'December'];


    return (
        <div className='lg:px-[10rem] mb-[3rem]'>
            <h1 className='text-bookMeBtnBg text-[1rem] font-semibold mb-2'>Preferences</h1>
            <div className='flex flex-wrap
            '>
                <div>
                    <p className='text-footerSubGrey2 text-[0.625rem] mb-2'>Preferred Move-In Date <span className='text-red1 font-bold'>*</span></p>
                    <div className='flex 
                     border-bookMeBtnBg  text-bookMeBtnBg opacity-50  gap-2 '>

                        <select name="day" id="day" className='w-[5.355rem] rounded-md text-[0.73rem]' >
                            <option disabled selected>Day</option>
                            <option>1</option>
                        </select>



                        <select name="month" id="month" className='w-[5.355rem] rounded-md text-[0.73rem]'>
                            <option disabled selected>Month</option>

                        </select>



                        <select name="year" id="year" className='w-[5.355rem] rounded-md text-[0.73rem]'>
                            <option disabled selected>Year</option>
                        </select>
                    </div>
                </div>



                <div className='mx-8'>
                    <p className='text-footerSubGrey2 text-[0.625rem] mb-2'>Preferred Tenancy Type <span className='text-red1 font-bold'>*</span></p>

                    <select className='w-[17rem] rounded-md text-[0.73rem]  border-bookMeBtnBg  text-bookMeBtnBg opacity-30' >
                        <option disabled selected>Any</option>
                    </select>
                </div>

                <div>
                    <p className='text-footerSubGrey2 text-[0.625rem] mb-2'>How long would you like to property for? <span className='text-red1 font-bold'>*</span></p>

                    <div className=' flex gap-2 '>
                        <select className='w-[6rem] rounded-md text-[0.73rem]  border-bookMeBtnBg  text-bookMeBtnBg opacity-30' >
                            <option disabled selected>Years</option>
                        </select>

                        <select className='w-[6rem] rounded-md text-[0.73rem]  border-bookMeBtnBg  text-bookMeBtnBg opacity-30' >
                            <option disabled selected>Months</option>
                        </select>
                    </div>





                </div>
            </div>




        </div>
    )
}

export default Preferences