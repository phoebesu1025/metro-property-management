import React from 'react'
import { Link } from 'react-router-dom'

const FaqFooter = () => {
    return (
        <div className='text-[0.95rem] mt-16'>
            <h1 className='font-semibold'>
                Still have questions?
            </h1>
            <p className='mt-1'>
                <Link to="/meet-our-professionals"><span className='text-red1 underline font-semibold'>Meet our team</span></Link> and speak about the rental properties we have available and the tenant services we offer.

            </p>

        </div>

    )
}

export default FaqFooter