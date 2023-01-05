import React from 'react'
import ProcessBar1 from '../../CommonComponents/TenancyApplication/Common/ProcessBar1'
import Preferences from './Form1/Preferences'
import PersonalDetails from './Form1/PersonalDetails'
import ProofOfId from './Form1/ProofOfId'
import Pets from './Form1/Pets'
import Utilities from './Form1/Utilities'
import NextBtn from './Common/NextBtn'
const YourDetails = () => {
    return (
        <div>
            <ProcessBar1 />
            <Preferences />
            <PersonalDetails />
            <ProofOfId />
            <Pets />
            <Utilities />
            <NextBtn />




















        </div>
    )
}

export default YourDetails