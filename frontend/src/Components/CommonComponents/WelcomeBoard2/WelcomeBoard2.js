import React from 'react'
import NeedsBanner from '../Needs/NeedsBanner'
import WelcomeBoard2Btn from './Buttons/ButtonGroup'
import WelcomeBoard2Txt from './WelcomeBoard2Txt'
const WelcomeBoard2 = () => {
    return (
        <div className='px-[1.7rem] mt-[5rem]
         sm:px-[3rem]
         lg:px-[6rem]'>
            <NeedsBanner />
            <div className='flex flex-col items-center'>
                <WelcomeBoard2Txt />
                <WelcomeBoard2Btn />
            </div>
        </div>
    )
}

export default WelcomeBoard2