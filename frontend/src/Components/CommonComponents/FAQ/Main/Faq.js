import React from 'react'


import FaqFooter from './FaqFooter'
import FaqHeading from './FaqHeading'
import FaqMix from './FaqMix'

const Faq = () => {
    return (
        <div className='py-[4rem]
    px-[1.7rem]
    xs:px-[3rem] 
      md:mx-[4rem] md:py-[4.7rem]
'>
            <FaqHeading />
            <FaqMix />

            <FaqFooter />



        </div>
    )
}

export default Faq