import React from 'react'
import RedBannerButton from './RedBannerButton'
import RedBannerText from './RedBannerText'

const RedBanner = () => {
    return (
        <div className=' bg-red2 text-white
        2xs:flex flex-col  h-[14rem] px-[1.7rem]
         sm:px-[3rem] 
    
        
        md:h-[8rem] md:flex-row md:justify-between md:px-[7rem]'>
            <RedBannerText />
            <RedBannerButton />
        </div>
    )
}

export default RedBanner