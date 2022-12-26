import React from 'react'
import LookingIcon from '../images/looking.png'
import MetroIcon from '../images/service.png'
import PeopleIcon from '../images/people.png'
import RecordIcon from '../images/record.png'
import Arrow from '../images/redArrow.png'
const Rentals = () => {
    return (
        <>

            <div className='bg-red2 h-96 flex justify-around text-white py-14 text-paragraph leading-10 px-16'>

                <div >
                    <img src={LookingIcon} />
                    <h1 className='font-bold mt-4'>Looking to rent</h1>
                    <p> Rental Listings</p>
                    <p> Rental Process</p>
                </div>
                <div>
                    <img src={MetroIcon} />
                    <h1 className='font-bold mt-4' >Metro Rental Services</h1>
                    <p> Tenant Services</p>
                    <p>Own a home while renting</p>
                    <p>Healthy home standards</p>
                </div>
                <div>
                    <img src={PeopleIcon} />
                    <h1 className='font-bold mt-4'>Meet a property manager</h1>
                    <p>Book an online meet</p>
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

export default Rentals