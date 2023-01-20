import React from 'react'
import RedBannerButton from './RedBannerButton'
import RedBannerText from './RedBannerText'

const RedBanner = () => {
    return (
        <div className=' bg-red2 text-white flex-col h-[14rem] px-[1.7rem]
            2xs:flex 
            sm:px-[3rem] 
            md:h-[8rem] md:flex-row md:justify-between md:mx-[6rem]'>
            <RedBannerText />
            <RedBannerButton />
        </div>
    )
}
export default RedBanner