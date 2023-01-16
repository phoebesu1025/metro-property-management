import React from 'react'
import PersonalDetails from './PersonalDetails'
import Pets from './Pets'
import Preferences from './Preferences'
import ProofOfId from './ProofOfId'
import Utilities from './Utilities'

const All = () => {
    return (
        <div>
            <Preferences />
            <PersonalDetails />
            <ProofOfId />
            <Pets />
            <Utilities />
        </div>
    )
}

export default All