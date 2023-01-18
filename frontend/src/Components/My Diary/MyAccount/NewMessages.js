import React from 'react'

const NewMessages = () => {
    return (
        <div className='w-[39.625rem] h-[18.5rem] bg-white shadow-md rounded-md px-10 py-7'>
            <div className='flex justify-between'>
                <div className='flex '>
                    <div className='mt-[-1.6rem] ml-[-1rem]'><img src='../images/myAccount/message.png' alt='message' /></div>
                    <h1 className='font-bold text-[1.25rem]'>NewMessages(2)</h1>
                </div>
                <div className='cursor-pointer active:opacity-50'><img src="../images/myAccount/email.png" alt="profile" className='inline-block mr-1' /><p className='inline-block underline text-red1 font-bold text-[0.813rem] align-bottom '>All Message</p></div>
            </div>

            <div className='flex flex-col gap-y-5 mt-8'>

                <div className='flex h-[4.313rem] bg-footerWhitebBg rounded-md items-center  px-3'>
                    <div className='mx-2'><img src="../images/myAccount/agent3.png" alt="agent3" /></div>
                    <div className='text-[0.813rem] w-[22.875rem] font-semibold mx-8'><span className='font-bold'>Documents needed  </span>Dear Mary, Documents needed for your application number #345677 - 123, Hinemoa street...</div>
                </div>

                <div className='flex h-[4.313rem] bg-footerWhitebBg rounded-md items-center  px-3'>
                    <div className='mx-2'><img src="../images/myAccount/agent4.png" alt="agent4" /></div>
                    <div className='text-[0.813rem] w-[22.875rem] font-semibold mx-8'><span className='font-bold'>Workshop Announcement</span> Looking to own a home while renting. Join our online workshop with our finance advisor...</div>
                </div>




            </div>



        </div>
    )
}

export default NewMessages