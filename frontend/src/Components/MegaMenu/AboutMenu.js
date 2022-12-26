import React from 'react'
import Property from '../images/property.png'
import MetroIcon from '../images/service.png'
import PeopleIcon from '../images/people.png'
import RecordIcon from '../images/record.png'
import Arrow from '../images/redArrow.png'
const About = () => {
    return (
        <>

            <div className='bg-red2 h-128 flex justify-around text-white py-14 text-paragraph leading-10 px-16'>

                <div >
                    <img src={Property} />
                    <h1 className='font-bold mt-4'>About Us</h1>
                    <p> Our team</p>
                    <p> Dispute Process</p>
                </div>
                <div>
                    <img src={MetroIcon} />
                    <h1 className='font-bold mt-4' >Metro News</h1>
                    <p> Metro News</p>
                    <p> Gallery</p>

                </div>
                <div>
                    <img src={PeopleIcon} />
                    <h1 className='font-bold mt-4'>Join Us</h1>
                    <p>We are hiring</p>
                </div>
                <div>
                    <img src={RecordIcon} />
                    <h1 className='font-bold mt-4'>Keep track of your records</h1>
                    <p className='w-44 leading-5 my-2'>Create an account to keep track of your favorites and rental process.</p>
                    <p className='mb-10 font-bold'>Join My Diary</p>
                    <p className='leading-none'>Already a Metro customer?</p>
                    <p>Sign into Tenant Portal</p>
                </div>
            </div>
        </>
    )
}

export default About