import React from 'react'
import Form from './Form'
import PreferredServices from './PreferredServices'
import Title from './Title'
import UploadProfilePic from './UploadProfilePic'

const MyProfileInfo = () => {
    return (
        <div className='px-[1.7rem] pt-[3rem] pb-[8rem]
        sm:px-[3rem]
        lg:px-[14rem]'>
            <Title />
            <div className='flex  flex-col items-center gap-y-10
            
            lg:flex-row lg:justify-center gap-10'>
                <Form />

                <div className='flex flex-col gap-y-10
                lg:justify-between lg:gap-7'>
                    <UploadProfilePic />
                    <PreferredServices />
                </div>

            </div>




        </div >

    )
}

export default MyProfileInfo