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
                <div className='bg-white px-[6rem]  pt-[3rem] mt-[8rem]'>
                    <h1 className='font-bold text-[1.563rem] mb-5'>Similar properties for Rental</h1>
                    <p className='text-end text-red1 underline font-bold mb-10'>View All Rentals</p>
                    <PropertyCarousel />
                </div>
                <div className='px-[6rem]  pt-[0.5rem] mt-[4rem]'>
                    <div className='flex justify-between items-center mb-10'>
                        <h1 className='font-bold text-[1.563rem]  '>Buy a Home While Renting | Featured properties for investment
                        </h1><p className=' text-red1 underline font-bold text-[1rem] '>View All Investments</p>
                    </div>

                    <PropertyCarousel />
                </div>
            </div>

        </>
    )
}

export default MdAccountMain