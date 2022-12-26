import React from 'react'
import MetroLogo from '../images/logo.png'
import Arrow from '../images/redArrow.png'
import Rentals from '../MegaMenu/Rentals'
import About from '../MegaMenu/About'


const MainMenu = () => {
    return (
        <>
            <div className='flex bg-white justify-between text-paragraph'>
                <div><img src={MetroLogo} className='h-39px my-3 ml-12 mr-5' /></div>
                <div className='flex p-6 gap-8 mr-40'>
                    <div className=' hover:text-red2 hover:font-bold'>Rentals
                        <img src={Arrow} className='absolute top-14' />
                    </div>
                    <div className=' hover:text-red2 hover:font-bold'>Investments
                        {/* <img src={Arrow} className='absolute top-14' /> */}
                    </div>
                    <div className=' hover:text-red2 hover:font-bold'>Properties
                        {/* <img src={Arrow} className='absolute top-14' /> */}
                    </div>
                    <div className=' hover:text-red2 hover:font-bold'>Buildings
                        {/* <img src={Arrow} className='absolute top-14' /> */}
                    </div>
                    <div className=' hover:text-red2 hover:font-bold'>About
                        {/* <img src={Arrow} className='absolute top-14' /> */}
                    </div>
                    <div className=' hover:text-red2 hover:font-bold'>Contact
                        {/* <img src={Arrow} className='absolute top-14' /> */}
                    </div>
                </div>

                <div className='flex mr-16 my-auto text-paragraph '>
                    <button className='text-red2 font-bold border-red2 border w-28 h-9 px-0 rounded mr-4'>Customer Login</button>
                    <button className='bg-red2 text-white rounded w-28 h-9 '>My Diary</button>
                </div>
            </div >

            {/* <Rentals /> */}
            <About />
        </>
    )
}

export default MainMenu