import React, { useState } from 'react'
import PersonalDetails from './PersonalDetails'
import Pets from './Pets'
import Preferences from './Preferences'
import ProofOfId from './ProofOfId'
import Utilities from './Utilities'
import PopUpId from './PopUpId/PopUpId'
import PopUpPet from './PopUpId/PopUpPet'

const All = () => {
    const [showPopUpId, setShowPopUpId] = useState("")
    const [showPopUpPet, setShowPopUpPet] = useState("")
    const popUpBtnId = () => {
        setShowPopUpId(<PopUpId passClose={closePopUp} />)
    }
    const closePopUp = () => {
        setShowPopUpId()
    }
    const popUpBtnPet = () => {
        setShowPopUpPet(<PopUpPet passClosePet={closePopUpPet} />)
    }
    const closePopUpPet = () => {
        setShowPopUpPet()
    }

    return (
        <div>
            <Preferences />
            <PersonalDetails />
            <ProofOfId popUpBtnId={popUpBtnId} />
            {showPopUpId}
            <Pets popUpBtnPet={popUpBtnPet} />
            {showPopUpPet}
            <Utilities />
        </div>
    )
}

export default All