import React from 'react'
import RedBannerButton4 from '../RedBanner4/RedBannerButton4'
import RedBannerText4 from '../RedBanner4/RedBannerText4'

const RedBanner = () => {
    return (
        <div className=' bg-red2 text-white
        2xs:flex flex-col  px-10 h-[14rem]
        
        md:h-[8rem] md:flex-row md:justify-between md:px-[7rem]'>
            <RedBannerText4 />
            <RedBannerButton4 />
        </div>
    )
}

export default RedBanner