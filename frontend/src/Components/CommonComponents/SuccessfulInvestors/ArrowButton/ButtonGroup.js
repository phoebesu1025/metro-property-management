import React from 'react'
import LeftButton from './LeftButton'
import RightButton from './RightButton'

const ButtonGroup = () => {
    return (
        <div className='flex w-24 relative top-12 left-36'>
            <LeftButton />
            <RightButton />
        </div>
    )
}

export default ButtonGroup