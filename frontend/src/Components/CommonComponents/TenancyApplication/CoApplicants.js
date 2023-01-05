import React from 'react'
import ProcessBar2 from '../../../Components/CommonComponents/TenancyApplication/Common/ProcessBar2'
import CoApplicantsSection from './Form2/CoApplicants'
import CoApplicants1 from './Form2/CoApplicants1'
import NumberCount from './Common/NumberCount'

import BackBtn from './Common/BackBtn'
import NextBtn from './Common/NextBtn'
import OtherNonTenant from './Form2/OtherNonTenant'
const CoApplicants = () => {
    return (
        <div>
            <ProcessBar2 />
            <CoApplicantsSection />
            <CoApplicants1 />
            <OtherNonTenant />





            <div className='flex'><BackBtn />
                <NextBtn /></div>























        </div>
    )
}

export default CoApplicants