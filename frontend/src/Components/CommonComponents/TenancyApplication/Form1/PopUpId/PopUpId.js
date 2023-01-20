import React from 'react'
import { useState } from 'react'
import { PickerOverlay } from "filestack-react-18";


const PopUpId = ({ passClose }) => {
    const [isPickerOverlayVisible, setIsPickerOverlayVisible] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    const handleVisible = () => {
        setIsPickerOverlayVisible(!isPickerOverlayVisible);
    };
    const [isPickerOverlayVisible1, setIsPickerOverlayVisible1] = useState(false);
    const [imageUrl1, setImageUrl1] = useState();

    const handleVisible1 = () => {
        setIsPickerOverlayVisible1(!isPickerOverlayVisible1);
    };

    return (
        <form className='fixed top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[1.5rem] w-[38.306rem] h-[31.438] bg-white rounded-lg shadow-md px-7 py-8 mx-4 ' >
            <div>
                <div className='flex justify-between'><h1 className='text-[1rem] font-semibold inline-block'>Upload Identification
                </h1><img src="./images/tenancyApplication/close.png" alt="close" className='inline-block cursor-pointer active:opacity-50' onClick={passClose} /></div>

                <p className='text-[0.71rem]'>Important: You must upload one form of ID. This is for verifications purpose only.</p>
            </div>

            <div className='flex justify-between  mt-8'>
                <label className='text-footerSubGrey2 text-[0.61rem]'>Choose Type of ID <span className='text-popUpStar'>*</span><br />
                    <select required placeholder='Type your name' className='w-[16.832rem] rounded-md  opacity-70 mt-1 text-buttonGrey text-[0.61rem]'>
                        <option value="passport">Passport</option>
                        <option value="drivingLicense">Driving License</option>
                        <option value="18+">18+ Card</option>
                    </select></label>
            </div>

            <div className='flex justify-between  mt-3'>
                <label className='text-footerSubGrey2 text-[0.61rem]'>ID Number <span className='text-popUpStar'>*</span><br />
                    <input required type='email' className='w-[16.832rem] rounded-md  opacity-70 mt-1 placeholder:text-buttonGrey placeholder:text-[0.75rem]' /></label>
                <label className='text-footerSubGrey2 text-[0.61rem]'>Id Version<span className='text-popUpStar'>*</span><br />
                    <input type="text" className='w-[16.832rem] rounded-md opacity-70 mt-1 placeholder:text-buttonGrey placeholder:text-[0.75rem] ' /></label>
            </div>

            <div className='mb-[1.5rem]  mt-3'>
                <h1 className='text-footerSubGrey2 text-[0.61rem]'>Upload image of Driver License (must be less than 5mb) <span className='text-popUpStar'>*</span></h1>
            </div>

            <div className='flex justify-between'>

                <div className='border-opacity-70 border-dashed  border-[0.15rem] w-[16.832rem] h-[9.84rem] py-auto active:opacity-50 overflow-hidden' onClick={handleVisible}>


                    <img src={imageUrl !== undefined ? imageUrl : "./images/tenancyApplication/front.png"} alt="front" className={imageUrl !== undefined ? 'w-[16.832rem] h-[9.84rem]' : 'my-9'} />

                </div>
                {isPickerOverlayVisible && (
                    <PickerOverlay
                        apikey="A7IVreh7JQ5eq97vdu6HNz"
                        onSuccess={(result) => {
                            setImageUrl(result.filesUploaded[0].url);
                            setIsPickerOverlayVisible(false);
                        }}
                    />
                )}





                <div className='border-opacity-70 border-dashed  border-[0.15rem] w-[16.832rem] h-[9.84rem] py-auto active:opacity-50 overflow-hidden' onClick={handleVisible1}>


                    <img src={imageUrl1 !== undefined ? imageUrl1 : "./images/tenancyApplication/front.png"} alt="front" className={imageUrl1 !== undefined ? 'w-[16.832rem] h-[9.84rem]' : 'my-9'} />

                </div>
                {isPickerOverlayVisible && (
                    <PickerOverlay
                        apikey="A7IVreh7JQ5eq97vdu6HNz"
                        onSuccess={(result) => {
                            setImageUrl1(result.filesUploaded[0].url);
                            setIsPickerOverlayVisible(false);
                        }}
                    />
                )}
            </div>








            <div>
                <button className='   rounded-md border-buttonGrey border-[0.05rem] text-buttonGrey w-[8.11rem] h-[2.448rem] mt-8 mr-2 
                active:opacity-50' onClick={passClose}>
                    <p className='my-auto text-[0.71rem] font-semibold'>Cancel </p>
                </button>


                <button className='bg-red1 rounded-md  text-white text-[0.71rem] font-semibold w-[8.11rem] h-[2.448rem]  mx-auto active:opacity-50' >save</button>
            </div>
        </form>
    )
}

export default PopUpId