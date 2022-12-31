import React from 'react'
import HeadingText from './HeadingLine/HeadingText'
import ViewAll from './HeadingLine/ViewAll'

const Heading = () => {
    return (
        <div className='flex w-full mb-20'>
            <HeadingText />
            <ViewAll />
        </div >
    )
}

export default Heading