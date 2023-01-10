import React, { useState, useEffect } from 'react'
import PopUpForm1 from './PopUpForm1'
import { Link } from 'react-router-dom'

const PropertyManagersPopUp6 = ({ closePopUp }) => {
    const [showData, setShowData] = useState(true)

    useEffect(() => {
        fetch("http://localhost:5000/propertyManagers/63b0c6b34aa0047bb15e89b0")
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setShowData(result);
            }
            )
            .catch(error => console.log('error', error));
    }, [])

    return (
        <div className=' whole container/position  z-50 absolute top-[50rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div className='box container/ background  bg-white w-[35.5rem] h-[40rem] shadow-2xl'>

                <img src="./images/propertyManagers/redLine.png" alt="redline" className='w-[35.5rem]' />
                <div className=' my-7 mx-10 float-right hover:cursor-pointer' onClick={() => closePopUp(false)} ><img src="./images/propertyManagers/close.png" alt="close" /></div>
                {/*  design and close button */}

                <div className='flex mt-7 mb-5 ml-10'>
                    <div className='my-auto'><img src={showData.imgSrc} alt={showData.imgAlt} className="w-[2.5rem] h-[2.5rem] " /></div>
                    <div className='flex flex-col justify-center gap-1 ml-4'>
                        <h1 className='text-[0.75rem] font-semibold'>{showData.name}</h1>
                        <p className='text-[0.625rem] text-FaqHeading'>{showData.category}</p>
                    </div>










                </div>
                <div className='mx-[5.75rem]'>
                    <div><h1 className='text-[1.375rem] font-bold'>Send a message</h1>
                        <p className='text-[0.625rem]'>All fields marked with <span className='text-popUpStar'>*</span> are required()</p>
                    </div>




                    <PopUpForm1 />
                </div>







            </div>
        </div>
    )
}

export default PropertyManagersPopUp6