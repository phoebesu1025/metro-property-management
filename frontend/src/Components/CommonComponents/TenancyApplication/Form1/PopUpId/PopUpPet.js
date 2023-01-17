import React from 'react'
import { useState } from 'react'
import { PickerOverlay } from "filestack-react-18";



const PopUpPet = ({ passClosePet }) => {
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
        <form className='absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[1.5rem] w-[38.306rem] h-[31.438] bg-white rounded-lg shadow-md px-7 py-8 mx-4' >
            <div>
                <div className='flex justify-between'><h1 className='text-[1rem] font-semibold inline-block'>Add a Pet
                </h1><img src="./images/tenancyApplication/close.png" alt="close" className='inline-block cursor-pointer active:opacity-50' onClick={passClosePet} /></div>
            </div>

            <div className='flex justify-between  mt-4'>
                <label className='text-footerSubGrey2 text-[0.61rem]'>ID Number <span className='text-popUpStar'>*</span><br />
                    <input required type='email' className='w-[8.059rem] rounded-md  opacity-70 mt-1 placeholder:text-buttonGrey placeholder:text-[0.75rem]' /></label>




                <label className='text-footerSubGrey2 text-[0.61rem]'>Type <span className='text-popUpStar'>*</span><br />
                    <select required placeholder='Type' className='w-[8.059rem] rounded-md  opacity-70 mt-1 text-buttonGrey text-[0.61rem]'>
                        <option value="dog">dog</option>
                        <option value="cat">cat</option>
                        <option value="rabbit">rabbit</option>
                        <option value="mouse">mouse</option>
                        <option value="others">others</option>
                    </select></label>

                <label className='text-footerSubGrey2 text-[0.61rem]'>Breed <span className='text-popUpStar'>*</span><br />
                    <input required type='email' className='w-[8.059rem] rounded-md  opacity-70 mt-1 placeholder:text-buttonGrey placeholder:text-[0.75rem]' /></label>

                <label className='text-footerSubGrey2 text-[0.61rem]'>Age<span className='text-popUpStar'>*</span><br />
                    <input type="text" className='w-[8.059rem] rounded-md opacity-70 mt-1 placeholder:text-buttonGrey placeholder:text-[0.75rem] ' /></label>
            </div>


            <div className='mt-2'>
                <label className='text-footerSubGrey2 text-[0.61rem] '>Tell us about your pet<span className='text-popUpStar'>*</span><br />
                    <input type="text" className='w-[34.565rem] h-[3.588rem] rounded-md opacity-70 mt-1 placeholder:text-buttonGrey placeholder:text-[0.75rem] ' /></label>

            </div>





            <div className='flex justify-between  mt-4'>
                <div >
                    <h1 className='text-footerSubGrey2 text-[0.61rem] mb-3'>Add a photo of your pet(optional) </h1>
                    <div className='border-opacity-70 border-dashed  border-[0.15rem] w-[16.832rem] h-[9.84rem] py-auto active:opacity-50 overflow-hidden' onClick={handleVisible}>


                        <img src={imageUrl !== undefined ? imageUrl : "./images/tenancyApplication/pet1.png"} alt="front" className={imageUrl !== undefined ? 'w-[16.832rem] h-[9.84rem]' : 'my-9'} />

                    </div></div>
                {isPickerOverlayVisible && (
                    <PickerOverlay
                        apikey="A7IVreh7JQ5eq97vdu6HNz"
                        onSuccess={(result) => {
                            setImageUrl(result.filesUploaded[0].url);
                            setIsPickerOverlayVisible(false);
                        }}
                    />
                )}
                <div>
                    <h1 className='text-footerSubGrey2 text-[0.61rem] mb-3'>Add Supporting Documents about your pet*</h1>
                    <div className='border-opacity-70 border-dashed  border-[0.15rem] w-[16.832rem] h-[9.84rem] py-auto active:opacity-50' onClick={handleVisible1}>
                        <img src={imageUrl1 !== undefined ? imageUrl1 : "./images/tenancyApplication/pet2.png"} alt="front" className={imageUrl1 !== undefined ? 'w-[16.832rem] h-[9.84rem]' : 'my-9'} /></div></div>
                {isPickerOverlayVisible1 && (
                    <PickerOverlay
                        apikey="A7IVreh7JQ5eq97vdu6HNz"
                        onSuccess={(result) => {
                            setImageUrl1(result.filesUploaded[0].url);
                            setIsPickerOverlayVisible1(false);
                        }}
                    />
                )}
            </div>

            <div>
                <button className='   rounded-md border-buttonGrey border-[0.05rem] text-buttonGrey w-[8.11rem] h-[2.448rem] mt-8 mr-2 
                active:opacity-50' onClick={passClosePet}>
                    <p className='my-auto text-[0.71rem] font-semibold'>Cancel </p>
                </button>


                <button className='bg-red1 rounded-md  text-white text-[0.71rem] font-semibold w-[8.11rem] h-[2.448rem]  mx-auto active:opacity-50' >save</button>
            </div>
        </form>
    )
}

export default PopUpPet