import React from 'react'
import ManagerInfoItemsAll from './ManagerCardSection/ManagerInfoItemsAll'

const PropertyManager = () => {
    return (
        <div className=' bg-propertyManagerBg py-[6rem]
        '>
            <div className="  px-[1.7rem]
            xs:px-[3rem] 
            lg:px-[6rem] ">



                <ManagerInfoItemsAll />
            </div>
        </div>
    )
}

export default PropertyManager