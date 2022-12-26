import React from 'react'
import LookingIcon from '../images/looking.png'
import MetroIcon from '../images/service.png'
import PeopleIcon from '../images/people.png'
import RecordIcon from '../images/record.png'
import Arrow from '../images/redArrow.png'
const InvestmentSubMenu = () => {
    return (
        <>

            <div className='bg-red2 h-96 flex justify-around text-white py-14 text-paragraph leading-10 px-16'>

                <div >
                    <img src={LookingIcon} />
                    <h1 className='font-bold mt-4'>Looking to invest</h1>
                    <p> Investment Properties Listing</p>
                    <p> Open Homes</p>
                    <p> Buying Process</p>
                </div>
                <div>
                    <img src={MetroIcon} />
                    <h1 className='font-bold mt-4' >Metro Services</h1>
                    <p>Sell tenanted properties</p>
                    <p>Property Management Services</p>
                    <p>Healthy home standards</p>
                </div>
                <div>
                    <img src={PeopleIcon} />
                    <h1 className='font-bold mt-4'>Book and online meet</h1>
                    <p>Metro Property Manager</p>
                    <p>Finance Adviser</p>
                </div>
                <div>
                    <img src={RecordIcon} />
                    <h1 className='font-bold mt-4'>Keep track of your records</h1>
                    <p className='w-44 leading-5 my-2'>Create an account to keep track of your favorites and rental process.</p>
                    <p className='mb-10 font-bold'>Join My Diary</p>

                </div>
            </div>
        </>
    )
}

export default InvestmentSubMenu