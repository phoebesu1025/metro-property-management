import React from 'react'
import StoryCardArray from '../StoryCardArray'
const StoryCardItems1 = () => {
    // const StoryCardArrayList = StoryCardArray
    return (
        <>

            <div id='3' className='flex flex-col bg-white
                     w-[24rem] (387px) h-[19.6rem] (313px) shadow-xl '>

                {/* top-text */}
                <div className='mt-20 mx-6 text-[0.75rem] (12px)'>
                    {StoryCardArray[2].review}
                </div>

                {/*bottom img &name */}
                <div className='flex mt-10 mx-6 '>
                    <img src={StoryCardArray[2].imgSrc} alt={StoryCardArray[2].imgAlt} />

                    <div className='flex flex-col ml-4'>
                        <h1 className='text-[0.875rem] font-semibold '>
                            {StoryCardArray[2].name}
                        </h1>
                        <p className='text-[0.75rem] font-semibold '>
                            {StoryCardArray[2].title}
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}
export default StoryCardItems1