import React from 'react'
import EmailPhone from './EmailPhone'
import Image from './Image'
import Name from './Name'
const ManagerComponents = ({ item }) => {
    return (
        <div className='w-full'>
            <Image img={item} />
            <EmailPhone detail={item} />
            <Name middleDetail={item} />
        </div>
    )
}

export default ManagerComponents