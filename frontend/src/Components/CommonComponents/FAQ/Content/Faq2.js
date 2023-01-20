import React from 'react'
import { useState } from 'react'
import WhiteArrow from './WhiteArrow'
import Answer from './Answer'

const Faq2 = () => {
    const [toggle, setToggle] = useState(true)

    const handleClick = () =>
        setToggle(toggle => !toggle);
    return (
        <div>
            <div className='2xs:flex flex-col w-full 
                lg:flex-row  lg:h-[5.1rem]'>
                {/* /*------------------question+button----------------------------*/}
                <div className={` FAQ Line ${toggle === true ? 'shadow-md' : 'shadow-inner'}
                    2xs:flex flex-row w-full justify-between px-10 py-4
                    lg:w-[55rem]`}>
                    <p className='2xs:py-3 my-auto w-[50rem]
                        lg:w-[28rem]
                        2xl:w-[42rem]'>
                        When renting a property and moving in, there will be many things that you will need to know?
                    </p>
                    <div className='my-auto  cursor-pointer lg:p-2' onClick={handleClick}>
                        {toggle ? <img src='./images/faq/+.png' alt="+" /> : <img src='./images/faq/-.png' alt="-" />}
                    </div>
                </div>

                {/* /*------------------white card----------------------------*/}
                <div className={` white-answerCard  bg-white shadow-2xl pt-7 2xs:px-10 
                    lg:w-[19.6rem] lg:h-[13.1rem] lg:relative lg:-left-3 lg:bottom-4 lg:px-6 lg:pt-12 lg:m-auto lg:text-[0.75rem]  
                    ${toggle === true ? 'hidden -mt-[7.8rem] ' : ''}
                    ${toggle === true ? 'lg:opacity-0 ' : ''}`}>
                    <Answer />
                    <WhiteArrow />
                </div>
            </div>
        </div >
    )
}

export default Faq2