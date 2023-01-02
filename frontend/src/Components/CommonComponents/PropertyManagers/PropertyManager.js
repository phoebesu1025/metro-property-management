import React from 'react'
import Heading from './HeadingSection/Heading'
import ManagerInfoItems from './ManagerCardSection/ManagerInfoItems'

const PropertyManager = () => {
    return (
        <div className=' bg-propertyManagerBg py-[6rem]'>
            <div className="px-[7rem] ">
                <Heading />
            </div>

            <div >
                <ManagerInfoItems />
            </div>
        </div>
    )
}

export default PropertyManager