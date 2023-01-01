import React from 'react'
import StoryCard from './StoryCard'
import Text from './Text'
import ButtonGroup from '../ArrowButton/ButtonGroup'
const SuccessfulInvestors = () => {
    return (
        <div className='bg-successfulInvestorBg flex justify-around px-[10rem] py-[6.5rem]'>

            <div className='flex flex-col'>
                <StoryCard />
                <ButtonGroup />
            </div>

            <Text />

        </div>
    )
}

export default SuccessfulInvestors