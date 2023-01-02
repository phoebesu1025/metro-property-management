import React from 'react'
import { useState } from 'react'
import LeftButton from '../ArrowButton/LeftButton'
import RightButton from '../ArrowButton/RightButton'
import StoryCardItems0 from '../StoryCardItems/StoryCardItems0'
import StoryCardItems1 from '../StoryCardItems/StoryCardItems1'
import StoryCardItems2 from '../StoryCardItems/StoryCardItems2'
import StoryCardItems3 from '../StoryCardItems/StoryCardItems3'
const StoryCard = () => {





    return (
        <>
            <div className='h-[18rem] '>
                <div id='1' className='relative'><StoryCardItems3 /></div>
                <div id='2' className='relative bottom-[20rem] right-2'><StoryCardItems2 /></div>
                <div id='3' className='relative bottom-[40rem] right-4'><StoryCardItems1 /></div>
                <div id='4' className='relative bottom-[60rem] right-6'><StoryCardItems0 /></div>
            </div>
        </>
    )
}

export default StoryCard