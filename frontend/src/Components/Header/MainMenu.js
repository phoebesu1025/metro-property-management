import React from 'react'
import MetroLogo from '../images/logo.png'
import Arrow from '../images/redArrow.png'
import RentalsMenu from '../MegaMenu/RentalsMenu'
import AboutMenu from '../MegaMenu/AboutMenu'
import InvestmentSubMenu from '../MegaMenu/InvestementSubMenu'
import ContactMenu from '../MegaMenu/ContactMenu'
import PropertyManagementMenu from '../MegaMenu/PropertyManagementMenu'
import { useState, useEffect } from 'react'

const MainMenu = () => {
    const [RentalsMenuOn, setRentalsMenuOn] = useState(false);



    return (
        <>
            <div className='flex h-fit bg-white justify-between text-paragraph'>
                <div><img src={MetroLogo} className='h-39px my-3 ml-12 mr-5' /></div>
                <div className='flex h-fit   my-auto gap-8 mr-40 '>
                    <div className=' hover:text-red2 group  pt-2 pb-3 w-16 bg-pink'>
                        <p className='text-center text'> Rentals </p>
                        <img src={"./images/redArrow.png"} className='ml-2 mt-2 absolute hidden group-hover:block ' />
                        <div className='hidden group-hover:block absolute  left-0 top-16 mt-2 w-full '><RentalsMenu /></div>
                    </div>

                    <div className=' hover:text-red2 group pt-2 pb-3   w-28'>
                        <p className='text-center'> Investments </p>
                        <img src={Arrow} className='ml-8 mt-2 absolute hidden group-hover:block' />
                        <div className='hidden group-hover:block absolute  left-0 top-16 mt-2 w-full'><InvestmentSubMenu /></div>
                    </div>

                    <div className=' hover:text-red2 group pt-2 pb-3 w-44'>
                        <p className='text-center'> Property Management </p>
                        <img src={Arrow} className='ml-16 mt-2 absolute hidden group-hover:block' />
                        <div className='hidden group-hover:block absolute  left-0 top-16 mt-2 w-full'><PropertyManagementMenu /></div>
                    </div>

                    <div className=' hover:text-red2 group pt-2 pb-3 w-16'>
                        <p className='text-center'> About </p>
                        <img src={Arrow} className='ml-3 mt-2 absolute hidden group-hover:block' />

                        <div className='hidden group-hover:block absolute  left-0 top-16 mt-2 w-full'><AboutMenu /></div>
                    </div>

                    <div className=' hover:text-red2 group pt-2 pb-3 w-16'>
                        <p className='text-center'> Contact </p>
                        <img src={Arrow} className='ml-3 mt-2 absolute hidden group-hover:block' />
                        <div className='hidden group-hover:block absolute  left-0 top-16 mt-2 w-full'><ContactMenu /></div>
                    </div>
                </div>

                <div className='flex mr-16 my-auto text-paragraph group'>
                    <button className='text-red2 font-bold border-red2 border w-28 h-9 px-0 rounded mr-4'>Customer Login</button>
                    <button className='bg-red2 text-white rounded w-28 h-9 '>My Diary</button>
                </div>
            </div >
        </>
    )
}
export default MainMenu