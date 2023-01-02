import React from 'react'
import RedBannerButton from './RedBannerButton'
import RedBannerText from './RedBannerText'

const RedBanner = () => {
    return (
        <div className=' bg-red2 text-white
        2xs:flex flex-col  px-10 h-[14rem]
        
        md:h-[8rem] md:flex-row md:justify-between md:px-[7rem]'>
            <RedBannerText />
            <RedBannerButton />
        </div>
    )
}

export default RedBanner