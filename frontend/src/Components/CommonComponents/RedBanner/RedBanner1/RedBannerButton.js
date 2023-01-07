import React from 'react'
import { Link } from 'react-router-dom'
const RedBannerButton = () => {
    return (
        <div className=' my-auto w-full flex flex-col items-center
        
        md:flex-none md:w-fit'>
            <Link to="/login"><button className='bg-buttonGrey rounded-md shadow-md 
            px-[1.5rem] py-[1.2rem]  

            xl:px-16 xl:py-3'>
                Join My Dairy
            </button></Link>
        </div>
    )
}
export default RedBannerButton