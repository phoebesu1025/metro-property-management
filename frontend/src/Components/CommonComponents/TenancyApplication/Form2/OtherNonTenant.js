import React from 'react'
import NumberCount from '../Common/NumberCount'
const OtherNonTenant = () => {
    return (
        <div className='lg:px-[10rem]'>
            <h1 className='text-bookMeBtnBg text-[1rem] font-semibold mb-2'>Other Non-Tenant Applicants</h1>




            <div className=' mb-3'>
                <p className='text-bookMeBtnBg text-[0.729rem] mb-3'>Please name occupants who will not be on the tenancy agreement e.g. children, elderly dependents.<span className='text-red1 font-bold'>*</span></p>
                <NumberCount />
            </div>

        </div>
    )
}

export default OtherNonTenant