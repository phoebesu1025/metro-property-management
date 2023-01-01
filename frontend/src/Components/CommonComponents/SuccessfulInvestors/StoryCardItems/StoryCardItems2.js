import React from 'react'
import StoryCardArray from '../StoryCardArray'
const StoryCardItems1 = () => {
    // const StoryCardArrayList = StoryCardArray
    return (
        <>

            <div id='2' className='flex flex-col bg-white
                     w-[24rem] (387px) h-[19.6rem] (313px) shadow-xl '>

                {/* top-text */}
                <div className='mt-20 mx-6 text-[0.75rem] (12px)'>
                    {StoryCardArray[1].review}
                </div>

                {/*bottom img &name */}
                <div className='flex mt-10 mx-6 '>
                    <img src={StoryCardArray[1].imgSrc} alt={StoryCardArray[1].imgAlt} />

                    <div className='flex flex-col ml-4'>
                        <h1 className='text-[0.875rem] font-semibold '>
                            {StoryCardArray[1].name}
                        </h1>
                        <p className='text-[0.75rem] font-semibold '>
                            {StoryCardArray[1].title}
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}
export default StoryCardItems1