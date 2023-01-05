import React from 'react'
import ProcessBar3 from './Common/ProcessBar3'
import CurrentLandlordRef from './Form3/CurrentLandlordRef'
import PreviousLandlordRef from './Form3/PreviousLandlordRef'
import OtherReferences from './Form3/OtherReferences'
import BackBtn from './Common/BackBtn'
import NextBtn from './Common/NextBtn'

const References = () => {
    return (
        <div>
            <ProcessBar3 />
            <CurrentLandlordRef />
            <PreviousLandlordRef />
            <OtherReferences />
            <div className='flex'>
                <BackBtn />
                <NextBtn /></div>














        </div>
    )
}

export default References