import React from 'react'
import StoryCardArray from './StoryCardArray'
import StackCard from './StackCard'

const StoryCardItems3 = () => {
    // const StoryCardArrayList = StoryCardArray
    return (
        <div className='mt-3 ml-3'>

            <div className=' relative z-40 flex flex-col  bg-white
                     w-[24rem] (387px) h-[19.6rem] (313px) shadow-xl 
                     '>

                {/* top-text */}
                <div className=' mx-6 text-[0.75rem] (12px)  h-[9rem] pt-8 mt-8'>
                    {StoryCardArray[3].review}
                </div>

                {/*bottom img &name */}
                <div className='flex mt-10 mx-6 '>
                    <img src={StoryCardArray[3].imgSrc} alt={StoryCardArray[3].imgAlt} />

                    <div className='flex flex-col ml-4'>
                        <h1 className='text-[0.875rem] font-semibold '>
                            {StoryCardArray[3].name}
                        </h1>
                        <p className='text-[0.75rem] font-semibold '>
                            {StoryCardArray[3].title}
                        </p>
                    </div>

                </div>
            </div>
            <div className='h-0'>
                <StackCard />
            </div>
        </div>
    )
}
export default StoryCardItems3