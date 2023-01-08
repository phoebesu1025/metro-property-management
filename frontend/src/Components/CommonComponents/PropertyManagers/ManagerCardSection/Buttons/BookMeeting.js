import React from 'react'
import { Link } from 'react-router-dom'
const BookMeeting = () => {
    return (
        <button className='text-white bg-bookMeBtnBg w-[6.5rem] h-[1.55rem] px-[0.3rem] text-[0.57rem] rounded font-semibold'>
            <Link to="/login">Book Meeting</Link>
        </button>
    )
}

export default BookMeeting