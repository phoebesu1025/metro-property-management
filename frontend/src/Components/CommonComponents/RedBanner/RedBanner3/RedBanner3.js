import React from 'react'
import RedBannerButton3 from '../RedBanner3/RedBannerButton3'
import RedBannerText3 from '../RedBanner3/RedBannerText3'

const RedBanner = () => {
    return (
        <div className=' bg-red2 text-white
        2xs:flex flex-col  px-10 h-[14rem]
        
        md:h-[8rem] md:flex-row md:justify-between md:mx-[6rem]'>
            <RedBannerText3 />
            <RedBannerButton3 />
        </div>
    )
}

export default RedBanner