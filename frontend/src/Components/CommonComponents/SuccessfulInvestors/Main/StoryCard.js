import React from 'react'
import StoryCardItems1 from '../StoryCardItems/StoryCardItems1'
import StoryCardItems2 from '../StoryCardItems/StoryCardItems2'
import StoryCardItems3 from '../StoryCardItems/StoryCardItems3'
import StoryCardItems4 from '../StoryCardItems/StoryCardItems4'
const StoryCard = () => {

    return (
        <div className='h-[18rem] '>
            <div className='relative'><StoryCardItems4 /></div>
            <div className='relative bottom-[20rem] right-2'><StoryCardItems3 /></div>
            <div className='relative bottom-[40rem] right-4'><StoryCardItems2 /></div>
            <div className='relative bottom-[60rem] right-6'><StoryCardItems1 /></div>




        </div>
    )
}

export default StoryCard