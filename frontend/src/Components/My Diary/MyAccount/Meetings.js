import React from 'react'

const Meetings = () => {
    return (
        <div className='w-[39.625rem] h-[18.5rem] bg-white shadow-md rounded-md px-10 py-7'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-[1.25rem]'>Upcoming Meetings</h1>
                <div className='cursor-pointer active:opacity-50'><img src="../images/myAccount/people.png" alt="profile" className='inline-block mr-1' /><p className='inline-block underline text-red1 font-bold text-[0.813rem] align-bottom '>Get Help</p></div>
            </div>

            <div className='flex flex-col gap-y-5 mt-8'>
                <div className='flex text-buttonGrey  h-[4.313rem] bg-footerWhitebBg rounded-md items-center justify-around px-3'>
                    <div><img src="../images/myAccount/agent2.png" alt="agent1" /></div>
                    <div className='text-[0.688rem] w-[8rem] font-semibold'>Meeting confirmed with Steve Johnson</div>
                    <div className='text-[0.688rem] w-[5rem] font-semibold'>April 23,2023 10 am - 11 am</div>
                    <div className='text-[0.625rem] w-[7.06rem]'><p>Avondale Property.</p><p>Discuss about move in process</p></div>
                </div>

                <div className='flex text-buttonGrey  h-[4.313rem] bg-footerWhitebBg rounded-md items-center justify-around px-3'>
                    <div><img src="../images/myAccount/agent1.png" alt="agent1" /></div>
                    <div className='text-[0.688rem] w-[8rem] font-semibold'>Meeting request sent to Michael  Stuart

                    </div>
                    <div className='text-[0.688rem] w-[5rem] font-semibold'>April 24, 2023 10 am - 11 am
                    </div>
                    <div className='text-[0.625rem] w-[7.06rem]'><p>Rosedale Property.</p><p> Discuss about move in process</p></div>
                </div>




            </div>



        </div>
    )
}

export default Meetings