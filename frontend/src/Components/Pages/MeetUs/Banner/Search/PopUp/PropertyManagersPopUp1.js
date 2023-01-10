import React from 'react'

const PropertyManagersPopUp1 = ({ closePopUp }) => {
    return (
        <div className=' whole container/position  z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div className='box container/ background  bg-white w-[35.5rem] h-[36.18rem] shadow-2xl'>
                <img src="./images/propertyManagers/redLine.png" alt="redline" className='w-[35.5rem]' />
                <div className='flex justify-end my-5 mx-10 hover:cursor-pointer' onClick={() => closePopUp(false)} ><img src="./images/propertyManagers/close.png" alt="close" /></div>
                {/*  design and close button */}





                <div className='mx-[5.75rem]'>
                    <div><h1 className='text-[1.375rem] font-bold'>Send a message</h1>
                        <p className='text-[0.625rem]'>All fields marked with <span className='text-popUpStar'>*</span> are required()</p>
                    </div>
                    <form className='mt-[1.5rem]'>
                        <div className='flex justify-between mb-[1.5rem]'>
                            <label className='text-footerSubGrey2 text-[0.875rem]'>Name <span className='text-popUpStar'>*</span><br />
                                <input required type='text' placeholder='Type your name' className='w-[11.375rem] rounded-md  opacity-70 mt-1 placeholder:text-buttonGrey placeholder:text-[0.75rem]' /></label>
                            <label className='text-footerSubGrey2 text-[0.875rem]'>Property Manager<br />
                                <input type="text" placeholder='Michael Stuart' className='w-[11.375rem] rounded-md opacity-70 mt-1 placeholder:text-buttonGrey placeholder:text-[0.75rem]' /></label>
                        </div>

                        <div className='flex justify-between mb-[1.5rem]'>
                            <label className='text-footerSubGrey2 text-[0.875rem]'>Your Email <span className='text-popUpStar'>*</span><br />
                                <input required type='email' placeholder='Type your email' className='w-[11.375rem] rounded-md  opacity-70 mt-1 placeholder:text-buttonGrey placeholder:text-[0.75rem]' /></label>
                            <label className='text-footerSubGrey2 text-[0.875rem]'>Phone number<br />
                                <input type="tel" pattern=".{8,}" placeholder='Type your phone number' className='w-[11.375rem] rounded-md opacity-70 mt-1 placeholder:text-buttonGrey placeholder:text-[0.75rem] ' /></label>
                        </div>

                        <div>
                            <label className='text-footerSubGrey2 text-[0.875rem]'> Message <span className='text-popUpStar'>*</span><br />
                                <textarea className='w-[24.06rem] h-[6.438rem] rounded-md opacity-70 mt-1' required />
                            </label>
                        </div>

                        <div className='flex mt-[2rem]'><button className='bg-red1 rounded-md  text-white text-[0.93rem] font-semibold w-[10.93rem] h-[2.93rem] mx-auto'>Send</button>
                        </div>



                    </form>
                </div>







            </div>
        </div>
    )
}

export default PropertyManagersPopUp1