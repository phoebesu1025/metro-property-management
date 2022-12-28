import React from 'react'

const leftSection = () => {
    return (
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
                <a href="https://www.facebook.com/MetroNZ" target="_blank"> <img src='./images/facebookIcon.png' /></a>
                <a href="https://www.linkedin.com/company/metro-nz-property-management-ltd/" target="_blank"><img src='./images/linkedinIcon.png' /></a>
                <a href="https://twitter.com/metronz_" target="_blank"><img src='./images/twitterIcon.png' /></a>
                <a href="https://www.instagram.com/metronzproperty/" target="_blank"><img src='./images/insIcon.png' /></a>
            </div>
        </div>
    )
}

export default leftSection