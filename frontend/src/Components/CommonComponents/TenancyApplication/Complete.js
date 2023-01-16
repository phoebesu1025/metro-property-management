import React from 'react'
import { Link } from 'react-router-dom'
import TenancyApplicationBanner from './Common/TenancyApplicationBanner'

import ProcessBar5 from './Common/ProcessBar5'
import CompleteCarouselContainer from './../TenancyApplication/CompleteCarouselContainer'
import CompleteBanner from './CompleteBanner'
const Complete = () => {
    return (
        <div>
            <TenancyApplicationBanner />
            <div><ProcessBar5 /></div>

            <div className='text-center text-bookMeBtnBg my-[4rem]'>
                <h1 className='font-semibold text-[1.563rem] '>Thank you, your application ahs been submitted successfully</h1>
                <p className='text-[1rem]'>You will be notified as the application progresses via email or your Diary, the property manager will be in touch.</p>
                <p className='text-completeBlue underline text-[1rem] mt-4'><Link to="/property-search">Return to Rental Listings Page</Link></p>
            </div>

            <CompleteBanner />



            <div className='mb-[-3rem]  bg-white'>
                <p className='mb-8 pt-[3rem] mx-[6.5rem] font-semibold'>Similar Listing for Rent</p>
                <CompleteCarouselContainer />
            </div>










        </div>
    )
}

export default Complete