import React from 'react'

const ApplicationsStatus = () => {
    return (
        <div className='w-[29.313rem] h-[18.5rem] bg-white shadow-md rounded-md px-10 py-7'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-[1.25rem]'>Latest Application Status</h1>
                <div className='cursor-pointer active:opacity-50'><img src="../images/myAccount/heart.png" alt="profile" className='inline-block mr-1' /><p className='inline-block underline text-red1 font-bold text-[0.813rem] align-bottom '>All Applications</p></div>
            </div>

            <div className='flex flex-col gap-y-5 mt-8'>
                <div className='flex text-buttonGrey  h-[4.313rem] bg-footerWhitebBg rounded-md items-center'>
                    <div className='w-[75%] flex items-center '>
                        <div className='px-[1rem]'>
                            <img src="../images/myAccount/property2.png" alt="property2" />
                        </div>
                        <div className='text-[0.625rem] w-[11.313rem] mx-2'>
                            <p>123, Hinemoa Street, Auckland</p>
                            <p className='font-bold'>Applied on 12, January, 2023 </p>
                        </div>
                    </div>


                    <div className='border-l-white border-l-[0.2rem] w-[25%] h-full flex items-center justify-center '>
                        <div><img src="../images/myAccount/green.png" alt="green" className='inline-block mx-1' /></div>
                        <div><p className='inline-block font-bold text-[0.813rem] text-buttonGrey'>Selected</p></div>
                    </div>
                </div>



                <div className='flex text-buttonGrey  h-[4.313rem] bg-footerWhitebBg rounded-md items-center'>
                    <div className='w-[75%] flex items-center '>
                        <div className='px-[1rem]'>
                            <img src="../images/myAccount/property.png" alt="property2" />
                        </div>
                        <div className='text-[0.625rem] w-[11.313rem] mx-2'>
                            <p>5/ 65 New street, Avondale, Auckland</p>
                            <p className='font-bold'>Applied on 12, January, 2023 </p>
                        </div>
                    </div>


                    <div className='border-l-white border-l-[0.2rem] w-[25%] h-full flex items-center justify-center '>
                        <div><img src="../images/myAccount/orange.png" alt="orange" className='inline-block mx-1' /></div>
                        <div><p className='inline-block font-bold text-[0.813rem] text-buttonGrey'>Pending</p></div>
                    </div>
                </div>




            </div>



        </div>
    )
}

export default ApplicationsStatus