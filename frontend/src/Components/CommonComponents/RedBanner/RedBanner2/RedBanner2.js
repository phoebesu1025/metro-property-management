import React from 'react'
import RedBannerButton2 from '../RedBanner2/RedBannerButton2'
import RedBannerText2 from '../RedBanner2/RedBannerText2'

const RedBanner = () => {
    return (
        <div className=' bg-red2 text-white
        2xs:flex flex-col  px-10 h-[14rem]
        
        md:h-[8rem] md:flex-row md:justify-between md:px-[7rem]'>
            <RedBannerText2 />
            <RedBannerButton2 />
        </div>
    )
}

export default RedBanner