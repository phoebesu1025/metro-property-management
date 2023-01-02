import React from 'react'
import Text from './Text'
import StoryCardItems0 from '../StoryCardItems/StoryCardItems0'
import StoryCardItems1 from '../StoryCardItems/StoryCardItems1'
import StoryCardItems2 from '../StoryCardItems/StoryCardItems2'
import StoryCardItems3 from '../StoryCardItems/StoryCardItems3'
import { useState } from 'react'

const SuccessfulInvestorsV2 = () => {

    let [arrayIndex, setArrayIndex] = useState(0)
    let array = [<StoryCardItems0 />, <StoryCardItems1 />, <StoryCardItems2 />, <StoryCardItems3 />]

    // length =4
    const toggleRight = () => {
        if (arrayIndex !== array.length - 1) {
            setArrayIndex(arrayIndex + 1)
        } else if (arrayIndex === array.length - 1) {
            setArrayIndex(0)
        }
        console.log(arrayIndex)
    }

    const toggleLeft = () => {
        if (arrayIndex !== 0) {
            setArrayIndex(arrayIndex - 1)
        } else if (arrayIndex === 0) {
            setArrayIndex(3)
        }
        console.log(arrayIndex)
    }





    return (
        <div className='bg-successfulInvestorBg 
        flex flex-col justify-center gap-4 my-10

        md:flex-row md:justify-around md:px-10
         px-[7rem] py-[6.5rem] mb-[1rem]'>
            <Text />
            <div className='flex flex-col items-center my-auto'>
                <div className='h-[18rem] w-[25rem] mt-10'>
                    <div className=''>{array[arrayIndex]}</div>
                </div>


                <div className='flex w-24 items-center mt-16 mb-8'>
                    <div className='my-auto mr-4 px-2 py-2 cursor-pointer opacity-50 hover:opacity-100' onClick={toggleLeft}>
                        <img src="./images/propertyManagers/arrow.png" alt='arrow-reverse' className='origin-center rotate-180 ' />
                    </div>

                    <div className='my-auto mr-4 px-2 py-2 cursor-pointer opacity-50 hover:opacity-100' onClick={toggleRight}>
                        <img src="./images/propertyManagers/arrow.png" alt='arrow' />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default SuccessfulInvestorsV2