import React from 'react'

const FooterTop = () => {
    return (

        <div className='bg-footerWhitebBg h-32  flex justify-around'>
            <div className='my-auto '><p className='inline-block mr-2 font-bold text-footerSubBlack'>Subscribe to our news letter!</p>
                <p className='inline-block text-footerSubGrey'> Get the latest Metro news straight to your inbox!</p>
            </div>
            <div className='text-footerSubGrey2 my-auto'>
                <p className='text-paragraph text-footerSubGrey2 mb-2'>Your Email Address</p>
                <input type='text' className='h-12 w-80 border-solid border border-footerInput rounded-md     mr-14' />
                <button className='bg-red2 text-white rounded-md w-48 h-12 '>Subscribe</button>
            </div>
        </div>
    )
}

export default FooterTop