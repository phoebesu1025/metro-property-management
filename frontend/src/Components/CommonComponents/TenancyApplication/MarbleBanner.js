import React from 'react'
import CompleteBtnGroup from './CompleteBtnGroup'

const MarbleBanner = () => {
    return (
        <div className=' bg-marbleBg text-bookMeBtnBg items-center mb-[3rem]
        2xs:flex flex-col  h-[14rem] px-[1.7rem] justify-center gap-5 text-center
         sm:px-[3rem] 
        md:h-[8rem] md:flex-row md:justify-between md:px-[7rem]'>

            <div className=''>
                <h1 className='font-semibold text-[1.563rem] '>Own a Home While Renting with Affordable Downpayments</h1>



            </div>
            <CompleteBtnGroup />




        </div>
    )
}

export default MarbleBanner