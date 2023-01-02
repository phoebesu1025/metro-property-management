import React from 'react'
import ButtonGroup from './Buttons/ButtonGroup';
import ManagerArray from './ManagerInfo/ManagerInfoArray'

const ManagerInfoItems = () => {
    const ManagerArrayList = ManagerArray;

    const sliderLeft = () => {
        let slider = document.getElementById('slider')
        console.log(slider.scrollLeft)
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const sliderRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    return (
        <div className='flex justify-center
        
        ' >

            <div className='
            my-auto mx-auto mr-4 px-2 py-2 cursor-pointer opacity-50 hover:opacity-100 ' onClick={sliderLeft}>
                <img src="./images/propertyManagers/arrow.png" alt='arrow-reverse' className=' rotate-180 w-[1rem]' />
            </div>

            <div id='slider' className=' flex w-[80rem]  justify-start px-5 gap-[4rem]  overflow-hidden scroll-smooth  mx-2 
            md:gap-[3rem]
            md:justify-between
            '>
                {ManagerArrayList.map((ManagerArrayList, index) => {
                    return (
                        <div className='w-[17.56rem] h-[15rem]  bg-white rounded-md shadow-lg px-7' key={index}>
                            <div className='top-section flex justify-between py-6'>
                                <div className='my-auto'><img src={ManagerArrayList.imgSrc} alt={ManagerArrayList.imgAlt} /></div>

                                <div className='flex flex-col text-[0.6rem] font-semibold text-end'>
                                    <div>{`${ManagerArrayList.successfulClient} Successful Clients`}</div>
                                    <div>{ManagerArrayList.email}</div>
                                    <div>{ManagerArrayList.phone}</div>
                                </div>
                            </div>



                            <div>
                                <h1 className='font-bold text-[0.9rem] -mt-[0.3rem] '>
                                    {ManagerArrayList.name}
                                </h1>
                                <p className=' w-[13.5rem] mx-auto text-[0.6rem] leading-4 mb-5'>
                                    {ManagerArrayList.detail} <br />
                                    {`Available to meet on ${ManagerArrayList.availableDate}`}
                                </p>
                            </div>
                            <ButtonGroup />
                        </div>
                    )
                })}
                {/*Might can divide into more components? */}
            </div>



            <div className='my-auto hover:cursor-pointer  mx-auto px-2 py-2  cursor-pointer opacity-50 hover:opacity-100' >
                <img src="./images/propertyManagers/arrow.png" alt='arrow' className='w-[1rem] ' onClick={sliderRight} />
            </div>
        </div>

    )
}

export default ManagerInfoItems