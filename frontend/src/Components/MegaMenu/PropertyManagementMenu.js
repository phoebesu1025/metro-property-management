import React from 'react'
import LookingIcon from '../images/looking.png'
import MetroIcon from '../images/service.png'
import PeopleIcon from '../images/people.png'
import RecordIcon from '../images/record.png'
import PropertyIcon from '../images/property.png'
import Arrow from '../images/redArrow.png'
const PropertyManagementMenu = () => {
    return (
        <>

            <div className='bg-red2 h-128 flex justify-around text-white py-14 text-paragraph leading-10 px-16'>
                <div >
                    <img src={PropertyIcon} />
                    <h1 className='font-bold mt-4 w-44 leading-7 mb-2'>Looking for Property Management</h1>
                    <p> Residential Property Management</p>
                    <p> Commercial Property Management</p>
                    <p> Finding Tenant Process</p>
                    <p> Free Rental Appraisal</p>
                    <p>Change to Metro</p>
                </div>
                <div >
                    <img src={LookingIcon} />
                    <h1 className='font-bold mt-4 w-44 leading-7 mb-2'>Looking for Building Management</h1>
                    <p> Building Management</p>
                    <p> Body Corporate Administration</p>
                    <p> Change to Metro</p>
                </div>
                <div>
                    <img src={MetroIcon} />
                    <h1 className='font-bold mt-4' >Looking to sell Tenanted Property</h1>
                    <p> Free property appraisal</p>
                    <p>Renovation Project Management</p>
                    <p>Decluttering Service</p>
                    <p>Healthy home standards</p>
                </div>
                <div>
                    <img src={PeopleIcon} />
                    <h1 className='font-bold mt-4'>Book an online meet</h1>
                    <p>Residential Property Manager</p>
                    <p>Commercial Property Manager</p>
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

export default PropertyManagementMenu