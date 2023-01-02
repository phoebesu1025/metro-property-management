import React from 'react'
import NeedsArray from './NeedsArray'

const NeedsItems = () => {
    const NeedsArrayList = NeedsArray;

    return (
        <div className=' flex w-full justify-between text-paragraph tablet: '>
            {NeedsArrayList.map((NeedsArray, index) => {
                return (
                    <div className='w-[15rem] h-[19rem] bg-white rounded-md shadow-lg text-center py-4' key={index}>
                        <div className='my-auto py-5 h-[6rem] '>
                            <img src={NeedsArray.imgSrc} alt={NeedsArray.imgAlt} className="mx-auto" />
                        </div>


                        <h1 className='font-bold w-[12rem] h-[4.5rem] py-3 mx-auto '>
                            {NeedsArray.heading}
                        </h1>
                        <p className=' w-[13.5rem] mx-auto text-[0.6rem]'>{NeedsArray.content}</p>
                    </div>
                )
            })}

            {/*Might can divide into more components? */}
        </div>












    )
}

export default NeedsItems