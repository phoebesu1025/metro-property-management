import React from 'react'
import LocationIcon from '../images/location.png'
import EmailIcon from '../images/email.png'
import PeopleIcon from '../images/people.png'
import PhoneIcon from '../images/phone.png'
import Arrow from '../images/redArrow.png'
const Contact = () => {
    return (
        <>
            <div className='flex flex-col bg-red2 h-128 px-16'>
                <div className=' flex justify-around text-white py-14 text-paragraph leading-10 '>

                    <div >
                        <img src={LocationIcon} />
                        <h1 className='font-bold mt-4 '>Location</h1>
                        <p className='w-48 leading-6'> Metro NZ Property Management Ltd
                            Level 33, ANZ Centre, 23-29 Albert St, Auckland 1010, New Zealand</p>

                    </div>
                    <div>
                        <img src={EmailIcon} />
                        <h1 className='font-bold mt-4' >Mail</h1>
                        <p> info@metronz.co.nz</p>

                    </div>
                    <div>
                        <img src={PhoneIcon} />
                        <h1 className='font-bold mt-4'>Phone</h1>
                        <p>+64 9 391 4642</p>
                    </div>
                    <div>
                        <img src={PeopleIcon} />
                        <h1 className='font-bold mt-4'>Our Albany Team</h1>
                        <p className='w-72 leading-6 my-2'>Looking for Property Management in Albany? Metro Nz is a leading property management company in Auckland. Phoebe us on 09 391 4642 or contact us via email at info@metronz.co.nz </p>
                    </div>
                </div>
                <div className='text-white  w-3/5 px-20 pb-10' >
                    <div>We’d be happy to assist you with any questions you may have as a landlord, tenant, investor, potential renter or someone who just wants more information! You’re in safe hands with us. Contact our professional and experienced team of property managers today.</div>

                </div>
            </div>
        </>
    )
}

export default Contact