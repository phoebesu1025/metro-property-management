import React from 'react'
import { Link } from 'react-router-dom'

const ViewAll = () => {
    return (
        <div className='text-buttonGrey font-semibold text-[1rem] text-end underline cursor-pointer pt-9
        mb:w-1/6  mb:pt-32 '>
            <Link to="/meet-our-professionals">View All</Link>
        </div>
    )
}
export default ViewAll