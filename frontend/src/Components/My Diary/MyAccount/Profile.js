import React from 'react'

const Profile = () => {
    return (
        <div className='w-[29.313rem] h-[18.5rem] bg-white shadow-md rounded-md px-10 py-7'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-[1.25rem]'>Profile</h1>
                <div className='cursor-pointer active:opacity-50'><img src="../images/myAccount/edit.png" alt="profile" className='inline-block mr-1' /><p className='inline-block underline text-red1 font-bold text-[0.813rem] align-bottom '>Edit Profile</p></div>
            </div>


            <div className='flex gap-x-12 mt-12 items-center'>
                <div><img src="../images/myAccount/profile.png" alt="profile" /></div>
                <div className='  text-buttonGrey leading-7'>
                    <h1 className='font-bold'>Mary Gabrielle</h1>
                    <p>021 987 6789</p>
                    <p>mary_gabrie2001@gmail.com</p>
                    <p>Preferred Service: Rental</p>
                </div>
            </div>

        </div>
    )
}

export default Profile