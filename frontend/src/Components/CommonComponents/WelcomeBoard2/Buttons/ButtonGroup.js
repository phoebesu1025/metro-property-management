import React from 'react'
import ResumeBrowsing from './ResumeBrowsing'
import EditMyProfile from './EditMyProfile'

const ButtonGroup = () => {
    return (
        <div className='flex justify-between gap-10'>
            <EditMyProfile />
            <ResumeBrowsing />
        </div>
    )
}

export default ButtonGroup