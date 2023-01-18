import { React, useState, useContext } from 'react'
import ApplicationsStatus from './MyAccount/ApplicationsStatus'
import Heading from './MyAccount/Heading'
import Meetings from './MyAccount/Meetings'
import NewMessages from './MyAccount/NewMessages'
import Profile from './MyAccount/Profile'
import PropertyCarousel from './PropertyCarousel'




const MdAccountMain = () => {
    return (
        <>
            <div className='mx-[6rem]'>

                <Heading />
                <div className='flex justify-between mt-[3rem]'>
                    <Profile />
                    <Meetings />
                </div>
                <div className='flex justify-between mt-[3rem]'>
                    <ApplicationsStatus />
                    <NewMessages />
                </div>
            </div>
            <div >
                <div className='bg-white px-[6rem]  pt-[3rem] mt-[8rem]'><PropertyCarousel /></div>
                <div className='px-[6rem]  pt-[0.5rem] mt-[8rem]'><PropertyCarousel /></div>
            </div>

        </>
    )
}

export default MdAccountMain