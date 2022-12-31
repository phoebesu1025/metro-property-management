import React from 'react'
import RedBannerButton from './RedBannerButton'
import RedBannerText from './RedBannerText'

const RedBanner = () => {
    return (
        <div className='flex h-[8rem] bg-red2 text-white'>
            <RedBannerText />
            <RedBannerButton />
        </div>
    )
}

export default RedBanner