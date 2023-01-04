import React from 'react'
import NeedsBanner from './../../Components/CommonComponents/Needs/Needs'
import WelcomeBoard2Btn from './../../components/CommonComponents/WelcomeBoard2/Buttons/ButtonGroup'
import WelcomeBoard2Txt from './../../components/CommonComponents/WelcomeBoard2/WelcomeBoard2Txt'
const WelcomeBoard2 = () => {
    return (
        <div className='px-[1.7rem]
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