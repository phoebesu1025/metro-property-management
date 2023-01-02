import React from 'react'
import { useState } from 'react'

const Faq4 = () => {
    const [toggle, setToggle] = useState(true)

    const handleClick = () =>
        setToggle(toggle => !toggle);
    return (
        <div>

            <div className='2xs:flex flex-col w-full 

            lg:flex-row  lg:h-[5.1rem]  

            '>

                {/* /*------------------question+button----------------------------*/}
                <div className={` FAQ Line ${toggle === true ? '' : 'shadow-inner'}
                2xs:flex flex-row w-full justify-between px-10 py-4 shadow-md 
                
                lg:w-5/6
                
                `}>
                    <p className='2xs:py-3 my-auto w-[50rem]
                    
                    lg:w-[28rem]
                    2xl:w-[41.3rem]'>
                        What are documents I needed before applying tenancy?
                    </p>
                    <div className='my-auto  cursor-pointer lg:p-2' onClick={handleClick}
                    >{toggle ? <img src='./images/faq/+.png' alt="+" /> : <img src='./images/faq/-.png' alt="-" />
                        }
                    </div>
                </div>
                {/* /*------------------question+button----------------------------*/}
                {/* /*------------------white card----------------------------*/}
                <div className={` white-answerCard  bg-white shadow-2xl
                ${toggle === true ? 'hidden -mt-[7.8rem] ' : ''}
                2xs:px-10 pt-7  
                
                ${toggle === true ? 'lg:opacity-0' : ''}
                lg:w-[19.6rem] lg:h-[13.1rem] lg:relative lg:-left-3 lg:bottom-4 lg:px-6 lg:pt-12 lg:m-auto lg:text-[0.75rem] `}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    </p>
                    <div className='arrow 
                    
                    2xs: opacity-0
                    
                    lg:relative lg:opacity-80 lg:-left-[3.5rem] lg:bottom-[9rem]'>
                        <img src='./images/faq/arrow.png' alt='arrow' />
                    </div>


                </div>
                {/* /*------------------white card----------------------------*/}
            </div>
        </div >



    )
}

export default Faq4