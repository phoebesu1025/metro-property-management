import React from 'react'

const Footer = () => {
    return (
        <div className=''>
            <div className='bg-footerWhitebBg h-32 w-screen flex justify-around'>
                <div className='my-auto '><p className='inline-block mr-2 font-bold text-footerSubBlack'>Subscribe to our news letter!</p>
                    <p className='inline-block text-footerSubGrey'> Get the latest Metro news straight to your inbox!</p>
                </div>
                <div className='text-footerSubGrey2 my-auto'>
                    <p className='text-paragraph text-footerSubGrey2 mb-2'>Your Email Address</p>
                    <input type='text' className='h-12 w-80 border-solid border border-footerInput rounded-md     mr-14' />
                    <button className='bg-red2 text-white rounded-md w-48 h-12 '>Subscribe</button>
                </div>
            </div>
            {/*-------------------------------------------------------------- subscribe section--------------------------------------- */}


            { /*------------------------------------------------footer--------------------------------------------------------------- */}
            <div className='bg-footerBlackBg h-100 w-screen text-footerGrey flex  justify-around pt-12 px-20'>
                <div className='w-96'>
                    <div className='mb-4'>
                        <img src="./images/service1.png" className='inline-block mr-1' />
                        <h1 className='inline-block text-footerWhite font-bold align-bottom'>Metro NZ Property Management</h1>
                    </div>
                    <p className='text-paragraph leading-7'>Metro NZ Property Management has offices conveniently located in Central Auckland but operates throughout New Zealand and also internationally.</p>


                    <div className='mt-8 flex mb-2'>
                        <img src="./images/flocationIcon.png" className='mr-3 h-4 w-3 mt-1' />
                        <p className='text-paragraph w-40'>Metro NZ Property Management Ltd Level 33, ANZ Centre, 23-29 Albert St, Auckland 1010, New Zealand</p>
                    </div>
                    <div className='mb-2'>
                        <img src="./images/fEmail.png" className='inline-block mr-3' />
                        <p className='inline-block text-paragraph'>info@metronz.co.nz</p>
                    </div>
                    <div>
                        <img src="./images/fPhoneIcon.png" className='inline-block mr-3' />
                        <p className='inline-block text-paragraph'>+64 9 391 4642 | +64 21 642 119</p>
                    </div>
                    <div className='flex justify-between w-52 mt-6'>
                        <img src='./images/facebookIcon.png' />
                        <img src='./images/linkedinIcon.png' />
                        <img src='./images/twitterIcon.png' />
                        <img src='./images/insIcon.png' />
                    </div>
                </div>

                <div className='flex flex-col'>

                    <div className='flex leading-10'>
                        <div className='mr-16'>
                            <h1 className=' text-footerWhite font-bold'>Rentals</h1>
                            <ul className='text-paragraph mb-10'>
                                <li>Rental Listings</li>
                                <li>Rental Process</li>
                                <li>Tenant Services</li>
                                <li>Own a Home While Renting</li>
                            </ul>
                            <h1 className=' text-footerWhite font-bold'>Tailored Services</h1>
                            <ul className='text-paragraph'><li>Renovation Project Management</li>
                                <li>Decluttering Services</li>
                                <li>Healthy Home Standards</li>
                            </ul>
                        </div>
                        <div className='mr-20'>
                            <h1 className=' text-footerWhite font-bold'>Investments</h1>
                            <ul className='text-paragraph mb-10'>
                                <li>Investment Property Listing</li>
                                <li>Buying Process</li>
                                <li>Sell Tenanted Property</li>
                                <li>Free Property Appraisal</li>
                            </ul>
                            <h1 className=' text-footerWhite font-bold'>Meet Our Team</h1>
                            <ul className='text-paragraph'><li>Meet Property Manager</li>
                                <li>Meet Finance Advisor</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className=' text-footerWhite font-bold'>Property Management</h1>
                            <ul className='text-paragraph'><li>Residential Property Management</li>
                                <li>Commercial Property Management</li>
                                <li>Finding Tenant Process</li>
                                <li>Free Rental Appraisal</li>
                                <li>Building Management</li>
                                <li>Body Corporate Administration</li>
                                <li>Change to Metro</li>
                            </ul>
                        </div>

                    </div>

                    <div className='text-right mt-24'>
                        <p className='text-s text-footerWhite font-bold'>&copy;2022 Metro NZ Property Management|Disputes Process</p>
                    </div>






                </div>



            </div>



        </div >
    )
}

export default Footer