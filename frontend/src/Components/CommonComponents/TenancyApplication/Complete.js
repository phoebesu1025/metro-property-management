import React from 'react'
import ProcessBar5 from './Common/ProcessBar5'
import CompleteCarouselContainer from './../TenancyApplication/CompleteCarouselContainer'
import MarbleBanner from './MarbleBanner'
const Complete = () => {
    return (
        <div>
            <div><ProcessBar5 /></div>

            <div className='text-center text-bookMeBtnBg my-[5rem]'>
                <h1 className='font-semibold text-[1.563rem] '>Thank you, your application ahs been submitted successfully</h1>
                <p className='text-[1rem]'>You will be notified as the application progresses via email or your Diary, the property manager will be in touch.</p>
            </div>

            <div className='my-[1rem] text-center font-semibold text-[1rem]'>Similar Listing You Might Like</div>

            <div className=''>
                <CompleteCarouselContainer />
            </div>


            <div>
                <MarbleBanner />

            </div>








        </div>
    )
}

export default Complete