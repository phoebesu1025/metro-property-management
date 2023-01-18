import React from 'react'
import { Link } from 'react-router-dom'
const BookMeeting = () => {
    return (
        <button className='text-white bg-bookMeBtnBg w-[5.813rem] h-[2.188rem] px-[0.3rem] text-[0.57rem] rounded font-semibold'>
            <Link to="/login" onClick={() => { window.screenTop() }}>Book Meeting</Link>
        </button>
    )
}

export default BookMeeting