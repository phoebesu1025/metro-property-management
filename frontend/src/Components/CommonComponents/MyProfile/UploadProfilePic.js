import React from 'react'

const UploadProfilePic = () => {
    return (
        <div className='flex justify-between bg-white shadow-lg w-[28.9rem] px-[3.8rem] py-[3.5rem] rounded-lg'>
            <div>
                <h1 className='text-[1.25rem] font-bold mb-5'>Upload Profile Picture</h1>
                <p className='text-black1 opacity-50 text-[0.85rem] pb-6'>Accepted file types: .jpg,.jpeg,gif,png<br />
                    Max file size: 1MB</p>

                <button className='flex bg-red1 rounded-md text-white text-[0.85rem]
                font-semibold py-[0.55rem] px-[1rem] pr-[1.5rem]'> <img src="./images/myProfile/upload.png" alt="upload" className='my-auto mr-4' /> Browse</button>
            </div>

            <div className='flex flex-col justify-between'>

                <img src="./images/myProfile/profileEmpty.png" alt="profile" />
                <p className='text-[0.78rem] text-footerSubGrey text-center'>No image added</p>


            </div>



        </div >
    )
}

export default UploadProfilePic