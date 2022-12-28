import React from 'react'
const Contact = () => {
    return (
        <>
            <div className='flex flex-col bg-red2 h-128 px-16'>
                <div className=' flex justify-around text-white py-14 text-paragraph leading-10 '>

                    <div >
                        <img src="./images/location.png" />
                        <h1 className='font-bold mt-4 '>Location</h1>
                        <p className='w-48 leading-6'> Metro NZ Property Management Ltd
                            Level 33, ANZ Centre, 23-29 Albert St, Auckland 1010, New Zealand</p>

                    </div>
                    <div>
                        <img src="./images/email.png" />
                        <h1 className='font-bold mt-4' >Mail</h1>
                        <p> info@metronz.co.nz</p>

                    </div>
                    <div>
                        <img src="./images/phone.png" />
                        <h1 className='font-bold mt-4'>Phone</h1>
                        <p>+64 9 391 4642</p>
                    </div>
                    <div>
                        <img src="./images/people.png" />
                        <h1 className='font-bold mt-4'>Our Albany Team</h1>
                        <p className='w-72 leading-6 my-2'>Looking for Property Management in Albany? Metro Nz is a leading property management company in Auckland. Phoebe us on 09 391 4642 or contact us via email at info@metronz.co.nz </p>
                    </div>
                </div>
                <div className='text-white  w-3/5 px-20 pb-10' >
                    <div>We’d be happy to assist you with any questions you may have as a landlord, tenant, investor, potential renter or someone who just wants more information! You’re in safe hands with us. Contact our professional and experienced team of property managers today.</div>

                </div>
            </div>
        </>
    )
}

export default Contact