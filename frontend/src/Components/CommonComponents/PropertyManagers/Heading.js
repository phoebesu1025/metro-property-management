import React from 'react'
import HeadingText from './HeadingSection/HeadingText'
import ViewAll from './HeadingSection/ViewAll'

const Heading = () => {
    return (
        <div className='flex w-full mb-10'>
            <HeadingText />
            <ViewAll />
        </div >
    )
}

export default Heading