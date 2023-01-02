import React from 'react'
import Heading from './HeadingSection/Heading'
import LatestNewsBanner from './LatestNewsBanner'
const LatestNews = () => {
    return (
        <div className='
        px-[1.7rem]
        xs:px-[3rem] 
        lg:mx-[4rem] py-[5rem]'>
            <Heading />
            <LatestNewsBanner />
        </div >
    )
}

export default LatestNews