import { React, useState } from 'react'
import CurrentLandlordRef from './CurrentLandlordRef'
import PreviousLandlordRef from './PreviousLandlordRef'
import OtherReferences from './OtherReferences'
import AddPLReferenceBtn from './AddPLReferenceBtn'
import AddPLReferenceInput from './AddPLReferenceInput'
import AddOReferenceBtn from './AddOReferenceBtn'
import AddOReferenceInput from './AddOReferenceInput'
const All3 = () => {

    const [addAnotherLandlord, setAddAnotherLandlord] = useState([])
    const onAddBtnClick1 = () => {
        setAddAnotherLandlord(addAnotherLandlord.concat(<AddPLReferenceInput />))
    }
    const [addOtherLandlord, setAddOtherLandlord] = useState([])
    const onAddBtnClick2 = () => {
        setAddOtherLandlord(addOtherLandlord.concat(<AddOReferenceInput />))
    }

    return (
        <div>
            <CurrentLandlordRef />
            <PreviousLandlordRef />
            <div>{addAnotherLandlord}</div>
            <AddPLReferenceBtn pass={onAddBtnClick1} />
            <OtherReferences />
            <div>{addOtherLandlord}</div>
            <AddOReferenceBtn pass={onAddBtnClick2} />
        </div>
    )
}

export default All3