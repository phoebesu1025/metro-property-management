import React from 'react'
import MetroLogo from '../images/logo.png'
const MainMenu = () => {
    return (
        <div className='flex bg-white justify-between text-paragraph'>
            <div><img src={MetroLogo} className='h-39px my-3 ml-12 mr-5' /></div>
            <div className='flex p-6 gap-8 mr-40'>
                <div className=' hover:text-red2 hover:font-bold'>Rentals</div>
                <div className=' hover:text-red2 hover:font-bold'>Investments</div>
                <div className=' hover:text-red2 hover:font-bold'>Properties</div>
                <div className=' hover:text-red2 hover:font-bold'>Buildings</div>
                <div className=' hover:text-red2 hover:font-bold'>About</div>
                <div className=' hover:text-red2 hover:font-bold'>Contact</div>
            </div>

            <div className='flex mr-16 my-auto text-paragraph '>
                <button className='text-red2 font-bold border-red2 border w-28 h-9 px-0 rounded mr-4'>Customer Login</button>
                <button className='bg-red2 text-white rounded w-28 h-9 '>My Diary</button>
            </div>
        </div >
    )
}

export default MainMenu