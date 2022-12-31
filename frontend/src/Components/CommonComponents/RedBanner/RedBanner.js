import React from 'react'
import RedBannerButton from './RedBannerButton'
import RedBannerText from './RedBannerText'

const RedBanner = () => {
    return (
        <div className='flex justify-around h-[8rem] px-10 bg-red2 text-white'>
            <RedBannerText />
            <RedBannerButton />
        </div>
    )
}

export default RedBanner