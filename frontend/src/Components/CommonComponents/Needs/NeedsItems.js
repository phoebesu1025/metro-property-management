import React from 'react'
import NeedsArray from './NeedsArray'

const NeedsItems = () => {
    const NeedsArrayList = NeedsArray;

    return (
        <div className=' flex flex-col w-full justify-around items-center flex-wrap gap-12 text-paragraph basis-1/2 overflow-hidden
        
         
       
        sm:flex-row sm:flex-wrap sm:h-[19rem] sm:gap-12 lg:justify-between

         '>
            {NeedsArrayList.map((NeedsArray, index) => {
                return (
                    <div className='w-[15rem] h-[19rem] bg-white rounded-md shadow-lg text-center py-4 hover:opacity-70 cursor-pointer' key={index}>
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