import React from 'react'


import FaqFooter from './FaqFooter'
import FaqHeading from './FaqHeading'
import FaqMix from './FaqMix'

const Faq = () => {
    return (
        <div className='2xs:px-[2rem] py-[4rem]

        md:mx-[5rem] md:py-[4.7rem]
'>
            <FaqHeading />
            <FaqMix />

            <FaqFooter />



        </div>
    )
}

export default Faq