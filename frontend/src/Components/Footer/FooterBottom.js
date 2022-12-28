import React from 'react'
import LeftSection from './FooterBottom/LeftSection'
import RightSection from './FooterBottom/RightSection'
const FooterBottom = () => {
    return (
        <div className='bg-footerBlackBg h-fit pb-10 text-footerGrey flex  justify-around pt-12 px-20'>
            <LeftSection />
            <RightSection />
        </div>
    )
}

export default FooterBottom