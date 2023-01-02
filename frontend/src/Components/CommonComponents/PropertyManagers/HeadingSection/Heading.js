import React from 'react'
import HeadingText from './HeadingText'
import ViewAll from './ViewAll'

const Heading = () => {
    return (
        <div className='flex flex-col  w-full mb-10'>
            <HeadingText />
            <ViewAll />
        </div >
    )
}

export default Heading